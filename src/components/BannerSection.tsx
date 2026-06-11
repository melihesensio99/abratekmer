"use client";

import { useEffect, useRef, useState } from "react";

// Dikey uzatılmış, üst-yan sıfıra sıfır dev görsel barındıran 2x2 grid kart bileşeni
function ProductFeatureCard({
  src,
  alt,
  tag,
  title,
  desc,
  points,
  containImage = false,
}: {
  src: string;
  alt: string;
  tag?: string;
  title: string;
  desc?: string;
  points?: string[];
  containImage?: boolean;
}) {
  return (
    <div className="group flex flex-col bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-3xl hover:shadow-primary/5 h-full">
      {/* Dev Görsel Alanı - Üst ve yanlardan sıfıra sıfır, %70-80 alan kaplar */}
      <div className="relative w-full h-[380px] sm:h-[480px] bg-[#0d0d0d] flex items-center justify-center p-0 overflow-hidden border-b border-white/5">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 ${
            containImage ? "object-contain px-2 py-4" : "object-cover"
          }`}
        />
      </div>

      {/* Metin Alanı - Altta kalan koyu şık alan */}
      <div className="p-8 sm:p-10 flex flex-col justify-start text-left flex-grow">
        {tag && (
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">
            {tag}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight tracking-tight" style={{ fontFamily: "var(--font-noto)" }}>
          {title}
        </h3>
        {desc && <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium">{desc}</p>}
        {points && (
          <ul className="space-y-3 mt-2">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-white/80 text-base sm:text-lg leading-relaxed font-medium">
                <span className="text-primary mt-2 flex-shrink-0 text-[10px]">●</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
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
    <section ref={sectionRef} className="pt-12 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Bölüm Başlığı */}
        <div className={`text-center py-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">NEDEN ABRA?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-white/55 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Mevcut kapınızı ve kilit sisteminizi değiştirmeden evinizi akıllı hale getirin.
          </p>
        </div>

        {/* 2x2 Grid Düzeni - Uzatılmış Dikey Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Kart 1: Gece Modu */}
          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (10).jpeg"
            alt="Quiet Unlocking at Night"
            tag="GÜVENLİK MODU"
            title="Quiet Unlocking at Night"
            desc="Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın."
            containImage={true}
          />

          {/* Kart 2: Kilit Modları */}
          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (11).jpeg"
            alt="Faster Unlock, Smoother Exit"
            tag="KİLİT MODLARI"
            title="Faster Unlock, Smoother Exit."
            points={[
              "Daytime (Gündüz): Yarım kilit moduyla hızlı çıkış.",
              "Nighttime (Gece): Tam kilit moduyla maksimum güvenlik."
            ]}
          />

          {/* Kart 3: Şarj Desteği */}
          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (12).jpeg"
            alt="USB-C Acil Şarj Desteği"
            tag="GÜÇ YÖNETİMİ"
            title="USB-C Acil Şarj Desteği"
            desc="Pil seviyesi bittiğinde, dışarıdan powerbank ve USB-C yardımıyla acil şarj sağlayarak kapıda kalma riskini tamamen yok edin."
          />

          {/* Kart 4: Sesli Alarmlar */}
          <ProductFeatureCard
            src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (13).jpeg"
            alt="Sound Alerts from ABRA"
            tag="AKILLI UYARILAR"
            title="Sound Alerts from ABRA"
            desc="Pil gücü kritik seviyeye ulaştığında hem mobil uygulamadan bildirim alın hem de sesli uyarı tonlarıyla durumu takip edin."
          />
        </div>

      </div>
    </section>
  );
}
// Fresh build trigger comment to ensure Vercel completes deploy pipeline for 2x2 grid.
