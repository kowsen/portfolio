import puppeteer from 'puppeteer';
import * as fs from 'fs';

const RESUME_HTML = './data/resume.html';
const RESUME_PDF = './public/resume.pdf';

export async function generateResume() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const resumeHtml = fs.readFileSync(RESUME_HTML, 'utf-8');
  await page.setContent(resumeHtml, { waitUntil: 'networkidle0' });

  await page.emulateMediaType('print');

  await page.pdf({
    path: RESUME_PDF,
    printBackground: true,
    format: 'letter',
    scale: 0.95,
    margin: {
      left: '0.5in',
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
    },
  });

  await browser.close();
}
