import { outletLocations } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { OutletCard } from "@/components/locations/OutletCard";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export function VisitSection() {
  return (
    <section id="visit" aria-label="Visit our outlets" className="bg-[#FFF8EE] py-20 max-sm:py-14">
      <Container>
        <div className="mb-9 max-sm:mb-6">
          <div className="section-kicker">Come say hello</div>
          <h2 className="font-bree text-[clamp(32px,3.8vw,48px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
            Find Your KoffeeMan
          </h2>
          <p className="text-[13px] text-[#866D5B] leading-[1.7] max-w-[470px] mt-2 mb-0">
            Visit us at our NSP, Pitampura outlets.
          </p>
        </div>

        {/* 2 Outlet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-8">
          {outletLocations.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>

        {/* Delivery Callout Panel */}
        <DeliveryPanel />
      </Container>
    </section>
  );
}

