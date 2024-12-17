import { siteMetadata } from '@/app/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import PresupuestoButton from '@/components/ui/PresupuestoButton';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';

interface Props {
  params: { ciudad: string };
}

// Función auxiliar para obtener la información de la ciudad
async function getCiudadInfo(ciudadSlug: string) {
  'use server';
  return {
    ciudad: ciudadSlug.charAt(0).toUpperCase() + ciudadSlug.slice(1),
    localidad: siteMetadata.localidades.find(
      l => l.nombre.toLowerCase() === ciudadSlug.toLowerCase()
    )
  };
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const ciudadInfo = await getCiudadInfo(params.ciudad);

  if (!ciudadInfo.localidad) {
    return {
      title: 'Página no encontrada',
      description: 'La localidad especificada no existe'
    };
  }

  return {
    title: `Cerrajero 24h y Carpintería Metálica en ${ciudadInfo.ciudad} | Cerluxe`,
    description: `🔧 Cerrajero urgente 24 horas en ${ciudadInfo.ciudad}. Servicios de carpintería metálica, cerrajería, toldos y persianas. ${ciudadInfo.localidad.servicios.join(', ')}. Presupuesto sin compromiso.`,
    alternates: {
      canonical: `https://cerluxe.es/localidades/${params.ciudad.toLowerCase()}`,
    },
    openGraph: {
      title: `Cerrajero 24h en ${ciudadInfo.ciudad} | Servicios de Cerrajería`,
      description: `Cerrajero urgente en ${ciudadInfo.ciudad}. Apertura de puertas 24h, cambio de cerraduras, servicios de carpintería metálica. Presupuesto sin compromiso.`,
      locale: 'es_ES',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function LocalidadPage({ params }: Props) {
  const ciudadInfo = await getCiudadInfo(params.ciudad);

  if (!ciudadInfo.localidad) {
    return <div>Localidad no encontrada</div>;
  }

  return (
    <main role="main" aria-label={`Servicios en ${ciudadInfo.ciudad}`} className="min-h-screen bg-gray-100">
      <nav role="navigation" aria-label="Breadcrumb" className="bg-gray-100 py-2">
        <ol className="container mx-auto px-4 flex gap-2">
          <li><Link href="/">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/localidades">Localidades</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{ciudadInfo.ciudad}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24">
        <article className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Servicios en <span className="text-primary">{ciudadInfo.ciudad}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expertos en carpintería metálica, cerrajería y sistemas de protección solar en {ciudadInfo.ciudad}.
            Servicio profesional y atención personalizada.
          </p>
        </article>
      </header>

      {/* Servicios Principales */}
      <section aria-labelledby="servicios-title" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 id="servicios-title" className="text-3xl font-semibold mb-10 text-center text-gray-800">
            Nuestros Servicios en {ciudadInfo.ciudad}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ciudadInfo.localidad.servicios.map((servicio, index) => (
              <li key={index}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{servicio}</h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    Servicio profesional de {servicio.toLowerCase()} en {ciudadInfo.ciudad} y alrededores.
                  </p>
                  <footer>
                    <Link
                      href="/contacto"
                      className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 w-full text-center"
                    >
                      Solicitar Presupuesto
                    </Link>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Servicios de Urgencia */}
      <section aria-labelledby="urgencias-title" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 id="urgencias-title" className="text-3xl font-semibold mb-10 text-center text-gray-800">
            Servicios de Urgencia 24h
          </h2>
          <article className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Apertura de Puertas 24h",
                "Apertura de Puertas Blindadas",
                "Apertura de Puertas Acorazadas",
                "Apertura de Cajas Fuertes",
                "Reparación Puertas de Garaje",
                "Cambio de Bombín Urgente"
              ].map((servicio, index) => (
                <li key={index} className="flex items-center text-gray-700 text-base p-2 hover:bg-gray-50 rounded-md">
                  <span className="mr-2 text-primary" aria-hidden="true">•</span>
                  {servicio}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Información de Contacto */}
      <section aria-labelledby="contacto-title" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 id="contacto-title" className="text-3xl font-semibold mb-10 text-center text-gray-800">
            Contacto en {ciudadInfo.ciudad}
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Phone, 
                title: 'Teléfono 24h', 
                content: (
                  <address>
                    <a href={`tel:${siteMetadata.serviciosUrgencia.telefono24h}`} 
                       className="text-gray-900 hover:underline text-xl font-medium tracking-wider">
                      {siteMetadata.serviciosUrgencia.telefono24h}
                    </a>
                  </address>
                )
              },
              { 
                icon: Clock, 
                title: 'Horario', 
                content: (
                  <time>
                    <p className="text-gray-700">{siteMetadata.horarios.cerrajeria.normal}</p>
                    <p className="text-sm text-gray-600">Urgencias 24h</p>
                  </time>
                )
              },
              { 
                icon: MapPin, 
                title: 'Zona', 
                content: (
                  <address className="not-italic">
                    <p className="text-gray-700">{ciudadInfo.ciudad}</p>
                    <p className="text-sm text-gray-600">CP: {ciudadInfo.localidad.codigoPostal}</p>
                  </address>
                )
              },
              { 
                icon: Mail, 
                title: 'Email', 
                content: (
                  <address>
                    <a href="mailto:info@cerluxe.es" 
                       className="text-gray-900 hover:underline font-medium">
                      info@cerluxe.es
                    </a>
                  </address>
                )
              },
            ].map((item, index) => (
              <li key={index}>
                <article className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-200">
                  <item.icon className="w-12 h-12 text-blue-600 mb-4 stroke-[1.5]" aria-hidden="true" />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 tracking-wide">{item.title}</h3>
                  {item.content}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <aside className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 leading-tight">¿Necesitas nuestros servicios en {ciudadInfo.ciudad}?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contacta con nosotros para obtener un presupuesto personalizado sin compromiso.
          </p>
          <PresupuestoButton className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-200">
            Solicitar Presupuesto
          </PresupuestoButton>
        </div>
      </aside>

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Cerluxe - Cerrajería y Carpintería Metálica en ${ciudadInfo.ciudad}`,
            "image": "https://cerluxe.es/logo.png",
            "description": `Servicios de cerrajería 24h y carpintería metálica en ${ciudadInfo.ciudad}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": ciudadInfo.ciudad,
              "postalCode": ciudadInfo.localidad.codigoPostal,
              "addressRegion": "Valencia",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.5889",
              "longitude": "-0.3762"
            },
            "url": `https://cerluxe.es/localidades/${params.ciudad.toLowerCase()}`,
            "telephone": siteMetadata.serviciosUrgencia.telefono24h,
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />
    </main>
  );
}