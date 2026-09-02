import React from 'react';
import { Link } from 'react-router-dom';

export default function AutomotiveSolutions() {
  return (
    <section id="automotive-solutions" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          
          {/* Main Content (Left) */}
          <div className="w-full lg:max-w-[750px] flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Automotive Solutions
              </span>
            </div>
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              FIBERGLASS COMPONENTS<br />
              <span className="text-gray-400">BUILT FOR AUTOMOTIVE APPLICATIONS.</span>
            </h2>
            
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium mb-12 max-w-[600px]">
              Xenex develops fiberglass automobile components and moulded parts for application-specific automotive requirements.
            </p>

            <Link 
              to="/contact" 
              className="group flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
            >
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
                Discuss Requirements
              </span>
            </Link>
          </div>

          {/* Strong Typography-led visual alternative to image (Right) */}
          <div className="w-full lg:w-[450px] bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-10 md:p-12 flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 block mb-8">
              Performance Characteristics
            </span>
            <div className="text-[32px] md:text-[40px] font-semibold text-gray-900 leading-[1.1] tracking-tight mb-8">
              LIGHTWEIGHT.<br />
              DURABLE.<br />
              <span className="text-gray-400">MOULDED FRP.</span>
            </div>
            <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
              Engineered to meet specific automotive requirements with precision application-oriented manufacturing.
            </p>
          </div>
          
        </div>

        {/* Bottom Category Strip */}
        <div className="mt-16 lg:mt-24 pt-8 lg:pt-10 border-t border-gray-200 flex flex-wrap items-center gap-8 md:gap-16 lg:gap-24 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          <span className="text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase text-gray-900">
            Components
          </span>
          <span className="text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase text-gray-900">
            Moulds
          </span>
          <span className="text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase text-gray-900">
            Custom Parts
          </span>
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
