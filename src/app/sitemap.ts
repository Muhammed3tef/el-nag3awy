import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 0.7,
    },
    {
      url: `${process.env.BASE_URL}/our-locations`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/furns`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/kitchens`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/who-are-we`,
      lastModified: new Date(),
      changeFrequency: `yearly`,
      priority: 0.6,
    },
  ];
}
