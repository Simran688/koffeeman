import { menuImages } from "@/data/images";

export type MenuGroup = {
  title: string;
  items: readonly string[];
};

export type MenuCategory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  groups: readonly MenuGroup[];
};

/**
 * KoffeeMan menu catalogue — product names only, NO prices/rates.
 * Sourced directly from owner-supplied posters.
 */
export const menuCategories: readonly MenuCategory[] = [
  {
    slug: "coffee",
    title: "Coffee & Beverages",
    subtitle: "Hot coffee · Cold coffee · Signature brews",
    description: "Your favourite brews, hot or cold. Crafted with premium quality coffee beans.",
    image: menuImages.coffee,
    groups: [
      {
        title: "Hot & Cold Variants",
        items: [
          "Classic",
          "Hazelnut",
          "Caramel",
          "Mocha",
          "Dark Chocolate",
          "French Vanilla",
          "Irish",
          "Tiramisu",
          "Southern Blend",
          "Bangalore Brew",
          "KoffeeMan Special",
        ],
      },
      {
        title: "Other Drinks",
        items: ["Iced Latte", "Hot Chocolate", "Black Coffee"],
      },
    ],
  },
  {
    slug: "shakes",
    title: "Shakes",
    subtitle: "Creamy favourites and dessert-inspired blends",
    description: "Rich, velvety shakes blended to perfection for every sweet craving.",
    image: menuImages.shakes,
    groups: [
      {
        title: "The Shake Selection",
        items: [
          "Mix Berry",
          "Kesar Kulfi",
          "Black Current",
          "Butterscotch",
          "Blueberry",
          "Strawberry",
          "Oreo",
          "Kit-Kat",
          "Brownie",
          "Nutella Choco",
        ],
      },
    ],
  },
  {
    slug: "mojitos",
    title: "Mojitos & Iced Tea",
    subtitle: "Fresh, fizzy and refreshing",
    description: "Cool, sparkling refreshers infused with fruit flavours and fresh mint.",
    image: menuImages.mojitos,
    groups: [
      {
        title: "Mojitos & Coolers",
        items: [
          "Virgin Mojito",
          "Lavender",
          "Blueberry",
          "Watermelon",
          "Blue Ocean",
          "Hara Apple",
          "Mixing Allowed",
          "Black Khatta",
          "Strawberry",
          "Sun Rise",
          "Chilly Guava",
        ],
      },
      {
        title: "Iced Teas",
        items: ["Lemon Ice Tea", "Peach Ice Tea"],
      },
    ],
  },
  {
    slug: "sandwiches",
    title: "Sandwiches & Burgers",
    subtitle: "Grilled sandwiches and loaded burgers",
    description: "Hot, toasted sandwiches and crispy, stacked burgers prepared fresh to order.",
    image: menuImages.sandwich,
    groups: [
      {
        title: "Sandwiches",
        items: [
          "Veg Grilled",
          "Cheese & Corn",
          "Tandoori Paneer",
          "Cheese Burst",
          "Punjabi",
        ],
      },
      {
        title: "Burgers",
        items: [
          "Yummy Aloo Tikki",
          "Mighty Cheese",
          "Peri Peri Paneer",
          "Double Tikki",
          "Crispy Crunch",
        ],
      },
    ],
  },
  {
    slug: "quick-bites",
    title: "Quick Bites",
    subtitle: "Maggi · Wraps · Pasta · Fries · Pizza and more",
    description: "The ultimate comfort lineup: hot bowls, loaded sides, pastas, and cheesy snacks.",
    image: menuImages.fries,
    groups: [
      {
        title: "Maggi",
        items: ["Classic", "Double Masale", "Vegetables", "Cheese"],
      },
      {
        title: "Wraps",
        items: [
          "Veggie Delite",
          "Cheese & Corn",
          "Paneer Tikka",
          "Cheese Paneer Tikka",
        ],
      },
      {
        title: "Pasta",
        items: [
          "White Sauce",
          "Red Sauce",
          "Punjabi Style",
          "Pink Sauce",
        ],
      },
      {
        title: "Fries",
        items: ["Crispy Salted", "Peri Peri", "Cheese Loaded"],
      },
      {
        title: "Nachos",
        items: ["Veggie Nachos", "Nachos Corn Chaat", "Cheese Overloaded"],
      },
      {
        title: "Pizza",
        items: [
          "Loaded Veggie",
          "Cheese Corn",
          "Paneer Special",
          "Farm House",
          "Margherita",
        ],
      },
      {
        title: "Garlic Bread",
        items: [
          "Cheese Garlic Bread",
          "Veggie Garlic Bread",
          "Corn & Cheese Garlic Bread",
        ],
      },
    ],
  },
  {
    slug: "chinese",
    title: "Chinese Specialities",
    subtitle: "Noodles · Rolls · Laphing · Momos and more",
    description: "Authentic Delhi street-style Chinese favourites, tossed hot with bold flavours.",
    image: menuImages.momos,
    groups: [
      {
        title: "Noodles",
        items: [
          "Veg Noodles",
          "Hakka Noodles",
          "Singapuri Noodles",
          "Chilly Garlic Noodles",
          "Butter Noodles",
          "Paneer Noodles",
        ],
      },
      {
        title: "Rolls",
        items: ["Spring Roll", "Kurkure Spring Roll"],
      },
      {
        title: "Laphing",
        items: ["Wai Wai Dry Laphing"],
      },
      {
        title: "Chilli Potato",
        items: ["Crispy Chilly Potato", "Honey Chilly Potato"],
      },
      {
        title: "Veg Momos",
        items: ["Steam", "Fried", "Kurkure", "Cocktail"],
      },
      {
        title: "Paneer Momos",
        items: ["Steam", "Fried", "Kurkure", "Cocktail"],
      },
      {
        title: "Manchurian",
        items: ["Dry Manchurian", "Gravy Manchurian"],
      },
    ],
  },
  {
    slug: "chai",
    title: "Chai & Bun Maska",
    subtitle: "Simple, comforting favourites",
    description: "Classic Indian cutting chai paired with freshly toasted, butter-slathered bun maska.",
    image: menuImages.coffee,
    groups: [
      {
        title: "Chai & Bun Maska",
        items: ["Chai", "Bun Maska"],
      },
    ],
  },
] as const;

export function getMenuCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((cat) => cat.slug === slug);
}

