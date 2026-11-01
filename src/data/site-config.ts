/**
 * Central business facts and external destination URLs.
 *
 * Never invent opening hours, ratings, store counts, awards,
 * or direct Zomato outlet URLs without owner confirmation.
 */

export const siteConfig = {
  brandName: "Koffee Man",
  brandAltName: "KoffeeMan",
  tagline: "Life happens. Koffee helps.",
  supportingLine: "One spot. Endless cravings.",
  brandSignOff: "Taste the vibe. Love the brew.",
  logoTagline: "ON THE WAY TO GIVE YOU ENERGY",
  slogan: "Good Food. Good Coffee. Good Vibes.",
  announcement: "Good food · Good coffee · Good vibes   ✦   NSP, Pitampura",

  founder: {
    name: "Rohit Chhabra",
    firstFranchiseYear: "2022",
  },

  contact: {
    primaryPhone: "9811161923",
    secondaryPhone: "8700020291",
    primaryPhoneTel: "tel:+919811161923",
    secondaryPhoneTel: "tel:+918700020291",
    instagramHandle: "@koffeeman_",
    instagramUrl: "https://www.instagram.com/koffeeman_/",
  },

  ordering: {
    swiggyUrl: "https://www.swiggy.com/city/delhi/koffeeman-nsp-rest1175563",
    // Direct Zomato outlet URL is not yet confirmed by owner.
    // Using Pitampura/NSP discovery search as the documented interim destination.
    zomatoSearchUrl: "https://www.zomato.com/ncr/pitampura-delhi-restaurants",
  },

  outlets: [
    {
      id: "gd-itl",
      name: "GD-ITL Tower",
      // Exact shop/floor number is not yet supplied by the owner. Do not invent one.
      address: "Netaji Subhash Place, Pitampura, Delhi",
      mapsQueryUrl:
        "https://www.google.com/maps/search/?api=1&query=GD-ITL+Tower+Netaji+Subhash+Place+Pitampura+Delhi",
    },
    {
      id: "aggarwal-corporate-heights",
      name: "Aggarwal Corporate Heights",
      address:
        "Shop G8, Aggarwal Corporate Heights, NSP, Pitampura, Delhi – 110034",
      mapsQueryUrl:
        "https://www.google.com/maps/search/?api=1&query=Aggarwal+Corporate+Heights+NSP+Pitampura+Delhi",
    },
  ],

  navLinks: [
    { label: "Home", href: "/#home" },
    { label: "Our Menu", href: "/#menu" },
    { label: "Our Story", href: "/#story" },
    { label: "Franchise", href: "/#franchise" },
    { label: "Events", href: "/#events" },
    { label: "Visit Us", href: "/#visit" },
  ],
} as const;

