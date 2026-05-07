import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/basic/",
    },
    sitemap: "https://smest.no/sitemap.xml",
  }
}
