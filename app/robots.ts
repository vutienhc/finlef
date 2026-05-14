import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/go-vpbank",
    },
    sitemap: "https://finlef.com/sitemap.xml",
  };
}
