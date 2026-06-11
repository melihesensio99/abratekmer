"use client";

import { useEffect, useRef, useState } from "react";

// Görsel ve metnin yan yana temiz durduğu küçük kart bileşeni (mobilde alt alta)
function FeatureCard({
  src,
  alt,
  title,
  desc,
  points,
}: {
  src: string;
  alt: string;
  title: string;
  desc?: string;
  points?: string[];
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6 bg-[#0c0c0c] border border-white/5 rounded-[2rem] transition-all hover:border-white/10">
      {/* Görsel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#121212] rounded-2xl overflow-hidden p-2" style={{ aspectRatio: "16/10" }}>
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
      {/* Metin */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
          {title}
        </h3>
        {desc && <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">{desc}</p>}
        {points && (
          <ul className="space-y-2">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 text-white/80 text-sm sm:text-base leading-relaxed">
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

        {/* 1. Hızlı Kolay Kurulum (Geniş Banner) */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center bg-[#121212] p-4 border border-white/5">
            <img src="/images/new/14.jpeg" alt="ABRA Smart Lock PRO - Hızlı ve Kolay Kurulum"
              className="w-full h-auto object-contain max-h-[80vh]" />
          </div>
        </div>

        {/* 2. Bölüm Başlığı */}
        <div className={`text-center py-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">NEDEN ABRA?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-white/55 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Mevcut kapınızı ve kilit sisteminizi değiştirmeden evinizi akıllı hale getirin.
          </p>
        </div>

        {/* 3. Kurulum Avantajları Görseli (Geniş Banner) */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex items-center justify-center bg-[#121212] p-4 border border-white/5">
            <img src="/images/new/15.jpeg" alt="Alet Gerektirmez, Anahtar Değiştirme Yok, Tüm Kapılarla Uyumlu"
              className="w-full h-auto object-contain max-h-[80vh]" />
          </div>
        </div>

        {/* 4. Yan Yana Grid Özellikler (Küçük Başlıklar ve Yanlarında Yazılar) */}
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          {/* Night Mode */}
          <FeatureCard
            src="/images/new/16.jpeg"
            alt="Night Mode"
            title="Quiet Unlocking at Night"
            desc="Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın."
          />

          {/* Daytime vs Nighttime */}
          <FeatureCard
            src="/images/new/17.jpeg"
            alt="Daytime vs Nighttime"
            title="Faster Unlock, Smoother Exit. Safer Home."
            points={[
              "Daytime (Gündüz): Yarım kilit moduyla hızlı çıkış.",
              "Nighttime (Gece): Tam kilit moduyla maksimum güvenlik."
            ]}
          />

          {/* Emergency Charging */}
          <FeatureCard
            src="/images/new/18.jpeg"
            alt="USB Charging Backup"
            title="Emergency USB Charging"
            desc="Pil seviyesi bittiğinde, dışarıdan powerbank ve USB-C yardımıyla acil şarj sağlayarak kapıda kalma riskini tamamen yok edin."
          />

          {/* Sound Alerts */}
          <FeatureCard
            src="/images/new/19.jpeg"
            alt="Sound Alerts"
            title="Sound Alerts from ABRA Smart"
            desc="Pil gücü kritik seviyeye ulaştığında hem mobil uygulamadan bildirim alın hem de sesli uyarı tonlarıyla durumu takip edin."
          />
        </div>

        {/* 5. En Alttaki Tam Genişlikteki Remote Lock Görseli (Büyük Alan) */}
        <div className={`pt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem] flex flex-col items-stretch bg-[#0c0c0c] border border-white/5 p-6 sm:p-10">
            {/* Görsel Üst Başlık Grubu */}
            <div className="mb-8 max-w-2xl">
              <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-2 block">KONTROL SİZDE</span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "var(--font-noto)" }}>
                Remote Lock / Unlock
              </h3>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                Nerede olursanız olun, mobil uygulama üzerinden kapınızı uzaktan yönetin ve durum bildirimlerini anlık takip edin.
              </p>
            </div>

            {/* Genişletilmiş Tam Boyut Görsel */}
            <div className="w-full relative rounded-2xl overflow-hidden bg-[#121212] p-2 flex items-center justify-center">
              <img
                src="/images/new/2.jpeg"
                alt="Remote Lock / Unlock - ABRA App"
                className="w-full h-auto object-contain max-h-[85vh]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
