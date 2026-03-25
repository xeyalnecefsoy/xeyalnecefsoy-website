import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xeyalnecefsoy.com'
  
  // Core routes
  const locales = ['az', 'en']

  const sitemap: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    // Home
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })

    // Projects (locale-specific segment)
    const projectsSeg = locale === 'az' ? '/layiheler' : '/projects'
    sitemap.push({
      url: `${baseUrl}/${locale}${projectsSeg}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  return sitemap
}
