const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const SITEMAP_URL = 'https://tedium.co/sitemap.xml';
const DATA_FILE = 'articles.json';

/**
 * Extracts the highest quality image URL from article HTML.
 * Prioritizes direct static.tedium.co/uploads/ URLs.
 */
function extractHighQualityImage($) {
  let bestImage = '';

  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (!src) return;

    // Look for anything in /uploads/ folder
    if (src.includes('/uploads/')) {
      const filename = src.split('/uploads/').pop().split('?')[0]; // strip query params
      
      // Prioritize GIFs as they are Tedium's signature look
      if (filename.toLowerCase().endsWith('.gif')) {
        bestImage = `https://static.tedium.co/uploads/${filename}`;
        return false; // found a GIF, stop searching body
      }
      
      // Fallback to first non-GIF upload found if no GIF found yet
      if (!bestImage) {
        bestImage = `https://static.tedium.co/uploads/${filename}`;
      }
    }
  });

  // Fallback to og:image if no body image found
  if (!bestImage) {
    const ogImage = $('meta[property="og:image"]').attr('content');
    // Only use og:image if it's NOT a generated screenshot
    if (ogImage && !ogImage.includes('11ty.dev')) {
      bestImage = ogImage;
    }
  }

  return bestImage;
}

async function scrapeBacklog(limit = 2000) {
  console.log('Fetching sitemap...');
  const response = await fetch(SITEMAP_URL);
  const xml = await response.text();
  const $xml = cheerio.load(xml, { xmlMode: true });

  const urls = [];
  $xml('url loc').each((i, el) => {
    const url = $xml(el).text();
    if (url.match(/https:\/\/tedium\.co\/\d{4}\/\d{2}\/\d{2}\//)) {
      urls.push(url);
    }
  });

  console.log(`Found ${urls.length} article URLs.`);
  
  const articles = [];
  if (fs.existsSync(DATA_FILE)) {
    articles.push(...JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')));
  }

  const toScrape = urls.filter(url => !articles.find(a => a.url === url)).slice(0, limit);
  console.log(`To scrape: ${toScrape.length} new articles.`);

  const newArticles = [];

  for (let i = 0; i < toScrape.length; i++) {
    const url = toScrape[i];
    console.log(`[${i+1}/${toScrape.length}] Scraping ${url}...`);
    try {
      const res = await fetch(url);
      const html = await res.text();
      const $ = cheerio.load(html);

      const title = $('title').text().replace(' - Tedium', '').trim();
      const description = $('meta[name="description"]').attr('content') || '';
      const imageUrl = extractHighQualityImage($);

      newArticles.push({
        title,
        description,
        url,
        imageUrl,
        scrapedAt: new Date().toISOString()
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(`Failed to scrape ${url}:`, err.message);
    }
  }

  const updatedArticles = [...newArticles, ...articles];
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedArticles, null, 2));
  console.log(`Done. Saved ${updatedArticles.length} articles to ${DATA_FILE}`);
}

scrapeBacklog().catch(console.error);
