import { siteConfig } from "@/data/site-config";
import { outletLocations } from "@/data/locations";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.brandName,
    alternateName: siteConfig.brandAltName,
    description: `${siteConfig.brandName} café in NSP, Pitampura, Delhi. ${siteConfig.slogan}`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.contact.primaryPhoneTel.replace("tel:", ""),
    slogan: siteConfig.slogan,
    servesCuisine: ["Coffee", "Fast Food", "Beverages", "Street Food"],
    sameAs: [
      siteConfig.contact.instagramUrl,
      siteConfig.ordering.swiggyUrl,
    ],
    address: outletLocations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: "Netaji Subhash Place, Pitampura",
      addressRegion: "Delhi",
      postalCode: "110034",
      addressCountry: "IN",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

