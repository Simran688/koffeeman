import { test } from "@playwright/test";
import path from "node:path";

test("capture screenshots for visual comparison", async ({ page }) => {
  // Set desktop viewport matching modern displays
  await page.setViewportSize({ width: 1280, height: 900 });

  // 1. Next.js Homepage
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/nextjs-home.png", fullPage: true });

  // 2. Next.js Menu Overview
  await page.goto("/menu");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/nextjs-menu.png", fullPage: true });

  // 3. Next.js Category Detail (Coffee)
  await page.goto("/menu/coffee");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/nextjs-category-coffee.png", fullPage: true });

  // 4. Next.js Outlets / Visit Us
  await page.goto("/visit-us");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/nextjs-visit-us.png", fullPage: true });

  // 5. Prototype HTML (Reference Design)
  const prototypePath = "file:///" + path.resolve("reference/koffeeman-design-review.html").replace(/\\/g, "/");
  await page.goto(prototypePath);
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/prototype-home.png", fullPage: true });

  // 6. Mobile comparison (375x812)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/nextjs-home-mobile.png", fullPage: true });

  await page.goto(prototypePath);
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "test-results/prototype-home-mobile.png", fullPage: true });
});

