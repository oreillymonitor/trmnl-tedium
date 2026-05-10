const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

export default async function handler(req, res) {
  // 1. Handle Image Proxying to shield Tedium
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

  // Default to random, but allow 'latest'
  let article;
  if (req.query.mode === 'latest') {
    // We'll ensure the latest is at the top of the array (index 0)
    article = articles[0];
  } else {
    article = articles[Math.floor(Math.random() * articles.length)];
  }

  const randomArticle = article;

  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const proxiedImageUrl = `${protocol}://${host}/api/random?proxy=${encodeURIComponent(randomArticle.imageUrl)}`;
  
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(randomArticle.url)}`;

  // Using TRMNL Framework v3.1 classes
  const html = `
    <div class="view view--full">
      <div class="layout layout--col layout--stretch">
        <div class="flex flex--col gap--base stretch-y">
          <div class="flex flex--row flex--space-between flex--align-start">
            <span class="title title--xlarge stretch-x" style="line-height: 1.1;">${randomArticle.title}</span>
            <img src="${qrCodeUrl}" class="image" style="width: 100px; height: 100px; margin-left: 20px;" />
          </div>
          
          <span class="description description--large" data-clamp="4">${randomArticle.description}</span>

          <div class="flex flex--col flex--center stretch-y" style="overflow: hidden; margin-top: 10px;">
            <img class="image image-dither image--contain" src="${proxiedImageUrl}" style="max-height: 100%;" />
          </div>
        </div>

        <div class="flex flex--row flex--space-between flex--align-end" style="border-top: 2px solid var(--gray-40); padding-top: 10px; margin-top: 10px;">
          <div class="flex flex--col">
            <span class="label label--small">SOURCE: TEDIUM.CO</span>
            <span class="label label--small label--underline">ARCHIVE: ${new URL(randomArticle.url).pathname.split('/').slice(1,4).join('/')}</span>
          </div>
          <span class="title title--small">TRMNL TEDIUM</span>
        </div>
      </div>

      <div class="title_bar">
        <img class="image" src="https://tedium.co/favicon.ico" style="filter: grayscale(100%);">
        <span class="title">TEDIUM</span>
        <span class="instance">Random Archive</span>
      </div>
    </div>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.status(200).send(html);
}
