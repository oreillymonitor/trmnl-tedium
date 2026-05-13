const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const RSS_URL = 'https://tedium.co/rss';
const DATA_FILE = 'articles.json';

/**
 * Extracts the highest quality image URL from article HTML.
 * Prioritizes Pagefind metadata, then direct uploads.
 */
function extractHighQualityImage($) {
  // 1. Priority: Pagefind metadata (the most reliable source)
  const pagefindImage = $('div[data-pagefind-meta="image"]').text().trim();
  if (pagefindImage && pagefindImage.startsWith('http')) {
    return pagefindImage;
  }

  // 2. Secondary: Search body for GIFs (excluding bio/logo)
  let bestImage = '';
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (!src) return;

    // Ignore known non-article images
    if (src.includes('ernie_crop') || src.includes('david_new') || src.includes('andrew_egan') || src.includes('share-openly') || src.includes('t-logo') || src.includes('favicon')) {
      return;
    }

    if (src.includes('/uploads/')) {
      const filename = src.split('/uploads/').pop().split('?')[0];
      if (filename.toLowerCase().endsWith('.gif')) {
        bestImage = `https://static.tedium.co/uploads/${filename}`;
        return false;
      }
      if (!bestImage) {
        bestImage = `https://static.tedium.co/uploads/${filename}`;
      }
    }
  });

  // 3. Fallback: og:image (if not 11ty screenshot)
  if (!bestImage) {
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage && !ogImage.includes('11ty.dev')) {
      bestImage = ogImage;
    }
  }

  return bestImage;
}

async function updateFromRSS() {
  console.log('Fetching RSS feed...');
  const response = await fetch(RSS_URL);
  const xml = await response.text();
  const $xml = cheerio.load(xml, { xmlMode: true });

  const articles = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const items = $xml('item, entry');
  console.log(`Found ${items.length} items/entries in RSS/Atom.`);

  const newArticles = [];

  for (let i = 0; i < items.length; i++) {
    const item = items.eq(i);
    let url = item.find('link').text() || item.find('guid').text();
    
    if (!url || !url.startsWith('http')) {
      url = item.find('link').attr('href');
    }

    if (articles.find(a => a.url === url)) {
      continue;
    }

    console.log(`Processing new article: ${url}`);
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

  if (newArticles.length > 0) {
    const updatedArticles = [...newArticles, ...articles];
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedArticles, null, 2));
    console.log(`Added ${newArticles.length} new articles to the top.`);
  } else {
    console.log('No new articles found.');
  }
}

updateFromRSS().catch(err => {
  console.error(err);
  process.exit(1);
});
