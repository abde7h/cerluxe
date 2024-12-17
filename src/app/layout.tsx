import React, { ReactNode } from 'react'; // Asegúrate de importar ReactNode
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import './globals.css';
import { Metadata } from 'next';
import { siteMetadata } from './metadata';
import { viewport } from './viewport'

export { viewport }

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL('https://cerluxe.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: 'https://cerluxe.es',
    siteName: siteMetadata.title,
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    card: 'summary_large_image',
    site: '@cerluxe',
    creator: '@cerluxe',
    images: ['https://cerluxe.es/twitter-image.jpg'],
  },
  verification: {
    google: 'tu-código-de-verificación',
  },
  other: {
    'google-site-verification': 'tu-código-de-verificación',
  },
}

// Define la estructura del tipo de las props del componente
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cerluxe",
              "url": "https://cerluxe.es",
              "logo": "https://cerluxe.es/logo.png",
              "sameAs": [
                "https://facebook.com/cerluxe",
                "https://instagram.com/cerluxe",
                "https://linkedin.com/company/cerluxe"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34624321060",
                "contactType": "customer service",
                "areaServed": "ES",
                "availableLanguage": "Spanish"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
