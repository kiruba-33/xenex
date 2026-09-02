import React from 'react';
import heroImage from '../../../../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[550px] lg:min-h-[650px] flex flex-col items-center overflow-hidden bg-[#FAFAFA]">
      
      {/* 
        Full Hero Image Background 
        Spans the absolute entirety of the Hero section, edge-to-edge.
      */}
      <img 
        src={heroImage} 
        alt="Xenex Engineered Fiberglass Solutions" 
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%] animate-image-reveal z-0"
      />
      
      {/* 
        Extremely Light & Subtle Overlay 
        Ensures the dark text remains perfectly readable without darkening the image 
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none z-10"></div>
      
      {/* 
        Existing Content ON TOP of the Image 
        Positioned in the upper-middle portion, pushed down below the Navbar
      */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-[900px] mx-auto pt-[120px] lg:pt-[160px] px-4 animate-fade-in-up">
        
        {/* Small Centered Brand Label */}
        <div className="flex items-center gap-4 mb-5 lg:mb-6">
          <span className="w-8 h-[1px] bg-[#111111]/20 hidden sm:block"></span>
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#444444]">
            Xenex Fiber Works
          </span>
          <span className="w-8 h-[1px] bg-[#111111]/20 hidden sm:block"></span>
        </div>
        
        {/* Main Centered Headline */}
        <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[72px] font-medium leading-[1.08] tracking-tight text-[#111111]">
          ENGINEERED FIBERGLASS.<br />
          BUILT FOR PERFORMANCE.
        </h1>
        
      </div>

      {/* Inline styles for subtle reference-style animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes imageReveal {
          from { transform: scale(1.03); }
          to { transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
          opacity: 0;
        }
        .animate-image-reveal {
          animation: imageReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}} />
    </section>
  );
}
