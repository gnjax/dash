# Official CPU image with all Paddle deps baked in
FROM paddlepaddle/paddle:2.6.1

# Keep NumPy at 1.x for OpenCV & friends
RUN python -m pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir \
      numpy==1.26.4 \
      opencv-python-headless==4.10.0.84 \
      fastapi==0.115.0 uvicorn==0.30.6 pillow==10.4.0 paddleocr==2.7.3 \
      python-multipart==0.0.9

# (Optional) Pre-cache models WITHOUT using Python tarfile (see Fix B style below)
# You can skip pre-cache and let first request download.

WORKDIR /app
COPY main.py .
EXPOSE 8000

ENV OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 OPENBLAS_NUM_THREADS=1 NUMEXPR_NUM_THREADS=1
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
