export type EventCategory = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const eventsData = {
  kicker: "Celebrate with KoffeeMan",
  title: "Make your moments memorable.",
  copy: "Bring KoffeeMan to your celebration. Tell us about your occasion and call us to discuss the details.",
  subtext: "Weddings · Parties · Festive · Cultural · College",
  ctaText: "Call to Enquire",

  items: [
    {
      id: "weddings",
      icon: "✿",
      title: "Weddings",
      description: "A coffee and bites corner for your special day.",
    },
    {
      id: "parties",
      icon: "✦",
      title: "Parties",
      description: "For birthdays, private parties and get-togethers.",
    },
    {
      id: "festive",
      icon: "☼",
      title: "Festive Events",
      description: "Bring seasonal celebrations to life.",
    },
    {
      id: "cultural",
      icon: "❋",
      title: "Cultural Events",
      description: "Serve guests at community and cultural gatherings.",
    },
    {
      id: "college",
      icon: "✧",
      title: "College Events",
      description: "Fuel fests, societies and campus celebrations.",
    },
  ] as const,
} as const;

