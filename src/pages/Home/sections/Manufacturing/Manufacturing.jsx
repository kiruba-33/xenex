import React from 'react';
// Using the hero image as a premium placeholder for manufacturing until final assets are ready
import manufacturingImage from '../../../../assets/hero.png';

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 animate-fade-in-up">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                Manufacturing
              </span>
            </div>
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-6">
              WHERE FIBERGLASS<br />
              <span className="text-gray-400">BECOMES REAL.</span>
            </h2>
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
              A dedicated manufacturing environment, experienced craftsmen and technicians, and disciplined quality control support Xenex fiberglass production.
            </p>
          </div>
          
          {/* Conceptual Process Micro-Narrative */}
          <div className="flex flex-col items-start lg:items-end pb-2">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-3">
              From Material To Finish
            </span>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-900">
              <span>Material</span>
              <span className="text-gray-300">&rarr;</span>
              <span>Moulding</span>
              <span className="text-gray-300">&rarr;</span>
              <span>Fabrication</span>
              <span className="text-gray-300">&rarr;</span>
              <span>Lamination</span>
              <span className="text-gray-300">&rarr;</span>
              <span>Testing</span>
            </div>
          </div>
        </div>

        {/* Editorial Layout: Large Image (58%) + Light Panel (42%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Large Facility Image */}
          <div className="lg:col-span-7 xl:col-span-8 relative w-full h-[500px] lg:h-[750px] rounded-[24px] lg:rounded-[32px] overflow-hidden group shadow-sm border border-gray-200/80 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={manufacturingImage} 
              alt="Xenex Manufacturing Facility and Craftsmen" 
              className="absolute inset-0 w-full h-full object-cover object-[center_40%] transition-transform duration-[2s] ease-out"
            />
            {/* Subtle inner premium overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
          </div>

          {/* Right: Light Editorial Information Panel */}
          <div className="lg:col-span-5 xl:col-span-4 bg-[#F8FAFC] border border-gray-200/80 rounded-[24px] lg:rounded-[32px] p-10 lg:p-14 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Facility Story */}
            <div className="mb-16">
              <h3 className="text-gray-900 text-[13px] font-bold tracking-[0.2em] uppercase mb-6 leading-relaxed">
                A Facility Built<br />Around Precision.
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Xenex's manufacturing environment supports fiberglass production across marine, automotive and industrial applications, backed by experienced craftsmen and technicians.
              </p>
            </div>
            
            {/* Manufacturing Statistics Stack */}
            <div className="flex flex-col gap-10">
              
              {/* Stat 01 */}
              <div className="group cursor-default">
                <div className="text-[44px] lg:text-[56px] font-semibold text-gray-900 mb-1 tracking-tight leading-none group-hover:text-sky-600 transition-colors duration-500">
                  500
                </div>
                <div className="text-gray-400 text-[11px] font-bold tracking-[0.25em] uppercase">
                  Boats / Year
                </div>
              </div>

              <div className="w-16 h-[1px] bg-gray-200"></div>

              {/* Stat 02 */}
              <div className="group cursor-default">
                <div className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-sky-600 transition-colors duration-500">
                  SKILLED WORKFORCE
                </div>
                <div className="text-gray-500 text-[13px] font-medium tracking-wide">
                  Experienced craftsmen &amp; technicians
                </div>
              </div>

              <div className="w-16 h-[1px] bg-gray-200"></div>

              {/* Stat 03 */}
              <div className="group cursor-default">
                <div className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-sky-600 transition-colors duration-500">
                  QUALITY CONTROL
                </div>
                <div className="text-gray-500 text-[13px] font-medium tracking-wide">
                  Rigorous production-stage testing
                </div>
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
