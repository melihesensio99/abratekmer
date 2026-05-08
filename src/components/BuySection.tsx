"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const colors = [
  { name: "Siyah", value: "#1a1a1a", trendyolUrl: "https://www.trendyol.com" },
  { name: "Gümüş", value: "#c0c0c0", trendyolUrl: "https://www.trendyol.com" },
  { name: "Altın", value: "#d4a853", trendyolUrl: "https://www.trendyol.com" },
];

export default function BuySection() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="buy" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">SATIN AL</span>
          <h2 className="heading-section text-white mb-6" style={{ fontFamily: "var(--font-noto)" }}>
            Hemen Sahip Olun
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            ABRA Smart Lock PRO&apos;yu Trendyol üzerinden güvenle satın alın
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-surface-light to-surface">
                <Image
                  src="/images/banner-1.png"
                  alt="ABRA Smart Lock PRO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">ABRA PRODUCT DESIGN</p>
                  <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-noto)" }}>
                    Smart Lock PRO
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/50 text-sm">4.8 / 5</span>
                </div>

                {/* Color Selection */}
                <div>
                  <p className="text-white/70 text-sm font-medium mb-3">
                    Renk: <span className="text-white">{colors[selectedColor].name}</span>
                  </p>
                  <div className="flex gap-3">
                    {colors.map((color, index) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(index)}
                        className={`color-swatch ${selectedColor === index ? "active" : ""}`}
                        style={{ backgroundColor: color.value }}
                        aria-label={`${color.name} renk seçimi`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  {["Wi-Fi + Bluetooth Bağlantı", "6 Ay Pil Ömrü", "Kolay Kurulum", "Sessiz Mod"].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-white/60">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={colors[selectedColor].trendyolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-lg !py-4 animate-pulse-glow"
                  id="trendyol-buy-button"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  Trendyol&apos;dan Satın Al
                </a>

                <p className="text-center text-white/30 text-xs">
                  Güvenli ödeme • Hızlı kargo • Kolay iade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
