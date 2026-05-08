"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "unlock",
    title: "Hızlı Kilit Açma",
    subtitle: "Ultra-Fast Unlocking",
    description: "Kapınızı saniyeler içinde açın. Bluetooth bağlantısı ile yaklaştığınızda otomatik kilit açma.",
    stat: "<1s",
    statLabel: "Kilit Açma Süresi",
    image: "/images/2.png",
  },
  {
    id: "quiet",
    title: "Sessiz Mod",
    subtitle: "Quiet Mode",
    description: "Gece geç saatlerde eve döndüğünüzde kimseyi rahatsız etmeyin. Otomatik gece modu ile ses kapatılır.",
    stat: "<20dB",
    statLabel: "Gürültü Seviyesi",
    image: "/images/1.png",
  },
  {
    id: "european",
    title: "Avrupa Kilitleri İçin",
    subtitle: "Designed for European Locks",
    description: "Hem kısmi hem de tam kilitleme desteği. Gündüz hızlı çıkış, gece ek güvenlik.",
    stat: "2x",
    statLabel: "Kilitleme Modu",
    image: "/images/4.png",
  },
];

const bannerSlides = [
  { src: "/images/2.png", alt: "ABRA Smart Lock PRO - Temel Özellikler" },
  { src: "/images/7.png", alt: "ABRA Smart Lock PRO - Güvenlik" },
  { src: "/images/8.png", alt: "ABRA Smart Lock PRO - Akıllı Ev" },
  { src: "/images/10.png", alt: "ABRA Smart Lock PRO - Adaptör Kiti" },
  { src: "/images/11.png", alt: "ABRA Smart Lock PRO - Orijinal Anahtar" },
  { src: "/images/12.png", alt: "ABRA Smart Lock PRO - Kiracı Dostu" },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play banner carousel
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  const goToBanner = useCallback((index: number) => {
    setBannerIndex((index + bannerSlides.length) % bannerSlides.length);
  }, []);

  // Mouse drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 80) {
      if (dragOffset < 0) {
        goToBanner(bannerIndex + 1);
      } else {
        goToBanner(bannerIndex - 1);
      }
    }
    setDragOffset(0);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleDragEnd();

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => { e.preventDefault(); handleDragStart(e.clientX); };
  const handleMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();
  const handleMouseLeave = () => { if (isDragging) handleDragEnd(); };

  return (
    <section id="features" className="relative pt-24 pb-12 bg-background overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full translate-y-1/2" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block"
          >
            ÖZELLİKLER
          </motion.span>
          <h2 className="heading-section text-white mb-6" style={{ fontFamily: "var(--font-noto)" }}>
            Neden ABRA Smart Lock PRO?
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">Gelişmiş teknoloji ile güvenliğinizi bir üst seviyeye taşıyın</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {features.map((feature, index) => (
            <motion.button 
              key={feature.id} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)} 
              className={`px-8 py-3 rounded-full text-base font-extrabold transition-all duration-300 border backdrop-blur-xl ${
                activeTab === index 
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/40" 
                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-noto)" }}
            >
              {feature.subtitle}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Full Width Feature Tab Images */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[700px] rounded-3xl overflow-hidden bg-black flex items-center justify-center p-4 group/feature"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image 
                src={features[activeTab].image} 
                alt={features[activeTab].title} 
                fill 
                className="object-contain transition-transform duration-700 group-hover/feature:scale-105" 
                sizes="100vw" 
                priority
              />
            </motion.div>
            
            {/* Feature Info Overlay (Premium Touch) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 lg:left-16 lg:bottom-16 max-w-lg bg-black/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hidden sm:block"
            >
              <h3 className="text-3xl font-bold text-white mb-4">{features[activeTab].title}</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">{features[activeTab].description}</p>
              <div className="flex items-center gap-6 text-primary font-bold">
                <div className="flex flex-col">
                  <span className="text-5xl tracking-tighter">{features[activeTab].stat}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">{features[activeTab].statLabel}</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] text-white">U</div>
                    ))}
                  </div>
                  <span className="text-xs text-white/60 font-medium">1.2k+ Memnun Kullanıcı</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Swipeable Banner Carousel - Full Width / Large */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-8"
      >
        <div className="relative group">
          <div
            ref={carouselRef}
            className="relative rounded-3xl overflow-hidden bg-black select-none cursor-grab active:cursor-grabbing h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[700px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex h-full"
              style={{
                transform: `translateX(calc(-${bannerIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {bannerSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full relative flex items-center justify-center p-4">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-contain pointer-events-none"
                    sizes="100vw"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => goToBanner(bannerIndex - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Önceki banner"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToBanner(bannerIndex + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Sonraki banner"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setBannerIndex(index)}
                className={`carousel-dot ${bannerIndex === index ? "active" : ""}`}
                aria-label={`Banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
