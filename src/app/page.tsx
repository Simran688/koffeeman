import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FounderStory } from "@/components/sections/FounderStory";
import { MenuSection } from "@/components/sections/MenuSection";
import { OrderingSection } from "@/components/sections/OrderingSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <TrustStrip />
      <FounderStory />
      <MenuSection />
      <OrderingSection />
    </main>
  );
}
