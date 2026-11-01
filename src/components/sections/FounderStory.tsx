import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { storyImages } from "@/data/images";
import { Container } from "@/components/ui/Container";

export function FounderStory() {
  const { founder } = siteConfig;

  return (
    <section
      id="story"
      aria-label="Founder story"
      className="bg-[#392929] text-[#FFF8EE] py-20 max-sm:py-14 relative overflow-hidden"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-16 max-lg:gap-9 max-sm:gap-7 items-center">
        {/* Story Text */}
        <div>
          <div className="section-kicker text-[#D6B66C]">{founder.kicker}</div>
          <h2 className="font-bree text-[clamp(32px,3.8vw,46px)] leading-[1.08] tracking-[-0.025em] text-[#F4E4CA] max-w-[600px] m-0">
            {founder.heading}
          </h2>

          <div className="text-[14px] leading-[1.9] text-[#f3e8dc] max-w-[660px] mt-6 flex flex-col gap-4">
            {founder.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="font-lora italic font-semibold text-[23px] text-[#D6B66C] mt-6 leading-snug">
            {founder.signOff}
            <br />
            {founder.signature}
          </div>
        </div>

        {/* Story Photo Showcase */}
        <div className="relative max-lg:mt-2">
          <div className="relative w-full h-[440px] max-lg:h-[380px] max-sm:h-[280px] rounded-[14px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <Image
              src={storyImages.founder}
              alt="A warm coffee moment at KoffeeMan"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              className="object-cover"
            />
          </div>

          {/* Gold Photo Badge */}
          <div className="absolute -left-5 bottom-6 max-sm:left-2.5 max-sm:bottom-3 bg-[#D6B66C] px-5 py-4 max-sm:px-3.5 max-sm:py-2.5 rounded text-[#392929] font-bree text-[17px] max-sm:text-[14px] max-w-[235px] shadow-[0_16px_42px_rgba(57,41,41,0.12)] leading-tight select-none pointer-events-none">
            {founder.photoTag}
          </div>
        </div>
      </Container>
    </section>
  );
}

