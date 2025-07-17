import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photo Gallery | Jharkhand Public School - Campus Life & Events",
  description: "Explore our vibrant school life through photos. View images of our campus, classroom activities, events, sports, cultural programs, and student achievements at Jharkhand Public School, Barharwa.",
  keywords: [
    "Jharkhand Public School gallery",
    "JPS Barharwa photos",
    "school campus images",
    "student activities photos",
    "school events pictures",
    "classroom activities",
    "sports photos JPS",
    "cultural program images",
    "school facilities photos",
    "student life pictures",
    "academic activities",
    "school building photos",
    "playground images",
    "library photos",
    "teacher student photos",
    "school celebrations",
    "annual day photos",
    "examination photos",
    "morning assembly pictures",
    "school uniform photos",
    "educational activities",
    "learning environment",
    "school infrastructure",
    "student achievements",
    "school memories"
  ],
  openGraph: {
    title: "Photo Gallery | Jharkhand Public School - Campus Life & Events",
    description: "Explore our vibrant school life through photos. View images of our campus, classroom activities, events, sports, cultural programs, and student achievements at Jharkhand Public School, Barharwa.",
    url: "https://www.jpsbarharwa.in/gallery",
    siteName: "Jharkhand Public School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand Public School Gallery"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Jharkhand Public School - Campus Life & Events",
    description: "Explore our vibrant school life through photos. View images of our campus, classroom activities, events, sports, cultural programs, and student achievements at Jharkhand Public School, Barharwa.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.jpsbarharwa.in/gallery"
  }
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
