"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brandImages } from "@/data/images";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 h-[88px] max-sm:h-[72px] bg-[#FFF8EE] border-b border-[#7F5738]/12">
      <Container className="h-full flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 min-w-[205px] max-sm:min-w-0"
          aria-label={`${siteConfig.brandName} home`}
          onClick={closeMobileMenu}
        >
          <div className="relative h-[66px] w-[66px] max-sm:h-[52px] max-sm:w-[52px] rounded-full overflow-hidden shrink-0 border border-[#D9C4A5]/40">
            <Image
              src={brandImages.logo}
              alt="KoffeeMan truck logo"
              fill
              sizes="(max-width: 640px) 52px, 66px"
              priority
              className="object-contain"
            />
          </div>
          <span className="flex flex-col">
            <span className="font-bree text-[27px] max-sm:text-[23px] leading-none text-[#392929]">
              {siteConfig.brandName}
            </span>
            <span className="text-[8px] max-sm:text-[7px] tracking-[0.17em] text-[#7F5738] font-bold mt-[5px]">
              {siteConfig.logoTagline}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-[26px] text-xs font-semibold text-[#5b4639]"
          aria-label="Main navigation"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#C84B36]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="dark"
            href={siteConfig.ordering.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order online on Swiggy"
          >
            Order Online ↗
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center h-[42px] w-[42px] rounded-full border border-[#D9C4A5] text-[#392929] text-xl transition-colors hover:bg-[#F4E4CA]"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-[72px] left-0 right-0 bg-[#FFF8EE] border-b border-[#D9C4A5] px-6 py-6 shadow-[0_16px_42px_rgba(57,41,41,0.12)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2"
        >
          <nav
            className="flex flex-col gap-3 text-sm font-semibold text-[#5b4639]"
            aria-label="Mobile navigation"
          >
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="py-2 border-b border-[#D9C4A5]/30 hover:text-[#C84B36] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              variant="dark"
              href={siteConfig.ordering.swiggyUrl}
              className="w-full text-center"
              onClick={closeMobileMenu}
            >
              Order Online ↗
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

