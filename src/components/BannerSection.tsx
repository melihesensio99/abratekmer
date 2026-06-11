"use client";

import { useEffect, useRef, useState } from "react";

// Bento Grid için kutulu tasarım bileşeni. Grid span'e göre dikey veya yatay olarak şekil alabilir.
function BentoCard({
  src,
  alt,
  tag,
  title,
  desc,
  points,
  className = "",
}: {
  src: string;
  alt: string;
  tag?: string;
  title: string;
  desc?: string;
  points?: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-between p-8 bg-[#0c0c0c] border border-white/5 rounded-[2rem] transition-all hover:border-white/10 ${className}`}>
      {/* Görsel Alanı */}
      <div className="w-full flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-[#121212]/50 p-4" style={{ minHeight: "200px" }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[240px] object-contain select-none pointer-events-none"
        />
      </div>

      {/* Metin Alanı */}
      <div className="flex flex-col text-left">
        {tag && (
          <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-2 block">
            {tag}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight" style={{ fontFamily: "var(--font-noto)" }}>
          {title}
        </h3>
        {desc && <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">{desc}</p>}
        {points && (
          <ul className="space-y-2">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-white/80 text-sm sm:text-base leading-relaxed">
                <span className="text-primary mt-1.5 flex-shrink-0 text-[10px]">●</span>
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
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
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

        {/* Bento / Asimetrik Grid Düzeni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* 1. Quiet Unlocking at Night - Dikey Büyük Kart (md:col-span-1) */}
          <BentoCard
            src="/images/new/16.jpeg"
            alt="Night Mode"
            tag="GÜVENLİK MODU"
            title="Quiet Unlocking at Night"
            desc="Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın."
            className="md:col-span-1"
          />

          {/* 2. Daytime vs Nighttime - Geniş Yatay Kart (md:col-span-2) */}
          <BentoCard
            src="/images/new/17.jpeg"
            alt="Daytime vs Nighttime"
            tag="KİLİT MODLARI"
            title="Faster Unlock, Smoother Exit."
            points={[
              "Daytime (Gündüz): Yarım kilit moduyla hızlı çıkış.",
              "Nighttime (Gece): Tam kilit moduyla maksimum güvenlik."
            ]}
            className="md:col-span-2"
          />

          {/* 3. Emergency Charging - Geniş Yatay Kart (md:col-span-2) */}
          <BentoCard
            src="/images/new/18.jpeg"
            alt="USB Charging Backup"
            tag="GÜÇ YÖNETİMİ"
            title="USB-C Acil Şarj Desteği"
            desc="Pil seviyesi bittiğinde, dışarıdan powerbank ve USB-C yardımıyla acil şarj sağlayarak kapıda kalma riskini tamamen yok edin."
            className="md:col-span-2"
          />

          {/* 4. Sound Alerts - Dikey Kart (md:col-span-1) */}
          <BentoCard
            src="/images/new/19.jpeg"
            alt="Sound Alerts"
            tag="AKILLI UYARILAR"
            title="Sound Alerts from ABRA"
            desc="Pil gücü kritik seviyeye ulaştığında hem mobil uygulamadan bildirim alın hem de sesli uyarı tonlarıyla durumu takip edin."
            className="md:col-span-1"
          />
        </div>

      </div>
    </section>
  );
}
