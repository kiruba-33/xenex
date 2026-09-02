import React from 'react';
import { Link } from 'react-router-dom';
// Using the existing hero image as a premium placeholder
import companyImage from '../../../../assets/hero.png';

export default function CompanyIntro() {
  return (
    <section id="company-intro" className="relative w-full py-24 lg:py-32 bg-[#FCFCFC] overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Main Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 mb-20 lg:mb-28">
          
          {/* Left: Typography & Narrative (5 to 6 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center animate-fade-in-up">
            
            {/* Small Eyebrow Label */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-8 h-[1px] bg-[#111111]/20 hidden sm:block"></span>
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#666666]">
                Xenex Fiber Works
              </span>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-[#111111] leading-[1.05] tracking-tight mb-8">
              BUILDING WITH FIBERGLASS.<br />
              <span className="font-medium text-[#777777]">ENGINEERED FOR INDUSTRY.</span>
            </h2>
            
            {/* Short Supporting Paragraph */}
            <p className="text-lg md:text-[22px] text-[#222222] leading-relaxed mb-6 font-medium">
              Xenex Fiber Works combines fiberglass expertise, manufacturing capability and industry experience across marine, automotive and industrial applications.
            </p>
            
            {/* Smaller Company Statement */}
            <p className="text-[15px] md:text-base text-[#666666] leading-relaxed mb-10 max-w-[90%] font-normal">
              Founded in 2020, Xenex operates across India and Singapore with expertise spanning fiberglass products, boats, FRP systems and industrial applications.
            </p>
            
            {/* Refined CTA */}
            <div>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-[14px] font-medium text-white bg-[#111111] rounded-full hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm"
              >
                Discover Xenex
              </Link>
            </div>
          </div>
          
          {/* Right: Large Premium Visual (6 to 7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[3/2] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#EBEBEB] border border-gray-200/60 shadow-2xl shadow-black/[0.04]">
              <img 
                src={companyImage} 
                alt="Xenex Fiberglass Engineering and Manufacturing Facility" 
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%] transition-transform duration-[1.2s] ease-out"
              />
              
              {/* Subtle inner premium depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
            </div>
          </div>
          
        </div>

        {/* Bottom: 3 Clean Supporting Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 border-t border-gray-200/60 pt-12 md:pt-16 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          
          {/* Fact 01 */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#999999] tracking-[0.25em] uppercase mb-3">
              01 &mdash; COMPANY
            </span>
            <h4 className="text-xl md:text-[22px] font-medium text-[#111111] tracking-tight">
              Founded in 2020
            </h4>
          </div>

          {/* Fact 02 */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#999999] tracking-[0.25em] uppercase mb-3">
              02 &mdash; EXPERIENCE
            </span>
            <h4 className="text-xl md:text-[22px] font-medium text-[#111111] tracking-tight mb-1">
              25+ Years
            </h4>
            <p className="text-[13px] text-[#666666] font-medium tracking-wide">
              Fiberglass industry experience
            </p>
          </div>

          {/* Fact 03 */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#999999] tracking-[0.25em] uppercase mb-3">
              03 &mdash; PRESENCE
            </span>
            <h4 className="text-xl md:text-[22px] font-medium text-[#111111] tracking-tight">
              India + Singapore
            </h4>
          </div>
          
        </div>
        
      </div>

      {/* Lightweight CSS animations strictly for fade-in logic */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
}
