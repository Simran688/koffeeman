export type FranchisePoint = {
  number: string;
  title: string;
  description: string;
};

export const franchiseData = {
  kicker: "Get started · Grow with KoffeeMan",
  title: "Own a KoffeeMan Franchise",
  copy: "Have a passion for coffee and a dream of building something of your own? Let's talk about bringing KoffeeMan to your city. Connect with us to discuss the opportunity, your location and the next steps.",
  note: "Start a conversation with our team. Franchise details can be discussed directly.",
  ctaText: "Contact Us",

  points: [
    {
      number: "01",
      title: "A coffee-first idea",
      description: "Premium-quality coffee with a wide variety of choices.",
    },
    {
      number: "02",
      title: "A menu for every craving",
      description: "Coffee, shakes, mojitos and food favourites in one place.",
    },
    {
      number: "03",
      title: "Let's discuss the details",
      description: "Talk with us about location, space and the franchise process.",
    },
  ] as const,
} as const;

