import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { EventsSection } from "@/components/sections/EventsSection";
import { eventsData } from "@/data/events";
import { siteConfig } from "@/data/site-config";
import { containsPrice } from "@/lib/no-prices";

describe("Events Section & Data", () => {
  it("renders event section heading, kicker, and approved copy", () => {
    render(<EventsSection />);
    expect(screen.getByText(eventsData.kicker)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: eventsData.title })
    ).toBeInTheDocument();
    expect(screen.getByText(eventsData.copy)).toBeInTheDocument();
  });

  it("renders all 5 event types", () => {
    render(<EventsSection />);
    expect(screen.getByRole("heading", { level: 3, name: "Weddings" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Parties" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Festive Events" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Cultural Events" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "College Events" })).toBeInTheDocument();
  });

  it("ensures enquiry action calls 9811161923 directly", () => {
    render(<EventsSection />);
    const callBtn = screen.getByRole("link", { name: /Call to Enquire/i });
    expect(callBtn).toHaveAttribute("href", siteConfig.contact.primaryPhoneTel);
    expect(callBtn).toHaveAttribute("href", "tel:+919811161923");
  });

  it("guarantees no price patterns or package rates in events copy", () => {
    expect(containsPrice(eventsData.title)).toBe(false);
    expect(containsPrice(eventsData.copy)).toBe(false);
    eventsData.items.forEach((item) => {
      expect(containsPrice(item.title)).toBe(false);
      expect(containsPrice(item.description)).toBe(false);
    });
  });
});

