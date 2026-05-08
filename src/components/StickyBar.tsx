"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (~800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-0 right-0 z-[90] px-4 pointer-events-none"
        >
          <div className="max-w-2xl mx-auto w-full bg-white/80 backdrop-blur-xl border border-black/10 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-4 pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="hidden xs:flex w-12 h-12 bg-black rounded-xl flex-shrink-0 items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest leading-none">ABRA Smart Lock PRO</p>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-black/10" />
                  <div className="hidden sm:flex items-center gap-0.5 text-yellow-500">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-black leading-none">Trendyol Özel Fırsatı</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <a 
                href="/catalog.pdf" 
                target="_blank"
                className="hidden md:flex px-4 py-2.5 rounded-xl font-bold text-xs text-black/40 hover:text-black transition-colors"
              >
                Katalog
              </a>
              <a 
                href="https://www.trendyol.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-xl shadow-primary/30 flex items-center gap-2 whitespace-nowrap"
              >
                Hemen Al
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
