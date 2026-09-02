import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section id="about-hero" className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 bg-white overflow-hidden">
      
      {/* Subtle Premium Background Texture (No Images) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <span className="w-12 h-[1px] bg-gray-300 hidden sm:block"></span>
          <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
            About Xenex
          </span>
          <span className="w-12 h-[1px] bg-gray-300 hidden sm:block"></span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          ENGINEERED THROUGH<br />
          <span className="text-gray-400">EXPERIENCE.</span>
        </h1>
        
        {/* Supporting Text */}
        <p className="text-[17px] md:text-[21px] text-gray-600 leading-relaxed font-medium max-w-[700px] mx-auto mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Xenex Fiber Works brings fiberglass expertise, manufacturing capability and cross-industry experience to marine, automotive and industrial applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link 
            to="/solutions" 
            className="group relative px-10 py-5 bg-gray-900 text-white rounded-full overflow-hidden transition-transform active:scale-[0.98] shadow-md shadow-gray-900/10"
          >
            <span className="relative z-10 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
              Explore Our Solutions
            </span>
            <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

          <Link 
            to="/contact" 
            className="group inline-flex items-center text-gray-600 hover:text-gray-900 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300"
          >
            Contact Xenex
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        
      </div>

      {/* Lightweight CSS animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
}
