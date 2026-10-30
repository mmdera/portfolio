const puppeteer = require('E:/THE PROJECTS HQ/PORTFOLIO/node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../public/verification');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Track console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  console.log('Navigating to http://localhost:5173/...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // 1. Desktop Hero Screenshot
  console.log('Capturing Desktop Hero...');
  await page.screenshot({ path: path.join(outDir, 'digital_edition_hero_1440.png') });

  // 2. Scroll to Projects
  console.log('Capturing Selected Work...');
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'digital_edition_projects_1440.png') });

  // 3. Test Modal Open
  console.log('Testing Project Modal...');
  const inspectBtn = await page.$('.cafe-image-container');
  if (inspectBtn) {
    await inspectBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'digital_edition_modal_open.png') });
    // Close modal
    const closeBtn = await page.$('.modal-close-btn');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 4. Test WhatsApp Form
  console.log('Testing WhatsApp Enquiry Form...');
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  // Fill in form fields
  await page.type('input[placeholder*="Alexander Vance"]', 'Marcus Sterling');
  await page.type('input[placeholder*="Vance Hospitality"]', 'Sterling Capital');
  await page.type('textarea[placeholder*="Outline your project"]', 'We are looking to commission a high-speed wealth analytics dashboard with custom financial charting and edge synchronization.');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(outDir, 'digital_edition_contact_filled.png') });

  // 5. Tablet Screenshot (768px)
  console.log('Capturing Tablet (768px)...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'digital_edition_tablet_768.png') });

  // 6. Mobile Screenshot (390px)
  console.log('Capturing Mobile (390px)...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'digital_edition_mobile_390.png') });

  // Open mobile menu
  const menuToggle = await page.$('.mobile-menu-toggle');
  if (menuToggle) {
    await menuToggle.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(outDir, 'digital_edition_mobile_menu_open.png') });
  }

  await browser.close();

  console.log('--- VERIFICATION REPORT ---');
  console.log('Console Errors:', consoleErrors.length > 0 ? consoleErrors : 'None (Clean)');
  console.log('Screenshots saved to:', outDir);
}

run().catch(err => {
  console.error('Test run failed:', err);
  process.exit(1);
});
