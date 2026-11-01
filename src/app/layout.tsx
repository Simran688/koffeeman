import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: `${siteConfig.brandName} café in NSP, Netaji Subhash Place, Pitampura, Delhi. ${siteConfig.slogan} Premium coffee, refreshing beverages, and comfort-food favourites.`,
  keywords: [
    "Koffee Man",
    "KoffeeMan",
    "Café NSP",
    "Netaji Subhash Place café",
    "Pitampura coffee shop",
    "Rohit Chhabra coffee",
    "Delhi café",
    "Coffee in NSP",
  ],
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.brandName,
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: `${siteConfig.brandName} café in NSP, Pitampura, Delhi. ${siteConfig.slogan}`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-coffee.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} Café NSP`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: `${siteConfig.brandName} café in NSP, Pitampura, Delhi. ${siteConfig.slogan}`,
    images: ["/images/hero/hero-coffee.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4E4CA] text-[#392929] selection:bg-[#D6B66C]/40 selection:text-[#392929]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#392929] focus:text-[#FFF8EE] focus:rounded focus:outline-none focus:ring-2 focus:ring-[#D6B66C] text-xs font-bold shadow-lg"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <div id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none">
          {children}
        </div>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
