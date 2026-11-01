import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

type DeliveryPanelProps = {
  className?: string;
  title?: string;
  subtitle?: string;
};

export function DeliveryPanel({
  className = "",
  title = "Order your favourites",
  subtitle = "Get KoffeeMan delivered straight to your doorstep through your preferred app.",
}: DeliveryPanelProps) {
  return (
    <div
      aria-label="Online ordering options"
      className={`rounded-[14px] bg-[#392929] p-6 md:px-7 md:py-6 text-[#FFF8EE] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_16px_42px_rgba(57,41,41,0.12)] ${className}`.trim()}
    >
      <div>
        <h3 className="font-bree text-[22px] md:text-[25px] text-[#F4E4CA] m-0 mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-[12px] text-[#dfd0c1] m-0 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
        <Button
          variant="gold"
          href={siteConfig.ordering.swiggyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order KoffeeMan on Swiggy"
        >
          Swiggy ↗
        </Button>
        <Button
          variant="light"
          href={siteConfig.ordering.zomatoSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find KoffeeMan on Zomato"
        >
          Zomato ↗
        </Button>
      </div>
    </div>
  );
}

