const puppeteer = require('E:/THE PROJECTS HQ/PORTFOLIO/node_modules/puppeteer-core');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const distDir = path.resolve(__dirname, '../dist');
const outDir = path.resolve(__dirname, '../public/verification');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Simple MIME types for static server
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

// Create local static server for dist
const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  
  let filePath = path.join(distDir, reqPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

async function main() {
  const PORT = 5199;
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Static server running at http://localhost:${PORT}`);

  const tmpProfile = path.join(os.tmpdir(), `pup_chrome_${Date.now()}`);

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    userDataDir: tmpProfile,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1000));

    // 1. Desktop Light Mode
    console.log('Capturing Desktop Hero in Light Mode...');
    await page.screenshot({ path: path.join(outDir, 'verified_hero_light_1440.png') });

    // 2. Navbar Zoom
    const header = await page.$('.site-header');
    if (header) {
      console.log('Capturing Navbar zoom in Light Mode...');
      await header.screenshot({ path: path.join(outDir, 'verified_navbar_light.png') });
    }

    // 3. Test Theme Toggle to Dark Mode
    console.log('Toggling to Dark Mode...');
    const themeBtn = await page.$('.theme-toggle-btn');
    if (themeBtn) {
      await themeBtn.click();
      await new Promise(r => setTimeout(r, 800));

      console.log('Capturing Desktop Hero in Dark Mode...');
      await page.screenshot({ path: path.join(outDir, 'verified_hero_dark_1440.png') });

      if (header) {
        console.log('Capturing Navbar zoom in Dark Mode...');
        await header.screenshot({ path: path.join(outDir, 'verified_navbar_dark.png') });
      }
    }

    // 4. Test Mobile Viewport
    console.log('Capturing Mobile View (390x844)...');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'verified_hero_mobile_390.png') });

    console.log('All screenshots captured successfully!');
  } finally {
    await browser.close();
    server.close();
    try {
      fs.rmSync(tmpProfile, { recursive: true, force: true });
    } catch (_) {}
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  server.close();
  process.exit(1);
});
