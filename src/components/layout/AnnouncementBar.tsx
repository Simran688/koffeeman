import { siteConfig } from "@/data/site-config";

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Announcement"
      className="bg-[#392929] text-[#F4E4CA] text-center py-[9px] px-[14px] text-[11px] max-sm:text-[9px] tracking-[0.16em] uppercase font-bold"
    >
      {siteConfig.announcement}
    </div>
  );
}

