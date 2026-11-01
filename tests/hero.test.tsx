import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Homepage Hero & Ordering CTAs", () => {
  it("renders main headline and supporting tagline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Life happens/i);
    expect(screen.getByText(/Koffee helps/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Koffee Man · NSP, Pitampura/i)).toBeInTheDocument();
  });

  it("renders Swiggy and Zomato ordering actions with secure external links", () => {
    render(<Hero />);
    const swiggyBtn = screen.getByRole("link", { name: /Order on Swiggy/i });
    expect(swiggyBtn).toHaveAttribute("href", siteConfig.ordering.swiggyUrl);
    expect(swiggyBtn).toHaveAttribute("target", "_blank");
    expect(swiggyBtn).toHaveAttribute("rel", "noopener noreferrer");

    const zomatoBtn = screen.getByRole("link", { name: /Find us on Zomato/i });
    expect(zomatoBtn).toHaveAttribute("href", siteConfig.ordering.zomatoSearchUrl);
    expect(zomatoBtn).toHaveAttribute("target", "_blank");
    expect(zomatoBtn).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders illustrative hero images with descriptive alt text", () => {
    render(<Hero />);
    const burgerImgs = screen.getAllByAltText(/KoffeeMan food favourite/i);
    const coffeeImgs = screen.getAllByAltText(/Freshly brewed coffee served at KoffeeMan/i);
    expect(burgerImgs.length).toBeGreaterThan(0);
    expect(coffeeImgs.length).toBeGreaterThan(0);
  });

  it("renders TrustStrip brand qualities", () => {
    render(<TrustStrip />);
    expect(screen.getByText(/Coffee with character/i)).toBeInTheDocument();
    expect(screen.getByText(/Something for every craving/i)).toBeInTheDocument();
    expect(screen.getByText(/Your NSP neighbourhood spot/i)).toBeInTheDocument();
    expect(screen.getByText(/Gather, celebrate, repeat/i)).toBeInTheDocument();
  });

  it("ensures zero prices or rates in hero copy", () => {
    expect(containsPrice("Life happens. Koffee helps.")).toBe(false);
    expect(
      containsPrice(
        "Premium coffee, refreshing beverages and a menu full of comfort-food favourites"
      )
    ).toBe(false);
  });
});
