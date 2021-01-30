import RSS from 'rss';
import * as fs from 'fs';

const OUTPUT_FILE = 'public/build/rss.xml';

export function generateRss(posts) {
  var feed = new RSS({
    title: 'Kylebyte Blog',
    description: "Kyle Owsen's blog",
    feed_url: 'https://kylebyte.com/rss.xml',
    site_url: 'https://kylebyte.com',
    image_url: 'https://kylebyte.com/favicon.png',
    managingEditor: 'me@kylebyte.com (Kyle Owsen)',
    webMaster: 'me@kylebyte.com (Kyle Owsen)',
    copyright: '2021 Kyle Owsen',
    language: 'en',
    categories: ['Game Development'],
    pubDate: 'January 29, 2020 18:00:00 PST',
    ttl: '60',
  });

  for (const post of posts) {
    const splitDateStr = post.date.split('/');
    const date = new Date(
      splitDateStr[2],
      splitDateStr[0] - 1,
      splitDateStr[1]
    ).toDateString();

    feed.item({
      title: post.title,
      description: post.description,
      author: post.author,
      url: `https://kylebyte.com/blog/${post.id}`,
      date,
    });
  }

  fs.writeFileSync(OUTPUT_FILE, feed.xml());
}
