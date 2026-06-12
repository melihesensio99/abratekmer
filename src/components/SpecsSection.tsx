"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const specs = [
  { label: "Boyut", value: "120 × 59 × 39 mm", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" },
  { label: "Bağlantı", value: "Wi-Fi + Bluetooth 5.0", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.757 9.172C6.445 4.485 14.055 4.485 18.742 9.172" },
  { label: "Ağırlık", value: "435g (pillerle birlikte)", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { label: "Kullanım Ortamı", value: "İç Mekan", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "Malzeme", value: "Alüminyum-Magnezyum Alaşım", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { label: "Çalışma Sıcaklığı", value: "-10°C ~ 45°C", icon: "M9 19l-7-7 7-7m8 14l-7-7 7-7" },
  { label: "Pil Ömrü", value: "~6 Ay (4x AA)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Şarj", value: "USB-C Acil Şarj Desteği", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-3 block">DONANIM VE TEKNOLOJİ</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Kusursuz Mühendislik
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            ABRA Smart Lock PRO&apos;nun arkasındaki yenilikçi donanımı ve üstün teknik kapasiteyi keşfedin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Specs Card */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-[2.5rem] blur opacity-50" />
            <div className="relative glass rounded-[2.5rem] p-10 sm:p-12 border border-white/10">
              <div className="grid grid-cols-1 gap-y-1">
                {specs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`group flex items-center justify-between py-5 transition-all duration-300 ${index < specs.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                        <svg className="w-6 h-6 text-white/80 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-base font-medium group-hover:text-white transition-colors">{spec.label}</span>
                    </div>
                    <span className="text-white font-bold text-base tracking-tight text-right max-w-[50%]">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Specs Image Stack */}
          <div className="flex flex-col gap-6">
            {/* Main product image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl shadow-black/50"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/new/specs_intro.jpeg"
                  alt="ABRA Smart Lock PRO - Ürün Tanıtımı"
                  fill
                  className="object-contain bg-[#0a0a0a]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
 
            {/* Charging image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl shadow-black/50"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/new/WhatsApp Image 2026-06-04 at 10.58.34 (12).jpeg"
                  alt="ABRA - USB-C Şarj ve Pil Yedekleme"
                  fill
                  className="object-contain bg-[#0a0a0a]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
