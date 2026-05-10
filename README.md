# TRMNL Tedium

A random article display for your TRMNL screen, powered by the [Tedium.co](https://tedium.co) archives.

## Features

- **Automated Updates:** A GitHub Action fetches the latest articles from Tedium's RSS feed daily.
- **Historical Backlog:** Includes a script to scrape the entire Tedium archive (1,200+ articles) to seed your database.
- **TRMNL-Ready:** A Vercel serverless function serves random articles as TRMNL-formatted HTML.
- **Zero Cost:** Runs entirely on GitHub Actions and Vercel's free tiers.

## Setup

### 1. Initialize the Database
1. Clone this repository.
2. Install dependencies: `npm install`.
3. Run the backlog scraper to populate `articles.json`:
   ```bash
   node scrape-backlog.js
   ```
   *Note: This script has a built-in delay between requests to be gentle to Tedium's servers. It may take ~20-30 minutes to scrape the full archive.*
4. Commit and push `articles.json` to your GitHub repository.

### 2. Deploy to Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Vercel will automatically detect the `api/random.js` function.
3. Your endpoint will be `https://your-project.vercel.app/api/random`.

### 3. Configure TRMNL
1. Go to your [TRMNL Dashboard](https://usetrmnl.com).
2. Create a new **Private Plugin** (Web Content).
3. Set the **Fetch URL** to your Vercel endpoint:
   - For a **random article**: `https://your-project.vercel.app/api/random`
   - For the **latest article**: `https://your-project.vercel.app/api/random?mode=latest`
4. Set the refresh interval as desired (e.g., every hour or once a day).

## Technical Details

- **Database:** Stored as a flat `articles.json` file in the repository. Latest articles are always at the top of the file.
- **Automation:** GitHub Actions (`.github/workflows/update.yml`) runs `update-rss.js` daily.
- **Shield & Proxy:** To protect Tedium's bandwidth, the plugin uses a caching proxy. Images are fetched once by Vercel and cached for 30 days. Even if your screen refreshes every 5 minutes, Tedium only sees one request per month for that article's image.

## Credits
Content provided by [Tedium.co](https://tedium.co) by Ernie Smith.
