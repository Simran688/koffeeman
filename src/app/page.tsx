import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FounderStory } from "@/components/sections/FounderStory";
import { MenuSection } from "@/components/sections/MenuSection";
import { FranchiseSection } from "@/components/sections/FranchiseSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { InstagramSection } from "@/components/sections/InstagramSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <TrustStrip />
      <FounderStory />
      <MenuSection />
      <FranchiseSection />
      <EventsSection />
      <VisitSection />
      <InstagramSection />
    </main>
  );
}
