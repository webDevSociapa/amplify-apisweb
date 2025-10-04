export async function GET(_, { params }) {
  const { locale } = params;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
  <loc>https://apisindia.com/${locale}</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/about-us</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/our-brand</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/investors</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/careers</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/media</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/sustainability</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/our-blog/ourRecipis</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/contact-us</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/our-policy?policy=terms</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/our-policy?policy=privacy</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/about-us/journey</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/our-brand/misk</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://apisindia.com/${locale}/our-brand/recipes</loc>
  <lastmod>2025-10-02T06:52:39+00:00</lastmod>
  <priority>0.64</priority>
</url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
