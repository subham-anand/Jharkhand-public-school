import MainFooter from '@/components/MyComponents/MainFooter'
import { MainNavbar } from '@/components/MyComponents/MainNavbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us - Jharkhand Public School",
  description: "Get in touch with Jharkhand Public School, Barharwa. Contact details, address, phone number and email for admissions and inquiries.",
  keywords: [
    "Jharkhand Public School contact",
    "JPS contact details",
    "contact school Barharwa",
    "school phone number",
    "school email address",
    "Jharkhand school contact",
    "admission inquiry contact",
    "school address Barharwa",
    "contact form school",
    "get in touch JPS",
    "school location Sahibganj",
    "contact us Jharkhand",
    "school contact information",
    "JPS phone email",
    "Barharwa school contact",
    "primary school contact",
    "educational inquiry contact",
    "school communication",
    "parent contact school",
    "admission helpline",
    "school office contact",
    "educational consultation",
    "school feedback contact",
    "inquiry contact details",
    "school support contact",
    "academic inquiry contact",
    "school assistance contact",
    "contact education team",
    "school help contact",
    "educational guidance contact"
  ],
  authors: [{ name: "Jharkhand Public School" }],
  creator: "Jharkhand Public School",
  publisher: "Jharkhand Public School",
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Contact Jharkhand Public School | Get in Touch with JPS Barharwa",
    description: "Contact Jharkhand Public School for admissions, inquiries, and more information. Phone: +91 8541061847, Email: contact@jpsbarharwa.in, Address: Thana road, Barharwa, Sahibganj, Jharkhand.",
    url: "https://www.jpsbarharwa.in/contact",
    siteName: "Jharkhand Public School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Jharkhand Public School - Get in Touch with JPS Barharwa",
        type: "image/jpeg",
      }
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Contact Jharkhand Public School | Get in Touch",
    description: "Contact JPS Barharwa for admissions and inquiries. Phone: +91 8541061847, Email: contact@jpsbarharwa.in. Located in Barharwa, Sahibganj, Jharkhand.",
    images: ["/og-image.jpg"],
    creator: "@jpsbarharwa",
    site: "@jpsbarharwa",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.jpsbarharwa.in/AboutUs",
    languages: {
      "en-IN": "https://www.jpsbarharwa.in/AboutUs",
    },
  },

  // Additional tags
  category: "Education",
  classification: "Educational Institution",
  
  // Verification and additional meta tags
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
    yandex: "yandex-verification-code", // Replace with actual verification code
    yahoo: "yahoo-verification-code", // Replace with actual verification code
  },

  // App-specific metadata
  applicationName: "Jharkhand Public School Website",
  referrer: "origin-when-cross-origin",
  


  // Manifest and icons
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      
      
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },

  // Additional structured data hints
  other: {
    "geo.region": "IN-JH",
    "geo.placename": "Barharwa, Sahibganj, Jharkhand",
    "geo.position": "25.2167;87.9167", // Approximate coordinates for Barharwa
    "ICBM": "25.2167, 87.9167",
    "DC.title": "About Jharkhand Public School - Educational Excellence Since 2010",
    "DC.creator": "Jharkhand Public School",
    "DC.subject": "Primary Education, Early Childhood Education, JAC Board",
    "DC.description": "Learn about Jharkhand Public School's 15-year journey of educational excellence in Barharwa, Jharkhand. Discover our child-first approach and commitment to nurturing young minds.",
    "DC.publisher": "Jharkhand Public School",
    "DC.contributor": "JPS Faculty and Staff",
    "DC.date": "2010",
    "DC.type": "Text.Homepage.Educational",
    "DC.format": "text/html",
    "DC.identifier": "https://www.jpsbarharwa.in/AboutUs",
    "DC.language": "en-IN",
    "DC.coverage": "Barharwa, Sahibganj, Jharkhand, India",
    "DC.rights": "Copyright 2010-2025 Jharkhand Public School. All rights reserved.",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#3B82F6",
    "msapplication-config": "/browserconfig.xml",
  },
}

// Structured Data for About Page
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.jpsbarharwa.in/#organization",
      "name": "Jharkhand Public School",
      "alternateName": "JPS Barharwa",
      "url": "https://www.jpsbarharwa.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.jpsbarharwa.in/logo.png",
        "width": 200,
        "height": 200
      },
      "description": "Jharkhand Public School - Nurturing young minds since 2010 with academic excellence, moral development, and creative exploration in Barharwa, Jharkhand.",
      "foundingDate": "2010",
      "founder": {
        "@type": "Person",
        "name": "JPS Founders"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thana road",
        "addressLocality": "Barharwa",
        "addressRegion": "Sahibganj",
        "postalCode": "816101",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8541061847",
        "email": "contact@jpsbarharwa.in",
        "contactType": "customer service",
        "availableLanguage": ["Hindi", "English"]
      },
      "sameAs": [
        "https://www.facebook.com/jpsbarharwa",
        "https://www.instagram.com/jpsbarharwa",
        "https://www.youtube.com/jpsbarharwa"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "JAC Board Affiliation"
      },
      "educationalCredentialAwarded": "Primary Education Certificate"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.jpsbarharwa.in/AboutUs#webpage",
      "url": "https://www.jpsbarharwa.in/AboutUs",
      "name": "About Us - Jharkhand Public School",
      "description": "Learn about Jharkhand Public School's journey since 2010, our educational philosophy, and commitment to nurturing young minds in Barharwa, Jharkhand.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.jpsbarharwa.in/#website"
      },
      "about": {
        "@id": "https://www.jpsbarharwa.in/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.jpsbarharwa.in/og-about-image.jpg"
      },
      "datePublished": "2010-01-01",
      "dateModified": "2025-01-16",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.jpsbarharwa.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://www.jpsbarharwa.in/AboutUs"
          }
        ]
      }
    }
  ]
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData)
        }}
      />
      
      {/* Page Content */}
      <main className="min-h-screen">
        <MainNavbar/>
        {children}
        <MainFooter/>
      </main>
    </>
  )
}
