import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FounderStory } from "@/components/sections/FounderStory";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Founder Story Section", () => {
  it("renders Rohit Chhabra personal heading and kicker", () => {
    render(<FounderStory />);
    expect(screen.getByText(siteConfig.founder.kicker)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: siteConfig.founder.heading })
    ).toBeInTheDocument();
  });

  it("mentions roadside van origin and 2022 first franchise", () => {
    render(<FounderStory />);
    expect(screen.getAllByText(/roadside van/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/first franchise in 2022/i)).toBeInTheDocument();
  });

  it("renders authentic personal sign-off", () => {
    render(<FounderStory />);
    const signDiv = screen.getByText(/See you over a cup,/i);
    expect(signDiv).toBeInTheDocument();
    expect(signDiv).toHaveTextContent(/Rohit/i);
  });

  it("renders photo badge with authentic caption", () => {
    render(<FounderStory />);
    expect(screen.getByText(siteConfig.founder.photoTag)).toBeInTheDocument();
    expect(
      screen.getByAltText(/A warm coffee moment at KoffeeMan/i)
    ).toBeInTheDocument();
  });

  it("guarantees no price patterns in founder story copy", () => {
    siteConfig.founder.paragraphs.forEach((p) => {
      expect(containsPrice(p)).toBe(false);
    });
    expect(containsPrice(siteConfig.founder.heading)).toBe(false);
  });
});
