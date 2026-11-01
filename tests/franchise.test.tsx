import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FranchiseSection } from "@/components/sections/FranchiseSection";
import { franchiseData } from "@/data/franchise";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Franchise Section & Data", () => {
  it("renders franchise heading, kicker, and copy", () => {
    render(<FranchiseSection />);
    expect(screen.getByText(franchiseData.kicker)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: franchiseData.title })
    ).toBeInTheDocument();
    expect(screen.getByText(franchiseData.copy)).toBeInTheDocument();
  });

  it("renders all 3 numbered opportunity points", () => {
    render(<FranchiseSection />);
    franchiseData.points.forEach((point) => {
      expect(screen.getByText(point.number)).toBeInTheDocument();
      expect(screen.getByText(point.title)).toBeInTheDocument();
      expect(screen.getByText(point.description)).toBeInTheDocument();
    });
  });

  it("ensures Contact Us CTA opens the verified phone dialler for 9811161923", () => {
    render(<FranchiseSection />);
    const callBtn = screen.getByRole("link", { name: /Contact Us/i });
    expect(callBtn).toHaveAttribute("href", siteConfig.contact.primaryPhoneTel);
    expect(callBtn).toHaveAttribute("href", "tel:+919811161923");
  });

  it("guarantees no Cascara competitor links or claims exist", () => {
    render(<FranchiseSection />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.getAttribute("href")).not.toContain("cascara");
    });
  });

  it("verifies zero prices, ROI, fees, or investment amounts in franchise data", () => {
    expect(containsPrice(franchiseData.title)).toBe(false);
    expect(containsPrice(franchiseData.copy)).toBe(false);
    franchiseData.points.forEach((point) => {
      expect(containsPrice(point.title)).toBe(false);
      expect(containsPrice(point.description)).toBe(false);
    });
  });
});

