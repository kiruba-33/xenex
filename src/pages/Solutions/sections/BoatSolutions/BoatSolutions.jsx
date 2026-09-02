import React from 'react';
import boatImage from '../../../../assets/hero.png';

export default function BoatSolutions() {
  return (
    <section id="boat-solutions" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Content (Left) */}
          <div className="lg:col-span-6 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Boat Solutions
              </span>
            </div>
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              FIBERGLASS BOATS<br />
              <span className="text-gray-400">BUILT FOR THE WATER.</span>
            </h2>
            
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium mb-12 max-w-[600px]">
              Xenex manufactures fiberglass boats for fishing and commercial marine applications, with configurations tailored to different requirements.
            </p>

            <div className="w-full flex flex-col gap-10">
              
              {/* Boat Categories */}
              <div className="pb-8 border-b border-gray-200">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 block mb-5">
                  Fiberglass Fishing Boats
                </span>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-[16px] md:text-[18px] font-semibold text-gray-900 tracking-wide">Small Boats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-[16px] md:text-[18px] font-semibold text-gray-900 tracking-wide">Large Boats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-[16px] md:text-[18px] font-semibold text-gray-900 tracking-wide">Specialized Commercial Boats</span>
                  </li>
                </ul>
              </div>

              {/* Customization Options */}
              <div className="pb-8 border-b border-gray-200">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 block mb-5">
                  Customization Available
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {['Boat Size', 'Color', 'Fishing Gear', 'Trolling Motor', 'Sonar'].map((item, idx) => (
                    <span key={idx} className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-[#F8FAFC] border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 block mb-5">
                  Additional Capabilities
                </span>
                <p className="text-[15px] md:text-[16px] text-gray-700 font-medium">
                  FRP Product Moulds, Tank &amp; Pipe fabrication, and comprehensive marine repair services.
                </p>
              </div>

            </div>

          </div>

          {/* Image (Right) */}
          <div className="lg:col-span-6 relative w-full h-[500px] lg:h-[750px] rounded-[24px] overflow-hidden shadow-sm border border-gray-200/80 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={boatImage} 
              alt="Xenex Fiberglass Boat Solution" 
              className="absolute inset-0 w-full h-full object-cover object-[center_70%]"
            />
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
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
