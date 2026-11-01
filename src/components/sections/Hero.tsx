import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { heroImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome and featured highlights"
      className="py-14 max-sm:py-9 bg-[linear-gradient(105deg,#F8EBD7_0%,#F4E4CA_55%,#EBD5B8_100%)] overflow-hidden"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 max-lg:gap-9 max-sm:gap-7 items-center">
        {/* Left Column: Text & Ordering CTAs */}
        <div>
          <div className="eyebrow">
            Welcome to {siteConfig.brandName} · NSP, Pitampura
          </div>

          <h1 className="font-bree text-[clamp(44px,5.8vw,74px)] leading-[0.98] tracking-[-0.035em] my-5 max-sm:text-[46px] max-w-[620px] text-[#392929]">
            Life happens.
            <em className="font-lora italic font-semibold text-[0.62em] block text-[#7F5738] tracking-[-0.03em] mt-3 not-italic">
              Koffee helps.
            </em>
          </h1>

          <p className="text-[#5f4a3b] text-[15px] max-sm:text-[13px] leading-[1.8] max-w-[500px]">
            Premium coffee, refreshing beverages and a menu full of comfort-food
            favourites — all in one place. Come for your regular cup, stay for the
            cravings.
          </p>

          {/* Delivery & Ordering CTAs */}
          <div className="flex flex-wrap gap-3 mt-7">
            <Button
              variant="dark"
              href={siteConfig.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on Swiggy"
            >
              Order on Swiggy ↗
            </Button>
            <Button
              variant="outline"
              href={siteConfig.ordering.zomatoSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Zomato"
            >
              Find us on Zomato ↗
            </Button>
          </div>

          <div className="mt-5 text-[10px] text-[#866D5B]">
            Your coffee break, your way. Visit us at NSP or order online.
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="relative min-h-[475px] max-lg:min-h-[410px] max-sm:min-h-[335px]">
          {/* Main Arched Photo (Burger / Food Favourite) */}
          <div className="absolute right-1 top-0 w-[73%] max-sm:w-[76%] h-[430px] max-lg:h-[370px] max-sm:h-[305px] rounded-t-[180px] rounded-b-[18px] overflow-hidden shadow-[0_16px_42px_rgba(57,41,41,0.12)] border-8 border-[#FFF8EE]/60">
            <Image
              src={heroImages.burger}
              alt="KoffeeMan food favourite served fresh"
              fill
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 320px, 420px"
              priority
              className="object-cover"
            />
          </div>

          {/* Floating Accent Photo (Coffee) */}
          <div className="absolute left-0 bottom-6 max-sm:bottom-1.5 w-[42%] h-[196px] max-sm:h-[135px] rounded-[14px] overflow-hidden shadow-[0_16px_42px_rgba(57,41,41,0.12)] border-[7px] border-[#FFF8EE]">
            <Image
              src={heroImages.coffee}
              alt="Freshly brewed coffee served at KoffeeMan"
              fill
              sizes="(max-width: 640px) 150px, 200px"
              className="object-cover"
            />
          </div>

          {/* Circular Vintage Stamp Badge */}
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 max-sm:-right-0.5 max-sm:-bottom-0.5 w-[122px] h-[122px] max-sm:w-[90px] max-sm:h-[90px] rounded-full bg-[#392929] text-[#D6B66C] grid place-items-center text-center font-bree text-[15px] max-sm:text-[11px] leading-[1.15] rotate-8 border-4 border-dotted border-[#D6B66C] p-3 shadow-lg select-none pointer-events-none"
          >
            <span>
              Freshly made
              <small className="block font-dmsans text-[8px] max-sm:text-[6px] tracking-[0.15em] uppercase mt-1 text-[#FFF8EE]">
                with good vibes
              </small>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
