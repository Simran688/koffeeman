import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { menuCategories, getMenuCategory } from "@/data/menu";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { MenuSection } from "@/components/sections/MenuSection";
import { containsPrice } from "@/lib/no-prices";

describe("Menu Catalogue & Components", () => {
  it("defines exactly the 7 confirmed menu categories", () => {
    expect(menuCategories).toHaveLength(7);
    const slugs = menuCategories.map((c) => c.slug);
    expect(slugs).toEqual([
      "coffee",
      "shakes",
      "mojitos",
      "sandwiches",
      "quick-bites",
      "chinese",
      "chai",
    ]);
  });

  it("retrieves individual category by slug via getMenuCategory", () => {
    const coffee = getMenuCategory("coffee");
    expect(coffee).toBeDefined();
    expect(coffee?.title).toBe("Coffee & Beverages");
    expect(coffee?.groups[0].items).toContain("KoffeeMan Special");

    const nonExistent = getMenuCategory("unknown-slug");
    expect(nonExistent).toBeUndefined();
  });

  it("renders MenuGrid with links for all categories", () => {
    render(<MenuGrid />);
    menuCategories.forEach((cat) => {
      const cardLink = screen.getByRole("link", { name: new RegExp(`Explore ${cat.title}`, "i") });
      expect(cardLink).toHaveAttribute("href", `/menu/${cat.slug}`);
    });
  });

  it("renders MenuSection with header and kicker", () => {
    render(<MenuSection />);
    expect(screen.getByText(/Find your favourite/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Explore Our Menu/i })).toBeInTheDocument();
  });

  it("verifies NO currency or price symbols appear anywhere across the entire catalogue", () => {
    menuCategories.forEach((cat) => {
      expect(containsPrice(cat.title)).toBe(false);
      expect(containsPrice(cat.subtitle)).toBe(false);
      expect(containsPrice(cat.description)).toBe(false);

      cat.groups.forEach((group) => {
        expect(containsPrice(group.title)).toBe(false);
        group.items.forEach((item) => {
          expect(containsPrice(item)).toBe(false);
        });
      });
    });
  });

  it("confirms exact owner-supplied products are present without mutation", () => {
    const quickBites = getMenuCategory("quick-bites");
    expect(quickBites).toBeDefined();
    const allQuickItems = quickBites!.groups.flatMap((g) => g.items);
    expect(allQuickItems).toContain("Double Masale");
    expect(allQuickItems).toContain("Crispy Salted");
    expect(allQuickItems).toContain("Veggie Nachos");
    expect(allQuickItems).toContain("Farm House");

    const chinese = getMenuCategory("chinese");
    expect(chinese).toBeDefined();
    const allChineseItems = chinese!.groups.flatMap((g) => g.items);
    expect(allChineseItems).toContain("Wai Wai Dry Laphing");
    expect(allChineseItems).toContain("Kurkure Spring Roll");
    expect(allChineseItems).toContain("Singapuri Noodles");
  });
});

