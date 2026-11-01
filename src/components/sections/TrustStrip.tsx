import { Container } from "@/components/ui/Container";

const TRUST_POINTS = [
  "Coffee with character",
  "Something for every craving",
  "Your NSP neighbourhood spot",
  "Gather, celebrate, repeat",
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="KoffeeMan brand qualities"
      className="bg-[#FFF8EE] py-5 border-b border-[#D9C4A5]"
    >
      <Container className="flex justify-between items-center gap-6 max-sm:justify-center max-sm:gap-x-6 max-sm:gap-y-3 flex-wrap">
        {TRUST_POINTS.map((point) => (
          <div
            key={point}
            className="flex items-center text-[11px] max-sm:text-[9px] text-[#7F5738] font-bold tracking-[0.05em]"
          >
            <span aria-hidden="true" className="text-[#D6B66C] text-[17px] mr-2">
              ✦
            </span>
            {point}
          </div>
        ))}
      </Container>
    </section>
  );
}

