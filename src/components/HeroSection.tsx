"use client";

import { useState, useRef } from "react";
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

  const galleryImages = [
    { src: "/images/new/14.jpeg", alt: "ABRA Smart Lock PRO", bg: "#f0f0f0", fit: "contain" },
    { src: "/images/new/8.jpeg",  alt: "ABRA - Siyah Kapı",    bg: "#111",    fit: "cover"   },
    { src: "/images/new/9.jpeg",  alt: "ABRA - Gri Kapı",      bg: "#e8e4de", fit: "cover"   },
    { src: "/images/new/11.jpeg", alt: "ABRA - İç Mekan",      bg: "#f5f2ee", fit: "cover"   },
    { src: "/images/new/10.jpeg", alt: "ABRA - Koyu Kapı",     bg: "#1a1a1a", fit: "cover"   },
    { src: "/images/new/1.jpeg",  alt: "ABRA vs Diğerleri",    bg: "#eee",    fit: "contain" },
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Gallery ── */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div
              className="relative w-full rounded-3xl overflow-hidden group/gallery border border-black/8 shadow-xl touch-pan-y"
              style={{ aspectRatio: "1/1", background: galleryImages[currentImage].bg }}
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
                    className={galleryImages[currentImage].fit === "cover" ? "object-cover" : "object-contain p-4"}
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
            <div className="hidden sm:flex gap-2.5 overflow-x-auto py-1 hide-scrollbar">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  style={{ background: img.bg }}
                  className={`relative flex-shrink-0 w-[72px] h-[72px] rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                    currentImage === idx
                      ? "border-primary shadow-lg shadow-primary/25 scale-105"
                      : "border-transparent opacity-55 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className={img.fit === "cover" ? "object-cover" : "object-contain p-1"} />
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
              style={{ fontFamily: "var(--font-noto)" }}
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

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-black/[0.03] border border-black/5"
            >
              {[
                { val: "<1s",  label: "Açılma süresi" },
                { val: "6ay",  label: "Pil ömrü"       },
                { val: "5dk",  label: "Kurulum"         },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-extrabold text-primary">{s.val}</p>
                  <p className="text-[11px] text-black/50 font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="space-y-4"
            >
              <a
                href="https://www.trendyol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all text-center shadow-xl shadow-primary/30 flex items-center justify-center gap-3 w-full text-lg hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                Trendyol&apos;dan Satın Al
              </a>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {["✓ 2 Yıl Garanti", "✓ Aynı Gün Kargo", "✓ Ücretsiz Destek"].map((b, i) => (
                  <span key={i} className="text-xs font-bold text-black/50">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
