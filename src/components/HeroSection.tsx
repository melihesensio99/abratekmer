"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const stores = [
  {
    name: "Trendyol",
    url: "https://www.trendyol.com",
    color: "#f27a1a",
    description: "Yetkili ABRA Resmi Satıcı Mağazası",
    badge: "Popüler",
    logo: (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f27a1a]/10 group-hover:bg-[#f27a1a]/20 transition-colors">
        <span className="text-xl font-black text-[#f27a1a]">ty</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    url: "https://www.amazon.com.tr",
    color: "#ff9900",
    description: "Hızlı Gönderim & Amazon Güvencesi",
    badge: "Tavsiye Edilen",
    logo: (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#232f3e]/10 group-hover:bg-[#232f3e]/20 transition-colors">
        <span className="text-base font-extrabold text-[#232f3e] tracking-tighter">a</span>
      </div>
    ),
  },
  {
    name: "Hepsiburada",
    url: "https://www.hepsiburada.com",
    color: "#ff6000",
    description: "Kolay İade & Taksit Seçenekleri",
    badge: "Hızlı Teslimat",
    logo: (
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#ff6000]/10 group-hover:bg-[#ff6000]/20 transition-colors">
        <span className="text-lg font-black text-[#ff6000]">hb</span>
      </div>
    ),
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [storeModal, setStoreModal] = useState(false);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeThumbnail = thumbnailRefs.current[currentImage];
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [currentImage]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    if (touchStart - touchEnd < -50) setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const galleryImages = [
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34.jpeg", alt: "ABRA Akıllı Kilit 1" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (1).jpeg", alt: "ABRA Akıllı Kilit 2" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (2).jpeg", alt: "ABRA Akıllı Kilit 3" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (3).jpeg", alt: "ABRA Akıllı Kilit 4" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (4).jpeg", alt: "ABRA Akıllı Kilit 5" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (5).jpeg", alt: "ABRA Akıllı Kilit 6" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (6).jpeg", alt: "ABRA Akıllı Kilit 7" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.34 (7).jpeg", alt: "ABRA Akıllı Kilit 8" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.33 (2).jpeg", alt: "ABRA Akıllı Kilit 9" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.33 (3).jpeg", alt: "ABRA Akıllı Kilit 10" },
    { src: "/images/new/bas/WhatsApp Image 2026-06-04 at 10.58.33 (4).jpeg", alt: "ABRA Akıllı Kilit 11" },
  ];

  const benefits = [
    { icon: "⚡", title: "Ultra Hızlı Açılma",     desc: "Saniyeden az sürede kapınızı açın" },
    { icon: "🔕", title: "Sessiz Gece Modu",        desc: "Gece geç saatlerde kimseyi uyandırmayın" },
    { icon: "🔧", title: "Kolay Kurulum",           desc: "Alet gerektirmez, mevcut kilidi değiştirme yok" },
    { icon: "🌍", title: "Evrensel Uyumluluk",      desc: "Tüm Avrupa tipi kapı ve kilit sistemleriyle uyumlu" },
  ];

  return (
    <section id="hero" className="relative bg-white pt-20 sm:pt-28 pb-12 sm:pb-20 text-black overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[140px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">

          {/* ── Left: Gallery ── */}
          <div className="flex flex-col gap-4 max-w-lg mx-auto w-full sticky top-24">
            {/* Ana görsel */}
            <div
              className="relative w-full rounded-3xl overflow-hidden group/gallery shadow-xl touch-pan-y"
              style={{ aspectRatio: "3/4", maxHeight: "650px" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[currentImage].src}
                    alt={galleryImages[currentImage].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Counter pill */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-black/70 shadow-sm z-10">
                {currentImage + 1} / {galleryImages.length}
              </div>

              {/* Arrows */}
              <button
                onClick={() => setCurrentImage((p) => (p - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all hover:bg-white z-10"
                aria-label="Önceki"
              >
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                onClick={() => setCurrentImage((p) => (p + 1) % galleryImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all hover:bg-white z-10"
                aria-label="Sonraki"
              >
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>

              {/* Mobile: bottom dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:hidden z-10">
                {galleryImages.map((_, i) => (
                  <button key={i} onClick={() => setCurrentImage(i)}
                    className={`h-1.5 rounded-full transition-all ${i === currentImage ? "w-5 bg-primary" : "w-1.5 bg-black/30"}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div ref={thumbnailsContainerRef} className="hidden sm:flex gap-2.5 overflow-x-auto py-1 hide-scrollbar">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  ref={(el) => { thumbnailRefs.current[idx] = el; }}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative flex-shrink-0 w-[72px] h-[96px] rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                    currentImage === idx
                      ? "border-primary shadow-lg shadow-primary/25 scale-105"
                      : "border-transparent opacity-55 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* ── Right: Info ── */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-5 w-fit"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Yeni Nesil Akıllı Kilit
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 text-black leading-[1.05]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              ABRA Smart Lock <span className="text-primary">PRO</span>
            </motion.h1>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
                <span className="ml-1 text-yellow-700 font-bold text-sm">4.8</span>
              </div>
              <span className="text-black/50 text-sm font-semibold">500+ Başarılı Teslimat</span>
            </motion.div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-black/6 hover:border-primary/25 hover:bg-primary/[0.03] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">{item.title}</p>
                    <p className="text-black/55 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Store / Play Store */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mb-8"
            >
              <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3">Mobil Uygulamayı İndir</p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-all hover:-translate-y-0.5 shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] leading-none opacity-70">Download on the</p>
                    <p className="text-sm font-bold leading-tight">App Store</p>
                  </div>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-all hover:-translate-y-0.5 shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-7.27-2.75-2.75-10.84 9.83zM.5 1.4C.18 1.72 0 2.22 0 2.89v18.22c0 .67.18 1.17.5 1.49l.08.07L10.89 12.5v-.24L.58 1.33.5 1.4zM21.64 10.65l-2.95-1.7-3.19 3.19 3.19 3.19 2.97-1.71c.85-.49.85-1.28-.02-1.97zM4.17.24L16.77 7.5l-2.75 2.75L3.18.42c.3-.17.66-.21.99-.18z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] leading-none opacity-70">Get it on</p>
                    <p className="text-sm font-bold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="space-y-4"
            >
              <button
                onClick={() => setStoreModal(true)}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all text-center shadow-xl shadow-primary/30 flex items-center justify-center gap-3 w-full text-lg hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                Satın Al
              </button>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {["✓ 2 Yıl Garanti", "✓ Aynı Gün Kargo", "✓ Ücretsiz Destek"].map((b, i) => (
                  <span key={i} className="text-xs font-bold text-black/50">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Store Modal ── */}
      <AnimatePresence>
        {storeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setStoreModal(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="relative bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 sm:p-10 z-10 text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

              {/* Close */}
              <button onClick={() => setStoreModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <span className="text-primary font-extrabold text-xs tracking-widest uppercase mb-2 block">ABRA SMART LOCK PRO</span>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-2" style={{ fontFamily: "var(--font-outfit)" }}>Nereden Satın Almak İstersiniz?</h3>
              <p className="text-gray-500 text-sm mb-8">Güvendiğiniz platformdan kolayca sipariş verin</p>

              <div className="space-y-4">
                {stores.map((store) => (
                  <a
                    key={store.name}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group relative overflow-hidden"
                    style={{
                      ["--hover-glow" as any]: `${store.color}15`
                    }}
                  >
                    {/* Brand glow overlay on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                      style={{
                        background: `radial-gradient(circle at 20px 50%, ${store.color}08, transparent 60%)`
                      }}
                    />

                    <div className="flex items-center gap-4 relative z-10">
                      {store.logo}
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-gray-900 text-base">{store.name}</span>
                          {store.badge && (
                            <span 
                              className="text-[9px] font-bold px-1.5 py-0.5 rounded-md"
                              style={{ 
                                backgroundColor: `${store.color}10`,
                                color: store.color 
                              }}
                            >
                              {store.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 font-medium block mt-0.5">{store.description}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-primary/25 transition-colors relative z-10">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-2">
                {[
                  { icon: "🛡️", text: "Güvenli Ödeme" },
                  { icon: "🚚", text: "Hızlı Kargo" },
                  { icon: "🔄", text: "Kolay İade" }
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-[10px] font-bold text-gray-600 tracking-tight">{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
