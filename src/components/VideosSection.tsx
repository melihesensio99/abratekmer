"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  { src: "/videos/s.mp4", title: "Kutu Açılımı", category: "Unboxing" },
  { src: "/videos/3.mp4", title: "Kilit Açma Yöntemleri", category: "Unlocking" },
  { src: "/videos/4.mp4", title: "Üçlü Güç Yedekleme", category: "Power Backup" },
  { src: "/videos/5.mp4", title: "Mutlak Güvenlik", category: "Security" },
  { src: "/videos/6.mp4", title: "Hızlı Kurulum", category: "Installation" },
  { src: "/videos/7.mp4", title: "Uygulama Kontrolü", category: "App Control" },
  { src: "/videos/8.mp4", title: "Gece Modu", category: "Night Mode" },
  { src: "/videos/WhatsApp Video 2026-04-28 at 17.15.10.mp4", title: "Ürün Tanıtımı", category: "Overview" },
];

function VideoCard({ video, index, onClick }: { video: typeof videos[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="video-card group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20">
        <video
          src={video.src}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-transform shadow-lg shadow-black/20"
          >
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <span className="text-[10px] text-primary font-semibold tracking-wider uppercase">{video.category}</span>
          <h4 className="text-white font-semibold text-xs mt-0.5">{video.title}</h4>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeVideo]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="videos" className="py-24 bg-surface relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div className="text-left">
              <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">VİDEO KÜTÜPHANESİ</span>
              <h2 className="heading-section text-white mb-0" style={{ fontFamily: "var(--font-noto)" }}>
                Nasıl Çalışır?
              </h2>
            </div>
            <p className="text-white/50 max-w-md md:text-right">
              ABRA Smart Lock PRO hakkında merak ettiğiniz tüm detaylar, kurulum ve kullanım ipuçları burada.
            </p>
          </motion.div>

          <div className="relative group/carousel">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-primary hover:border-primary -translate-x-7 shadow-2xl"
              aria-label="Geri"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-primary hover:border-primary translate-x-7 shadow-2xl"
              aria-label="İleri"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory scroll-smooth"
            >
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[300px] sm:w-[400px] snap-start"
                  onClick={() => setActiveVideo(video)}
                >
                  <VideoCard video={video} index={index} onClick={() => {}} />
                </div>
              ))}
            </div>

            {/* Bottom Progress Bar (Netflix style touch) */}
            <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-primary/40 w-1/4 rounded-full"
                 animate={{ x: ["0%", "300%"] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </motion.button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="w-full max-w-6xl px-4">
              <div className="relative aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <video src={activeVideo.src} className="w-full h-full object-contain" controls autoPlay playsInline />
              </div>
              <div className="mt-6 text-center">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">{activeVideo.category}</span>
                <h3 className="text-2xl font-bold text-white">{activeVideo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
