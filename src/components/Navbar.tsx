"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Ana Sayfa" },
    { href: "#videos", label: "Videolar" },
    { href: "#features", label: "Özellikler" },
    { href: "#specs", label: "Teknik" },
    { href: "#about", label: "Hakkımızda" },
    { href: "#contact", label: "İletişim" },
    { href: "#buy", label: "Satın Al" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/50"
          : "bg-white/90 backdrop-blur-md border-black/5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-60 h-18 bg-white/90 rounded-xl px-5 py-3 group-hover:bg-white transition-colors">
              <Image
                src="/images/abra-logo.jpg"
                alt="ABRA Product Design"
                fill
                className="object-contain p-1"
                sizes="240px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[15px] font-semibold transition-colors rounded-lg ${
                  scrolled 
                    ? "text-white/60 hover:text-white hover:bg-white/5" 
                    : "text-black/60 hover:text-black hover:bg-black/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`!py-2 !px-4 !text-xs ${scrolled ? "btn-secondary" : "btn-primary bg-black text-white hover:bg-black/80"}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Katalog
            </a>
            <a
              href="#buy"
              className="btn-primary !py-2 !px-5 !text-xs"
            >
              Satın Al
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? "hover:bg-white/10" : "hover:bg-black/5"
            }`}
            aria-label="Menü"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`w-5 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                } ${scrolled ? "bg-white" : "bg-black"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2 px-4">
              <a href="/catalog.pdf" target="_blank" className="btn-secondary !py-2 !px-4 !text-xs flex-1 justify-center">
                Katalog
              </a>
              <a href="#buy" onClick={() => setMobileOpen(false)} className="btn-primary !py-2 !px-4 !text-xs flex-1 justify-center">
                Satın Al
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
