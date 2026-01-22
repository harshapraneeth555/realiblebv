import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Realible | Sustainable Building Materials from Recycled Plastic",
  description = "Realible transforms plastic waste into durable, eco-friendly building bricks. Building a sustainable future, one brick at a time. Premium rice and spices from India.",
  keywords = "sustainable building materials, recycled plastic bricks, eco-friendly construction, green building, plastic waste recycling, sustainable construction, eco-bricks, rice import, spices import, India, Netherlands, Sweden, Denmark, Norway, Australia, New Zealand, Colombia, Dubai, Saudi Arabia",
  image = "/favicon.png",
  url,
  type = "website",
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || location.pathname;
  const fullTitle = title.includes("Realible") ? title : `${title} | Realible`;
  const fullUrl = currentUrl.startsWith("http") ? currentUrl : `https://realiblebv.com${currentUrl}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Realible B.V" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <link rel="canonical" href={fullUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith("http") ? image : `https://realiblebv.com${image}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Realible" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith("http") ? image : `https://realiblebv.com${image}`} />
      <meta name="twitter:site" content="@realiblebv" />
      <meta name="twitter:creator" content="@realiblebv" />

      {/* Additional SEO */}
      <meta name="geo.region" content="NL" />
      <meta name="geo.placename" content="Eindhoven" />
      <meta name="geo.position" content="51.4416;5.4697" />
      <meta name="ICBM" content="51.4416, 5.4697" />
    </Helmet>
  );
}
