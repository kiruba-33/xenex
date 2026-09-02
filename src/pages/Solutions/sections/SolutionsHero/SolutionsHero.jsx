import React from 'react';
import { Link } from 'react-router-dom';

export default function SolutionsHero() {
  return (
    <section 
      id="solutions-hero" 
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-gray-100"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
          <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
            Our Solutions
          </span>
          <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-[900px] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          ENGINEERED FIBERGLASS<br />
          <span className="text-gray-400">FOR DEMANDING APPLICATIONS.</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-[650px] text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          From marine and automotive components to industrial FRP systems, Xenex Fiber Works develops fiberglass products for demanding applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          
          <a 
            href="#boat-solutions" 
            className="group relative flex items-center justify-center px-10 py-4 md:py-5 bg-gray-900 text-white rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gray-900/10 w-full sm:w-auto min-w-[240px]"
          >
            <span className="relative z-10 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Explore Our Solutions
            </span>
            <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </a>

          <Link 
            to="/contact" 
            className="group flex items-center justify-center px-10 py-4 md:py-5 bg-white text-gray-900 border border-gray-200 rounded-full transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] w-full sm:w-auto min-w-[240px]"
          >
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Talk to Xenex
            </span>
          </Link>

        </div>

        {/* Optional Micro Line */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span>Marine</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
          <span className="hidden sm:inline">Automotive</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
          <span>Industrial</span>
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
