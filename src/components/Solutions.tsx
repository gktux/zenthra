'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const solutions = [
  {
    id: 'wms',
    name: 'Zenthra WMS',
    title: '"Yerli ve Operasyonel" Odaklı',
    desc: 'Saha operasyonlarının dinamizmini dijital disiplinle birleştiren, stok yönetiminde hata payını sıfıra indirmek için tasarlanmış yerli yazılım teknolojisi.',
    badge: null,
    images: ['/wms-1.jpeg', '/wms-2.jpeg'],
    mobileImage: '/wms-mobile.jpeg'
  },
  {
    id: 'barber',
    name: 'Zenthra Barber',
    title: 'Yeni Nesil Randevu Sistemi',
    desc: 'Berberler ve kuaförler için tasarlanmış, bulut tabanlı işletme ve müşteri yönetim yazılımı.',
    badge: 'Ar-Ge Aşamasında',
    images: [],
    mobileImage: null
  }
];

const Solutions = () => {
  const [activeId, setActiveId] = useState('wms');
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeId === 'wms') {
      const interval = setInterval(() => {
        setCurrentImgIdx((prev) => (prev + 1) % 2);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeId]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePos({ x, y });
  };

  const activeSolution = solutions.find(s => s.id === activeId)!;

  return (
    <section id="solutions" className="py-24 md:py-32 bg-black px-6 md:px-12 relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 relative z-10">
        
        {/* Left Side: Product Selector Menu */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col justify-center lg:justify-center gap-6 lg:gap-10 border-b lg:border-b-0 lg:border-l border-white/5 pb-8 lg:pb-0 lg:pl-8 overflow-x-auto no-scrollbar">
          {solutions.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className="group cursor-pointer py-2 whitespace-nowrap"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ 
                    height: activeId === s.id ? 20 : 0,
                    width: activeId === s.id ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 20 : 1) : 0,
                    opacity: activeId === s.id ? 1 : 0
                  }}
                  className="bg-white rounded-full hidden lg:block"
                />
                <span className={cn(
                  "text-xl md:text-2xl font-black uppercase tracking-tighter transition-all duration-500",
                  activeId === s.id ? "text-white scale-105" : "text-zinc-700 group-hover:text-zinc-400"
                )}>
                  {s.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center/Right: Dynamic Content & Mockup */}
        <div className="lg:col-span-9 flex flex-col items-center lg:items-start w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="mb-10 md:mb-12 space-y-4 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <h3 className="text-5xl md:text-7xl font-black tracking-tightest leading-none">
                    <span className="text-white">ZEN</span>
                    <span className="text-gradient-apple">THRA</span>
                  </h3>
                  {activeSolution.badge && (
                    <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50 h-fit">
                      {activeSolution.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-zinc-400 italic">
                  {activeSolution.title}
                </h4>
                <p className="text-zinc-600 max-w-xl text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
                  {activeSolution.desc}
                </p>
              </div>

              {/* Mockup Container */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center lg:items-end">
                {/* Desktop/Tablet Mockup */}
                <div 
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  className="relative flex-1 w-full aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 bg-zinc-900 group shadow-2xl"
                >
                   {activeId === 'wms' ? (
                     <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImgIdx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0"
                        >
                          <Image 
                            src={activeSolution.images[currentImgIdx]} 
                            alt="WMS Dashboard" 
                            fill
                            className="object-cover opacity-80"
                          />
                        </motion.div>
                     </AnimatePresence>
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10vw] font-black text-white/[0.01] select-none uppercase">{activeId}</span>
                     </div>
                   )}
                   
                   <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 lg:group-hover:opacity-100 z-10"
                    style={{
                      background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.1) 0%, transparent 60%)`
                    }}
                  />
                  <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
                </div>

                {/* Mobile Mockup (only for WMS) */}
                {activeId === 'wms' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-[180px] md:w-[200px] aspect-[9/19] rounded-[32px] md:rounded-[40px] border-[6px] md:border-8 border-zinc-800 overflow-hidden shadow-2xl bg-zinc-900"
                  >
                    <Image 
                      src={activeSolution.mobileImage!} 
                      alt="WMS Mobile" 
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
    </section>
  );
};

export default Solutions;
