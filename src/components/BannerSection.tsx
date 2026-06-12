"use client";

import { useEffect, useRef, useState } from "react";

type Feature = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc?: string;
  points?: string[];
  containImage?: boolean;
};

const features: Feature[] = [
  {
    src: "/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (10).jpeg",
    alt: "Quiet Unlocking at Night",
    tag: "GÜVENLİK MODU",
    title: "Quiet Unlocking at Night",
    desc: "Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın.",
    containImage: true,
  },
  {
    src: "/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (12).jpeg",
    alt: "USB-C Acil Şarj Desteği",
    tag: "GÜÇ YÖNETİMİ",
    title: "USB-C Acil Şarj Desteği",
    desc: "Pil seviyesi bittiğinde, dışarıdan powerbank ve USB-C yardımıyla acil şarj sağlayarak kapıda kalma riskini tamamen yok edin.",
  },
  {
    src: "/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (13).jpeg",
    alt: "Sound Alerts from ABRA",
    tag: "AKILLI UYARILAR",
    title: "Sound Alerts from ABRA",
    desc: "Pil gücü kritik seviyeye ulaştığında hem mobil uygulamadan bildirim alın hem de sesli uyarı tonlarıyla durumu takip edin.",
  },
];

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeroVisible(true); },
      { threshold: 0.2 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  // Autoplay for slider
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % features.length);
    }, 5000);
  };

  const goToSlide = (idx: number) => {
    setActiveSlide(idx);
    resetAutoplay();
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % features.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + features.length) % features.length);
    resetAutoplay();
  };

  // Touch / drag handling
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 60) prevSlide();
    else if (dragOffset < -60) nextSlide();
    setDragOffset(0);
  };

  const current = features[activeSlide];

  return (
    <section ref={sectionRef} className="pt-12 pb-24 bg-black overflow-hidden relative">
      {/* Ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className="text-center py-6 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
          }}
        >
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">NEDEN ABRA?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-white/45 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Mevcut kapınızı ve kilit sisteminizi değiştirmeden evinizi akıllı hale getirin.
          </p>
        </div>

        {/* ═══ HERO CARD — Full width, immersive ═══ */}
        <div
          ref={heroRef}
          className="relative rounded-[2.5rem] overflow-hidden mb-10 group cursor-default"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.97)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
          }}
        >
          {/* Background image */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] overflow-hidden">
            <img
              src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (11).jpeg"
              alt="Faster Unlock, Smoother Exit"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span
                className="inline-flex items-center gap-2 text-primary font-bold text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s ease 0.5s",
                }}
              >
                <span className="w-6 h-[2px] bg-primary rounded-full" />
                KİLİT MODLARI
              </span>

              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "var(--font-noto)",
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.8s ease 0.6s",
                }}
              >
                Faster Unlock, Smoother Exit.
              </h3>

              <ul
                className="space-y-3 max-w-xl"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.75s",
                }}
              >
                <li className="flex items-start gap-3 text-white/70 text-base sm:text-lg leading-relaxed font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-1"><span className="w-1.5 h-1.5 rounded-full bg-primary" /></span>
                  Daytime (Gündüz): Yarım kilit moduyla hızlı çıkış.
                </li>
                <li className="flex items-start gap-3 text-white/70 text-base sm:text-lg leading-relaxed font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-1"><span className="w-1.5 h-1.5 rounded-full bg-primary" /></span>
                  Nighttime (Gece): Tam kilit moduyla maksimum güvenlik.
                </li>
              </ul>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/80 text-xs font-bold tracking-wide">ÖNCÜ ÖZELLİK</span>
          </div>
        </div>

        {/* ═══ SLIDER — 3 feature cards with swipe ═══ */}
        <div
          className="relative mt-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
          }}
        >
          {/* Tab buttons + arrows — ABOVE the slider */}
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="flex items-center gap-2 sm:gap-3">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeSlide === idx
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-white/[0.06] text-white/45 border border-white/[0.08] hover:bg-white/[0.1] hover:text-white/70"
                  }`}
                >
                  {feature.tag}
                  {/* Active progress underline */}
                  {activeSlide === idx && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-white/40 rounded-full"
                        style={{
                          width: "100%",
                          animation: "progress-fill 5s linear",
                        }}
                      />
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/10 hover:border-white/15 transition-all group/arrow"
                aria-label="Önceki"
              >
                <svg className="w-4 h-4 text-white/50 group-hover/arrow:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/10 hover:border-white/15 transition-all group/arrow"
                aria-label="Sonraki"
              >
                <svg className="w-4 h-4 text-white/50 group-hover/arrow:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider viewport */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-[2rem] relative"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(-${activeSlide * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? "none" : undefined,
              }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0c0c0c] border border-white/[0.06] rounded-[2rem] overflow-hidden min-h-[380px] sm:min-h-[440px]">
                    {/* Image side */}
                    <div className="relative h-[300px] sm:h-[380px] lg:h-full overflow-hidden">
                      <img
                        src={feature.src}
                        alt={feature.alt}
                        className={`w-full h-full select-none transition-transform duration-700 ease-out object-cover ${
                          activeSlide === idx ? "scale-100" : "scale-110"
                        }`}
                      />
                      {/* Subtle gradient on the right edge for desktop */}
                      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0c0c] to-transparent" />
                      {/* Bottom gradient for mobile */}
                      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
                    </div>

                    {/* Text side */}
                    <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <span className="inline-flex items-center gap-2 text-primary font-bold text-[11px] tracking-[0.3em] uppercase mb-5">
                        <span className="w-5 h-[2px] bg-primary rounded-full" />
                        {feature.tag}
                      </span>

                      <h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5 leading-[1.1] tracking-tight"
                        style={{ fontFamily: "var(--font-noto)" }}
                      >
                        {feature.title}
                      </h3>

                      {feature.desc && (
                        <p className="text-white/60 text-[15px] sm:text-base leading-[1.75] font-medium">
                          {feature.desc}
                        </p>
                      )}

                      {feature.points && (
                        <ul className="space-y-4 mt-1">
                          {feature.points.map((pt, pidx) => (
                            <li key={pidx} className="flex items-start gap-3 text-white/65 text-[15px] sm:text-base leading-[1.7] font-medium">
                              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
