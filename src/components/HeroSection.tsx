"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<string[]>(["desc"]);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) setCurrentImage((prev) => (prev + 1) % images.length);
    if (touchStart - touchEnd < -50) setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const images = [
    { src: "/images/anasayfa/haha1.png", alt: "ABRA Smart Lock PRO - Ana Görünüm" },
    { src: "/images/anasayfa/haha.png", alt: "ABRA Smart Lock PRO - Şık Tasarım" },
    { src: "/images/anasayfa/hah123a.png", alt: "ABRA Smart Lock PRO - Detaylar" },
    { src: "/images/anasayfa/hah123123a.png", alt: "ABRA Smart Lock PRO - Teknoloji" },
    { src: "/images/anasayfa/12312312.png", alt: "ABRA Smart Lock PRO - Kullanım" },
    { src: "/images/anasayfa/123.png", alt: "ABRA Smart Lock PRO - Güvenlik" },
  ];

  return (
    <section id="hero" className="relative bg-white pt-20 sm:pt-28 pb-12 sm:pb-20 text-black overflow-hidden">
      {/* Background Accent */}
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
              className="relative aspect-square w-full rounded-2xl bg-black overflow-hidden group/gallery border border-black/5 touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Floating Element Effect for the first image */}
              {currentImage === 0 && (
                <motion.div 
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 pointer-events-none"
                />
              )}
              
              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-black/60">
                {currentImage + 1} / {images.length}
              </div>

              {/* Image Navigation Arrows - Always visible on mobile */}
              <button 
                onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover/gallery:opacity-100 backdrop-blur-sm z-[100] pointer-events-auto cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover/gallery:opacity-100 backdrop-blur-sm z-[100] pointer-events-auto cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            
            <div className="flex gap-3 overflow-x-auto py-2 snap-x hide-scrollbar relative z-[100] touch-manipulation">
              {images.map((img, idx) => (
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
              <motion.h1 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-black" style={{ fontFamily: "var(--font-noto)" }}
              >
                ABRA Smart Lock PRO
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-6 text-sm mb-6"
              >
                <div className="flex items-center text-yellow-500 bg-yellow-500/5 px-3 py-1 rounded-full border border-yellow-500/20">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <span className="ml-2 text-yellow-700 font-bold">4.8</span>
                </div>
                <span className="text-black/20 w-px h-4 bg-black/20" />
                <span className="text-black/60 font-bold tracking-wide uppercase text-xs">Yeni Ürün</span>
              </motion.div>
            </div>

            {/* Accordions */}
            <div className="space-y-4 mb-8">
              {/* Accordion 1: Ürün Açıklaması */}
              <div className="border-b border-black/5 pb-4">
                <button 
                  onClick={() => toggleAccordion('desc')}
                  className="w-full flex items-center justify-between py-3 text-left text-black font-extrabold hover:text-primary transition-all text-lg sm:text-xl group"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  Ürün Açıklaması
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openAccordions.includes('desc') ? 'bg-primary text-white rotate-180' : 'bg-black/5 text-black/40 group-hover:bg-black/10'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordions.includes('desc') && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-5 text-base sm:text-lg text-black/70 leading-relaxed list-none mt-5">
                        <li className="flex gap-4">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <p><strong className="text-black font-extrabold">Ultra Hızlı Kilit Açma:</strong> Saniyeden daha kısa sürede kapınızı açın. Bekleme yok, gecikme yok.</p>
                        </li>
                        <li className="flex gap-4">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <p><strong className="text-black font-extrabold">Sessiz Mod Desteği:</strong> Gece geç saatlerde eve dönerken ailenizi uyandırmayın. Sessiz mod ile motor sesini minimuma indirin.</p>
                        </li>
                        <li className="flex gap-4">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <p><strong className="text-black font-extrabold">Avrupa Tipi Kilitlere Tam Uyum:</strong> Hem tam hem yarım tur kilitleme seçenekleriyle üst düzey güvenlik.</p>
                        </li>
                        <li className="flex gap-4">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <p><strong className="text-black font-extrabold">Geniş Uyumluluk & Kolay Kurulum:</strong> Mevcut anahtarınızı değiştirmeden sadece birkaç dakika içinde kolayca monte edin.</p>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 2: Teknik Özellikler */}
              <div className="border-b border-black/5 pb-4">
                <button 
                  onClick={() => toggleAccordion('specs')}
                  className="w-full flex items-center justify-between py-3 text-left text-black font-extrabold hover:text-primary transition-all text-lg sm:text-xl group"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  Teknik Özellikler
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openAccordions.includes('specs') ? 'bg-primary text-white rotate-180' : 'bg-black/5 text-black/40 group-hover:bg-black/10'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordions.includes('specs') && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 text-base sm:text-lg text-black/70 pb-2 mt-5">
                        <div className="flex justify-between border-b border-black/5 pb-2">
                          <strong className="text-black font-extrabold">Bağlantı</strong>
                          <span>Wi-Fi & Bluetooth 5.0</span>
                        </div>
                        <div className="flex justify-between border-b border-black/5 pb-2">
                          <strong className="text-black font-extrabold">Pil Ömrü</strong>
                          <span>4x AA Pil ile 6 aya varan kullanım</span>
                        </div>
                        <div className="flex justify-between border-b border-black/5 pb-2">
                          <strong className="text-black font-extrabold">Malzeme</strong>
                          <span>Yüksek dayanımlı alüminyum alaşım</span>
                        </div>
                        <div className="flex justify-between border-b border-black/5 pb-2">
                          <strong className="text-black font-extrabold">Uygulama</strong>
                          <span>iOS ve Android uyumlu ABRA App</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 3: Kutu İçeriği & Garanti */}
              <div className="border-b border-black/5 pb-4">
                <button 
                  onClick={() => toggleAccordion('warranty')}
                  className="w-full flex items-center justify-between py-3 text-left text-black font-extrabold hover:text-primary transition-all text-lg sm:text-xl group"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  Kutu İçeriği & Garanti
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openAccordions.includes('warranty') ? 'bg-primary text-white rotate-180' : 'bg-black/5 text-black/40 group-hover:bg-black/10'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openAccordions.includes('warranty') && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                       <p className="text-base sm:text-lg text-black font-bold mb-4 mt-5">Tüm akıllı kilitlerimiz 2 yıl ABRA garantisi altındadır.</p>
                       <ul className="text-base sm:text-lg text-black/70 list-none space-y-3">
                         <li className="flex items-center gap-3">
                           <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                           ABRA Smart Lock PRO
                         </li>
                         <li className="flex items-center gap-3">
                           <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                           Montaj aparatları ve vidalar
                         </li>
                         <li className="flex items-center gap-3">
                           <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                           Kullanım kılavuzu ve garanti belgesi
                         </li>
                       </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Color & Buy */}
            <div className="mt-auto space-y-6 pt-6 border-t border-black/10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <div>
                  <p className="text-sm font-semibold mb-2 text-black">Renk Seçenekleri</p>
                  <div className="flex gap-2">
                    {["#1a1a1a", "#c0c0c0", "#d4a853"].map((color, i) => (
                      <motion.button 
                        key={i} 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full border border-black/20 focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                        style={{ backgroundColor: color }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section with Social Proof */}
              <div className="mt-10 space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.trendyol.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all text-center shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 w-full sm:w-auto text-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    Trendyol&apos;dan Satın Al
                  </motion.a>

                  <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                      <span className="text-black font-extrabold text-lg ml-1">4.8</span>
                    </div>
                    <p className="text-black/50 text-[10px] font-bold tracking-[0.2em] uppercase leading-none">Trendyol En Çok Satan</p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-xs font-bold text-black/60">500+ Başarılı Teslimat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-xs font-bold text-black/60">Aynı Gün Ücretsiz Kargo</span>
                  </div>
                </div>
              </div>

              {/* App Stores & Social */}
              <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                <div>
                  <p className="text-[10px] font-bold text-black/40 mb-4 uppercase tracking-[0.2em]">Uygulamayı İndir</p>
                  <div className="flex flex-wrap gap-3">
                    <motion.a whileHover={{ y: -2 }} href="#" className="h-10 hover:opacity-80 transition-opacity">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="h-full object-contain" />
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} href="#" className="h-10 hover:opacity-80 transition-opacity">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-full object-contain" />
                    </motion.a>
                  </div>
                </div>

                <div className="sm:text-right">
                  <p className="text-[10px] font-bold text-black/40 mb-4 uppercase tracking-[0.2em]">Bizi Takip Edin</p>
                  <div className="flex gap-4 sm:justify-end">
                    {[
                      { icon: "instagram", path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
                      { icon: "twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                      { icon: "facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }
                    ].map((social, i) => (
                      <motion.a 
                        key={i}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
                        whileTap={{ scale: 0.9 }}
                        href="#" 
                        className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/70 hover:text-black transition-colors" 
                        aria-label={social.icon}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule={social.icon === "instagram" || social.icon === "facebook" ? "evenodd" : "nonzero"} d={social.path} clipRule={social.icon === "instagram" || social.icon === "facebook" ? "evenodd" : "nonzero"} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Transition Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform translate-y-px">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.94,9.41,102.37,27.34,42.92,24.5,83.91,61,134.44,70.28,64,11.73,124-21.36,183.71-47.5C930.56,23.29,1030.38,4,1123.61,12.22c42.06,3.7,82.39,18.1,121.39,34.25V0Z" className="fill-white opacity-20"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white opacity-40"></path>
        </svg>
      </div>
    </section>
  );
}
