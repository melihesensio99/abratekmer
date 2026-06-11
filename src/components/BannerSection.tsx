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

// Detaylı kart bileşeni: Görsel ve metin yan yanadır (mobilde alt alta). Görseli hiçbir yazı kapatmaz, arka plan şeffaftır.
function FeatureRow({
  src,
  alt,
  title,
  desc,
  points,
  imageLeft = true,
}: {
  src: string;
  alt: string;
  title: string;
  desc?: string;
  points?: string[];
  imageLeft?: boolean;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 border-b border-white/5 last:border-0">
      {/* Görsel kısmı */}
      <div className={`w-full lg:w-1/2 flex justify-center ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative w-full rounded-3xl overflow-hidden bg-[#121212] border border-white/5 p-4 flex items-center justify-center" style={{ aspectRatio: "16/10" }}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Metin kısmı */}
      <div className={`w-full lg:w-1/2 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "var(--font-noto)" }}>
          {title}
        </h3>
        {desc && <p className="text-white/60 text-lg leading-relaxed mb-6">{desc}</p>}
        {points && (
          <ul className="space-y-4">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80 text-base sm:text-lg leading-relaxed">
                <span className="text-primary mt-1.5 flex-shrink-0 text-xs">●</span>
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 1. Hızlı Kolay Kurulum Görseli */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center bg-[#121212] p-4 border border-white/5">
            <img src="/images/new/14.jpeg" alt="ABRA Smart Lock PRO - Hızlı ve Kolay Kurulum"
              className="w-full h-auto object-contain max-h-[80vh]" />
          </div>
        </div>

        {/* 2. Bölüm Başlığı */}
        <div className={`text-center py-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">NEDEN ABRA?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-white/55 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Mevcut kapınızı ve kilit sisteminizi değiştirmeden evinizi akıllı hale getirin.
          </p>
        </div>

        {/* 3. Kurulum Avantajları Görseli */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center bg-[#121212] p-4 border border-white/5">
            <img src="/images/new/15.jpeg" alt="Alet Gerektirmez, Anahtar Değiştirme Yok, Tüm Kapılarla Uyumlu"
              className="w-full h-auto object-contain max-h-[80vh]" />
          </div>
        </div>

        {/* 4. Detaylı Özellik Satırları (Görsel ve Yazı YAN YANA) */}
        <div className="pt-12 space-y-12">
          {/* Remote Lock / Unlock */}
          <FeatureRow
            src="/images/new/2.jpeg"
            alt="Remote Lock / Unlock"
            title="Remote Lock / Unlock"
            points={[
              "Şarj bitmeye yakın durumda Wifi otomatik açılıp yöneticiye bilgi verir.",
              "Kapı cihazı çalışmadan açıldığında Wifi otomatik açılıp yöneticiye bilgi verir.",
              "Akıllı telefonu olmayan misafir gelmesi durumunda uzaktan açılması için kapıya tıklandığında wifi otomatik açılır ve uzaktan kapı açılabilir."
            ]}
            imageLeft={true}
          />

          {/* Night Mode */}
          <FeatureRow
            src="/images/new/16.jpeg"
            alt="Night Mode"
            title="Quiet Unlocking at Night"
            desc="Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın."
            imageLeft={false}
          />

          {/* Daytime vs Nighttime */}
          <FeatureRow
            src="/images/new/17.jpeg"
            alt="Daytime vs Nighttime"
            title="Faster Unlock, Smoother Exit. Safer Home."
            points={[
              "Daytime (Gündüz): Yarım kilit moduyla hızlı ve akıcı çıkış.",
              "Nighttime (Gece): Tam kilit moduyla maksimum güvenlikli ev."
            ]}
            imageLeft={true}
          />

          {/* Emergency charging */}
          <FeatureRow
            src="/images/new/18.jpeg"
            alt="USB Charging Backup"
            title="Emergency USB Charging"
            desc="Beklenmedik durumlarda pil seviyesi tükendiğinde, dışarıdan powerbank ve USB-C kablosu yardımıyla acil güç beslemesi sağlayarak kapıda kalma riskini tamamen ortadan kaldırın."
            imageLeft={false}
          />

          {/* Sound Alerts */}
          <FeatureRow
            src="/images/new/19.jpeg"
            alt="Sound Alerts"
            title="Sound Alerts from ABRA Smart"
            desc="Pil gücü kritik seviyeye yaklaştığında veya olağandışı zorlama durumlarında hem mobil uygulamanızdan anlık bildirimler alın hem de cihazın kendi sesli uyarı tonlarıyla güvende kalın."
            imageLeft={true}
          />
        </div>

      </div>
    </section>
  );
}
