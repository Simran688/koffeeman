import { siteConfig } from "@/data/site-config";
import { eventsData } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function EventsSection() {
  return (
    <section
      id="events"
      aria-label="Event bookings and celebration catering enquiry"
      className="bg-[#EAD8BD] py-20 max-sm:py-14"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 max-lg:gap-9 max-sm:gap-7 items-start">
        {/* Left Column: Heading & Call Action */}
        <div>
          <div className="section-kicker">{eventsData.kicker}</div>
          <h2 className="font-bree text-[clamp(32px,3.8vw,48px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
            {eventsData.title}
          </h2>
          <p className="text-[13px] text-[#866D5B] leading-[1.7] max-w-[440px] mt-3 mb-0">
            {eventsData.copy}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <Button
              variant="dark"
              href={siteConfig.contact.primaryPhoneTel}
              aria-label={`Call to enquire about event bookings at ${siteConfig.contact.primaryPhone}`}
            >
              {eventsData.ctaText}
            </Button>
            <small className="text-[10px] text-[#866D5B]">
              {eventsData.subtext}
            </small>
          </div>
        </div>

        {/* Right Column: 5 Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-sm:gap-2.5">
          {eventsData.items.map((event) => (
            <article
              key={event.id}
              className="bg-[#FFF8EE] border border-[#D9C4A5] p-5 md:p-[21px_19px] rounded-[12px] min-h-[133px] flex flex-col justify-center"
            >
              <div
                aria-hidden="true"
                className="text-[22px] text-[#7F5738] mb-2 leading-none"
              >
                {event.icon}
              </div>
              <h3 className="font-bree text-[18px] max-sm:text-[16px] text-[#392929] m-0 mb-1.5">
                {event.title}
              </h3>
              <p className="text-[11px] max-sm:text-[10px] leading-[1.55] text-[#866D5B] m-0">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

