import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { galleryImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function InstagramSection() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section
      id="instagram"
      aria-label="Instagram community"
      className="bg-[#F4E4CA] py-20 max-sm:py-14 border-t border-[#D9C4A5]/60"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <div className="section-kicker">Follow the vibe</div>
            <h2 className="font-bree text-[clamp(32px,3.8vw,48px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
              KoffeeMan on Instagram
            </h2>
            <p className="text-[13px] text-[#866D5B] leading-[1.7] max-w-[480px] mt-2 mb-0">
              Catch our daily brew moments, new comfort cravings, and NSP neighbourhood stories.
            </p>
          </div>

          <Button
            variant="dark"
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow KoffeeMan on Instagram"
          >
            Follow {siteConfig.contact.instagramHandle} ↗
          </Button>
        </div>

        {/* 4-Image Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-sm:gap-2.5">
          {previewImages.map((src, idx) => (
            <a
              key={src}
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View KoffeeMan Instagram post ${idx + 1}`}
              className="group relative h-[220px] max-sm:h-[150px] rounded-[13px] overflow-hidden border border-[#D9C4A5] bg-[#FFF8EE] shadow-[0_5px_17px_rgba(57,41,41,0.04)]"
            >
              <Image
                src={src}
                alt={`KoffeeMan café moment ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#392929]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#FFF8EE] text-xs font-bold gap-1.5 p-3 text-center">
                <span>View on Instagram ↗</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

