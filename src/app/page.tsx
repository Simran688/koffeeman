import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main id="home" className="flex-1 flex flex-col justify-center items-center py-24 px-6 text-center">
      <Container className="flex flex-col items-center">
        <span className="eyebrow">
          Welcome to {siteConfig.brandName} · NSP, Pitampura
        </span>
        <h1 className="font-bree text-[clamp(42px,5vw,68px)] leading-[1.05] tracking-tight mt-5 mb-4 text-[#392929]">
          Life happens.
          <em className="font-lora italic font-semibold text-[0.65em] block text-[#7F5738] mt-2">
            Koffee helps.
          </em>
        </h1>
        <p className="text-[#5f4a3b] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {siteConfig.supportingLine}
        </p>
      </Container>
    </main>
  );
}
