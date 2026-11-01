import { siteConfig } from "@/data/site-config";
import { franchiseData } from "@/data/franchise";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FranchiseSection() {
  return (
    <section
      id="franchise"
      aria-label="Franchise opportunity"
      className="bg-[#392929] text-[#FFF8EE] py-20 max-sm:py-14 relative overflow-hidden"
    >
      {/* Background Watermark Letter K */}
      <span
        aria-hidden="true"
        className="absolute -right-5 -top-36 font-bree text-[500px] text-[#D6B66C]/5 select-none pointer-events-none leading-none"
      >
        K
      </span>

      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 max-lg:gap-9 max-sm:gap-7 items-center relative z-10">
        {/* Left Column: Franchise Intro */}
        <div>
          <div className="section-kicker text-[#D6B66C]">{franchiseData.kicker}</div>
          <h2 className="font-bree text-[clamp(32px,3.8vw,48px)] leading-[1.08] tracking-[-0.025em] text-[#F4E4CA] max-w-[580px] m-0">
            {franchiseData.title}
          </h2>
          <p className="text-[14px] leading-[1.8] text-[#f1e4d7] max-w-[600px] my-5">
            {franchiseData.copy}
          </p>

          <div className="flex flex-wrap gap-2.5">
            <Button
              variant="gold"
              href={siteConfig.contact.primaryPhoneTel}
              aria-label={franchiseData.ctaText}
            >
              {franchiseData.ctaText}
            </Button>
          </div>

          <p className="text-[10px] text-[#c4ae98] mt-4 mb-0">
            {franchiseData.note}
          </p>
        </div>

        {/* Right Column: Key Opportunity Highlights */}
        <div className="flex flex-col gap-3.5 max-sm:gap-2.5">
          {franchiseData.points.map((point) => (
            <div
              key={point.number}
              className="flex gap-4 items-start p-4 md:p-[17px] border border-[#D6B66C]/25 rounded-[12px] bg-[#FFF8EE]/[0.045]"
            >
              <div
                aria-hidden="true"
                className="w-[31px] h-[31px] rounded-full bg-[#D6B66C] text-[#392929] grid place-items-center font-bree text-[15px] shrink-0"
              >
                {point.number}
              </div>
              <div>
                <strong className="block font-bree text-[17px] text-[#F4E4CA] mb-1">
                  {point.title}
                </strong>
                <span className="text-[11px] leading-[1.55] text-[#ddcec0]">
                  {point.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
