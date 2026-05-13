'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
import WMSSection from '@/components/WMSSection';
import ComingSoon from '@/components/ComingSoon';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Home() {
  useEffect(() => {
    // Smooth scroll setup for GSAP if needed, 
    // but browser default is fine for now.
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="relative">
      <Header />
      <Hero />
      <Solutions />
      <Services />
      <WMSSection />
      <ComingSoon />
      <Contact />
      <Footer />
    </main>
  );
}
