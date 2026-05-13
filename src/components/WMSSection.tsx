'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WMSSection = () => {
  return (
    <section id="wms" className="relative py-32 bg-black overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-6 font-bold"
        >
          Premium Yazılım
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-black text-white mb-12"
        >
          Zenthra WMS
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-zinc-500 text-xl max-w-2xl mx-auto"
        >
          Karmaşık depo süreçlerinizi basitleştiren, Linear kalitesinde bir kullanıcı deneyimi.
        </motion.p>
      </div>

      {/* Software Mockup Area */}
      <div className="relative w-full max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
        >
          {/* Mockup Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10" />
          
          {/* UI Elements Mockup */}
          <div className="absolute top-0 left-0 w-full h-12 border-b border-white/5 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-[120px] font-black text-white/[0.03] select-none">
                INTERFACE
             </div>
          </div>
        </motion.div>
        
        {/* Glow behind mockup */}
        <div className="absolute -inset-20 bg-white/5 blur-[120px] rounded-full -z-10" />
      </div>
    </section>
  );
};

export default WMSSection;
