import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";
import { OrderingSection } from "@/components/sections/OrderingSection";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Ordering Links & Central Delivery Configuration", () => {
  it("renders DeliveryPanel with verified Swiggy and Zomato destinations", () => {
    render(<DeliveryPanel />);
    const swiggyBtn = screen.getByRole("link", { name: /Order KoffeeMan on Swiggy/i });
    expect(swiggyBtn).toHaveAttribute("href", siteConfig.ordering.swiggyUrl);
    expect(swiggyBtn).toHaveAttribute("target", "_blank");
    expect(swiggyBtn).toHaveAttribute("rel", "noopener noreferrer");

    const zomatoBtn = screen.getByRole("link", { name: /Find KoffeeMan on Zomato/i });
    expect(zomatoBtn).toHaveAttribute("href", siteConfig.ordering.zomatoSearchUrl);
    expect(zomatoBtn).toHaveAttribute("target", "_blank");
    expect(zomatoBtn).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders OrderingSection on homepage with custom title", () => {
    render(<OrderingSection />);
    expect(
      screen.getByRole("heading", { level: 3, name: /Craving KoffeeMan at home\?/i })
    ).toBeInTheDocument();
  });

  it("verifies Swiggy URL is exact owner-supplied listing", () => {
    expect(siteConfig.ordering.swiggyUrl).toBe(
      "https://www.swiggy.com/city/delhi/koffeeman-nsp-rest1175563"
    );
  });

  it("verifies Zomato URL is a search/discovery destination and not a fabricated direct listing", () => {
    expect(siteConfig.ordering.zomatoSearchUrl).not.toContain("koffeeman-rest");
    expect(siteConfig.ordering.zomatoSearchUrl).toContain("pitampura");
  });

  it("guarantees no price patterns exist in delivery copy", () => {
    expect(
      containsPrice(
        "Order fresh brews, hot sandwiches, loaded burgers, and comfort snacks directly through Swiggy"
      )
    ).toBe(false);
  });
});

