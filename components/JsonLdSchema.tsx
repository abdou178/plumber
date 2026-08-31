import React from "react";
import { CONTRACTOR_DATA, CORE_SERVICES, SHARJAH_SUBURBS } from "@/lib/contractor-data";

export function JsonLdSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Plumber", "EmergencyService", "HomeAndConstructionBusiness"],
        "@id": "https://plumber-sharjah-247.ae/#business",
        "name": CONTRACTOR_DATA.name.en,
        "alternateName": [CONTRACTOR_DATA.name.ar, "Plumber Sharjah 24/7", "سباك طوارئ الشارقة"],
        "description": "24/7 Emergency plumbing, motorized drain snaking, PPR pipe heat-welding, water booster pump repair, and water heater replacement across all Sharjah districts with 20-30 minute response time.",
        "url": "https://plumber-sharjah-247.ae",
        "telephone": CONTRACTOR_DATA.phone,
        "priceRange": "AED 120 - AED 500",
        "image": "https://plumber-sharjah-247.ae/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONTRACTOR_DATA.address.street,
          "addressLocality": CONTRACTOR_DATA.address.neighborhood,
          "addressRegion": "Sharjah",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": CONTRACTOR_DATA.geo.latitude,
          "longitude": CONTRACTOR_DATA.geo.longitude
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": SHARJAH_SUBURBS.map((suburb) => ({
          "@type": "AdministrativeArea",
          "name": `${suburb.name.en}, Sharjah`
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": CONTRACTOR_DATA.rating.score.toString(),
          "reviewCount": CONTRACTOR_DATA.rating.reviewCount.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "24/7 Emergency Plumbing Services",
          "itemListElement": CORE_SERVICES.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title.en,
              "description": service.tagline.en
            },
            "price": service.startingPriceAED.toString(),
            "priceCurrency": "AED",
            "position": index + 1
          }))
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CONTRACTOR_DATA.phone,
          "contactType": "emergency service",
          "areaServed": "AE",
          "availableLanguage": ["Arabic", "English"]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
