import React from 'react';

export default function Leadership() {
  return (
    <section id="leadership" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-200">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Header (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                Leadership
              </span>
            </div>
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              EXPERIENCE<br />
              <span className="text-gray-400">BEHIND EVERY BUILD.</span>
            </h2>
            
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
              Xenex is guided by more than 25 years of fiberglass industry experience across marine, automotive and industrial applications.
            </p>
          </div>

          {/* Premium Text-Led Profile (Right - 7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-8 md:p-12 lg:p-16 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            
            {/* Name & Role */}
            <div className="mb-12 pb-10 border-b border-gray-200">
              <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-gray-900 mb-3 tracking-tight uppercase leading-none">
                Mr. Muthu
              </h3>
              <span className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-gray-500 block">
                Managing Director
              </span>
            </div>

            {/* Experience & Profile Text */}
            <div className="mb-12 pb-10 border-b border-gray-200">
              <div className="text-[44px] md:text-[56px] font-semibold text-gray-900 leading-none tracking-tight mb-3">
                25+ <span className="text-[24px] md:text-[32px] text-gray-400">YEARS</span>
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500 block mb-6">
                Fiberglass Industry Experience
              </span>
              <p className="text-[16px] md:text-[18px] text-gray-800 leading-relaxed font-medium max-w-[600px]">
                An engineering professional with extensive experience across marine, automotive, industrial engineering, oil &amp; gas, power plants, construction, water treatment and offshore marine applications.
              </p>
            </div>
            
            {/* Core Expertise Tags */}
            <div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-400 block mb-5">
                Core Expertise
              </span>
              <div className="flex flex-wrap gap-2.5">
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Automotive</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Marine</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Industrial Engineering</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Oil &amp; Gas</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Power Plants</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Construction</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Water Treatment</span>
                <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md uppercase shadow-sm">Offshore Marine</span>
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
