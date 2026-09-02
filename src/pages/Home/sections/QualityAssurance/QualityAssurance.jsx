import React from 'react';
// Using the hero image as a premium placeholder for quality/inspection until final assets are ready
import qualityImage from '../../../../assets/hero.png';

export default function QualityAssurance() {
  return (
    <section id="quality-assurance" className="relative w-full py-24 lg:py-32 bg-[#FFFFFF] overflow-hidden">
      
      {/* Subtle Technical Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Main Editorial Grid (5 Cols Text / 7 Cols Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Narrative & Standards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full animate-fade-in-up">
            
            {/* Header Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-black/20 hidden sm:block"></span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#666666]">
                  Quality Assurance
                </span>
              </div>
              <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-[#111111] leading-[1.05] tracking-tight mb-8">
                QUALITY IS BUILT<br />
                <span className="text-[#777777]">INTO EVERY STAGE.</span>
              </h2>
              <p className="text-[17px] md:text-[20px] text-[#555555] leading-relaxed font-medium max-w-[500px]">
                Xenex applies rigorous quality testing throughout production, with a focus on durability, strength, integrity and reliable performance.
              </p>
            </div>
            
            {/* Standards & Certifications Information Area */}
            <div className="mt-16 lg:mt-24 pt-8 border-t border-gray-200/80 flex flex-col gap-8">
              
              <div className="flex flex-col group">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-2 group-hover:text-sky-600 transition-colors">
                  ISO 9001
                </span>
                <span className="text-[14px] text-[#666666] leading-relaxed">
                  Company presentation states ISO 9001 certification.
                </span>
              </div>

              <div className="flex flex-col group">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-2 group-hover:text-sky-600 transition-colors">
                  MARINE SAFETY
                </span>
                <span className="text-[14px] text-[#666666] leading-relaxed">
                  Presentation states adherence to Marine Safety Standards.
                </span>
              </div>

              <div className="flex flex-col group">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-2 group-hover:text-sky-600 transition-colors">
                  QUALITY &amp; RELIABILITY
                </span>
                <span className="text-[14px] text-[#666666] leading-relaxed">
                  The company presentation references positive customer feedback regarding product quality and reliability.
                </span>
              </div>

            </div>
          </div>
          
          {/* Right Column: Visual & Process (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            
            {/* Large Quality/Inspection Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-[24px] lg:rounded-[32px] overflow-hidden group shadow-xl border border-gray-200/50 mb-12">
              <img 
                src={qualityImage} 
                alt="Xenex Quality Inspection and Testing" 
                className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
            </div>
            
            {/* 4-Stage Visual Quality Process */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 pt-8 border-t border-gray-200/80">
              
              <div className="group cursor-default">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#AAAAAA] block mb-3 group-hover:text-[#111111] transition-colors">
                  01
                </span>
                <h4 className="text-[13px] md:text-[14px] font-bold text-[#111111] uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform">
                  DESIGN
                </h4>
              </div>

              <div className="group cursor-default">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#AAAAAA] block mb-3 group-hover:text-[#111111] transition-colors">
                  02
                </span>
                <h4 className="text-[13px] md:text-[14px] font-bold text-[#111111] uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform">
                  PRODUCTION
                </h4>
              </div>

              <div className="group cursor-default">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#AAAAAA] block mb-3 group-hover:text-[#111111] transition-colors">
                  03
                </span>
                <h4 className="text-[13px] md:text-[14px] font-bold text-[#111111] uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform">
                  TESTING
                </h4>
              </div>

              <div className="group cursor-default">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#AAAAAA] block mb-3 group-hover:text-[#111111] transition-colors">
                  04
                </span>
                <h4 className="text-[13px] md:text-[14px] font-bold text-[#111111] uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform">
                  FINAL CHECK
                </h4>
              </div>

            </div>

          </div>
          
        </div>

        {/* Quality Principles Strip */}
        <div className="mt-20 lg:mt-28 pt-8 border-t border-gray-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          
          <div className="flex items-center">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#888888]">
              Quality Principles
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#111111]">
            <span className="hover:text-sky-600 transition-colors cursor-default">DURABILITY</span>
            <span className="text-[#CCCCCC]">&bull;</span>
            <span className="hover:text-sky-600 transition-colors cursor-default">STRENGTH</span>
            <span className="text-[#CCCCCC]">&bull;</span>
            <span className="hover:text-sky-600 transition-colors cursor-default">INTEGRITY</span>
            <span className="text-[#CCCCCC]">&bull;</span>
            <span className="hover:text-sky-600 transition-colors cursor-default">RELIABILITY</span>
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
