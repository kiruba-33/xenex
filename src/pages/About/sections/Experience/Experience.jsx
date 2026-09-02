import React from 'react';
import experienceImage from '../../../../assets/hero.png';

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-start max-w-[800px] mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Experience
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            25+ YEARS OF<br />
            <span className="text-gray-400">FIBERGLASS EXPERTISE.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
            Xenex is backed by more than 25 years of fiberglass industry experience across marine, automotive, industrial engineering and other demanding sectors.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Image (8 cols) */}
          <div className="lg:col-span-8 relative w-full h-[450px] lg:h-[650px] rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={experienceImage} 
              alt="Fiberglass Marine Application" 
              className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
            />
            {/* Subtle inner shadow for premium depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
          </div>

          {/* Right Column: Experience Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Stat Block */}
            <div className="pb-8 border-b border-gray-200">
              <span className="text-[44px] lg:text-[56px] font-semibold text-gray-900 leading-none tracking-tight block mb-2">
                25+
              </span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 block">
                Years Experience
              </span>
            </div>

            {/* Geographic Presence */}
            <div className="pb-8 border-b border-gray-200">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-5">
                Operations & Experience
              </span>
              <ul className="space-y-3">
                <li className="text-[16px] md:text-[18px] font-semibold text-gray-900 tracking-wide uppercase">
                  India
                </li>
                <li className="text-[16px] md:text-[18px] font-semibold text-gray-900 tracking-wide uppercase">
                  Singapore
                </li>
              </ul>
            </div>

            {/* Technical Expertise Sectors */}
            <div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-5">
                Core Sectors
              </span>
              <div className="flex flex-wrap gap-2.5">
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase">Automobile</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase">Marine</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase">Industrial</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase">Oil & Gas</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase">Power Plants</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase">Construction</span>
              </div>
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
