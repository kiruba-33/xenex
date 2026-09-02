import React from 'react';

const steps = [
  {
    id: '01',
    title: 'MATERIAL SELECTION',
    description: 'Selection of suitable fiberglass materials and components based on the intended application and product requirements.'
  },
  {
    id: '02',
    title: 'DESIGN & PREPARATION',
    description: 'Preparation of the product, moulds and manufacturing requirements before fabrication begins.'
  },
  {
    id: '03',
    title: 'FIBERGLASS MANUFACTURING',
    description: 'Skilled craftsmen and technicians carry out the fiberglass manufacturing and fabrication process with attention to consistency and finish.'
  },
  {
    id: '04',
    title: 'QUALITY CONTROL',
    description: 'Products are checked through the company\'s quality-focused manufacturing and testing practices before completion.'
  },
  {
    id: '05',
    title: 'FINISHING & DELIVERY',
    description: 'Completed products are prepared for final delivery with attention to finish, durability and customer requirements.'
  }
];

export default function Process() {
  return (
    <section id="manufacturing-process" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="max-w-[850px] mb-20 md:mb-32 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
            <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Manufacturing Process
            </span>
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
            From Material Selection to Finished Fiberglass Products
          </h2>
          
          <p className="text-[17px] md:text-[19px] text-gray-600 leading-relaxed font-medium max-w-[700px]">
            Xenex follows a structured manufacturing approach that combines material selection, skilled fabrication, production control and quality-focused finishing to create reliable fiberglass products and boats.
          </p>
        </div>

        {/* Process Steps (Editorial List) */}
        <div className="flex flex-col w-full">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between border-t border-gray-200 py-12 lg:py-16 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
            >
              
              {/* Number */}
              <div className="w-full lg:w-2/12 mb-4 lg:mb-0">
                <span className="text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-gray-200 tracking-tighter leading-none group-hover:text-gray-300 transition-colors duration-500">
                  {step.id}
                </span>
              </div>
              
              {/* Title */}
              <div className="w-full lg:w-4/12 mb-4 lg:mb-0 pr-6">
                <h3 className="text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-gray-900 tracking-tight leading-snug">
                  {step.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="w-full lg:w-5/12">
                <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
          {/* Final closing border */}
          <div className="w-full h-px bg-gray-200 animate-fade-in-up" style={{ animationDelay: '0.7s' }}></div>
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
