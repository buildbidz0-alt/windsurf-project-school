import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Sitemap
Sitemap: https://staugustines-academy.vercel.app/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
