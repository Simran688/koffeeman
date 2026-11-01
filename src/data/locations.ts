export type OutletLocation = {
  id: string;
  name: string;
  address: string;
  directionsUrl: string;
  note?: string;
};

/**
 * Factual KoffeeMan outlet data for NSP, Pitampura, Delhi.
 *
 * Never invent opening hours, coordinates, ratings, or
 * shop/floor numbers for GD-ITL Tower until confirmed.
 */
export const outletLocations: readonly OutletLocation[] = [
  {
    id: "gd-itl",
    name: "GD-ITL Tower",
    address: "Netaji Subhash Place, Pitampura, Delhi",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=GD-ITL+Tower+Netaji+Subhash+Place+Pitampura+Delhi",
    note: "Located at GD-ITL Tower in the heart of NSP.",
  },
  {
    id: "aggarwal",
    name: "Aggarwal Corporate Heights",
    address: "Shop G8, Aggarwal Corporate Heights, NSP, Pitampura, Delhi – 110034",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Aggarwal+Corporate+Heights+NSP+Pitampura+Delhi",
    note: "Ground floor outlet (Shop G8) with outdoor seating area.",
  },
] as const;

