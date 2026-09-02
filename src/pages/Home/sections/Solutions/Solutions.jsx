import React from 'react';
// Using the existing hero image as a premium placeholder for all cards
import solutionImage from '../../../../assets/hero.png';

export default function Solutions() {
  return (
    <section id="solutions" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto mb-16 lg:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-200 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Our Solutions
            </span>
            <span className="w-8 h-[1px] bg-gray-200 hidden sm:block"></span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            FIBERGLASS BUILT FOR<br />
            <span className="text-gray-500">DEMANDING APPLICATIONS.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
            From marine and automotive components to industrial FRP systems, Xenex delivers fiberglass products built around performance, durability and application requirements.
          </p>
        </div>

        {/* Editorial Grid: Image-Led Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          {/* Solution 01: Fiberglass Boats */}
          <div className="lg:col-span-7 flex flex-col group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-[24px] lg:rounded-[32px] overflow-hidden mb-8 border border-gray-200/80 shadow-sm">
              <img 
                src={solutionImage} 
                alt="Fiberglass Boats" 
                className="absolute inset-0 w-full h-full object-cover object-[center_60%] transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.03)] pointer-events-none"></div>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">01</span>
              <span className="w-12 h-[1px] bg-gray-200"></span>
            </div>
            <h3 className="text-3xl md:text-[36px] font-semibold text-gray-900 mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
              FIBERGLASS BOATS
            </h3>
            <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed max-w-[500px]">
              Manufacturing and repair of fiberglass boats for commercial and recreational applications.
            </p>
          </div>

          {/* Solution 02: Automobile Parts */}
          <div className="lg:col-span-5 flex flex-col group animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-[24px] lg:rounded-[32px] overflow-hidden mb-8 border border-gray-200/80 shadow-sm">
              <img 
                src={solutionImage} 
                alt="Automobile Parts" 
                className="absolute inset-0 w-full h-full object-cover object-[center_40%] transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.03)] pointer-events-none"></div>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">02</span>
              <span className="w-12 h-[1px] bg-gray-200"></span>
            </div>
            <h3 className="text-3xl md:text-[36px] font-semibold text-gray-900 mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
              AUTOMOBILE PARTS
            </h3>
            <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed max-w-[400px]">
              Durable and lightweight fiberglass components for automotive applications.
            </p>
          </div>

        </div>

        {/* Text-Led Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Solution 03 */}
          <div className="flex flex-col group p-6 lg:p-8 rounded-[24px] border border-gray-200/80 bg-[#FAFAFA] hover:bg-white hover:border-gray-300 transition-all duration-300">
             <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">03</span>
             <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 tracking-tight">FRP TANKS &amp; PIPING</h4>
             <p className="text-gray-600 text-sm leading-relaxed">
               FRP tanks and piping for industrial applications requiring corrosion resistance and long service life.
             </p>
          </div>

          {/* Solution 04 */}
          <div className="flex flex-col group p-6 lg:p-8 rounded-[24px] border border-gray-200/80 bg-[#FAFAFA] hover:bg-white hover:border-gray-300 transition-all duration-300">
             <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">04</span>
             <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 tracking-tight">LAMINATION &amp; TESTING</h4>
             <p className="text-gray-600 text-sm leading-relaxed">
               Fiberglass lamination and testing processes focused on quality and structural integrity.
             </p>
          </div>

          {/* Solution 05 */}
          <div className="flex flex-col group p-6 lg:p-8 rounded-[24px] border border-gray-200/80 bg-[#FAFAFA] hover:bg-white hover:border-gray-300 transition-all duration-300">
             <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">05</span>
             <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 tracking-tight">FLOOR LAMINATION</h4>
             <p className="text-gray-600 text-sm leading-relaxed">
               Durable anti-slip fiberglass floor laminations for industrial and commercial environments.
             </p>
          </div>

          {/* Solution 06 */}
          <div className="flex flex-col group p-6 lg:p-8 rounded-[24px] border border-gray-200/80 bg-[#FAFAFA] hover:bg-white hover:border-gray-300 transition-all duration-300">
             <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">06</span>
             <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 tracking-tight">ENGINEERING FRP</h4>
             <p className="text-gray-600 text-sm leading-relaxed">
               Custom fiberglass products for marine, automotive, construction, oil and gas, and power applications.
             </p>
          </div>

        </div>

      </div>

      {/* Lightweight animations */}
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
