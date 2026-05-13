'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const ComingSoon = () => {
  return (
    <section id="research" className="py-64 relative overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-radial-gradient from-zinc-900 to-black opacity-40" />

      <div className="relative z-10 text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.6em] text-zinc-600 font-bold"
        >
          Ar-Ge Laboratuvarı
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block"
        >
          {/* Smart Light Effect */}
          <div className="absolute -inset-10 bg-white/10 blur-[60px] rounded-full animate-pulse" />
          <div className="relative w-32 h-32 rounded-full border border-white/10 flex items-center justify-center bg-black">
            <Scissors className="text-white w-12 h-12" />
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Zenthra Barber
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-600 text-lg max-w-sm mx-auto"
          >
            Geleneksel zanaat, <br /> modern teknoloji ile yeniden tanımlanıyor.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40"
        >
          <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest uppercase italic">Geliştiriliyor</span>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default ComingSoon;
