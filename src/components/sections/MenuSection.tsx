import { Container } from "@/components/ui/Container";
import { MenuGrid } from "@/components/menu/MenuGrid";

export function MenuSection() {
  return (
    <section id="menu" aria-label="Our Menu" className="bg-[#F4E4CA] py-20 max-sm:py-14">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-9 max-sm:mb-6">
          <div>
            <div className="section-kicker">Find your favourite</div>
            <h2 className="font-bree text-[clamp(32px,3.8vw,46px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
              Explore Our Menu
            </h2>
            <p className="text-[13px] max-sm:text-[12px] text-[#866D5B] leading-[1.7] max-w-[470px] mt-2 mb-0">
              Pick a craving. Open a category to see the full selection.
            </p>
          </div>
          <span className="eyebrow">One spot · Endless cravings</span>
        </div>

        <MenuGrid />
      </Container>
    </section>
  );
}

