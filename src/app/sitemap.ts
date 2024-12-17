import { siteMetadata } from './metadata'

export default async function sitemap() {
  const baseUrl = 'https://cerluxe.es'
  
  // Páginas estáticas
  const staticPages = [
    '',
    '/servicios',
    '/contacto',
    '/sobre-nosotros',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }))

  // Páginas de localidades
  const localidadesPages = siteMetadata.localidades.map(localidad => ({
    url: `${baseUrl}/localidades/${localidad.nombre}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...localidadesPages]
} 