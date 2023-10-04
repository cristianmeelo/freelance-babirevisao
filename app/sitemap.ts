const generateSitemapXml = () => {
  const baseUrl = "https://babirevisao.vercel.app";
  const pages = [""]; // Adicione outras páginas se necessário

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  return sitemap;
};

const Sitemap = () => {};

Sitemap.getInitialProps = ({ res }: any) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemapXml());
  res.end();
};

export default Sitemap;
