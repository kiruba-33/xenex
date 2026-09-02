import React from 'react';

export default function Values() {
  return (
    <section id="values" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-200">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Header (Left Column - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                Our Values
              </span>
            </div>
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              WHAT GUIDES<br />
              <span className="text-gray-400">THE WAY WE BUILD.</span>
            </h2>
            
            <p className="text-[17px] md:text-[20px] text-gray-600 leading-relaxed font-medium">
              Innovation, reliability and sustainability shape the way Xenex approaches fiberglass products and industry applications.
            </p>
          </div>

          {/* Huge Typographic Values List (Right Column - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col w-full border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-16">
            
            {/* Value 01 */}
            <div className="group flex flex-col sm:flex-row sm:items-center py-10 md:py-12 border-b border-gray-200 cursor-default animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <span className="text-[14px] md:text-[15px] font-bold tracking-[0.1em] text-gray-400 mb-4 sm:mb-0 sm:w-[80px] md:w-[120px] transition-colors duration-300 group-hover:text-gray-900">
                01 /
              </span>
              <h3 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-gray-900 tracking-tight leading-none uppercase transition-transform duration-500 ease-out group-hover:translate-x-4">
                Innovation
              </h3>
            </div>

            {/* Value 02 */}
            <div className="group flex flex-col sm:flex-row sm:items-center py-10 md:py-12 border-b border-gray-200 cursor-default animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-[14px] md:text-[15px] font-bold tracking-[0.1em] text-gray-400 mb-4 sm:mb-0 sm:w-[80px] md:w-[120px] transition-colors duration-300 group-hover:text-gray-900">
                02 /
              </span>
              <h3 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-gray-900 tracking-tight leading-none uppercase transition-transform duration-500 ease-out group-hover:translate-x-4">
                Reliability
              </h3>
            </div>

            {/* Value 03 */}
            <div className="group flex flex-col sm:flex-row sm:items-center py-10 md:py-12 border-b border-gray-200 cursor-default animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <span className="text-[14px] md:text-[15px] font-bold tracking-[0.1em] text-gray-400 mb-4 sm:mb-0 sm:w-[80px] md:w-[120px] transition-colors duration-300 group-hover:text-gray-900">
                03 /
              </span>
              <h3 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-gray-900 tracking-tight leading-none uppercase transition-transform duration-500 ease-out group-hover:translate-x-4">
                Sustainability
              </h3>
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
