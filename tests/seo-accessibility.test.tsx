import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site-config";
import { menuCategories } from "@/data/menu";
import { containsPrice } from "@/lib/no-prices";
import nextConfig from "../next.config";

describe("SEO, Metadata, Security Headers & Accessibility", () => {
  it("generates valid robots.txt configuration", () => {
    const robotsConfig = robots();
    expect(robotsConfig.sitemap).toBe(`${siteConfig.siteUrl}/sitemap.xml`);
    expect(robotsConfig.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
  });

  it("generates comprehensive sitemap with all core pages and menu categories", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    // Core static routes
    expect(urls).toContain(`${siteConfig.siteUrl}`);
    expect(urls).toContain(`${siteConfig.siteUrl}/menu`);
    expect(urls).toContain(`${siteConfig.siteUrl}/visit-us`);
    expect(urls).toContain(`${siteConfig.siteUrl}/about`);
    expect(urls).toContain(`${siteConfig.siteUrl}/gallery`);
    expect(urls).toContain(`${siteConfig.siteUrl}/franchise`);
    expect(urls).toContain(`${siteConfig.siteUrl}/events`);
    expect(urls).toContain(`${siteConfig.siteUrl}/contact`);

    // All dynamic menu category routes
    menuCategories.forEach((cat) => {
      expect(urls).toContain(`${siteConfig.siteUrl}/menu/${cat.slug}`);
    });

    expect(entries.length).toBe(8 + menuCategories.length);
  });

  it("renders valid Schema.org CafeOrCoffeeShop JSON-LD with zero prices", () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector("script[type='application/ld+json']");
    expect(script).not.toBeNull();

    const data = JSON.parse(script!.textContent || "{}");
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("CafeOrCoffeeShop");
    expect(data.name).toBe(siteConfig.brandName);
    expect(data.telephone).toBe("+919811161923");
    expect(data.address).toHaveLength(2);
    expect(data.servesCuisine).toContain("Coffee");

    // Negative check: absolutely zero price fields or currency symbols
    expect(data.priceRange).toBeUndefined();
    expect(containsPrice(JSON.stringify(data))).toBe(false);
  });

  it("configures strict security headers in next.config.ts", async () => {
    expect(nextConfig.headers).toBeDefined();
    if (typeof nextConfig.headers === "function") {
      const headerConfigs = await nextConfig.headers();
      expect(headerConfigs).toHaveLength(1);
      const headers = headerConfigs[0].headers;

      const keys = headers.map((h: { key: string }) => h.key);
      expect(keys).toContain("X-Frame-Options");
      expect(keys).toContain("X-Content-Type-Options");
      expect(keys).toContain("Referrer-Policy");
      expect(keys).toContain("Permissions-Policy");

      const frameOptions = headers.find((h: { key: string }) => h.key === "X-Frame-Options");
      expect(frameOptions?.value).toBe("DENY");
    }
  });

  it("ensures zero prices or rate symbols in siteConfig SEO metadata", () => {
    expect(containsPrice(siteConfig.tagline)).toBe(false);
    expect(containsPrice(siteConfig.slogan)).toBe(false);
    expect(containsPrice(siteConfig.supportingLine)).toBe(false);
    expect(containsPrice(siteConfig.brandSignOff)).toBe(false);
  });
});
