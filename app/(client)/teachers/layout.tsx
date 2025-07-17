import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Teachers | Jharkhand Public School - Experienced & Dedicated Faculty",
  description: "Meet our qualified and experienced teachers at Jharkhand Public School, Barharwa. Our dedicated faculty provides quality education from Nursery to Class 8 with JAC Board curriculum.",
  keywords: [
    "Jharkhand Public School teachers",
    "JPS Barharwa faculty",
    "qualified teachers Jharkhand",
    "experienced teachers Barharwa",
    "school staff JPS",
    "primary school teachers",
    "JAC board teachers",
    "Hindi medium teachers",
    "mathematics teachers",
    "science teachers",
    "English teachers",
    "social studies teachers",
    "principal Jharkhand Public School",
    "headmaster JPS Barharwa",
    "teaching staff Sahibganj",
    "education professionals",
    "qualified faculty members",
    "dedicated teachers",
    "experienced educators",
    "school administration"
  ],
  openGraph: {
    title: "Our Teachers | Jharkhand Public School - Experienced & Dedicated Faculty",
    description: "Meet our qualified and experienced teachers at Jharkhand Public School, Barharwa. Our dedicated faculty provides quality education from Nursery to Class 8 with JAC Board curriculum.",
    url: "https://www.jpsbarharwa.in/teachers",
    siteName: "Jharkhand Public School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand Public School Teachers"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Teachers | Jharkhand Public School - Experienced & Dedicated Faculty",
    description: "Meet our qualified and experienced teachers at Jharkhand Public School, Barharwa. Our dedicated faculty provides quality education from Nursery to Class 8 with JAC Board curriculum.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.jpsbarharwa.in/teachers"
  }
}

export default function TeachersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
