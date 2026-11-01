/** Patterns that must never appear in menu data, copy, metadata, or alt text. */
export const PRICE_PATTERN =
  /₹|rs\.?\s*\d|\binr\b|\$\s*\d|€\s*\d|price\s*[:=]|from\s*₹/i;

export function containsPrice(value: string): boolean {
  return PRICE_PATTERN.test(value);
}
