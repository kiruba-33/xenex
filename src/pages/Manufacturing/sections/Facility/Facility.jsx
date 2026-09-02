import React from 'react';

export default function Facility() {
  return (
    <section id="manufacturing-facility" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden border-b border-gray-100">
      {/* Pure white background enforcement */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-6 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Manufacturing Facility
              </span>
            </div>
            
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8 pr-4 lg:pr-10">
              A Manufacturing Environment Built Around Fiberglass Expertise
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-gray-600 leading-relaxed font-medium mb-12 max-w-[600px]">
              Xenex Fiber Works combines a purpose-built manufacturing environment with skilled craftsmen and technicians to produce fiberglass boats, FRP products and moulds with a strong focus on quality and consistency.
            </p>
          </div>

          {/* Facility Highlights Text-Led Editorial Layout (Right) - Used since no authentic facility image exists */}
          <div className="lg:col-span-6 w-full flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            
            <div className="pb-10 mb-10 border-b border-gray-200 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">01 /</span>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 group-hover:text-gray-700 transition-colors duration-300">Environment</span>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-gray-900 tracking-tight leading-snug mb-3">
                State-of-the-Art Facility
              </h3>
              <p className="text-[16px] text-gray-600 font-medium leading-relaxed max-w-[90%]">
                A dedicated manufacturing environment supporting fiberglass boat and FRP product production.
              </p>
            </div>

            <div className="pb-10 mb-10 border-b border-gray-200 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">02 /</span>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 group-hover:text-gray-700 transition-colors duration-300">Expertise</span>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-gray-900 tracking-tight leading-snug mb-3">
                Skilled Workforce
              </h3>
              <p className="text-[16px] text-gray-600 font-medium leading-relaxed max-w-[90%]">
                Experienced craftsmen and technicians contribute to precise fiberglass manufacturing and finishing.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">03 /</span>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 group-hover:text-gray-700 transition-colors duration-300">Scale</span>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-gray-900 tracking-tight leading-snug mb-3">
                Production Capacity
              </h3>
              <p className="text-[16px] text-gray-600 font-medium leading-relaxed max-w-[90%]">
                The approved company material states a production capacity of up to 500 boats per year.
              </p>
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
