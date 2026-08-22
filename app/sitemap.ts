import { MetadataRoute } from 'next'

const baseUrl = 'https://loughi.md'

const meniuSlugs = ['carne', 'pizza', 'salata', 'pasta', 'supe', 'micdejun']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/meniu', '/programari', '/recenzii', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const menuRoutes = meniuSlugs.map((slug) => ({
    url: `${baseUrl}/meniu/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...menuRoutes]
}