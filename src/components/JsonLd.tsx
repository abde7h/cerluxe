export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Cerluxe - Carpintería Metálica y Cerrajería",
          "image": "https://cerluxe.es/assets/Logo.png",
          "@id": "https://cerluxe.es",
          "url": "https://cerluxe.es",
          "telephone": "+34624321060",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Trencat 26",
            "addressLocality": "Rafelbunyol",
            "postalCode": "46138",
            "addressRegion": "Valencia",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.587826,
            "longitude": -0.336470
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "19:00"
          },
          "sameAs": [
            "https://www.facebook.com/cerluxe",
            "https://www.instagram.com/cerluxe"
          ]
        })
      }}
    />
  )
} 