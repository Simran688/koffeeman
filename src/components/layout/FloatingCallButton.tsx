import { siteConfig } from "@/data/site-config";

export function FloatingCallButton() {
  return (
    <a
      href={siteConfig.contact.primaryPhoneTel}
      aria-label={`Call KoffeeMan at ${siteConfig.contact.primaryPhone}`}
      className="fixed bottom-5 right-5 z-20 bg-[#D6B66C] text-[#392929] rounded-full px-[18px] py-[14px] max-sm:bottom-3 max-sm:right-3 max-sm:px-[15px] max-sm:py-[12px] text-xs font-bold shadow-[0_10px_28px_rgba(57,41,41,0.24)] transition-transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7F5738]"
    >
      <span aria-hidden="true" className="mr-2">
        ☎
      </span>
      Call KoffeeMan
    </a>
  );
}

