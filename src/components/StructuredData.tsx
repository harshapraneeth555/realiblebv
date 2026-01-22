import { Helmet } from "react-helmet-async";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Realible B.V",
    "url": "https://realiblebv.com",
    "logo": "https://realiblebv.com/logo_trans.png",
    "description": "Realible transforms plastic waste into durable, eco-friendly building bricks. Building a sustainable future, one brick at a time.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Verdunplein 17",
      "addressLocality": "Eindhoven",
      "postalCode": "5627 SZ",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+46736167376",
      "contactType": "Customer Service",
      "email": "info@realiblebv.com",
      "availableLanguage": ["English", "Dutch"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/realible-b-v",
      "https://x.com/realiblebv",
      "https://www.instagram.com/realiblebv/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Realible",
    "url": "https://realiblebv.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://realiblebv.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Eco-Bricks from Recycled Plastic",
    "description": "Sustainable building bricks made from 100% recycled plastic waste",
    "brand": {
      "@type": "Brand",
      "name": "Realible"
    },
    "category": "Building Materials",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
    </>
  );
}
