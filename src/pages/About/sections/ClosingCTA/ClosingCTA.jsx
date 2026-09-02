import React from 'react';
import { Link } from 'react-router-dom';

export default function ClosingCTA() {
  return (
    <section id="closing-cta" className="relative w-full py-24 lg:py-40 bg-white overflow-hidden border-t border-gray-200">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        
        {/* Header Content */}
        <div className="max-w-[850px] animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              What's Next
            </span>
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
          </div>
          
          <h2 className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[76px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            READY TO EXPLORE<br />
            <span className="text-gray-400">WHAT XENEX CAN BUILD?</span>
          </h2>
          
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium max-w-[650px] mx-auto mb-14">
            Discover Xenex's fiberglass and FRP capabilities or speak with our team about your specific application requirements.
          </p>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          
          {/* Primary CTA */}
          <Link 
            to="/solutions" 
            className="group relative px-10 py-5 bg-gray-900 text-white rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gray-900/10 min-w-[220px]"
          >
            <span className="relative z-10 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Explore Solutions
            </span>
            <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

          {/* Secondary CTA */}
          <Link 
            to="/contact" 
            className="group flex items-center justify-center px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-full transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] min-w-[220px]"
          >
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Contact Xenex
            </span>
          </Link>

        </div>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a href="tel:+918838908082" className="text-[14px] md:text-[15px] font-semibold tracking-wide text-gray-500 hover:text-gray-900 transition-colors">
            +91 88389 08082
          </a>
          <span className="hidden sm:block text-gray-300 font-bold">•</span>
          <a href="mailto:sales@xenexeng.com" className="text-[14px] md:text-[15px] font-semibold tracking-wide text-gray-500 hover:text-gray-900 transition-colors">
            sales@xenexeng.com
          </a>
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
