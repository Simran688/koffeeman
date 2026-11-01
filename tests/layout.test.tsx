import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Brand Design System & Global Layout", () => {
  it("renders AnnouncementBar with approved text", () => {
    render(<AnnouncementBar />);
    expect(screen.getByText(/Good food · Good coffee · Good vibes/i)).toBeInTheDocument();
  });

  it("renders Header with brand name, tagline, navigation, and order CTA", () => {
    render(<Header />);
    expect(screen.getByText(siteConfig.brandName)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.logoTagline)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Order Online/i })).toHaveAttribute(
      "href",
      siteConfig.ordering.swiggyUrl
    );
  });

  it("renders Footer with tagline, contact number, and Instagram link", () => {
    render(<Footer />);
    expect(screen.getByText(siteConfig.tagline)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.contact.primaryPhone)).toBeInTheDocument();
    const instaLink = screen.getAllByRole("link", { name: /Instagram|@koffeeman_/i })[0];
    expect(instaLink).toHaveAttribute("href", siteConfig.contact.instagramUrl);
  });

  it("renders FloatingCallButton with tel: link for 9811161923", () => {
    render(<FloatingCallButton />);
    const callButton = screen.getByRole("link", { name: /Call KoffeeMan/i });
    expect(callButton).toHaveAttribute("href", "tel:+919811161923");
  });

  it("renders Button with proper external security attributes", () => {
    render(
      <Button variant="dark" href="https://example.com">
        External Action
      </Button>
    );
    const link = screen.getByRole("link", { name: /External Action/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("guarantees no price patterns in site config copy", () => {
    expect(containsPrice(siteConfig.tagline)).toBe(false);
    expect(containsPrice(siteConfig.supportingLine)).toBe(false);
    expect(containsPrice(siteConfig.announcement)).toBe(false);
  });
});

