import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { VisitSection } from "@/components/sections/VisitSection";
import { outletLocations } from "@/data/locations";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Outlets and Contact Data", () => {
  it("renders both factual NSP outlet locations", () => {
    render(<VisitSection />);
    expect(screen.getByRole("heading", { level: 3, name: "GD-ITL Tower" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Aggarwal Corporate Heights" })
    ).toBeInTheDocument();
  });

  it("verifies GD-ITL does not fabricate an unconfirmed floor or shop number", () => {
    const gdItl = outletLocations.find((o) => o.id === "gd-itl");
    expect(gdItl).toBeDefined();
    expect(gdItl!.address).not.toMatch(/\b(shop|unit|floor|g\d+)\b/i);
    expect(gdItl!.address).toContain("Netaji Subhash Place, Pitampura, Delhi");
  });

  it("verifies Aggarwal Corporate Heights contains confirmed Shop G8 address", () => {
    const aggarwal = outletLocations.find((o) => o.id === "aggarwal");
    expect(aggarwal).toBeDefined();
    expect(aggarwal!.address).toContain("Shop G8, Aggarwal Corporate Heights");
    expect(aggarwal!.address).toContain("110034");
  });

  it("ensures directions links search for exact NSP locations with secure attributes", () => {
    render(<VisitSection />);
    const dirLinks = screen.getAllByRole("link", { name: /Get directions/i });
    expect(dirLinks).toHaveLength(2);

    expect(dirLinks[0]).toHaveAttribute("href", expect.stringContaining("GD-ITL"));
    expect(dirLinks[0]).toHaveAttribute("target", "_blank");
    expect(dirLinks[0]).toHaveAttribute("rel", "noopener noreferrer");

    expect(dirLinks[1]).toHaveAttribute("href", expect.stringContaining("Aggarwal"));
    expect(dirLinks[1]).toHaveAttribute("target", "_blank");
    expect(dirLinks[1]).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("confirms contact numbers are valid tel: links in configuration", () => {
    expect(siteConfig.contact.primaryPhoneTel).toBe("tel:+919811161923");
    expect(siteConfig.contact.secondaryPhoneTel).toBe("tel:+918700020291");
  });

  it("guarantees no price patterns exist in location data", () => {
    outletLocations.forEach((outlet) => {
      expect(containsPrice(outlet.name)).toBe(false);
      expect(containsPrice(outlet.address)).toBe(false);
    });
  });
});

