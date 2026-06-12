"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// Portrait installation images (3:4 ratio) with exact bg colors
const compatibilitySlides = [
  { src: "/images/new/3.jpeg",  bg: "#c8b89a", label: "Koyu Ahşap Kapı"    },
  { src: "/images/new/4.jpeg",  bg: "#c0a870", label: "Açık Ahşap Kapı"    },
  { src: "/images/new/5.jpeg",  bg: "#ede8e0", label: "Beyaz Kapı"         },
  { src: "/images/new/6.jpeg",  bg: "#e8ddd0", label: "Bej Kapı (Yuvarlak Silindir)" },
  { src: "/images/new/7.jpeg",  bg: "#e5ddd2", label: "Bej Kapı (Oval Silindir)"     },
  { src: "/images/new/8.jpeg",  bg: "#111111", label: "Siyah Çelik Kapı"   },
  { src: "/images/new/9.jpeg",  bg: "#4a4a4a", label: "Gri Çelik Kapı"     },
  { src: "/images/new/10.jpeg", bg: "#2a2a2a", label: "Koyu Kare Kollu Kapı" },
  { src: "/images/new/11.jpeg", bg: "#f0ebe4", label: "İç Mekan (Kahverengi Kol)" },
  { src: "/images/new/12.jpeg", bg: "#c8c0b0", label: "Bej (Döner Silindir)" },
  { src: "/images/new/13.jpeg", bg: "#4a3828", label: "Kahverengi Ahşap"   },
];

export default function FeaturesSection() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setBannerIndex((p) => (p + 1) % compatibilitySlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isDragging]);

  const goTo = useCallback((i: number) => {
    setBannerIndex((i + compatibilitySlides.length) % compatibilitySlides.length);
  }, []);

  const onDragStart = (x: number) => { setIsDragging(true); setDragStartX(x); setDragOffset(0); };
  const onDragMove  = (x: number) => { if (!isDragging) return; setDragOffset(x - dragStartX); };
  const onDragEnd   = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 60) goTo(dragOffset < 0 ? bannerIndex + 1 : bannerIndex - 1);
    setDragOffset(0);
  };

  return (
    <section id="features" className="relative pt-16 pb-16 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />

      {/* ── Uyumluluk Başlık ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 text-center">
        <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">UYUMLULUK</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
          style={{ fontFamily: "var(--font-outfit)" }}>
          Her Kapıya Uyar
        </h2>
        <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Ahşap, çelik, bej, beyaz — Avrupa standardındaki tüm kapı ve silindir tipleriyle uyumlu
        </p>
      </div>

      {/* ── Compatibility Carousel (portrait görseller, 3:4 kutu) ── */}
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group">
          {/* Kaydırılabilir alan */}
          <div
            ref={carouselRef}
            className="relative rounded-3xl overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
            style={{ background: compatibilitySlides[bannerIndex].bg, aspectRatio: "4/3" }}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
            onTouchEnd={onDragEnd}
            onMouseDown={(e) => { e.preventDefault(); onDragStart(e.clientX); }}
            onMouseMove={(e) => onDragMove(e.clientX)}
            onMouseUp={onDragEnd}
            onMouseLeave={() => { if (isDragging) onDragEnd(); }}
          >
            <div
              className="flex h-full"
              style={{
                transform: `translateX(calc(-${bannerIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {compatibilitySlides.map((slide, i) => (
                <div key={i} className="w-full flex-shrink-0 h-full relative" style={{ background: slide.bg }}>
                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    className="object-contain pointer-events-none"
                    sizes="(max-width: 1600px) 100vw, 1600px"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Etiket */}
            <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full z-10 pointer-events-none">
              <span className="text-white text-sm font-bold">
                {compatibilitySlides[bannerIndex].label}
              </span>
              <span className="text-white/50 text-xs ml-2">
                {bannerIndex + 1} / {compatibilitySlides.length}
              </span>
            </div>
          </div>

          {/* Ok butonları */}
          <button onClick={() => goTo(bannerIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100 z-20"
            aria-label="Önceki">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={() => goTo(bannerIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100 z-20"
            aria-label="Sonraki">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {compatibilitySlides.map((_, i) => (
            <button key={i} onClick={() => setBannerIndex(i)} aria-label={`Görsel ${i + 1}`}
              className={`carousel-dot ${bannerIndex === i ? "active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
