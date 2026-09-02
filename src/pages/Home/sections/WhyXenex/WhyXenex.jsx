import React from 'react';
// Using the hero image as a premium placeholder until final assets are ready
import whyXenexImage from '../../../../assets/hero.png';

export default function WhyXenex() {
  return (
    <section id="why-xenex" className="relative w-full py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-start max-w-[900px] mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Why Xenex
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            BUILT ON EXPERIENCE.<br />
            <span className="text-gray-400">DEFINED BY RELIABILITY.</span>
          </h2>
          <p className="text-lg md:text-[21px] text-gray-600 leading-relaxed font-medium max-w-[750px]">
            From quality control to customer-focused manufacturing, Xenex combines fiberglass expertise with a practical commitment to reliable delivery and long-term performance.
          </p>
        </div>

        {/* 50/50 Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Large Visual (50%) */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[750px] rounded-[24px] lg:rounded-[32px] overflow-hidden group border border-gray-200/80 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={whyXenexImage} 
              alt="Xenex Fiberglass Quality and Reliability" 
              className="absolute inset-0 w-full h-full object-cover object-[center_40%] transition-transform duration-[1.5s] ease-out"
            />
            {/* Subtle premium shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.03)] pointer-events-none"></div>
          </div>

          {/* Right: Differentiator List & Values Strip (50%) */}
          <div className="flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Rows Container */}
            <div className="flex flex-col border-t border-gray-200">
              
              {/* Row 01 */}
              <div className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row md:items-start gap-4 lg:gap-6 hover:bg-white transition-colors duration-300 cursor-pointer -mx-6 px-6 lg:-mx-8 lg:px-8">
                <span className="text-gray-300 text-sm font-bold tracking-[0.2em] group-hover:text-gray-500 transition-colors duration-300 w-10 md:pt-1">
                  01
                </span>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-[26px] font-semibold text-gray-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    QUALITY ASSURANCE
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[440px] group-hover:text-gray-700 transition-colors duration-300">
                    Products are designed, engineered and tested with a focus on durability, strength and performance.
                  </p>
                </div>
                <div className="hidden md:flex items-center text-gray-300 group-hover:text-gray-900 transition-colors duration-300 md:pt-1">
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>

              {/* Row 02 */}
              <div className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row md:items-start gap-4 lg:gap-6 hover:bg-white transition-colors duration-300 cursor-pointer -mx-6 px-6 lg:-mx-8 lg:px-8">
                <span className="text-gray-300 text-sm font-bold tracking-[0.2em] group-hover:text-gray-500 transition-colors duration-300 w-10 md:pt-1">
                  02
                </span>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-[26px] font-semibold text-gray-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    CUSTOM CAPABILITY
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[440px] group-hover:text-gray-700 transition-colors duration-300">
                    Fiberglass products can be tailored to specific customer and application requirements.
                  </p>
                </div>
                <div className="hidden md:flex items-center text-gray-300 group-hover:text-gray-900 transition-colors duration-300 md:pt-1">
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>

              {/* Row 03 */}
              <div className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row md:items-start gap-4 lg:gap-6 hover:bg-white transition-colors duration-300 cursor-pointer -mx-6 px-6 lg:-mx-8 lg:px-8">
                <span className="text-gray-300 text-sm font-bold tracking-[0.2em] group-hover:text-gray-500 transition-colors duration-300 w-10 md:pt-1">
                  03
                </span>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-[26px] font-semibold text-gray-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    GLOBAL REACH
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[440px] group-hover:text-gray-700 transition-colors duration-300">
                    Operations in India and Singapore provide international capability with local expertise.
                  </p>
                </div>
                <div className="hidden md:flex items-center text-gray-300 group-hover:text-gray-900 transition-colors duration-300 md:pt-1">
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>

              {/* Row 04 */}
              <div className="group border-b border-gray-200 py-6 md:py-8 flex flex-col md:flex-row md:items-start gap-4 lg:gap-6 hover:bg-white transition-colors duration-300 cursor-pointer -mx-6 px-6 lg:-mx-8 lg:px-8">
                <span className="text-gray-300 text-sm font-bold tracking-[0.2em] group-hover:text-gray-500 transition-colors duration-300 w-10 md:pt-1">
                  04
                </span>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-[26px] font-semibold text-gray-900 mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    EXPERIENCED TEAM
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[440px] group-hover:text-gray-700 transition-colors duration-300">
                    Fiberglass knowledge and hands-on industry experience support product quality and execution.
                  </p>
                </div>
                <div className="hidden md:flex items-center text-gray-300 group-hover:text-gray-900 transition-colors duration-300 md:pt-1">
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>

            </div>

            {/* Values Strip (Bottom secondary strip) */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-12 pt-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-default">
                INNOVATION
              </span>
              <span className="text-gray-300 text-xs">/</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-default">
                RELIABILITY
              </span>
              <span className="text-gray-300 text-xs">/</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-default">
                SUSTAINABILITY
              </span>
            </div>

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
