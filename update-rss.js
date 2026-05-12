const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const RSS_URL = 'https://tedium.co/rss';
const DATA_FILE = 'articles.json';

async function updateFromRSS() {
  console.log('Fetching RSS feed...');
  const response = await fetch(RSS_URL);
  const xml = await response.text();
  const $xml = cheerio.load(xml, { xmlMode: true });

  const articles = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  let newArticlesCount = 0;

  const items = $xml('item, entry');
  console.log(`Found ${items.length} items/entries in RSS/Atom.`);

  const newArticles = [];

  for (let i = 0; i < items.length; i++) {
    const item = items.eq(i);
    let url = item.find('link').text() || item.find('guid').text();
    
    // Atom specific: link is often an attribute
    if (!url || !url.startsWith('http')) {
      url = item.find('link').attr('href');
    }

    if (articles.find(a => a.url === url)) {
      continue;
    }

    console.log(`New article found: ${url}. Scraping metadata...`);
    try {
      const res = await fetch(url);
      const html = await res.text();
      const $ = cheerio.load(html);

      const title = $('title').text().replace(' - Tedium', '').trim();
      const description = $('meta[name="description"]').attr('content') || '';
      
      let imageUrl = '';
      $('img').each((i, el) => {
        const src = $(el).attr('src');
        if (src && src.toLowerCase().endsWith('.gif')) {
          imageUrl = src;
          return false;
        }
      });

      if (!imageUrl) {
        imageUrl = $('meta[property="og:image"]').attr('content') || '';
      }

      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = new URL(imageUrl, 'https://tedium.co').href;
      }

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
    // Prepend new articles to the existing list
    const updatedArticles = [...newArticles, ...articles];
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedArticles, null, 2));
    console.log(`Added ${newArticles.length} new articles to the top.`);
  } else {
    console.log('No new articles found.');
  }
}

updateFromRSS().catch(console.error);
