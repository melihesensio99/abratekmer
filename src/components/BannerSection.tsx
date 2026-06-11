"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const installImages = [
  { src: "/images/new/3.jpeg",  bg: "#c8b89a", label: "Koyu Ahşap Kapı"    },
  { src: "/images/new/4.jpeg",  bg: "#c0a870", label: "Açık Ahşap Kapı"    },
  { src: "/images/new/5.jpeg",  bg: "#ede8e0", label: "Beyaz Kapı"         },
  { src: "/images/new/6.jpeg",  bg: "#e8ddd0", label: "Bej (Yuvarlak)"     },
  { src: "/images/new/7.jpeg",  bg: "#e5ddd2", label: "Bej (Oval)"         },
  { src: "/images/new/8.jpeg",  bg: "#111",    label: "Siyah Çelik Kapı"   },
  { src: "/images/new/9.jpeg",  bg: "#4a4a4a", label: "Gri Çelik Kapı"     },
  { src: "/images/new/10.jpeg", bg: "#2a2a2a", label: "Koyu Kare Kol"      },
  { src: "/images/new/11.jpeg", bg: "#f0ebe4", label: "İç Mekan"           },
  { src: "/images/new/12.jpeg", bg: "#c8c0b0", label: "Bej (Döner)"        },
  { src: "/images/new/13.jpeg", bg: "#4a3828", label: "Kahverengi Ahşap"   },
];

