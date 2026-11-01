import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { galleryImages } from "@/data/images";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Gallery, Instagram, and About Details", () => {
  it("renders InstagramSection with verified Instagram profile link", () => {
    render(<InstagramSection />);
    expect(screen.getByText(/Follow the vibe/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /KoffeeMan on Instagram/i })
    ).toBeInTheDocument();

    const instaLink = screen.getByRole("link", { name: /Follow KoffeeMan on Instagram/i });
    expect(instaLink).toHaveAttribute("href", siteConfig.contact.instagramUrl);
    expect(instaLink).toHaveAttribute("target", "_blank");
    expect(instaLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("contains all 8 illustrative gallery image paths", () => {
    expect(galleryImages).toHaveLength(8);
    galleryImages.forEach((src) => {
      expect(src).toMatch(/^\/images\/gallery\/gallery-\d{2}\.jpg$/);
    });
  });

  it("ensures zero prices or rates exist in gallery copy", () => {
    expect(containsPrice("KoffeeMan on Instagram")).toBe(false);
    expect(
      containsPrice("Catch our daily brew moments, new comfort cravings, and NSP neighbourhood stories.")
    ).toBe(false);
  });

  it("verifies navigation links include all primary pages", () => {
    const labels = siteConfig.navLinks.map((l) => l.label);
    expect(labels).toContain("Home");
    expect(labels).toContain("Our Menu");
    expect(labels).toContain("About");
    expect(labels).toContain("Gallery");
    expect(labels).toContain("Visit Us");
    expect(labels).toContain("Contact");
  });
});
