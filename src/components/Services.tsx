'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Server, Database, Headphones, Code, Cloud, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'server',
    title: 'SUNUCU KURULUMU',
    icon: Server,
    desc: 'Yüksek performanslı altyapı çözümleri ve fiziksel sunucu konfigürasyonları.',
    gradient: 'from-[#ff3b30] via-[#5856d6] to-[#007aff]',
  },
  {
    id: 'system',
    title: 'SİSTEM ODASI',
    icon: Database,
    desc: 'Uluslararası standartlarda veri merkezi ve sistem odası tasarımı.',
    gradient: 'from-[#ff9500] to-[#ff2d55]',
  },
  {
    id: 'it',
    title: 'BT DESTEK',
    icon: Headphones,
    desc: 'Kurumsal BT süreçleriniz için profesyonel destek ve stratejik danışmanlık.',
    gradient: 'from-[#4cd964] to-[#5ac8fa]',
  },
  {
    id: 'cloud',
    title: 'BULUT TEKNOLOJİLERİ',
    icon: Cloud,
    desc: 'Maliyet etkin ve esnek bulut depolama ve hesaplama servisleri.',
    gradient: 'from-[#007aff] to-[#5856d6]',
  },
  {
    id: 'software',
    title: 'YAZILIM ÇÖZÜMLERİ',
    icon: Code,
    desc: 'Modern teknolojilerle ölçeklenebilir ve güvenli yazılım projeleri.',
    gradient: 'from-[#5856d6] via-[#ff2d55] to-[#ff9500]',
  },
];

const ServiceCard = ({ service, onClick, parentX }: { service: typeof services[0], onClick: () => void, parentX: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const rotateY = useTransform(parentX, (latest: number) => {
    if (!cardRef.current || typeof window === 'undefined') return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const screenCenter = window.innerWidth / 2;
    const cardCenter = rect.left + rect.width / 2;
    const distanceFromCenter = cardCenter - screenCenter;
    return (distanceFromCenter / screenCenter) * -10;
  });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{ rotateY, perspective: 1000 }}
      className="relative flex-shrink-0 w-[280px] md:w-[450px] h-[450px] md:h-[550px] rounded-[32px] md:rounded-[40px] border border-white/10 bg-zinc-950 p-8 md:p-12 overflow-hidden group cursor-pointer shadow-2xl snap-center"
    >
      <motion.div
        className="absolute -inset-px rounded-[32px] md:rounded-[40px] md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.08), transparent 40%)`
          ),
        }}
      />
      <div className="md:hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col pointer-events-none">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 border border-white/5">
          <service.icon className="text-white w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 text-white tracking-tighter leading-none">{service.title}</h3>
        <p className="text-zinc-500 text-sm md:text-lg leading-relaxed mb-auto line-clamp-4 md:line-clamp-none">{service.desc}</p>
        <div className="flex items-center justify-between mt-6 md:mt-8">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 group-hover:text-white transition-colors">Keşfet</span>
           <div className={cn("w-10 md:w-12 h-px bg-zinc-800", `bg-gradient-to-r ${service.gradient}`)} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const xTranslate = useTransform(smoothMouseX, (val) => {
    if (typeof window === 'undefined' || isMobile) return 0;
    const screenWidth = window.innerWidth;
    const scrollRange = (services.length * 480) - screenWidth + 200;
    const percentage = val / screenWidth;
    return -percentage * scrollRange;
  });

  const smoothX = useSpring(xTranslate, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mouseX.set(e.clientX);
      }
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [mouseX, isMobile]);

  return (
    <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#ffffff20 1px, transparent 1px), linear-gradient(90deg, #ffffff20 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16 md:mb-20">
        <div className="space-y-4">
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.6em] text-zinc-600 font-bold">Teknoloji & Vizyon</h2>
          <h3 className="text-4xl md:text-8xl font-black text-white leading-tight md:leading-none">
            <span className="text-white">ZEN</span>
            <span className="text-gradient-apple block md:inline">THRA</span>
          </h3>
          <p className="text-zinc-500 text-xs md:text-lg uppercase tracking-widest font-bold">Hizmet Kataloğu</p>
        </div>
      </div>

      <div className={cn(
        "relative w-full overflow-y-visible",
        "overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-0 md:overflow-hidden"
      )}>
        <motion.div 
          ref={scrollRef}
          style={{ x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : smoothX }}
          className={cn(
            "flex gap-6 md:gap-10",
            "w-max pb-8 md:w-fit md:pb-0"
          )}
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={() => setSelectedId(service.id)}
              parentX={typeof window !== 'undefined' && window.innerWidth < 768 ? useMotionValue(0) : smoothX}
            />
          ))}
        </motion.div>
      </div>

      <div className="md:hidden mt-8 flex justify-center gap-2">
        {services.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[150]"
            />
            <motion.div
              layoutId={selectedId}
              className="fixed inset-4 md:inset-20 bg-zinc-950 border border-white/10 rounded-[32px] md:rounded-[64px] z-[160] p-8 md:p-32 overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center text-center"
            >
               <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="text-white w-6 h-6 md:w-10 md:h-10" />
              </button>

              <div className="max-w-4xl space-y-8 md:space-y-12 py-10">
                 <div className="w-20 h-20 md:w-32 md:h-32 rounded-[32px] md:rounded-[40px] bg-white/5 flex items-center justify-center mx-auto border border-white/10">
                    {React.createElement(services.find(s => s.id === selectedId)!.icon, { className: "text-white w-10 h-10 md:w-16 md:h-16" })}
                 </div>
                 <h4 className="text-3xl md:text-8xl font-black tracking-tightest text-white uppercase leading-tight">
                    {services.find(s => s.id === selectedId)!.title}
                 </h4>
                 <p className="text-zinc-500 text-base md:text-3xl leading-relaxed font-medium">
                    {services.find(s => s.id === selectedId)!.desc} Zenthra Bilişim olarak saha operasyonlarını dijital disiplinle buluşturuyoruz.
                 </p>
                 <button className="px-10 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-3xl bg-white text-black font-black uppercase tracking-[0.4em] hover:scale-105 transition-transform text-xs md:text-lg">
                    DETAYLI BİLGİ AL
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .text-gradient-apple {
          background: linear-gradient(to right, #a855f7, #3b82f6, #ec4899);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: apple-flow 8s linear infinite;
        }
        @keyframes apple-flow { to { background-position: 200% center; } }
      `}</style>
    </section>
  );
};

export default Services;
