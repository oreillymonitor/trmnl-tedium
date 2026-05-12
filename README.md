# TRMNL Tedium

A high-impact editorial article display for your TRMNL screen, powered by the [Tedium.co](https://tedium.co) archives.

## Features

- **Full-Screen Editorial Design:** A true full-screen "Poster View" featuring Tedium's unique grayscale aesthetic with an editorial overlay.
- **Multi-Device Support:** Custom layouts for Color (Crimson overlay), 1-bit Monochrome (High-contrast white box), and TRMNL X (High-resolution scaling).
- **Automated Updates:** A GitHub Action fetches the latest articles from Tedium's RSS feed daily.
- **Historical Backlog:** Includes a full database of **1,287+ articles** dating back to 2014.
- **Shield & Proxy:** Uses a Vercel caching proxy to protect Tedium's bandwidth. Images are cached for 30 days.
- **Zero Cost:** Runs entirely on GitHub Actions and Vercel's free tiers.

## Setup

### 1. Deploy to Vercel
1. Connect your fork of this repository to [Vercel](https://vercel.com).
2. Your endpoint will be `https://your-project.vercel.app/api/random`.

### 2. Configure TRMNL
1. Go to your [TRMNL Dashboard](https://usetrmnl.com).
2. Create a new **Private Plugin** (Custom).
3. **Strategy:** Select **Polling**.
4. **Polling URL:** `https://your-project.vercel.app/api/random?article_mode={{ article_mode }}`
5. **Remove bleed margin?** Set to **Yes**.
6. **Framework CSS version:** Select **3.1**.

### 3. Apply Markup
Copy the contents of `trmnl-markup.html` from this repository and paste it into the **Markup** tab of your plugin on the TRMNL dashboard.

## Development

- **Database:** Stored as `articles.json`. Newest articles are always at the top.
- **Updater:** `update-rss.js` (runs daily via GitHub Actions).
- **API:** `api/random.js` (Vercel serverless function).

## Credits
Content provided by [Tedium.co](https://tedium.co) by Ernie Smith.
Layout designed for the TRMNL hardware framework.
