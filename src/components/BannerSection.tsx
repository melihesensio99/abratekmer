"use client";

import { useEffect, useRef, useState } from "react";

// Promo card — Görseli hiçbir yazı kapatmadan, şeffaf arka planla ve en-boy oranını koruyarak tam gösterir.
function PromoCard({
  src, alt, sizes = "100vw",
}: {
  src: string; alt: string;
  sizes?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain max-h-[85vh]"
        sizes={sizes}
      />
    </div>
  );
}

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 1. Hızlı Kolay Kurulum (16:9, sadece görsel) */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center">
            <img src="/images/new/14.jpeg" alt="ABRA Smart Lock PRO - Hızlı ve Kolay Kurulum"
              className="w-full h-auto object-contain max-h-[85vh]" />
          </div>
        </div>

        {/* 2. Başlık */}
        <div className={`text-center py-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">NEDEN ABRA?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-white/55 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Mevcut kapınızı ve kilit sisteminizi değiştirmenize gerek yok. ABRA, dakikalar içinde kurulur ve hayatınızı kolaylaştırır.
          </p>
        </div>

        {/* 3. Kurulum Avantajları (sadece görsel) */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center">
            <img src="/images/new/15.jpeg" alt="Alet Gerektirmez, Anahtar Değiştirme Yok, Tüm Kapılarla Uyumlu"
              className="w-full h-auto object-contain max-h-[85vh]" />
          </div>
        </div>

        {/* 4. Night Mode + Day/Night yan yana (Sadece Görsel) */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <PromoCard
            src="/images/new/16.jpeg"
            alt="NIGHT Mode - Quiet Unlocking at Night"
            sizes="50vw"
          />
          <PromoCard
            src="/images/new/17.jpeg"
            alt="Daytime Half Engaged vs Nighttime Fully Engaged"
            sizes="50vw"
          />
        </div>

        {/* 5. Pil + Sesli Uyarılar yan yana (Sadece Görsel) */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <PromoCard
            src="/images/new/18.jpeg"
            alt="Emergency USB Charging - Battery Backup"
            sizes="50vw"
          />
          <PromoCard
            src="/images/new/19.jpeg"
            alt="Sound Alerts from ABRA Smart"
            sizes="50vw"
          />
        </div>

        {/* 6. Remote App — tam genişlik (Sadece Görsel) */}
        <div className={`transition-all duration-700 delay-[600ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <PromoCard
            src="/images/new/2.jpeg"
            alt="Remote Lock / Unlock - ABRA App"
          />
        </div>

      </div>
    </section>
  );
}
