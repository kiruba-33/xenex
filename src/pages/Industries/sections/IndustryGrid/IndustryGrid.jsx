import React from 'react';

const industries = [
  {
    id: '01',
    name: 'MARINE',
    description: 'Fiberglass boats and marine FRP applications for demanding marine environments.',
    color: 'var(--color-primary)'
  },
  {
    id: '02',
    name: 'AUTOMOTIVE',
    description: 'Fiberglass automobile components, moulds and FRP parts for automotive applications.',
    color: 'var(--color-primary)'
  },
  {
    id: '03',
    name: 'CONSTRUCTION',
    description: 'FRP products, tanks, piping, lamination and fiberglass applications for construction requirements.',
    color: 'var(--color-primary)'
  },
  {
    id: '04',
    name: 'OIL & GAS',
    description: 'FRP piping, tanks, scrubber systems, lamination and industrial fiberglass applications.',
    color: 'var(--color-primary)'
  },
  {
    id: '05',
    name: 'POWER PLANTS',
    description: 'Fiberglass tanks, piping, lamination and engineered FRP applications for power plant requirements.',
    color: 'var(--color-primary)'
  },
  {
    id: '06',
    name: 'SEMICONDUCTOR PLANTS',
    description: 'Specialized fiberglass and FRP applications for demanding semiconductor plant environments.',
    color: 'var(--color-primary)'
  }
];

export default function IndustryGrid() {
  return (
    <section id="industry-grid" className="relative w-full py-20 lg:py-32 bg-white overflow-hidden pb-32 lg:pb-48">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16 lg:gap-y-20">
          {industries.map((item, index) => (
            <div 
              key={item.id} 
              className="group flex flex-col items-start border-t border-gray-200 pt-8 animate-fade-in-up cursor-default"
              style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
            >
              <div className="w-full flex items-center justify-between mb-4 lg:mb-6">
                <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em]" style={{ color: 'var(--color-accent)' }}>
                  {item.id} &mdash;
                </span>
                
                {/* Subtle Arrow */}
                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-gray-300 transition-all duration-500 transform group-hover:translate-x-1.5" style={{ '--tw-text-opacity': 1, color: 'inherit' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              
              <h3 
                className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-tight leading-snug mb-3 lg:mb-4 transition-colors duration-300"
                style={{ color: 'var(--color-primary)' }}
              >
                {item.name}
              </h3>
              
              <p className="text-[15px] md:text-[17px] text-gray-500 font-medium leading-relaxed max-w-[90%] group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
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
