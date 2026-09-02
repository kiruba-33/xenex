import React from 'react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative w-full py-24 lg:py-40 bg-[#F6F7F9] overflow-hidden">
      
      {/* Subtle Premium Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#F6F7F9] to-[#F6F7F9] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        
        {/* Header Content */}
        <div className="max-w-[850px] animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Let's Talk
            </span>
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
          </div>
          
          <h2 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            READY TO BUILD<br />
            <span className="text-gray-400">WITH FIBERGLASS?</span>
          </h2>
          
          <p className="text-[17px] md:text-[21px] text-gray-600 leading-relaxed font-medium max-w-[650px] mx-auto mb-14">
            Talk to Xenex Fiber Works about your marine, automotive or industrial fiberglass requirements.
          </p>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          
          <Link 
            to="/contact" 
            className="group relative px-10 py-5 bg-gray-900 text-white rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-gray-900/10"
          >
            <span className="relative z-10 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Contact Xenex
            </span>
            <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

          <Link 
            to="/solutions" 
            className="group flex items-center text-gray-500 hover:text-gray-900 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
          >
            Explore Solutions
            <span className="ml-3 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>

        </div>

        {/* Contact Strip */}
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Phone */}
          <div className="flex flex-col md:items-center text-left md:text-center group">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              Phone
            </span>
            <a 
              href="tel:+918838908082" 
              className="text-[14px] md:text-[15px] font-semibold tracking-wide text-gray-900 hover:text-sky-600 transition-colors"
            >
              +91 88389 08082
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col md:items-center text-left md:text-center group">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              WhatsApp
            </span>
            <a 
              href="https://wa.me/919677309890" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[14px] md:text-[15px] font-semibold tracking-wide text-gray-900 hover:text-emerald-600 transition-colors"
            >
              +91 96773 09890
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col md:items-center text-left md:text-center group">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              Email
            </span>
            <a 
              href="mailto:sales@xenexeng.com" 
              className="text-[14px] md:text-[15px] font-semibold tracking-wide text-gray-900 hover:text-sky-600 transition-colors"
            >
              sales@xenexeng.com
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col md:items-center text-left md:text-center group">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              Location
            </span>
            <span className="text-[13px] md:text-[14px] font-medium tracking-wide text-gray-600 leading-relaxed">
              Pudhuvalasai, Ramanathapuram<br />
              Tamil Nadu
            </span>
          </div>

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
