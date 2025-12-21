import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xeyalnecefsoy.com'
  
  // Core routes
  const routes = ['', '/about', '/services', '/projects', '/blog', '/contact']
  const locales = ['az', 'en']

  const sitemap: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
