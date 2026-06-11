"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Hero Banner - Quick Easy Installation */}
        <div className={`reveal ${isVisible ? "active" : ""}`}>
          <div className="relative rounded-[2rem] overflow-hidden mb-8">
            <div className="relative aspect-[16/7] w-full bg-[#f0f0f0]">
              <Image
                src="/images/new/14.jpeg"
                alt="ABRA Smart Lock PRO - Hızlı ve Kolay Kurulum"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section 2: Heading */}
        <div className={`text-center mb-16 reveal delay-200 ${isVisible ? "active" : ""}`}>
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">NEDEN ABRA?</span>
          <h2 className="heading-section text-white mb-6">
            Akıllı Güvenlik, Basit Kurulum
          </h2>
          <p className="text-body-large max-w-3xl mx-auto">
            Mevcut kapınızı ve kilit sisteminizi değiştirmenize gerek yok. ABRA, dakikalar içinde kurulur ve hayatınızı kolaylaştırır.
          </p>
        </div>

        {/* Section 3: Installation Benefits - Full Width Image */}
        <div className={`mb-16 reveal delay-300 ${isVisible ? "active" : ""}`}>
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[16/7] w-full bg-[#f0f0f0]">
              <Image
                src="/images/new/15.jpeg"
                alt="Kurulum Avantajları - Alet Gerektirmez, Anahtar Değiştirme Yok, Tüm Kapılarla Uyumlu"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Two Feature Cards Side by Side */}
        <div className={`grid md:grid-cols-2 gap-6 mb-16 reveal delay-400 ${isVisible ? "active" : ""}`}>
          {/* Night Mode */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <div className="relative aspect-video w-full bg-black">
              <Image
                src="/images/new/16.jpeg"
                alt="ABRA Gece Modu - Sessiz Açılma"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Night Mode</span>
                <h3 className="text-white text-2xl font-extrabold mt-1">Sessiz Gece Açılması</h3>
                <p className="text-white/70 text-sm mt-2">Gece geç dönerken aileni uyandırma</p>
              </div>
            </div>
          </div>

          {/* Day/Night Comparison */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <div className="relative aspect-video w-full bg-[#f0f0f0]">
              <Image
                src="/images/new/17.jpeg"
                alt="Gündüz Yarım Kilit vs Gece Tam Kilit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Dual Mode</span>
                <h3 className="text-white text-2xl font-extrabold mt-1">Gündüz &amp; Gece Modu</h3>
                <p className="text-white/70 text-sm mt-2">Gündüz hızlı çıkış, gece tam güvenlik</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Battery & Remote - Two Feature Cards */}
        <div className={`grid md:grid-cols-2 gap-6 mb-16 reveal delay-500 ${isVisible ? "active" : ""}`}>
          {/* Battery Backup */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <div className="relative aspect-video w-full bg-[#1a1a1a]">
              <Image
                src="/images/new/18.jpeg"
                alt="Pil Yedekleme ve Şarj Sistemi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Güç Yönetimi</span>
                <h3 className="text-white text-2xl font-extrabold mt-1">6 Aya Varan Pil Ömrü</h3>
                <p className="text-white/70 text-sm mt-2">USB şarj ile hiç mahsur kalmayın</p>
              </div>
            </div>
          </div>

          {/* Smart Alerts */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <div className="relative aspect-video w-full bg-[#f0f0f0]">
              <Image
                src="/images/new/19.jpeg"
                alt="Akıllı Uyarılar ve Pil Bildirimi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">Akıllı Uyarılar</span>
                <h3 className="text-white text-2xl font-extrabold mt-1">Sesli &amp; App Bildirimleri</h3>
                <p className="text-white/70 text-sm mt-2">Pil bitmeden önce uyarı alırsınız</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Remote App Feature - Full Width */}
        <div className={`reveal delay-600 ${isVisible ? "active" : ""}`}>
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="relative aspect-[16/7] w-full bg-black">
              <Image
                src="/images/new/2.jpeg"
                alt="Uzaktan Kilit Açma / Kapama - ABRA App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              <div className="absolute left-8 sm:left-16 top-1/2 -translate-y-1/2 max-w-sm">
                <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-3">Remote Access</span>
                <h3 className="text-white text-2xl sm:text-4xl font-extrabold mb-4">Uzaktan Kilit Aç / Kapat</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Wifi ile dünyanın her yerinden kontrol</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Misafir erişimi uzaktan yönetim</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Kapı açıldığında otomatik bildirim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
