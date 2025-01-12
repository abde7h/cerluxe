import { MetadataRoute } from 'next'
import { siteMetadata } from './metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cerluxe.es'
  
  const staticPages = [
    '',
    '/servicios',
    '/contacto',
    '/sobre-nosotros',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0
  }))

  const localidadesPages = siteMetadata.localidades.map(localidad => ({
    url: `${baseUrl}/localidades/${localidad.nombre.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  return [...staticPages, ...localidadesPages]
} 