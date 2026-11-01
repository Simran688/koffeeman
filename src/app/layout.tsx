import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KoffeeMan — website foundation",
  description:
    "KoffeeMan café website for NSP, Pitampura. Foundation preview only; brand pages follow in later features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
