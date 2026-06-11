"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "remote",
    title: "Uzaktan Kilit Yönetimi",
    subtitle: "Remote Lock / Unlock",
    description: "Wifi üzerinden dünyanın herhangi bir yerinden kapınızı açın veya kilitleyin. Misafiriniz geldiğinde telefondan tek tıkla erişim sağlayın.",
    stat: "Wi-Fi",
    statLabel: "Bağlantı",
    image: "/images/new/2.jpeg",
  },
  {
    id: "night",
    title: "Sessiz Gece Modu",
    subtitle: "Quiet Night Mode",
    description: "Gece geç saatlerde eve döndüğünüzde motor sesini minimuma indirin. Ailenizi uyandırmadan sessizce kapınızı açın.",
    stat: "<20dB",
    statLabel: "Gürültü Seviyesi",
    image: "/images/new/16.jpeg",
  },
  {
    id: "daynight",
    title: "Gündüz / Gece Modu",
    subtitle: "Daytime vs Nighttime",
    description: "Gündüz yarım tur kilitleme ile hızlı çıkış; gece tam kilitleme ile maksimum güvenlik. İki mod arasında otomatik geçiş.",
    stat: "2x",
    statLabel: "Güvenlik Modu",
    image: "/images/new/17.jpeg",
  },
  {
    id: "install",
    title: "Kolay Kurulum",
    subtitle: "Quick & Easy Installation",
    description: "Alet kutusu gerektirmez. Mevcut anahtarınızı ve kilidinizi değiştirmenize gerek yok. Dakikalar içinde kurulumu tamamlayın.",
    stat: "5dk",
    statLabel: "Kurulum Süresi",
    image: "/images/new/15.jpeg",
  },
];

// All door compatibility images
const compatibilitySlides = [
  { src: "/images/new/3.jpeg", alt: "Koyu Ahşap Kapı - ABRA Uyumlu" },
  { src: "/images/new/4.jpeg", alt: "Açık Ahşap Kapı - ABRA Uyumlu" },
  { src: "/images/new/5.jpeg", alt: "Beyaz Kapı - ABRA Uyumlu" },
  { src: "/images/new/6.jpeg", alt: "Bej Kapı - ABRA Uyumlu" },
  { src: "/images/new/7.jpeg", alt: "Bej Kapı Adaptör - ABRA Uyumlu" },
  { src: "/images/new/8.jpeg", alt: "Siyah Kapı - ABRA Uyumlu" },
  { src: "/images/new/9.jpeg", alt: "Gri Kapı - ABRA Uyumlu" },
  { src: "/images/new/10.jpeg", alt: "Koyu Kapı - ABRA Uyumlu" },
  { src: "/images/new/11.jpeg", alt: "İç Mekan Kapı - ABRA Uyumlu" },
  { src: "/images/new/12.jpeg", alt: "Gri Adaptör - ABRA Uyumlu" },
  { src: "/images/new/13.jpeg", alt: "Kahverengi Kapı - ABRA Uyumlu" },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % compatibilitySlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isDragging]);

  const goToBanner = useCallback((index: number) => {
    setBannerIndex((index + compatibilitySlides.length) % compatibilitySlides.length);
  }, []);

  const handleDragStart = (clientX: number) => { setIsDragging(true); setDragStartX(clientX); setDragOffset(0); };
  const handleDragMove = (clientX: number) => { if (!isDragging) return; setDragOffset(clientX - dragStartX); };
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 80) {
      goToBanner(dragOffset < 0 ? bannerIndex + 1 : bannerIndex - 1);
    }
    setDragOffset(0);
  };

  return (
    <section id="features" className="relative pt-24 pb-12 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">ÖZELLİKLER</span>
          <h2 className="heading-section text-white mb-6" style={{ fontFamily: "var(--font-noto)" }}>
            Neden ABRA Smart Lock PRO?
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">Gelişmiş teknoloji ile güvenliğinizi bir üst seviyeye taşıyın</p>
        </motion.div>

        {/* Feature Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-300 border backdrop-blur-xl ${
                activeTab === index
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/40"
                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-noto)" }}
            >
              {feature.subtitle}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Feature Image - Full Width */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-8 relative z-10 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full h-[300px] sm:h-[450px] lg:h-[600px] xl:h-[680px] rounded-3xl overflow-hidden bg-black group/feature"
          >
            <Image
              src={features[activeTab].image}
              alt={features[activeTab].title}
              fill
              className="object-cover transition-transform duration-700 group-hover/feature:scale-105"
              sizes="100vw"
              priority
            />
            {/* Overlay Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 lg:left-16 lg:bottom-16 max-w-lg bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hidden sm:block"
            >
              <h3 className="text-3xl font-bold text-white mb-3">{features[activeTab].title}</h3>
              <p className="text-white/80 text-base leading-relaxed mb-6">{features[activeTab].description}</p>
              <div className="flex items-center gap-6 text-primary font-bold">
                <div className="flex flex-col">
                  <span className="text-4xl tracking-tighter">{features[activeTab].stat}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">{features[activeTab].statLabel}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Compatibility Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">UYUMLULUK</span>
          <h2 className="heading-section text-white mb-4" style={{ fontFamily: "var(--font-noto)" }}>
            Her Kapıya Uyar
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">Ahşap, metal, cam — Avrupa standardındaki tüm kapı ve kilit sistemleriyle tam uyumluluk</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-8"
      >
        <div className="relative group">
          <div
            ref={carouselRef}
            className="relative rounded-3xl overflow-hidden bg-black select-none cursor-grab active:cursor-grabbing h-[300px] sm:h-[450px] lg:h-[580px] touch-pan-y"
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientX); }}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => { if (isDragging) handleDragEnd(); }}
          >
            <div
              className="flex h-full"
              style={{
                transform: `translateX(calc(-${bannerIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {compatibilitySlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="100vw"
                    draggable={false}
                  />
                  {/* Slide label */}
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
                    {index + 1} / {compatibilitySlides.length} — {slide.alt}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => goToBanner(bannerIndex - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Önceki"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => goToBanner(bannerIndex + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Sonraki"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {compatibilitySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setBannerIndex(index)}
                className={`carousel-dot ${bannerIndex === index ? "active" : ""}`}
                aria-label={`Görsel ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
