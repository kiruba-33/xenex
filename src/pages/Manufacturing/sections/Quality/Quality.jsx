import React from 'react';

const qualityPoints = [
  {
    id: '01',
    title: 'RIGOROUS TESTING',
    description: 'Fiberglass products are subjected to quality-focused testing and inspection before completion.'
  },
  {
    id: '02',
    title: 'ISO 9001',
    description: 'Xenex states that its quality management practices are supported by ISO 9001 certification.'
  },
  {
    id: '03',
    title: 'MARINE SAFETY',
    description: 'The company states adherence to applicable Marine Safety Standards for its marine-focused manufacturing activities.'
  },
  {
    id: '04',
    title: 'CUSTOMER CONFIDENCE',
    description: 'Consistent quality and positive customer feedback support Xenex\'s focus on reliable products and long-term customer satisfaction.'
  }
];

export default function Quality() {
  return (
    <section id="manufacturing-quality" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden border-b border-gray-100">
      {/* Pure white background enforcement */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Quality Assurance
              </span>
            </div>
            
            <h2 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              Quality Built Into Every Stage
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-gray-600 leading-relaxed font-medium mb-12">
              Xenex places strong emphasis on quality throughout its manufacturing process, supported by rigorous testing, experienced workmanship and a commitment to reliable fiberglass products.
            </p>

            <div className="mt-4 pt-8 border-t border-gray-200">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-gray-400">
                Quality &bull; Safety &bull; Reliability
              </span>
            </div>
          </div>

          {/* Quality Points Editorial List (Right) */}
          <div className="lg:col-span-7 w-full flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-16">
            
            {qualityPoints.map((point, index) => (
              <div 
                key={point.id} 
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-10 mb-10 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + (index * 0.1)}s` }}
              >
                <div className="flex-shrink-0">
                  <span className="text-[13px] font-bold text-gray-400 tracking-[0.15em] group-hover:text-gray-900 transition-colors duration-300">
                    {point.id} &mdash;
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-gray-900 tracking-tight leading-snug mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[16px] text-gray-600 font-medium leading-relaxed max-w-[95%]">
                    {point.description}
                  </p>
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
