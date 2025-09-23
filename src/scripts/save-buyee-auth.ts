import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

(async () => {
  const profileDir = path.resolve('/home/oulette/.proxy-profiles/buyee-profile'); // persisted session directory
  fs.mkdirSync(profileDir, { recursive: true });

  const context = await chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',         // use your real Chrome, not bundled Chromium
    headless: false,           // visible window so you can log in
    viewport: { width: 1280, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    acceptDownloads: false,
    permissions: [],
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });

  const page = await context.newPage();
  console.log('Opening Buyee. Please log in, then press ENTER here to save profile…');
  await page.goto('https://buyee.jp/', { waitUntil: 'domcontentloaded' });

  process.stdin.resume();
  process.stdin.on('data', async () => {
    await context.close(); // this writes state into the profile dir
    console.log('Profile saved at', profileDir);
    process.exit(0);
  });
})();