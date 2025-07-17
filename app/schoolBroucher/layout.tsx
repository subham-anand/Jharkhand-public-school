import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "School Brochure - Jharkhand Public School | Download Our Official Brochure",
  description: "Download the official school brochure of Jharkhand Public School, Barharwa. Get complete information about our curriculum, facilities, admission process, fee structure and more.",
  keywords: [
    "Jharkhand Public School brochure",
    "JPS school brochure",
    "school brochure download",
    "Barharwa school brochure",
    "primary school brochure",
    "JAC board school brochure",
    "Hindi medium school brochure",
    "school admission brochure",
    "JPS facilities brochure",
    "school information brochure",
    "Jharkhand school brochure",
    "Sahibganj school brochure",
    "nursery school brochure",
    "primary education brochure",
    "school curriculum brochure",
    "fee structure brochure",
    "school transport brochure",
    "safety measures brochure",
    "co-curricular activities brochure",
    "school infrastructure brochure"
  ],
  openGraph: {
    title: "School Brochure - Jharkhand Public School | Download Our Official Brochure",
    description: "Download the official school brochure of Jharkhand Public School, Barharwa. Get complete information about our curriculum, facilities, admission process, fee structure and more.",
    url: "https://www.jpsbarharwa.in/schoolBroucher",
    siteName: "Jharkhand Public School",
    images: [
      {
        url: "https://www.jpsbarharwa.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand Public School - School Brochure"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "School Brochure - Jharkhand Public School | Download Our Official Brochure",
    description: "Download the official school brochure of Jharkhand Public School, Barharwa. Get complete information about our curriculum, facilities, admission process, fee structure and more.",
    images: ["https://www.jpsbarharwa.in/og-image.jpg"]
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
  alternates: {
    canonical: "https://www.jpsbarharwa.in/schoolBroucher"
  }
}

export default function SchoolBrochureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {children}
      </main>

    </div>
  )
}
