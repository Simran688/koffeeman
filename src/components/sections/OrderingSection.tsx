import { Container } from "@/components/ui/Container";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export function OrderingSection() {
  return (
    <section
      id="order-online"
      aria-label="Online delivery options"
      className="bg-[#FFF8EE] py-14 max-sm:py-10 border-t border-b border-[#D9C4A5]"
    >
      <Container>
        <DeliveryPanel
          title="Craving KoffeeMan at home?"
          subtitle="Order fresh brews, hot sandwiches, loaded burgers, and comfort snacks directly through Swiggy or discover us on Zomato."
        />
      </Container>
    </section>
  );
}

