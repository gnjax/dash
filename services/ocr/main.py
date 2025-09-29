from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from paddleocr import PaddleOCR
import base64, io, re
from PIL import Image

# Init OCR (angle classifier + det + rec)
# lang='en' keeps the recognizer focused; use_gpu=False for portability (enable later if you add GPU)
ocr = PaddleOCR(use_angle_cls=True, lang='en', det=True, rec=True, use_gpu=False)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten to your domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Accept serial-looking chars only (uppercase A-Z, digits, dash). We will still return raw for debugging.
ALLOWED = re.compile(r'[A-Z0-9-]+')

class OcrRequest(BaseModel):
    image_b64: str  # data URL or raw base64 accepted
    # optional: hint that text is mostly horizontal — helps with postfiltering (we’ll still use angle_cls)
    prefer_horizontal: Optional[bool] = True

class OcrBox(BaseModel):
    text: str
    conf: float
    box: List[List[float]]  # 4 points (x,y)

class OcrResponse(BaseModel):
    lines: List[OcrBox]
    # Convenience field with filtered, uppercased tokens (good for serial matching)
    tokens: List[str]

def _load_b64_image(b64: str) -> Image.Image:
    # Strip data URL header if present
    if ',' in b64 and b64.split(',', 1)[0].startswith('data:'):
        b64 = b64.split(',', 1)[1]
    data = base64.b64decode(b64)
    img = Image.open(io.BytesIO(data)).convert('RGB')
    return img

@app.post("/ocr", response_model=OcrResponse)
def do_ocr(req: OcrRequest):
    img = _load_b64_image(req.image_b64)
    # PaddleOCR expects a file path or ndarray; pillow image to ndarray:
    import numpy as np
    arr = np.array(img)[:, :, ::-1]  # to BGR

    result = ocr.ocr(arr, cls=True)  # angle classification on
    # result is list per page; we pass a single image → result[0]
    lines = []
    tokens = []

    if result and len(result) > 0:
        for line in result[0]:
            # line[0] = 4-point box, line[1] = (text, confidence)
            box = line[0]
            raw_text, conf = line[1]
            up = (raw_text or "").upper()
            # filter to allowed chars (drop punctuation, spaces)
            filtered = ''.join(ch for ch in up if ('A' <= ch <= 'Z') or ('0' <= ch <= '9') or ch == '-')
            if filtered:
                tokens.append(filtered)
            lines.append(OcrBox(text=up, conf=float(conf), box=box))

    # Simple preference for horizontal serials: keep wide-ish boxes first (optional)
    if req.prefer_horizontal and lines:
        def wide_score(b: OcrBox):
            x_coords = [p[0] for p in b.box]; y_coords = [p[1] for p in b.box]
            w = max(x_coords) - min(x_coords); h = max(y_coords) - min(y_coords)
            return (w - h)  # wider → higher
        lines.sort(key=wide_score, reverse=True)

    return OcrResponse(lines=lines, tokens=tokens)

# Also allow multipart upload for manual tests (e.g., with curl)
@app.post("/ocr-multipart", response_model=OcrResponse)
async def do_ocr_multipart(file: UploadFile = File(...)):
    img = Image.open(io.BytesIO(await file.read())).convert('RGB')
    import numpy as np
    arr = np.array(img)[:, :, ::-1]
    result = ocr.ocr(arr, cls=True)
    lines = []
    tokens = []
    if result and len(result) > 0:
        for line in result[0]:
            box = line[0]
            raw_text, conf = line[1]
            up = (raw_text or "").upper()
            filtered = ''.join(ch for ch in up if ('A' <= ch <= 'Z') or ('0' <= ch <= '9') or ch == '-')
            if filtered:
                tokens.append(filtered)
            lines.append(OcrBox(text=up, conf=float(conf), box=box))
    return OcrResponse(lines=lines, tokens=tokens)