// Promo card — tam 16:9, kırpmasız, şeffaf metin overlay
function PromoCard({
  src, bg, alt, label, title, desc, side = "left",
  sizes = "100vw",
}: {
  src: string; bg: string; alt: string;
  label?: string; title?: string; desc?: string;
  side?: "left" | "right";
  sizes?: string;
}) {
  const hasText = title || desc;
  return (
    // Aspect ratio wrapper — görsel BU kutunun içinde
    <div className="relative w-full overflow-hidden rounded-[2rem]" style={{ aspectRatio: "16/9", background: bg }}>
      <Image src={src} alt={alt} fill className="object-contain" sizes={sizes} />

      {/* Gradient — sadece metin varsa */}
      {hasText && (
        <div className={`absolute inset-0 bg-gradient-to-${side === "left" ? "r" : "l"} from-black/70 via-black/20 to-transparent pointer-events-none`} />
      )}

      {/* Metin — şeffaf, arka plan yok */}
      {hasText && (
        <div className={`absolute top-1/2 -translate-y-1/2 max-w-xs sm:max-w-sm px-6 sm:px-10 ${side === "left" ? "left-0" : "right-0 text-right"}`}>
          {label && <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-2">{label}</span>}
          {title && <h3 className="text-white text-xl sm:text-3xl font-extrabold leading-tight mb-3 drop-shadow-lg">{title}</h3>}
          {desc  && <p className="text-white/80 text-sm sm:text-base leading-relaxed drop-shadow">{desc}</p>}
        </div>
      )}
    </div>
  );
}

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInstall, setActiveInstall] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveInstall(p => (p + 1) % installImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 1. Hızlı Kolay Kurulum (16:9, sadece görsel) */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem]" style={{ aspectRatio: "16/9", background: "#f0f0f0" }}>
            <Image src="/images/new/14.jpeg" alt="ABRA Smart Lock PRO - Hızlı ve Kolay Kurulum"
              fill className="object-contain" sizes="100vw" priority />
          </div>
        </div>

        {/* 2. Başlık */}
        <div className={`text-center py-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">NEDEN ABRA?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-white/55 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Mevcut kapınızı ve kilit sisteminizi değiştirmenize gerek yok. ABRA, dakikalar içinde kurulur ve hayatınızı kolaylaştırır.
          </p>
        </div>

        {/* 3. Kurulum Avantajları (sadece görsel, başlıklar görselin içinde) */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative w-full overflow-hidden rounded-[2rem]" style={{ aspectRatio: "16/9", background: "#f0f0f0" }}>
            <Image src="/images/new/15.jpeg" alt="Alet Gerektirmez, Anahtar Değiştirme Yok, Tüm Kapılarla Uyumlu"
              fill className="object-contain" sizes="100vw" />
          </div>
        </div>

        {/* 4. Night Mode + Day/Night yan yana */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <PromoCard
            src="/images/new/16.jpeg" bg="#d8d4ce"
            alt="Sessiz Gece Açılması"
            label="Night Mode" title="Sessiz Gece Açılması"
            desc="Gece geç dönerken aileni uyandırma" sizes="50vw"
          />
          <PromoCard
            src="/images/new/17.jpeg" bg="#f0f0f0"
            alt="Gündüz Gece Kilitleme Karşılaştırması"
            label="Dual Mode" title="Gündüz & Gece Modu"
            desc="Gündüz hızlı çıkış, gece tam güvenlik" side="right" sizes="50vw"
          />
        </div>

        {/* 5. Pil + Sesli Uyarılar yan yana */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <PromoCard
            src="/images/new/18.jpeg" bg="#1a1a1a"
            alt="6 Aya Varan Pil Ömrü ve USB Şarj"
            label="Güç Yönetimi" title="6 Aya Varan Pil Ömrü"
            desc="USB-C ile acil şarj, mahsur kalma yok" sizes="50vw"
          />
          <PromoCard
            src="/images/new/19.jpeg" bg="#f0f0f0"
            alt="Sesli Uyarılar ve Pil Bildirimler"
            label="Akıllı Uyarılar" title="Sesli & App Bildirimleri"
            desc="Pil bitmeden önce sesli ve uygulama uyarısı" side="right" sizes="50vw"
          />
        </div>

        {/* 6. Remote App — tam genişlik */}
        <div className={`transition-all duration-700 delay-[600ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <PromoCard
            src="/images/new/2.jpeg" bg="#0d0d0d"
            alt="Uzaktan Kilit Açma ve Kapama - ABRA App"
            label="Remote Access" title="Uzaktan Kilit Aç / Kapat"
            desc={`Wi-Fi ile her yerden kontrol\nMisafir erişimini uzaktan yönet\nKapı açıldığında otomatik bildirim`}
          />
        </div>

        {/* 7. Uyumluluk başlık */}
        <div className={`text-center py-10 transition-all duration-700 delay-[700ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-bold text-xs tracking-[0.25em] uppercase mb-3 block">UYUMLULUK</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-noto)" }}>
            Her Kapıya Uyar
          </h2>
          <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ahşap, çelik, bej, beyaz — tüm Avrupa tipi kapı ve silindir tipleriyle uyumlu
          </p>
        </div>

        {/* 8. Kurulum fotoğrafları — thumbnail + büyük görsel */}
        <div className={`transition-all duration-700 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Thumbnail bar */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar pb-4 px-1">
            {installImages.map((img, i) => (
              <button key={i} onClick={() => setActiveInstall(i)}
                style={{ background: img.bg }}
                className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  activeInstall === i
                    ? "border-primary scale-105 shadow-lg shadow-primary/30"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img.src} alt={img.label} fill className="object-contain p-0.5" />
              </button>
            ))}
          </div>

          {/* Büyük portrait görsel — 3:4 kutu, tam görünüm */}
          <div className="mt-3 relative w-full overflow-hidden rounded-[2rem]"
            style={{ aspectRatio: "3/4", maxHeight: "85vh", background: installImages[activeInstall].bg }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInstall}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={installImages[activeInstall].src}
                  alt={installImages[activeInstall].label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1600px) 100vw, 1600px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            {/* Sadece etiket — şeffaf */}
            <div className="absolute bottom-5 left-5 z-10">
              <span className="text-white text-base font-bold drop-shadow-lg">{installImages[activeInstall].label}</span>
              <span className="text-white/50 text-sm ml-2 drop-shadow">— ABRA Uyumlu</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
