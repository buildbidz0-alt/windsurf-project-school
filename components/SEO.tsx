import Head from 'next/head';
import { SEOProps } from '@/types';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description = "Premier educational institution offering world-class academics, holistic development, and modern facilities. Nurturing future leaders through excellence in education.",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
  children
}: SEOComponentProps) {
  const siteName = "St. Augustine's Academy";
  const siteUrl = "https://staugustines-academy.vercel.app";
  
  const fullTitle = title 
    ? `${title} | ${siteName}`
    : `${siteName} - Excellence in Learning. Leadership in Life.`;
  
  const canonicalUrl = canonical 
    ? `${siteUrl}${canonical}`
    : siteUrl;

  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${siteUrl}${ogImage}`;

  // Generate JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": siteName,
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.svg`,
    "image": fullOgImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Oak Avenue",
      "addressLocality": "Education District",
      "addressRegion": "New Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-11-23456789",
      "contactType": "Admissions",
      "email": "admissions@staugustine.edu"
    },
    "sameAs": [
      "https://facebook.com/staugustinesacademy",
      "https://twitter.com/staugustines",
      "https://instagram.com/staugustinesacademy",
      "https://linkedin.com/school/staugustines"
    ],
    "foundingDate": "1985",
    "numberOfStudents": 2000,
    "accreditationBody": "International Baccalaureate Organization"
  };

  const breadcrumbSchema = canonical ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title || "Page",
        "item": canonicalUrl
      }
    ]
  } : null;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@staugustines" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={siteName} />
      <meta name="publisher" content={siteName} />
      <meta name="theme-color" content="#0B2A4A" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
      
      {children}
    </Head>
  );
}
