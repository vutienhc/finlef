import type { MetadataRoute } from "next";

const BASE_URL = "https://finlef.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Category pages
    {
      url: `${BASE_URL}/mo-the-tin-dung-online`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vay-tien-online`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Credit card landing pages
    {
      url: `${BASE_URL}/mo-the-tin-dung-vpbank-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mo-the-tin-dung-vib-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Loan landing pages
    {
      url: `${BASE_URL}/vay-tien-meo-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vay-tien-finzone-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vay-tien-crezu-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vay-tien-f88-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vay-tien-cashspace-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vay-tien-vayvnd-online`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Info pages
    {
      url: `${BASE_URL}/gioi-thieu`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/lien-he`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/chinh-sach-bao-mat`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/dieu-khoan-su-dung`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
