import MainFooter from '@/components/MyComponents/MainFooter'
import { MainNavbar } from '@/components/MyComponents/MainNavbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Admission 2025-26 | Jharkhand Public School Barharwa | Apply Now",
  description: "Join Jharkhand Public School for Academic Year 2025-26! Quality education from Nursery to Class 8. JAC Board curriculum, experienced teachers, nurturing environment. Limited seats available - Apply now!",
  
  keywords: [
    // Primary admission keywords
    "Jharkhand Public School admission",
    "JPS Barharwa admission 2025-26",
    "school admission Sahibganj",
    "primary school admission Jharkhand",
    "nursery admission Barharwa",
    
    // Academic session keywords
    "admission 2025-26",
    "academic year 2025-26",
    "new session admission",
    "school enrollment 2025",
    "student admission form",
    
    // Location specific
    "Barharwa school admission",
    "Sahibganj school admission",
    "Jharkhand school admission",
    "best school Barharwa",
    "top school Sahibganj",
    
    // Class/Grade specific
    "nursery admission",
    "kindergarten admission",
    "primary school admission",
    "class 1 admission",
    "class 2 admission",
    "class 3 admission",
    "class 4 admission",
    "class 5 admission",
    "class 6 admission",
    "class 7 admission",
    "class 8 admission",
    
    // Curriculum keywords
    "JAC Board school admission",
    "Jharkhand Academic Council",
    "Hindi medium school",
    "CBSE affiliated school",
    "quality education Jharkhand",
    
    // Features keywords
    "experienced teachers",
    "nurturing environment",
    "individual attention",
    "holistic development",
    "co-curricular activities",
    "sports facilities",
    "computer education",
    "library facilities",
    
    // Admission process
    "online admission form",
    "school application",
    "admission requirements",
    "admission criteria",
    "school fees",
    "admission procedure",
    "document requirements",
    
    // Parent focused
    "best school for children",
    "quality primary education",
    "safe school environment",
    "parent-teacher cooperation",
    "child development",
    "educational excellence",
    
    // Competition keywords
    "better than DAV",
    "better than Kendriya Vidyalaya",
    "affordable quality education",
    "local school excellence",
    
    // Long-tail keywords
    "school admission near Barharwa railway station",
    "English medium school Sahibganj",
    "co-educational school Jharkhand",
    "NCERT curriculum school",
    "modern teaching methods",
    "technology enabled learning"
  ],
  
  authors: [{ name: "Jharkhand Public School" }],
  creator: "Jharkhand Public School, Barharwa",
  publisher: "Jharkhand Public School",
  
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

  openGraph: {
    title: "Admission 2025-26 | Jharkhand Public School Barharwa | Apply Now",
    description: "Join Jharkhand Public School for Academic Year 2025-26! Quality education from Nursery to Class 8. JAC Board curriculum, experienced teachers, nurturing environment. Limited seats available - Apply now!",
    url: "https://www.jpsbarharwa.in/Admission",
    siteName: "Jharkhand Public School",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.jpsbarharwa.in/og-admission.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand Public School Admission 2025-26 - Apply Now",
        type: "image/jpeg",
      },
      {
        url: "https://www.jpsbarharwa.in/logo.png",
        width: 512,
        height: 512,
        alt: "Jharkhand Public School Logo",
        type: "image/png",
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@JPSBarharwa",
    creator: "@JPSBarharwa",
    title: "Admission 2025-26 | Jharkhand Public School Barharwa | Apply Now",
    description: "Join Jharkhand Public School for Academic Year 2025-26! Quality education from Nursery to Class 8. JAC Board curriculum, experienced teachers, nurturing environment. Limited seats available - Apply now!",
    images: [
      {
        url: "https://www.jpsbarharwa.in/og-admission.jpg",
        alt: "Jharkhand Public School Admission 2025-26 - Apply Now",
      }
    ],
  },

  alternates: {
    canonical: "https://www.jpsbarharwa.in/Admission",
    languages: {
      'en-IN': 'https://www.jpsbarharwa.in/Admission',
      'hi-IN': 'https://www.jpsbarharwa.in/hi/Admission'
    },
  },

  category: "Education",
  classification: "School Admission",
  
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-domain-verification",
      "pinterest-site-verification": "your-pinterest-verification",
    },
  },

  manifest: "/manifest.json",
  
  other: {
    "application-name": "JPS Barharwa Admission",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#3B82F6",
    "color-scheme": "light",
    "format-detection": "telephone=yes, date=yes, email=yes, address=yes",
    
    // Educational specific meta tags
    "education.level": "Primary,Elementary",
    "education.grade": "Nursery,KG,1,2,3,4,5,6,7,8",
    "education.curriculum": "JAC Board,NCERT",
    "education.medium": "Hindi,English",
    "education.type": "Co-educational",
    
    // Geographic meta tags
    "geo.region": "IN-JH",
    "geo.placename": "Barharwa, Sahibganj, Jharkhand",
    "geo.position": "25.2167;87.9333",
    "ICBM": "25.2167, 87.9333",
    
    // Contact information
    "contact.email": "contact@jpsbarharwa.in",
    "contact.phone": "+91-8541061847",
    "contact.address": "Thana road, Barharwa, Sahibganj, Jharkhand, 816101",
    
    // Business information
    "business.hours": "Monday-Saturday 8:00-16:00",
    "business.founded": "2010",
    "business.type": "Educational Institution",
    
    // Social media
    "facebook.page": "JPSBarharwa",
    "twitter.username": "JPSBarharwa",
    "instagram.username": "jpsbarharwa",
    
    // Schema.org structured data
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "School",
      "name": "Jharkhand Public School",
      "alternateName": "JPS Barharwa",
      "description": "Leading primary school in Barharwa, Sahibganj offering quality education from Nursery to Class 8 with JAC Board curriculum.",
      "url": "https://www.jpsbarharwa.in",
      "logo": "https://www.jpsbarharwa.in/logo.png",
      "image": "https://www.jpsbarharwa.in/og-image.jpg",
      "founded": "2010",
      "foundingDate": "2010",
      "email": "contact@jpsbarharwa.in",
      "telephone": "+91-8541061847",
      "faxNumber": "+91-8541061847",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Thana road",
        "addressLocality": "Barharwa",
        "addressRegion": "Jharkhand",
        "postalCode": "816101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2167",
        "longitude": "87.9333"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Barharwa"
        },
        {
          "@type": "City", 
          "name": "Sahibganj"
        },
        {
          "@type": "State",
          "name": "Jharkhand"
        }
      ],
      "educationalCredentialAwarded": "Primary Education Certificate",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Primary Education",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Jharkhand Academic Council"
        }
      },
      "offers": {
        "@type": "Offer",
        "name": "School Admission 2025-26",
        "description": "Admission for Academic Year 2025-26 from Nursery to Class 8",
        "category": "Education",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-11-01",
        "validThrough": "2025-04-30",
        "url": "https://www.jpsbarharwa.in/Admission"
      },
      "department": [
        {
          "@type": "EducationalOrganization",
          "name": "Primary Section",
          "description": "Classes Nursery to 5"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "Upper Primary Section",
          "description": "Classes 6 to 8"
        }
      ],
      "alumni": {
        "@type": "Organization",
        "name": "JPS Alumni Association"
      },
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "Jharkhand Academic Council"
      },
      "accreditation": {
        "@type": "Organization",
        "name": "Government of Jharkhand"
      },
      "openingHours": "Mo-Sa 08:00-16:00",
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Bank Transfer, UPI",
      "currenciesAccepted": "INR",
      "sameAs": [
        "https://www.facebook.com/JPSBarharwa",
        "https://www.twitter.com/JPSBarharwa",
        "https://www.instagram.com/jpsbarharwa"
      ]
    })
  },
}

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Additional structured data for admission-specific content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "School Admission 2025-26 | Jharkhand Public School",
            "description": "Apply for admission to Jharkhand Public School for Academic Year 2025-26. Quality education from Nursery to Class 8.",
            "url": "https://www.jpsbarharwa.in/Admission",
            "mainEntity": {
              "@type": "EducationalOrganization",
              "name": "Jharkhand Public School",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Academic Programs 2025-26",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Nursery Program",
                      "description": "Foundation program for early childhood development",
                      "provider": {
                        "@type": "School",
                        "name": "Jharkhand Public School"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course", 
                      "name": "Primary Education (Class 1-5)",
                      "description": "Primary education following JAC Board curriculum",
                      "provider": {
                        "@type": "School",
                        "name": "Jharkhand Public School"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Upper Primary Education (Class 6-8)", 
                      "description": "Upper primary education with focus on holistic development",
                      "provider": {
                        "@type": "School",
                        "name": "Jharkhand Public School"
                      }
                    }
                  }
                ]
              }
            },
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
                  "name": "Admission",
                  "item": "https://www.jpsbarharwa.in/Admission"
                }
              ]
            }
          })
        }}
      />
      
      {/* FAQ structured data for admission queries */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "When do admissions open for 2025-26?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Admissions for Academic Year 2025-26 are now open. We accept applications from November 2024 to April 2025 or until seats are filled."
                }
              },
              {
                "@type": "Question",
                "name": "Which classes are offered at Jharkhand Public School?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "We offer education from Nursery to Class 8, providing comprehensive primary and upper primary education."
                }
              },
              {
                "@type": "Question",
                "name": "What curriculum does the school follow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jharkhand Public School follows JAC (Jharkhand Academic Council) Board curriculum with NCERT guidelines, offering quality education in Hindi medium."
                }
              },
              {
                "@type": "Question",
                "name": "How can I apply for admission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can apply online through our admission form or visit our school premises at Thana road, Barharwa, Sahibganj. Contact us at +91-8541061847 for assistance."
                }
              },
              {
                "@type": "Question", 
                "name": "What documents are required for admission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Required documents include birth certificate, previous school records (if applicable), Aadhar card, passport size photographs, and vaccination records."
                }
              }
            ]
          })
        }}
      />

      {/* Event structured data for admission deadline */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "School Admission 2025-26",
            "description": "Admission process for Academic Year 2025-26 at Jharkhand Public School",
            "startDate": "2024-11-01",
            "endDate": "2025-04-30",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Jharkhand Public School",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thana road",
                "addressLocality": "Barharwa",
                "addressRegion": "Jharkhand", 
                "postalCode": "816101",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "School",
              "name": "Jharkhand Public School",
              "url": "https://www.jpsbarharwa.in"
            },
            "offers": {
              "@type": "Offer",
              "name": "School Admission",
              "availability": "https://schema.org/InStock",
              "url": "https://www.jpsbarharwa.in/Admission/NewAdmissionForm"
            }
          })
        }}
      />
<MainNavbar/>
      {children}
      <MainFooter/>
    </>
  )
}
