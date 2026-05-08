"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTab3, setActiveTab3] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent, next: () => void, prev: () => void) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) next();
    if (touchStart - touchEnd < -50) prev();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const showcase1 = [
    {
      id: 2,
      image: "/images/2.png",
      title: "Hızlı Kilitleme",
    },
    {
      id: 3,
      image: "/images/3.png",
      title: "Sessiz Mod",
    },
    {
      id: 4,
      image: "/images/4.png",
      title: "Kolay Kurulum",
    },
  ];

  const showcase2 = [
    {
      id: 6,
      image: "/images/6.png",
      title: "Parmak İzi",
    },
    {
      id: 7,
      image: "/images/7.png",
      title: "Şifreli Giriş",
    },
    {
      id: 8,
      image: "/images/8.png",
      title: "Mobil Uygulama",
    },
    {
      id: 9,
      image: "/images/9.webp",
      title: "Otomatik Kilit",
    },
  ];

  const showcase3 = [
    {
      id: 10,
      image: "/images/10.png",
      title: "Adaptör Kiti",
    },
    {
      id: 11,
      image: "/images/11.png",
      title: "Orijinal Anahtar",
    },
    {
      id: 12,
      image: "/images/12.png",
      title: "Kiracı Dostu",
    },
  ];

  const nextTab1 = () => setActiveTab1((prev) => (prev + 1) % showcase1.length);
  const prevTab1 = () => setActiveTab1((prev) => (prev - 1 + showcase1.length) % showcase1.length);
  const nextTab2 = () => setActiveTab2((prev) => (prev + 1) % showcase2.length);
  const prevTab2 = () => setActiveTab2((prev) => (prev - 1 + showcase2.length) % showcase2.length);
  const nextTab3 = () => setActiveTab3((prev) => (prev + 1) % showcase3.length);
  const prevTab3 = () => setActiveTab3((prev) => (prev - 1 + showcase3.length) % showcase3.length);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Image Banner (1.png) */}
        <div 
          className={`relative rounded-[2rem] overflow-hidden mb-16 reveal ${
            isVisible ? "active" : ""
          }`}
        >
          {/* Using a gray background that matches the screenshot's banner-1.png edges */}
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full bg-[#f6f6f6]">
            <Image
              src="/images/1.png"
              alt="Abra Smart Lock PRO"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Neden ABRA Heading */}
        <div className={`text-center mb-16 reveal delay-200 ${isVisible ? "active" : ""}`}>
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">GÜVENLİK VE KONFOR</span>
          <h2 className="heading-section text-white mb-6">
            Neden ABRA Smart Lock PRO?
          </h2>
          <p className="text-body-large max-w-3xl mx-auto">Gelişmiş teknolojiyi şık tasarımla birleştiren ABRA, evinizin güvenliğini tamamen sizin kontrolünüze bırakır.</p>
        </div>

        {/* Tabbed Showcase 1 (2, 3, 4.png) */}
        <div className={`mb-16 group/s1 reveal delay-300 ${isVisible ? "active" : ""}`}>
          <div className="relative w-full rounded-[3rem] overflow-hidden bg-black border border-white/5 shadow-2xl shadow-black/80">
            {/* Buttons positioned ABOVE the banner on mobile, OVER on desktop */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-4 sm:absolute sm:top-10 sm:left-0 sm:right-0 z-20">
              {showcase1.map((item, index) => (
                <button
                  key={item.id}
                  onClick={(e) => { e.stopPropagation(); setActiveTab1(index); }}
                  className={`px-4 sm:px-10 py-2 sm:py-3.5 rounded-full text-xs sm:text-base font-extrabold transition-all duration-300 border backdrop-blur-xl pointer-events-auto ${
                    activeTab1 === index 
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/40" 
                      : "bg-white/10 sm:bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                  style={{ fontFamily: 'var(--font-noto)' }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <button 
              onClick={prevTab1}
              className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass-light flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/s1:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextTab1}
              className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass-light flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/s1:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div 
              className="relative aspect-video w-full touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, nextTab1, prevTab1)}
            >
              {showcase1.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    activeTab1 === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabbed Showcase 2 (6, 7, 8, 9.png) */}
        <div className={`mb-16 group/s2 reveal delay-400 ${isVisible ? "active" : ""}`}>
          <div className="relative w-full rounded-[3rem] overflow-hidden bg-black border border-white/5 shadow-2xl shadow-black/80">
            {/* Buttons positioned ABOVE the banner on mobile, OVER on desktop */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-4 sm:absolute sm:top-10 sm:left-0 sm:right-0 z-20">
              {showcase2.map((item, index) => (
                <button
                  key={item.id}
                  onClick={(e) => { e.stopPropagation(); setActiveTab2(index); }}
                  className={`px-4 sm:px-10 py-2 sm:py-3.5 rounded-full text-xs sm:text-base font-extrabold transition-all duration-300 border backdrop-blur-xl pointer-events-auto ${
                    activeTab2 === index 
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/40" 
                      : "bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                  style={{ fontFamily: 'var(--font-noto)' }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <button 
              onClick={prevTab2}
              className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass-light flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/s2:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextTab2}
              className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass-light flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/s2:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div 
              className="relative aspect-video w-full touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, nextTab2, prevTab2)}
            >
              {showcase2.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    activeTab2 === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabbed Showcase 3 (Adaptor, Upgrade, etc.) */}
        <div className={`group/s3 reveal delay-500 ${isVisible ? "active" : ""}`}>
          <div className="relative w-full rounded-[3rem] overflow-hidden bg-black border border-white/5 shadow-2xl shadow-black/80">
            {/* Buttons positioned ABOVE the banner on mobile, OVER on desktop */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-4 sm:absolute sm:top-10 sm:left-0 sm:right-0 z-20">
              {showcase3.map((item, index) => (
                <button
                  key={item.id}
                  onClick={(e) => { e.stopPropagation(); setActiveTab3(index); }}
                  className={`px-4 sm:px-10 py-2 sm:py-3.5 rounded-full text-xs sm:text-base font-extrabold transition-all duration-300 border backdrop-blur-xl pointer-events-auto ${
                    activeTab3 === index 
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/40" 
                      : "bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                  style={{ fontFamily: 'var(--font-noto)' }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <button 
              onClick={prevTab3}
              className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass-light flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/s3:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextTab3}
              className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass-light flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all opacity-0 group-hover/s3:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div 
              className="relative aspect-video w-full touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, nextTab3, prevTab3)}
            >
              {showcase3.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    activeTab3 === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
