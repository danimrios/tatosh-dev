const siteUrl = 'https://tatosh-dev.com.ar'

export default function sitemap() {
  return [
    {
      url:             siteUrl,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        1,
    },
    {
      url:             `${siteUrl}/ofertas`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
  ]
}
