'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-40 pb-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-20">
        
        <div className="space-y-6">
          <div className="text-4xl font-black tracking-tighter text-white">
            ZENTHRA<span className="text-zinc-600">.</span>
          </div>
          <p className="text-zinc-600 max-w-xs text-sm leading-relaxed">
            Yüksek performanslı dijital altyapılar ve yazılım çözümleri. 
            Teknoloji, bizimle değer kazanır.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Platform</h4>
            <ul className="space-y-3 text-xs font-semibold text-zinc-600">
              <li><a href="#" className="hover:text-white transition-colors">WMS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Barber</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Güvenlik</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Şirket</h4>
            <ul className="space-y-3 text-xs font-semibold text-zinc-600">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
          © 2026 ZENTHRA BİLİŞİM A.Ş.
        </p>
        <div className="flex gap-10 text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
          <a href="#" className="hover:text-white transition-colors">KVKK</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
