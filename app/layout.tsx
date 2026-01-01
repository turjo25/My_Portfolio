import type { Metadata } from "next";
import "./globals.css";
import { PERSONAL_INFO, CONTACT_INFO } from "@/data/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MD. SHARDUL RAHMAN TURJO | Full-Stack Developer",
    template: "%s | MD. SHARDUL RAHMAN TURJO",
  },
  description:
    "Software Engineering student with 1000+ coding problems solved. Full-stack developer specializing in Django and React. Building modern web applications with clean code and best practices.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineering",
    "Django",
    "React",
    "TypeScript",
    "Python",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
    "Competitive Programming",
    "CodeForces",
    "LeetCode",
  ],
  authors: [{ name: "MD. SHARDUL RAHMAN TURJO", url: CONTACT_INFO.github }],
  creator: "MD. SHARDUL RAHMAN TURJO",
  publisher: "MD. SHARDUL RAHMAN TURJO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "MD. SHARDUL RAHMAN TURJO | Full-Stack Developer",
    description:
      "Software Engineering student with 1000+ coding problems solved. Full-stack developer specializing in Django and React.",
    siteName: "MD. SHARDUL RAHMAN TURJO Portfolio",
    emails: [CONTACT_INFO.email],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. SHARDUL RAHMAN TURJO | Full-Stack Developer",
    description:
      "Software Engineering student with 1000+ coding problems solved. Full-stack developer specializing in Django and React.",
    creator: "@turjo25", // Update with your Twitter handle if available
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "Portfolio",
};

// Structured Data (JSON-LD) for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.name,
  jobTitle: PERSONAL_INFO.role,
  description: PERSONAL_INFO.tagline,
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT_INFO.location,
  },
  url: siteUrl,
  sameAs: [
    CONTACT_INFO.linkedin,
    CONTACT_INFO.github,
  ].filter(Boolean),
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Daffodil International University",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Django",
    "React",
    "Python",
    "JavaScript",
    "Software Engineering",
    "Competitive Programming",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

