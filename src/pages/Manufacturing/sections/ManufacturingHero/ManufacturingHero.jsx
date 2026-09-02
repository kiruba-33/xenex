import React from 'react';

export default function ManufacturingHero() {
  return (
    <section 
      id="manufacturing-hero" 
      className="relative w-full min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-gray-100"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
          <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
            Manufacturing
          </span>
          <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-[1000px] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-semibold text-gray-900 leading-[1.05] tracking-tight uppercase mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Built for Precision.<br className="hidden md:block" />
          <span className="text-gray-400"> Manufactured for Performance.</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-[720px] text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Xenex Fiber Works combines fiberglass manufacturing expertise, skilled craftsmanship and quality-focused production to manufacture boats, FRP products, moulds, tanks and other fiberglass applications for demanding industries.
        </p>

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
