import React from 'react';
import { Link } from 'react-router-dom';
// Using the hero image as an authentic Xenex product placeholder
import storyImage from '../../../../assets/hero.png';

export default function Story() {
  return (
    <section id="our-story" className="relative w-full py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden border-t border-gray-200">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Story Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col animate-fade-in-up">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                Our Story
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-10">
              BUILT FROM FIBERGLASS.<br />
              <span className="text-gray-400">GROWN THROUGH EXPERIENCE.</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-6 mb-12 border-l-2 border-gray-200 pl-6 lg:pl-8">
              <p className="text-[17px] md:text-[20px] text-gray-800 leading-relaxed font-medium max-w-[550px]">
                Founded in 2020, Xenex Fiber Works has developed its presence around fiberglass manufacturing and applications across marine, automotive and industrial sectors.
              </p>
              <p className="text-[16px] md:text-[17px] text-gray-600 leading-relaxed max-w-[550px]">
                With operations in India and Singapore, Xenex brings together practical fiberglass knowledge, manufacturing capability and cross-industry experience.
              </p>
            </div>

            {/* CTA */}
            <div>
              <Link 
                to="/solutions" 
                className="group inline-flex items-center justify-center px-8 py-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-900 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Discover Our Expertise
                <span className="ml-3 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Authentic Image (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[500px] lg:h-[700px] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-sm border border-gray-200/80 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img 
              src={storyImage} 
              alt="Xenex Fiberglass Manufacturing and Production" 
              className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            />
            {/* Subtle inner shadow for premium depth */}
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
