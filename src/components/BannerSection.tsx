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

  const bannerImages = [
    { src: "/images/new/14.jpeg", alt: "ABRA Kurulum Detay 1" },
    { src: "/images/new/15.jpeg", alt: "ABRA Kurulum Detay 2" },
    { src: "/images/new/16.jpeg", alt: "ABRA Gece Sessiz Açılma" },
    { src: "/images/new/17.jpeg", alt: "ABRA Gündüz Gece Modu" },
    { src: "/images/new/18.jpeg", alt: "ABRA USB Şarj Desteği" },
    { src: "/images/new/19.jpeg", alt: "ABRA Sesli Uyarılar" },
    { src: "/images/new/2.jpeg",  alt: "ABRA Uzaktan Kilitleme/Açma" },
  ];

  return (
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {bannerImages.map((img, idx) => (
          <div
            key={idx}
            className={`transition-all duration-700 w-full rounded-[2rem] overflow-hidden flex items-center justify-center`}
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(2rem)", transitionDelay: `${idx * 100}ms` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-contain block bg-[#121212] rounded-[2rem]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
