import React from 'react';

export default function FRPSolutions() {
  return (
    <section id="frp-solutions" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-6 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                FRP Solutions
              </span>
            </div>
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              FIBERGLASS SYSTEMS<br />
              <span className="text-gray-400">FOR DEMANDING INDUSTRIES.</span>
            </h2>
            
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium mb-12 max-w-[600px]">
              Xenex develops FRP tanks, piping and related fiberglass applications for industrial environments requiring dependable and durable solutions.
            </p>
          </div>

          {/* Capabilities Text-Led Editorial Layout (Right) */}
          <div className="lg:col-span-6 w-full flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            
            <div className="pb-10 mb-10 border-b border-gray-200">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 block mb-4">01 / Tanks &amp; Piping</span>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-gray-900 tracking-tight leading-snug mb-4">
                FRP Tanks &amp; Piping
              </h3>
              <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed">
                High and low-pressure fiberglass piping systems, alongside robust fiberglass tanks engineered for industrial use.
              </p>
            </div>

            <div className="pb-10 mb-10 border-b border-gray-200">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 block mb-4">02 / Protection &amp; Quality</span>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-gray-900 tracking-tight leading-snug mb-4">
                Lamination &amp; Testing
              </h3>
              <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed">
                Comprehensive lamination services, including specialized floor and roof lamination, supported by rigorous testing.
              </p>
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 block mb-4">03 / Environmental</span>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-gray-900 tracking-tight leading-snug mb-4">
                Scrubber Systems
              </h3>
              <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed">
                Custom fiberglass scrubber systems and related industrial applications built for demanding environments.
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
