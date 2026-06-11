"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    if (touchStart - touchEnd < -50) setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Gallery: diverse door installations showing compatibility
  const galleryImages = [
    { src: "/images/new/14.jpeg", alt: "ABRA Smart Lock PRO" },
    { src: "/images/new/8.jpeg", alt: "ABRA - Siyah Kapı Kurulumu" },
    { src: "/images/new/9.jpeg", alt: "ABRA - Gri Kapı Kurulumu" },
    { src: "/images/new/11.jpeg", alt: "ABRA - İç Mekan Kurulumu" },
    { src: "/images/new/3.jpeg", alt: "ABRA - Ahşap Kapı Kurulumu" },
    { src: "/images/new/1.jpeg", alt: "ABRA - Diğer Kilit Sistemleriyle Karşılaştırma" },
  ];

  return (
    <section id="hero" className="relative bg-white pt-20 sm:pt-28 pb-12 sm:pb-20 text-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left - Product Gallery */}
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div 
              className="relative aspect-square w-full rounded-2xl bg-[#f8f9fa] overflow-hidden group/gallery border border-black/5 touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
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
              
              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-black/60">
                {currentImage + 1} / {galleryImages.length}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover/gallery:opacity-100 backdrop-blur-sm z-[100] pointer-events-auto cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setCurrentImage((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover/gallery:opacity-100 backdrop-blur-sm z-[100] pointer-events-auto cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto py-2 snap-x hide-scrollbar relative z-[100] touch-manipulation">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onClick={() => setCurrentImage(idx)}
                  onTouchEnd={(e) => { e.preventDefault(); setCurrentImage(idx); }}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 overflow-hidden bg-[#f8f9fa] transition-all duration-300 pointer-events-auto cursor-pointer select-none ${
                    currentImage === idx ? "border-primary shadow-lg shadow-primary/20 opacity-100" : "border-transparent opacity-50"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover pointer-events-none" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Product Info */}
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Yeni Nesil Akıllı Kilit
              </motion.div>
              <motion.h1 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-black" style={{ fontFamily: "var(--font-noto)" }}
              >
                ABRA Smart Lock <span className="text-primary">PRO</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-6 text-sm mb-6"
              >
                <div className="flex items-center text-yellow-500 bg-yellow-500/5 px-3 py-1 rounded-full border border-yellow-500/20">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <span className="ml-2 text-yellow-700 font-bold">4.8</span>
                </div>
                <span className="text-black/20 w-px h-4 bg-black/20" />
                <span className="text-black/60 font-bold tracking-wide uppercase text-xs">500+ Başarılı Teslimat</span>
              </motion.div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "⚡", title: "Ultra Hızlı Açılma", desc: "Saniyeden az sürede kapınızı açın" },
                { icon: "🔕", title: "Sessiz Gece Modu", desc: "Gece geç saatlerde kimseyi uyandırmayın" },
                { icon: "🔧", title: "Kolay Kurulum", desc: "Alet gerektirmez, mevcut kilidi değiştirme yok" },
                { icon: "🌍", title: "Evrensel Uyumluluk", desc: "Tüm Avrupa tipi kapı ve kilit sistemleriyle uyumlu" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-black/5 hover:border-primary/20 hover:bg-primary/2 transition-all"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-extrabold text-black text-sm">{item.title}</p>
                    <p className="text-black/60 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto space-y-4 pt-6 border-t border-black/10">
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.trendyol.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all text-center shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 w-full text-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Trendyol&apos;dan Satın Al
              </motion.a>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {["✓ 2 Yıl Garanti", "✓ Aynı Gün Kargo", "✓ Ücretsiz Kurulum Desteği"].map((badge, i) => (
                  <span key={i} className="text-xs font-bold text-black/60">{badge}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
