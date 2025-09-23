import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

(async () => {
  const profileDir = path.resolve('/home/oulette/.proxy-profiles/zm-profile');
  fs.mkdirSync(profileDir, { recursive: true });

  const ctx = await chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1280, height: 900 },
  });
  const page = await ctx.newPage();
  console.log('Opening FromJapan. Log in, then press ENTER here to save profile…');
  await page.goto('https://zenmarket.jp', { waitUntil: 'domcontentloaded' });

  process.stdin.resume();
  process.stdin.on('data', async () => {
    await ctx.close();
    console.log('Saved profile at', profileDir);
    process.exit(0);
  });
})();