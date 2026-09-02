import React from 'react';
import { Link } from 'react-router-dom';
// Using the hero image as the premium placeholder until final boat assets are ready
import boatImage from '../../../../assets/hero.png';

export default function BoatShowcase() {
  return (
    <section id="boat-showcase" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Fiberglass Boats
            </span>
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            BUILT FOR THE WATER.<br />
            <span className="text-gray-400">READY FOR THE WORK.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium max-w-[700px]">
            From recreational fishing to commercial marine applications, Xenex manufactures fiberglass boats with configurable sizes, finishes and equipment options.
          </p>
        </div>

        {/* Huge Cinematic Boat Image */}
        <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] rounded-[24px] lg:rounded-[32px] overflow-hidden group shadow-sm border border-gray-200/80 mb-16 lg:mb-24 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <img 
            src={boatImage} 
            alt="Xenex Fiberglass Boat Manufacturing" 
            className="absolute inset-0 w-full h-full object-cover object-[center_60%] transition-transform duration-[2s] ease-out"
          />
          {/* Subtle premium overlay for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.04)] pointer-events-none"></div>
        </div>

        {/* Boat Category Navigation (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 border-t border-gray-200 pt-16 lg:pt-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* 01 Small Boats */}
          <div className="group cursor-pointer flex flex-col p-6 -mx-6 md:mx-0 md:p-0 hover:bg-white md:hover:bg-transparent rounded-[24px] md:rounded-none transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm font-bold tracking-[0.2em] group-hover:text-gray-900 transition-colors duration-300">
                01
              </span>
              <span className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                &rarr;
              </span>
            </div>
            <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900 mb-4 tracking-tight">
              SMALL BOATS
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Ideal for personal and recreational fishing applications.
            </p>
          </div>

          {/* 02 Large Boats */}
          <div className="group cursor-pointer flex flex-col p-6 -mx-6 md:mx-0 md:p-0 hover:bg-white md:hover:bg-transparent rounded-[24px] md:rounded-none transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm font-bold tracking-[0.2em] group-hover:text-gray-900 transition-colors duration-300">
                02
              </span>
              <span className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                &rarr;
              </span>
            </div>
            <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900 mb-4 tracking-tight">
              LARGE BOATS
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Commercial-grade boats designed for greater space and stability.
            </p>
          </div>

          {/* 03 Specialized Commercial Boats */}
          <div className="group cursor-pointer flex flex-col p-6 -mx-6 md:mx-0 md:p-0 hover:bg-white md:hover:bg-transparent rounded-[24px] md:rounded-none transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm font-bold tracking-[0.2em] group-hover:text-gray-900 transition-colors duration-300">
                03
              </span>
              <span className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                &rarr;
              </span>
            </div>
            <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900 mb-4 tracking-tight">
              COMMERCIAL BOATS
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Configured for commercial fishing operations and application-specific requirements.
            </p>
          </div>

        </div>

        {/* Customization Strip & CTA */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <span className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase block">
              Customization
            </span>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
              <span className="hover:text-gray-900 transition-colors cursor-default">SIZE</span>
              <span className="text-gray-300">&bull;</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">COLOR</span>
              <span className="text-gray-300">&bull;</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">FISHING GEAR</span>
              <span className="text-gray-300">&bull;</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">TROLLING MOTOR</span>
              <span className="text-gray-300">&bull;</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">SONAR</span>
            </div>
          </div>

          <div>
            <Link 
              to="/solutions" 
              className="group flex items-center text-gray-500 hover:text-gray-900 text-[11px] md:text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300"
            >
              Explore Boat Manufacturing
              <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
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
