import React from 'react';
import { Link } from 'react-router-dom';
// Using the hero image as a premium placeholder until Mr. Muthu's authentic portrait is supplied
import portraitImage from '../../../../assets/hero.png';

export default function Leadership() {
  return (
    <section id="leadership" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-start max-w-[800px] mx-auto lg:mx-0 text-left mb-16 lg:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Leadership
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            EXPERIENCE THAT<br />
            <span className="text-gray-400">SHAPES EVERY BUILD.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
            With more than 25 years of fiberglass industry experience, Mr. Muthu brings technical knowledge and cross-industry perspective to Xenex Fiber Works.
          </p>
        </div>

        {/* Editorial Layout: Portrait (5 Cols) + Profile Content (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Large Portrait Image (5 Columns) */}
          <div className="lg:col-span-5 relative w-full h-[500px] lg:h-auto lg:min-h-[700px] rounded-[24px] lg:rounded-[32px] overflow-hidden group border border-gray-200/80 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={portraitImage} 
              alt="Mr. Muthu - Managing Director, Xenex Fiber Works" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)] pointer-events-none"></div>
          </div>

          {/* Right: Leadership Profile Data (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Name & Role */}
            <div className="mb-12 pb-10 border-b border-gray-200">
              <h3 className="text-[36px] md:text-[44px] font-semibold text-gray-900 mb-3 tracking-tight">MR. MUTHU</h3>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 block">
                Managing Director
              </span>
            </div>

            {/* Core Experience */}
            <div className="mb-12">
              <div className="text-[44px] md:text-[56px] font-semibold text-gray-900 mb-2 leading-none tracking-tight">
                25+ <span className="text-[28px] md:text-[36px] text-gray-400">YEARS</span>
              </div>
              <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-6 block">
                Fiberglass Industry Experience
              </div>
              <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed max-w-[550px]">
                An engineering professional with extensive experience across marine, automotive, industrial engineering, oil &amp; gas, power plants, construction, water treatment and offshore marine applications.
              </p>
            </div>

            {/* Editorial Story Statement */}
            <div className="mb-12 border-l-2 border-gray-200 pl-6 lg:pl-8">
              <p className="text-[18px] md:text-[22px] font-medium text-gray-900 leading-[1.4] max-w-[500px]">
                A career built around fiberglass applications across India, Singapore and multiple industrial sectors.
              </p>
            </div>

            {/* Industry Expertise Strip */}
            <div className="mb-16">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-6">
                Core Industry Expertise
              </span>
              <div className="flex flex-wrap gap-3 max-w-[600px]">
                <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-[#F8FAFC] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600 hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                  Automotive
                </span>
                <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-[#F8FAFC] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600 hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                  Marine
                </span>
                <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-[#F8FAFC] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600 hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                  Industrial Engineering
                </span>
                <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-[#F8FAFC] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600 hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                  Oil &amp; Gas
                </span>
                <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-[#F8FAFC] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600 hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                  Power Plants
                </span>
                <span className="px-5 py-2.5 rounded-full border border-gray-200 bg-[#F8FAFC] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-600 hover:bg-gray-900 hover:text-white transition-colors cursor-default">
                  Construction
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link 
                to="/about" 
                className="group inline-flex items-center text-gray-600 hover:text-gray-900 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Discover Our Story
                <span className="ml-3 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
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
