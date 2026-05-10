const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

module.exports = async function handler(req, res) {
  // 1. Handle Image Proxying
  if (req.query.proxy) {
    const imageUrl = req.query.proxy;
    try {
      const imageRes = await fetch(imageUrl);
      const buffer = await imageRes.buffer();
      res.setHeader('Cache-Control', 'public, max-age=2592000, s-maxage=2592000');
      res.setHeader('Content-Type', imageRes.headers.get('content-type'));
      return res.send(buffer);
    } catch (err) {
      return res.status(500).send('Error proxying image');
    }
  }

  // 2. Main TRMNL Content Delivery
  const filePath = path.join(process.cwd(), 'articles.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  let articles = JSON.parse(fileData);

  let article;
  if (req.query.mode === 'latest') {
    article = articles[0];
  } else {
    article = articles[Math.floor(Math.random() * articles.length)];
  }

  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  
  // Return simple, clean JSON
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.status(200).json({
    title: article.title,
    description: article.description,
    image_url: `${protocol}://${host}/api/random?proxy=${encodeURIComponent(article.imageUrl)}`,
    qr_url: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(article.url)}`,
    archive_date: new URL(article.url).pathname.split('/').slice(1,4).join('/'),
    favicon: `${protocol}://${host}/favicon.ico`
  });
};
