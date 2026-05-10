const fs = require('fs');
const DATA_FILE = 'articles.json';

function sortDatabase() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error('articles.json not found');
    return;
  }

  const articles = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  console.log(`Original count: ${articles.length}`);

  // Tedium URLs: https://tedium.co/YYYY/MM/DD/title
  articles.sort((a, b) => {
    const dateA = a.url.match(/(\d{4})\/(\d{2})\/(\d{2})/);
    const dateB = b.url.match(/(\d{4})\/(\d{2})\/(\d{2})/);

    if (!dateA || !dateB) return 0;

    const timeA = new Date(`${dateA[1]}-${dateA[2]}-${dateA[3]}`).getTime();
    const timeB = new Date(`${dateB[1]}-${dateB[2]}-${dateB[3]}`).getTime();

    // Reverse chronological (newest first)
    return timeB - timeA;
  });

  // Remove duplicates just in case
  const uniqueArticles = [];
  const seenUrls = new Set();
  for (const article of articles) {
    if (!seenUrls.has(article.url)) {
      uniqueArticles.push(article);
      seenUrls.add(article.url);
    }
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(uniqueArticles, null, 2));
  console.log(`Sorted and cleaned: ${uniqueArticles.length} articles.`);
  console.log(`Newest: ${uniqueArticles[0].url}`);
  console.log(`Oldest: ${uniqueArticles[uniqueArticles.length - 1].url}`);
}

sortDatabase();
