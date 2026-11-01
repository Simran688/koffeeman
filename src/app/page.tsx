import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <TrustStrip />
    </main>
  );
}
