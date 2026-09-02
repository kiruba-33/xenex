import React from 'react';
// Using the hero image as the premium placeholder for the single industry visual
import industryImage from '../../../../assets/hero.png';

export default function Industries() {
  const industries = [
    { id: '01', name: 'MARINE', desc: 'Fiberglass boats, marine components, maintenance and repair applications.' },
    { id: '02', name: 'AUTOMOTIVE', desc: 'Lightweight and durable FRP components for automotive applications.' },
    { id: '03', name: 'CONSTRUCTION', desc: 'FRP products for structural and construction-related applications.' },
    { id: '04', name: 'OIL & GAS', desc: 'Corrosion-resistant fiberglass applications for demanding environments.' },
    { id: '05', name: 'POWER PLANTS', desc: 'Specialized fiberglass products for power plant infrastructure.' },
    { id: '06', name: 'SEMICONDUCTOR PLANTS', desc: 'FRP products designed for highly controlled industrial environments.' }
  ];

  return (
    <section id="industries" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Typography & List */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center animate-fade-in-up">
            
            {/* Header */}
            <div className="mb-16 lg:mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                  Industries We Serve
                </span>
                <span className="w-12 h-[1px] bg-gray-300"></span>
              </div>
              <h2 className="text-[40px] sm:text-[50px] md:text-[64px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
                BUILT FOR DEMANDING<br />
                <span className="text-gray-400">INDUSTRIES.</span>
              </h2>
              <p className="text-[18px] md:text-[21px] text-gray-600 leading-relaxed font-medium max-w-[650px]">
                Fiberglass and FRP applications engineered for sectors where durability, corrosion resistance and dependable performance matter.
              </p>
            </div>

            {/* Editorial Industry Matrix (Text-Led) */}
            <div className="flex flex-col border-t border-gray-200">
              {industries.map((ind) => (
                <div 
                  key={ind.id}
                  className="group relative py-6 md:py-8 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-gray-300 font-semibold text-sm tracking-[0.2em]">{ind.id}</span>
                    <h3 className="text-2xl md:text-[28px] font-semibold text-gray-900 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {ind.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="hidden md:block text-gray-500 text-sm max-w-[300px] text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {ind.desc}
                    </p>
                    <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Single Strong Visual */}
          <div className="w-full lg:w-[45%] lg:pl-10 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="sticky top-32 relative w-full h-[500px] lg:h-[800px] rounded-[32px] overflow-hidden shadow-xl shadow-black/[0.03] border border-gray-200">
              <img 
                src={industryImage} 
                alt="Industrial FRP Applications" 
                className="absolute inset-0 w-full h-full object-cover object-[center_40%] transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.03)] pointer-events-none"></div>
              
              {/* Subtle visual badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-[16px] shadow-lg">
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">Xenex Quality</span>
                <span className="block text-gray-900 font-semibold tracking-wide">Industrial Grade</span>
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
