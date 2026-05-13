'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'E-posta', value: 'zenthrabilisim@gmail.com', href: 'mailto:zenthrabilisim@gmail.com' },
    { icon: Phone, label: 'Telefon', value: '0531 580 07 53', href: 'tel:+905315800753' },
    { icon: MapPin, label: 'Adres', value: 'Samsun / Türkiye', href: '#' },
  ];

  return (
    <section id="contact" className="py-32 bg-black px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-24 space-y-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.6em] text-zinc-600 font-bold"
        >
          İletişim
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black text-white"
        >
          Bize <br /> <span className="text-gradient-purple-orange">Katılın.</span>
        </motion.h3>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-24">
        {contactInfo.map((info, i) => (
          <motion.a
            key={i}
            href={info.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col items-center text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <info.icon className="text-white w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{info.label}</p>
              <p className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{info.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="w-full max-w-2xl border-t border-white/5 pt-20">
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2 group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-white transition-colors">İsim</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white"
              />
            </div>
            <div className="space-y-2 group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-white transition-colors">E-posta</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white"
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-focus-within:text-white transition-colors">Mesaj</label>
            <textarea 
              rows={1}
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white resize-none"
            />
          </div>

          <button className="w-full py-6 text-sm font-black uppercase tracking-[0.4em] text-black bg-white hover:bg-zinc-200 transition-colors rounded-xl shadow-2xl">
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
