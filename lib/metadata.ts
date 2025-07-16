import { Metadata } from 'next'

export function generateContactMetadata(): Metadata {
  return {
    title: "Contact Us | Jharkhand Public School",
    description: "Get in touch with Jharkhand Public School, Barharwa. Contact details, address, phone number and email for admissions and inquiries.",
    keywords: ["contact", "jharkhand public school", "barharwa", "sahibganj", "school contact", "admission inquiry"],
    openGraph: {
      title: "Contact Us | Jharkhand Public School",
      description: "Get in touch with Jharkhand Public School, Barharwa. Contact details, address, phone number and email for admissions and inquiries.",
      type: "website",
      locale: "en_IN",
      siteName: "Jharkhand Public School"
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Jharkhand Public School",
      description: "Get in touch with Jharkhand Public School, Barharwa. Contact details, address, phone number and email for admissions and inquiries."
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export function generateCurriculumMetadata(): Metadata {
  return {
    title: "Curriculum | Jharkhand Public School",
    description: "Comprehensive curriculum at Jharkhand Public School following JAC Board guidelines for Nursery to Class 8 students.",
    keywords: ["curriculum", "jac board", "education", "nursery to class 8", "jharkhand", "barharwa"],
    openGraph: {
      title: "Curriculum | Jharkhand Public School", 
      description: "Comprehensive curriculum at Jharkhand Public School following JAC Board guidelines for Nursery to Class 8 students.",
      type: "website",
      locale: "en_IN",
      siteName: "Jharkhand Public School"
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export function generateNurseryMetadata(): Metadata {
  return {
    title: "Nursery Program | Jharkhand Public School",
    description: "Comprehensive nursery program for 3-5 year olds at Jharkhand Public School. Play-based learning, creative activities, and foundation building.",
    keywords: ["nursery", "lkg", "ukg", "early childhood", "play based learning", "jharkhand public school"],
    openGraph: {
      title: "Nursery Program | Jharkhand Public School",
      description: "Comprehensive nursery program for 3-5 year olds at Jharkhand Public School. Play-based learning, creative activities, and foundation building.",
      type: "website", 
      locale: "en_IN",
      siteName: "Jharkhand Public School"
    },
    robots: {
      index: true,
      follow: true
    }
  }
}
