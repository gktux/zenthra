'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const zenRef = useRef<HTMLSpanElement>(null);
  const thraRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Reset positions
    gsap.set(zenRef.current, { x: -1000, opacity: 0, fontWeight: 100, color: '#ffffff' });
    gsap.set(thraRef.current, { x: 1000, opacity: 0, fontWeight: 100 });
    gsap.set(shockwaveRef.current, { scale: 0, opacity: 0 });

    tl.to([zenRef.current, thraRef.current], {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05
    })
    .to([zenRef.current, thraRef.current], {
      fontWeight: 900,
      duration: 0.8,
      ease: "expo.out"
    }, "-=0.4")
    // Impact / Splash Effect
    .to(zenRef.current, {
      filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))",
      duration: 0.1,
      repeat: 1,
      yoyo: true
    }, "-=0.8")
    .to(shockwaveRef.current, {
      scale: 5,
      opacity: 0.6,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => gsap.set(shockwaveRef.current, { display: 'none' })
    }, "-=0.8")
    .to(shockwaveRef.current, {
      opacity: 0,
      duration: 0.4
    }, "-=0.2");

    // Glitch effect on merge
    tl.to(mainTitleRef.current, {
      skewX: 10,
      duration: 0.05,
      repeat: 3,
      yoyo: true,
      ease: "none"
    }, "-=0.9")
    .to(mainTitleRef.current, {
      skewX: 0,
      duration: 0.1
    });

  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    containerRef.current.style.setProperty('--local-x', `${x}px`);
    containerRef.current.style.setProperty('--local-y', `${y}px`);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-20" onMouseMove={handleMouseMove}>
      {/* Ambient Light Hüzmeleri */}
      <div className="ambient-glow w-[600px] h-[600px] bg-purple-600/10 -top-20 -left-20" />
      <div className="ambient-glow w-[500px] h-[500px] bg-blue-600/5 bottom-0 right-0" />

      {/* Impact Shockwave with Gradient colors */}
      <div 
        ref={shockwaveRef}
        className="absolute w-40 h-40 rounded-full border-2 border-purple-500/50 pointer-events-none z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_rgba(168,85,247,0.4)]"
      />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10 text-center">
        <div ref={mainTitleRef} className="relative inline-block select-none cursor-default group">
          {/* Main Animated Text */}
          <h1 className="text-[14vw] md:text-[18vw] tracking-tighter leading-none flex items-center justify-center">
            <span 
              ref={zenRef} 
              className="text-white relative z-10"
              style={{ display: 'inline-block' }}
            >
              ZEN
            </span>
            <span 
              ref={thraRef} 
              className="text-gradient-apple relative z-10"
              style={{ display: 'inline-block' }}
            >
              THRA
            </span>
          </h1>

          {/* Masked Highlight Text (Focus Glow) */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            style={{
                clipPath: 'circle(150px at var(--local-x, 0) var(--local-y, 0))',
                WebkitClipPath: 'circle(150px at var(--local-x, 0) var(--local-y, 0))',
            }}
          >
             <h1 className="text-[14vw] md:text-[18vw] tracking-tighter leading-none flex items-center justify-center font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                ZENTHRA
             </h1>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-lg md:text-2xl text-zinc-600 max-w-3xl mx-auto font-medium tracking-tight mt-12"
        >
          Geleceğin dijital mimarisini inşa ediyoruz.
        </motion.p>
      </div>

      <style jsx global>{`
        .text-gradient-apple {
          background: linear-gradient(
            to right,
            #ff3b30, #ff9500, #ffcc00, #4cd964, #5ac8fa, #007aff, #5856d6, #ff2d55
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: apple-flow 10s linear infinite;
        }

        @keyframes apple-flow {
          0% { background-position: 0% center; }
          100% { background-position: 400% center; }
        }
      `}</style>

      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
    </section>
  );
};

export default Hero;
