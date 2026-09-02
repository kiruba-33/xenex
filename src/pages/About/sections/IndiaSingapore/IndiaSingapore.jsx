import React from 'react';

export default function IndiaSingapore() {
  return (
    <section id="india-singapore" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-200">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-start max-w-[900px] mb-16 lg:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Our Presence
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            ROOTED IN INDIA.<br />
            <span className="text-gray-400">CONNECTED TO SINGAPORE.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
            Xenex's operations span India and Singapore, bringing together fiberglass manufacturing experience and international industry exposure.
          </p>
        </div>

        {/* Two-Part Editorial Layout (No Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* India (Primary Focus - 7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-8 md:p-12 lg:p-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="mb-14">
              <span className="inline-block text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
                Primary Operation
              </span>
              <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-gray-900 leading-none tracking-tight mb-4">
                INDIA
              </h3>
              <div className="text-[14px] md:text-[16px] font-bold tracking-[0.2em] uppercase text-gray-500">
                Xenex Fiber Works
              </div>
            </div>
            
            <div className="pt-10 border-t border-gray-200">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 block mb-5">
                Core Focus
              </span>
              <p className="text-[18px] md:text-[22px] lg:text-[26px] text-gray-800 leading-[1.4] font-medium tracking-tight">
                Manufacturing of Fiberglass Boats, FRP Tanks, and FRP Products for Automotive, Construction, and Power Plant Applications.
              </p>
            </div>
          </div>

          {/* Singapore (International Presence - 5 cols) */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.02)] animate-fade-in-up flex flex-col justify-between" style={{ animationDelay: '0.2s' }}>
            <div className="mb-12">
              <span className="inline-block text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gray-500 bg-gray-50 px-4 py-2 rounded-full mb-8">
                International Presence
              </span>
              <h3 className="text-[28px] md:text-[36px] font-semibold text-gray-900 leading-none tracking-tight mb-4">
                SINGAPORE
              </h3>
              <div className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase text-gray-500 leading-relaxed">
                Xenex Engineering &amp; Process Pte Ltd
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 block mb-4">
                Core Focus
              </span>
              <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed font-medium">
                Supply, Installation, Lamination/Bonding, and Testing of FRP/GRP/GRE Pipes &amp; Fittings, FRP Tanks, Floor Lamination, and Modifications &amp; Repair Services.
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
