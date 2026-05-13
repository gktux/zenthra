'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Ana Sayfa', href: '#' },
  { name: 'Hizmetler', href: '#services' },
  { name: 'Çözümler', href: '#solutions' },
  { name: 'İletişim', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6",
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white">
          ZEN<span className="text-gradient-apple">THRA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Başla
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-white p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Portal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
               <div className="text-2xl font-black tracking-tighter text-white">
                ZEN<span className="text-gradient-apple">THRA</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-4">Sosyal Medya</p>
                <div className="flex gap-8 text-white text-xs font-bold uppercase tracking-widest">
                   <span>LinkedIn</span>
                   <span>Instagram</span>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
