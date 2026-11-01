import { describe, expect, it } from "vitest";
import { containsPrice } from "./no-prices";

describe("containsPrice", () => {
  it("rejects currency and rate text", () => {
    expect(containsPrice("Latte ₹199")).toBe(true);
    expect(containsPrice("from Rs 99")).toBe(true);
    expect(containsPrice("price: 120")).toBe(true);
  });

  it("allows ordinary menu names", () => {
    expect(containsPrice("KoffeeMan Special")).toBe(false);
    expect(containsPrice("Classic Maggi")).toBe(false);
  });
});
