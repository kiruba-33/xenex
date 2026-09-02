import React from 'react';

export default function MissionVision() {
  return (
    <section id="mission-vision" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-200">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16 lg:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
              Mission &amp; Vision
            </span>
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
          </div>
          
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            A CLEAR DIRECTION<br />
            <span className="text-gray-400">FOR WHAT WE BUILD.</span>
          </h2>
          
          <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
            The principles behind Xenex's approach to fiberglass manufacturing, innovation and customer-focused growth.
          </p>
        </div>

        {/* Two-Part Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Mission */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-[24px] p-10 md:p-12 lg:p-16 flex flex-col justify-between animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="mb-16">
              <span className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-gray-400 block mb-4">
                01 /
              </span>
              <h3 className="text-[28px] md:text-[36px] font-semibold text-gray-900 tracking-tight uppercase">
                Mission
              </h3>
            </div>
            
            <div>
              <p className="text-[20px] md:text-[24px] lg:text-[28px] text-gray-800 leading-[1.4] font-medium tracking-tight">
                Deliver the highest-quality fiberglass boats designed for durability, performance, and sustainability.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-10 md:p-12 lg:p-16 flex flex-col justify-between shadow-[0_8px_40px_rgba(0,0,0,0.02)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-16">
              <span className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-gray-400 block mb-4">
                02 /
              </span>
              <h3 className="text-[28px] md:text-[36px] font-semibold text-gray-900 tracking-tight uppercase">
                Vision
              </h3>
            </div>
            
            <div>
              <p className="text-[20px] md:text-[24px] lg:text-[28px] text-gray-800 leading-[1.4] font-medium tracking-tight">
                Lead the industry with innovation and eco-friendly practices while ensuring customer satisfaction.
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
