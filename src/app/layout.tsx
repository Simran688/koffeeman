import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
  description: `${siteConfig.brandName} café in NSP, Pitampura, Delhi. ${siteConfig.slogan} Premium coffee, refreshing beverages, and comfort-food favourites.`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F4E4CA] text-[#392929] selection:bg-[#D6B66C]/40 selection:text-[#392929]">
        <AnnouncementBar />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
