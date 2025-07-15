import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

export const metadata: Metadata = {
  title: "Jharkhand Public School | Nurturing Young Minds",
  description:
    "Jharkhand Public School is a leading primary school in Jharkhand offering quality education, strong values, and creative learning from Nursery to Class 8.",
  keywords: [
    "Jharkhand Public School", "Best primary school in Jharkhand", "Nursery to Class 5 school", "School admission Jharkhand", " junior school", "Creative learning for kids", "Early childhood education", "Values-based education", "Quality education in Jharkhand", "School for young minds", "Jharkhand education", "Barharwa school", "Primary school Barharwa", "School with values", "Creative education Jharkhand", "Nurturing young minds", "School for holistic development", "Best school in Barharwa", "Jharkhand Public School Barharwa", "Early education Jharkhand", "School for creativity and values", "Inclusive education Jharkhand", "School for future leaders", "Empowering young minds", "School with a vision", "Quality primary education", "School for lifelong learning", "Innovative teaching methods", "School with experienced teachers", "School for character development", "School for academic excellence", "School with a nurturing environment", "School for all-round development", "School for young learners", "School with a focus on creativity", "School for building confidence", "School for developing skills", "School for fostering curiosity", "School for inspiring young minds", "School for shaping future leaders", "School for community engagement", "School for cultural enrichment", "School for social responsibility", "School for environmental awareness", "School for global citizenship", "School for personal growth", "School for emotional intelligence", "School for critical thinking", "School for problem-solving skills", "School for teamwork and collaboration", "School for effective communication", "School for leadership development", "Hindi medium school", "JAC board school", "Jharkhand school admission", "School for holistic education", "School for character building", "School for academic success",
  ],
  authors: [{ name: "Jharkhand Public School", url: "https://jpsbarharwa.in" }],
  creator: "Jharkhand Public School",
  publisher: "Jharkhand Public School",

  metadataBase: new URL("https://jpsbarharwa.in"), // Your live domain
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Jharkhand Public School",
    description:
      "a leading primary school in Jharkhand offering quality education, strong values, and creative learning from Nursery to Class 8.",
    url: "https://jpsbarharwa.in",
    siteName: "Jharkhand Public School",
    images: [
      {
        url: "/og-image.jpg", // add this image in public/ folder
        width: 1200,
        height: 630,
        alt: "Jharkhand Public School Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jharkhand Public School",
    description:
      "Best primary school in Jharkhand for quality early education and values.",
    images: ["/og-image.jpg"], // same as OG image
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional
  },

  category: "education",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
           <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange={false}
          >
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
