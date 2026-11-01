import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#2D2020] text-[#FFF8EE] pt-12 pb-6 mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 border-b border-[#D6B66C]/25">
          {/* Brand & Slogans */}
          <div>
            <div className="font-bree text-[32px] text-[#F4E4CA] leading-tight">
              {siteConfig.brandName}
            </div>
            <div className="font-lora italic font-semibold text-[15px] text-[#D6B66C] mt-1.5">
              {siteConfig.tagline}
            </div>
            <div className="text-[11px] text-[#c7b5a4] mt-3">
              {siteConfig.logoTagline}
            </div>
          </div>

          {/* Nav & Social Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-5 md:gap-6 text-[11px] text-[#e2d4c8]"
          >
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#D6B66C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6B66C] transition-colors"
            >
              Instagram ↗
            </a>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-5 text-[10px] text-[#bda99a]">
          <span>© {siteConfig.brandAltName}. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.primaryPhoneTel}
              className="hover:text-[#D6B66C] transition-colors"
            >
              {siteConfig.contact.primaryPhone}
            </a>
            <span>·</span>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6B66C] transition-colors"
            >
              {siteConfig.contact.instagramHandle}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

