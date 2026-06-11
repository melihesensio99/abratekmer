"use client";

import { useEffect, useRef, useState } from "react";

// Satın Al Modalı için Mağaza Seçimi Popup
function PurchaseModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal content */}
      <div className="relative bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] w-full max-w-md p-8 sm:p-10 shadow-2xl text-center z-10">
        <button onClick={onClose} className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors text-2xl">&times;</button>
        <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">ABRA SMART LOCK PRO</span>
        <h4 className="text-2xl font-black text-white mb-6">Satın Al</h4>
        
        <div className="space-y-4">
          <a href="https://www.trendyol.com" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
            <span className="text-white font-bold text-lg">Trendyol</span>
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://www.amazon.com.tr" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
            <span className="text-white font-bold text-lg">Amazon</span>
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://www.hepsiburada.com" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
            <span className="text-white font-bold text-lg">Hepsiburada</span>
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── BÖLÜM 1: Gece Modu (Quiet Unlocking at Night) ── */}
        <div className="py-24 sm:py-32 border-b border-white/5">
          <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex flex-col justify-between p-8 sm:p-16">
            {/* Arka plan görseli - dramatik yatak odası */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (10).jpeg"
                alt="Quiet Unlocking at Night"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent" />
            </div>

            {/* Metin - sol üstte şık ve minimalist */}
            <div className="relative z-10 max-w-xl self-start">
              <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">GÜVENLİK MODU</span>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6" style={{ fontFamily: "var(--font-noto)" }}>
                Quiet Unlocking <br />at Night
              </h3>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi ve komşularınızı uyandırmadan sessizce kapınızı açın.
              </p>
            </div>

            {/* Satın al butonu - sol altta */}
            <div className="relative z-10 self-start mt-8">
              <button onClick={() => setModalOpen(true)} className="px-10 py-5 rounded-full bg-primary hover:bg-primary-hover text-white text-lg font-extrabold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Hemen Al
              </button>
            </div>
          </div>
        </div>

        {/* ── BÖLÜM 2: Kilit Modları (Faster Unlock, Smoother Exit) ── */}
        <div className="py-24 sm:py-32 border-b border-white/5">
          <div className="flex flex-col gap-12">
            {/* Büyük görsel odaklı yakın çekim */}
            <div className="w-full rounded-[2.5rem] overflow-hidden bg-[#0c0c0c] border border-white/5 p-4 flex items-center justify-center">
              <img
                src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (11).jpeg"
                alt="Faster Unlock, Smoother Exit. Safer Home."
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
            {/* Metin ve detaylar - görselin altında ferah yerleşim */}
            <div className="max-w-4xl mx-auto text-center px-4">
              <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">KİLİT MODLARI</span>
              <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-noto)" }}>
                Faster Unlock, Smoother Exit. Safer Home.
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-left mb-8">
                <div className="flex items-start gap-3 text-white/80 text-lg sm:text-xl leading-relaxed">
                  <span className="text-primary mt-2 flex-shrink-0 text-[10px]">●</span>
                  <span><strong>Daytime (Gündüz):</strong> Yarım kilit moduyla hızlı ve akıcı çıkış.</span>
                </div>
                <div className="flex items-start gap-3 text-white/80 text-lg sm:text-xl leading-relaxed">
                  <span className="text-primary mt-2 flex-shrink-0 text-[10px]">●</span>
                  <span><strong>Nighttime (Gece):</strong> Tam kilit moduyla maksimum güvenlikli ev.</span>
                </div>
              </div>
              <button onClick={() => setModalOpen(true)} className="px-10 py-5 rounded-full bg-primary hover:bg-primary-hover text-white text-lg font-extrabold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Hemen Al
              </button>
            </div>
          </div>
        </div>

        {/* ── BÖLÜM 3: Şarj Desteği (USB-C Acil Şarj Desteği) ── */}
        <div className="py-24 sm:py-32 border-b border-white/5">
          <div className="flex flex-col gap-12">
            {/* Büyük kompozisyon */}
            <div className="w-full rounded-[2.5rem] overflow-hidden bg-[#0c0c0c] border border-white/5 p-4 flex items-center justify-center">
              <img
                src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (12).jpeg"
                alt="USB-C Acil Şarj Desteği"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
            {/* Metin ve detaylar */}
            <div className="max-w-3xl mx-auto text-center px-4">
              <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">GÜÇ YÖNETİMİ</span>
              <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-noto)" }}>
                USB-C Acil Şarj Desteği
              </h3>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8">
                Beklenmedik durumlarda pil seviyesi tükendiğinde, dışarıdan powerbank ve USB-C kablosu yardımıyla acil güç beslemesi sağlayarak kapıda kalma riskini tamamen ortadan kaldırın.
              </p>
              <button onClick={() => setModalOpen(true)} className="px-10 py-5 rounded-full bg-primary hover:bg-primary-hover text-white text-lg font-extrabold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Hemen Al
              </button>
            </div>
          </div>
        </div>

        {/* ── BÖLÜM 4: Sesli Alarmlar (Sound Alerts from ABRA) ── */}
        <div className="py-24 sm:py-32">
          <div className="flex flex-col gap-12">
            {/* Kilidi ve uygulama ekranını içeren geniş kompozisyon */}
            <div className="w-full rounded-[2.5rem] overflow-hidden bg-[#0c0c0c] border border-white/5 p-4 flex items-center justify-center">
              <img
                src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (13).jpeg"
                alt="Sound Alerts from ABRA"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
            {/* Metin ve detaylar */}
            <div className="max-w-3xl mx-auto text-center px-4">
              <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">AKILLI UYARILAR</span>
              <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-noto)" }}>
                Sound Alerts from ABRA
              </h3>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8">
                Pil gücü kritik seviyeye yaklaştığında veya olağandışı zorlama durumlarında hem mobil uygulamanızdan anlık bildirimler alın hem de cihazın kendi sesli uyarı tonlarıyla güvende kalın.
              </p>
              <button onClick={() => setModalOpen(true)} className="px-10 py-5 rounded-full bg-primary hover:bg-primary-hover text-white text-lg font-extrabold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Hemen Al
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Satın Al Popup Modalı */}
      <PurchaseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
