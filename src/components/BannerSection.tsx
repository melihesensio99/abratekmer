"use client";

import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="bg-black text-white overflow-hidden">
      <div className="w-full">

        {/* ── PANEL 1: Gece Modu (Quiet Unlocking at Night) ── */}
        <div className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-start p-6 sm:p-16 border-b border-white/5">
          {/* Devasa Arka Plan Görseli */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (10).jpeg"
              alt="Quiet Unlocking at Night"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Buzlu Cam Metin Paneli */}
          <div className="relative z-10 max-w-xl p-8 sm:p-10 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl">
            <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">GÜVENLİK MODU</span>
            <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-noto)" }}>
              Quiet Unlocking at Night
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın.
            </p>
          </div>
        </div>

        {/* ── PANEL 2: Kilit Modları (Faster Unlock, Smoother Exit) ── */}
        <div className="relative w-full min-h-[90vh] sm:min-h-screen flex items-end justify-center p-6 sm:p-16 border-b border-white/5">
          {/* Devasa Arka Plan Görseli */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (11).jpeg"
              alt="Faster Unlock, Smoother Exit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Buzlu Cam Metin Paneli - Alt Ortada konumlu */}
          <div className="relative z-10 w-full max-w-4xl p-8 sm:p-10 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl text-center">
            <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">KİLİT MODLARI</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-noto)" }}>
              Faster Unlock, Smoother Exit. Safer Home.
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-12 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-2 text-white/80 text-sm sm:text-base">
                <span className="text-primary mt-1.5 flex-shrink-0 text-[8px]">●</span>
                <span><strong>Daytime:</strong> Yarım kilit moduyla hızlı çıkış.</span>
              </div>
              <div className="flex items-start gap-2 text-white/80 text-sm sm:text-base">
                <span className="text-primary mt-1.5 flex-shrink-0 text-[8px]">●</span>
                <span><strong>Nighttime:</strong> Tam kilit moduyla maksimum güvenlik.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── PANEL 3: Şarj Desteği (USB-C Acil Şarj Desteği) ── */}
        <div className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-end p-6 sm:p-16 border-b border-white/5">
          {/* Devasa Arka Plan Görseli */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (12).jpeg"
              alt="USB-C Acil Şarj Desteği"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Buzlu Cam Metin Paneli - Sağda konumlu */}
          <div className="relative z-10 max-w-xl p-8 sm:p-10 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl">
            <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">GÜÇ YÖNETİMİ</span>
            <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-noto)" }}>
              USB-C Acil Şarj Desteği
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Pil seviyesi tükendiğinde, dışarıdan powerbank ve USB-C yardımıyla acil şarj sağlayarak kapıda kalma riskini tamamen ortadan kaldırın.
            </p>
          </div>
        </div>

        {/* ── PANEL 4: Sesli Alarmlar (Sound Alerts from ABRA) ── */}
        <div className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-start p-6 sm:p-16">
          {/* Devasa Arka Plan Görseli */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (13).jpeg"
              alt="Sound Alerts from ABRA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Buzlu Cam Metin Paneli - Solda konumlu */}
          <div className="relative z-10 max-w-xl p-8 sm:p-10 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl">
            <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">AKILLI UYARILAR</span>
            <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-noto)" }}>
              Sound Alerts from ABRA
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Pil gücü kritik seviyeye yaklaştığında veya olağandışı durumlarda hem uygulamadan bildirimler alın hem de sesli uyarı tonlarıyla güvende kalın.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
