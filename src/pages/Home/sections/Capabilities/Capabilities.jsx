import React from 'react';
// Using the hero image as the premium placeholder until final manufacturing assets are ready
import capabilityImage from '../../../../assets/hero.png';

export default function Capabilities() {
  const capabilities = [
    { id: '01', title: 'FIBERGLASS MANUFACTURING', desc: 'Manufacturing fiberglass products across marine, automotive and industrial applications.' },
    { id: '02', title: 'MOULDING & FABRICATION', desc: 'Fiberglass mould products and custom components developed for application requirements.' },
    { id: '03', title: 'LAMINATION', desc: 'Fiberglass lamination expertise for different industrial and commercial applications.' },
    { id: '04', title: 'TESTING & QUALITY', desc: 'Rigorous testing and quality control processes focused on product integrity and reliability.' },
    { id: '05', title: 'CUSTOM ENGINEERING', desc: 'Custom-engineered fiberglass products tailored to sector and application requirements.' },
    { id: '06', title: 'PRODUCTION CAPABILITY', desc: 'Experienced craftsmen, technicians and an established manufacturing facility supporting production requirements.' }
  ];

  return (
    <section id="capabilities" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* Subtle Technical Grid/Texture Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-start max-w-[900px] mb-16 lg:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            CAPABILITY BUILT AROUND<br />
            <span className="text-gray-400">FIBERGLASS EXPERTISE.</span>
          </h2>
          <p className="text-lg md:text-[21px] text-gray-600 leading-relaxed font-medium max-w-[700px]">
            From moulding and manufacturing to lamination and testing, Xenex combines practical fiberglass expertise with disciplined production and quality control.
          </p>
        </div>

        {/* Editorial Layout: Large Visual + Capability List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Large Featured Image Area (7 Columns - 58%) */}
          <div className="lg:col-span-7 relative w-full aspect-[4/3] lg:aspect-auto lg:h-[800px] rounded-[24px] lg:rounded-[32px] overflow-hidden group shadow-sm border border-gray-200/80 lg:sticky lg:top-32 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={capabilityImage} 
              alt="Xenex Fiberglass Manufacturing Capability" 
              className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-[2s] ease-out"
            />
            {/* Technical Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent pointer-events-none"></div>
            
            {/* Featured Capability Tag on Image */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Featured Process</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                FIBERGLASS<br />MANUFACTURING
              </h3>
            </div>
          </div>

          {/* Right: Capability Editorial Navigation List (5 Columns - 42%) */}
          <div className="lg:col-span-5 flex flex-col border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {capabilities.map((cap) => (
              <div 
                key={cap.id}
                className="group border-b border-gray-200 py-8 lg:py-10 flex flex-col md:flex-row items-start gap-4 lg:gap-6 hover:border-gray-400 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-gray-300 text-sm md:text-base font-bold tracking-[0.2em] group-hover:text-gray-500 transition-colors duration-300 pt-1">
                  {cap.id}
                </span>
                <div className="flex-1">
                  <h4 className="text-2xl lg:text-[28px] font-semibold text-gray-900 mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {cap.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[420px] group-hover:text-gray-700 transition-colors duration-300">
                    {cap.desc}
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}

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
