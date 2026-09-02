import React from 'react';

export default function EngineeringSolutions() {
  return (
    <section id="engineering-solutions" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-6 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Engineering FRP
              </span>
            </div>
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              CUSTOM FIBERGLASS<br />
              <span className="text-gray-400">BUILT AROUND REQUIREMENTS.</span>
            </h2>
            
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium mb-12 max-w-[600px]">
              Xenex develops custom-engineered fiberglass products tailored to application and industry requirements.
            </p>

            {/* Industry Applications */}
            <div className="w-full flex flex-col gap-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 block">
                Cross-Industry Application
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  'Marine', 
                  'Automotive', 
                  'Construction', 
                  'Oil & Gas', 
                  'Power Plant', 
                  'Semiconductor Plant'
                ].map((ind, idx) => (
                  <span key={idx} className="text-[13px] md:text-[14px] font-semibold tracking-[0.1em] uppercase text-gray-900 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm hover:border-gray-400 transition-colors">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Premium Typography-Led Alternative to Image (Right) */}
          <div className="lg:col-span-6 w-full lg:min-h-[500px] bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-10 md:p-14 flex flex-col justify-between animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '0.15s' }}>
            
            {/* Extremely subtle ambient light effect (no strong gradients) */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="relative z-10">
              <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-8 border border-gray-200 bg-white px-4 py-2 rounded-full shadow-sm">
                Product Development
              </span>
              
              <div className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
                APPLICATION-<br />
                ORIENTED<br />
                <span className="text-gray-400">ENGINEERING.</span>
              </div>
            </div>
            
            <div className="relative z-10 border-t border-gray-200 pt-8 mt-8">
              <p className="text-[15px] md:text-[18px] text-gray-600 font-medium leading-relaxed max-w-[450px]">
                We bring together specialized fiberglass expertise to develop and deliver highly specific custom FRP products across diverse industrial sectors.
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
