import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// An array with your links
const links = [
  { url: '/', changefreq: 'monthly', priority: 0.7 },
  { url: '/#/about', changefreq: 'monthly', priority: 0.3 },
  { url: '/#/courses', changefreq: 'monthly', priority: 0.3 },
  { url: '/#/contact', changefreq: 'monthly', priority: 0.3 },
  { url: '/#/pricing', changefreq: 'monthly', priority: 0.3 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://codecrafts.co.uk' });

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFile(path.join(__dirname, 'public/sitemap.xml'), data.toString(), (err) => {
    if (err) {
      console.error(err);
    }
  }),
);
