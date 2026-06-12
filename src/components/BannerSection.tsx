"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// Scroll-animated premium feature card
function ProductFeatureCard({
  src,
  alt,
  tag,
  title,
  desc,
  points,
  containImage = false,
  index = 0,
}: {
  src: string;
  alt: string;
  tag?: string;
  title: string;
  desc?: string;
  points?: string[];
  containImage?: boolean;
  index?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageScale, setImageScale] = useState(1);

  // Scroll-triggered reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  // Parallax-like scroll zoom on image
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the viewport the card is
      const progress = 1 - rect.top / windowHeight;
      // Clamp between 1 and 1.08 for subtle zoom
      const scale = Math.min(Math.max(1 + progress * 0.06, 1), 1.08);
      setImageScale(scale);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alternate entrance direction: even from left, odd from right
  const enterFromLeft = index % 2 === 0;
  const translateX = enterFromLeft ? "-60px" : "60px";

  return (
    <div
      ref={cardRef}
      className="group flex flex-col bg-[#0c0c0c] border border-white/[0.06] rounded-[2rem] overflow-hidden h-full relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) translateX(0)"
          : `translateY(40px) translateX(${translateX})`,
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15}s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.15}s`,
      }}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 rounded-[2rem]"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(229, 57, 53, 0.06), transparent 70%)",
        }}
      />

      {/* Image area with parallax zoom */}
      <div className="relative w-full h-[380px] sm:h-[480px] bg-[#080808] overflow-hidden">
        {/* Subtle gradient overlay at bottom of image for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0c0c] to-transparent z-[2] pointer-events-none" />

        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`w-full h-full select-none pointer-events-none transition-transform duration-[1.2s] ease-out ${
            containImage ? "object-contain px-2 py-4" : "object-cover"
          }`}
          style={{
            transform: `scale(${imageScale})`,
            willChange: "transform",
          }}
        />
      </div>

      {/* Accent gradient line separator */}
      <div className="h-[2px] w-full relative overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #e53935 30%, #ff6659 70%, transparent 100%)",
            transform: isVisible ? "translateX(0)" : "translateX(-100%)",
            transitionDelay: `${0.5 + index * 0.15}s`,
          }}
        />
      </div>

      {/* Text area */}
      <div className="p-8 sm:p-10 flex flex-col justify-start text-left flex-grow relative">
        {tag && (
          <span
            className="text-primary font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block relative w-fit"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: `all 0.6s ease ${0.4 + index * 0.15}s`,
            }}
          >
            {tag}
            {/* Tag shimmer */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                backgroundSize: "200% 100%",
                animation: isVisible ? "shimmer 3s ease-in-out infinite" : "none",
                animationDelay: `${1 + index * 0.3}s`,
              }}
            />
          </span>
        )}
        <h3
          className="text-[1.65rem] sm:text-3xl font-black text-white mb-4 leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-noto)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: `all 0.7s ease ${0.5 + index * 0.15}s`,
          }}
        >
          {title}
        </h3>
        {desc && (
          <p
            className="text-white/60 text-[15px] sm:text-base leading-[1.7] font-medium"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(14px)",
              transition: `all 0.7s ease ${0.6 + index * 0.15}s`,
            }}
          >
            {desc}
          </p>
        )}
        {points && (
          <ul className="space-y-3 mt-2">
            {points.map((pt, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-white/70 text-[15px] sm:text-base leading-[1.7] font-medium"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(14px)",
                  transition: `all 0.6s ease ${0.65 + index * 0.15 + idx * 0.1}s`,
                }}
              >
                <span className="text-primary mt-[6px] flex-shrink-0 text-[8px]">◆</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom border glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-700" />
    </div>
  );
}

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-24 bg-black overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Section Header */}
        <div
          ref={titleRef}
          className="text-center py-6"
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

          {/* Decorative animated line under title */}
          <div className="flex justify-center mt-8">
            <div className="relative w-24 h-[2px] overflow-hidden rounded-full">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #e53935, transparent)",
                  transform: isVisible ? "translateX(0)" : "translateX(-100%)",
                  transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
                }}
              />
            </div>
          </div>
        </div>

        {/* 2x2 Grid — each card animates independently */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (10).jpeg"
            alt="Quiet Unlocking at Night"
            tag="GÜVENLİK MODU"
            title="Quiet Unlocking at Night"
            desc="Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın."
            containImage={true}
            index={0}
          />

          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (11).jpeg"
            alt="Faster Unlock, Smoother Exit"
            tag="KİLİT MODLARI"
            title="Faster Unlock, Smoother Exit."
            points={[
              "Daytime (Gündüz): Yarım kilit moduyla hızlı çıkış.",
              "Nighttime (Gece): Tam kilit moduyla maksimum güvenlik."
            ]}
            index={1}
          />

          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (12).jpeg"
            alt="USB-C Acil Şarj Desteği"
            tag="GÜÇ YÖNETİMİ"
            title="USB-C Acil Şarj Desteği"
            desc="Pil seviyesi bittiğinde, dışarıdan powerbank ve USB-C yardımıyla acil şarj sağlayarak kapıda kalma riskini tamamen yok edin."
            index={2}
          />

          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (13).jpeg"
            alt="Sound Alerts from ABRA"
            tag="AKILLI UYARILAR"
            title="Sound Alerts from ABRA"
            desc="Pil gücü kritik seviyeye ulaştığında hem mobil uygulamadan bildirim alın hem de sesli uyarı tonlarıyla durumu takip edin."
            index={3}
          />
        </div>

      </div>
    </section>
  );
}
// Fresh build trigger comment to ensure Vercel completes deploy pipeline for 2x2 grid.
