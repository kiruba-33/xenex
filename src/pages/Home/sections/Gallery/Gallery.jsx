import React, { useState, useEffect, useMemo } from 'react';
// Using the hero image as a premium placeholder for all gallery items until final assets are ready
import galleryImage from '../../../../assets/hero.png';

// Gallery Data
const galleryData = [
  { id: 1, category: 'MARINE', title: 'COMMERCIAL FISHING VESSEL' },
  { id: 2, category: 'AUTOMOTIVE', title: 'HEAVY-DUTY BUS COWL' },
  { id: 3, category: 'INDUSTRIAL', title: 'FIBERGLASS SCRUBBER TANK' },
  { id: 4, category: 'FRP PRODUCTS', title: 'CUSTOM MOULDING' },
  { id: 5, category: 'MARINE', title: 'RECREATIONAL SPEEDBOAT' },
  { id: 6, category: 'INDUSTRIAL', title: 'HIGH-PRESSURE PIPING' },
];

const filters = ['ALL', 'MARINE', 'AUTOMOTIVE', 'INDUSTRIAL', 'FRP PRODUCTS'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter images
  const filteredItems = useMemo(() => {
    if (activeFilter === 'ALL') return galleryData;
    return galleryData.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  // Handle filter change with a slight fade effect
  const handleFilterClick = (filter) => {
    if (filter === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 300);
  };

  // Lightbox keydown (ESC to close, arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-black/10 hidden sm:block"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#666666]">
              Reference Gallery
            </span>
            <span className="w-8 h-[1px] bg-black/10 hidden sm:block"></span>
          </div>
          <h2 className="text-[38px] sm:text-[46px] md:text-[56px] font-semibold text-[#111111] leading-[1.05] tracking-tight mb-6">
            A CLOSER LOOK<br />
            <span className="text-[#777777]">AT XENEX.</span>
          </h2>
          <p className="text-[17px] md:text-[20px] text-[#555555] leading-relaxed font-medium">
            A selection of fiberglass products, marine applications and industrial work represented across the Xenex portfolio.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#111111] text-white'
                  : 'bg-transparent text-[#666666] hover:bg-black/5 hover:text-[#111111]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Gallery Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-opacity duration-300 min-h-[500px] ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filteredItems.map((item, index) => {
            // Editorial Spanning Logic:
            // Item 0: Spans 2 cols (Featured/Large)
            // Item 1: Spans 1 col (Tall aspect)
            // Item 2: Spans 1 col (Square aspect)
            // Item 3: Spans 2 cols (Wide aspect)
            // Item 4: Spans 2 cols
            // Item 5: Spans 1 col
            let spanClasses = 'col-span-1 aspect-square md:aspect-[4/5]';
            if (index % 4 === 0) spanClasses = 'md:col-span-2 lg:col-span-2 aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/10]';
            if (index % 4 === 3) spanClasses = 'md:col-span-2 lg:col-span-2 aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]';

            return (
              <div 
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`relative w-full rounded-[20px] lg:rounded-[28px] overflow-hidden group cursor-pointer border border-black/5 bg-[#EAEAEA] shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up ${spanClasses}`}
                style={{ animationDelay: `${0.15 + (index * 0.05)}s` }}
              >
                <img 
                  src={galleryImage} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover object-[center_60%] transition-transform duration-[1.5s] ease-out"
                />
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                      0{index + 1}
                    </span>
                    <span className="w-4 h-[1px] bg-white/40"></span>
                    <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-white text-lg md:text-xl font-semibold tracking-wide">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="flex justify-center items-center h-[300px] text-[#666666] font-medium tracking-wide">
            No images available for this category.
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md transition-opacity duration-300">
          
          {/* Close Button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white z-10 transition-colors p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation Controls (Hidden on small mobile) */}
          <button 
            onClick={() => setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hidden sm:block"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button 
            onClick={() => setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hidden sm:block"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Lightbox Image */}
          <div className="relative w-[90vw] h-[75vh] md:w-[85vw] md:h-[85vh] max-w-[1400px] flex flex-col items-center justify-center">
            <img 
              src={galleryImage} 
              alt={filteredItems[lightboxIndex]?.title} 
              className="max-w-full max-h-full object-contain rounded-[12px]"
            />
            
            {/* Lightbox Meta */}
            <div className="absolute bottom-[-40px] md:bottom-[-50px] left-0 right-0 text-center">
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mr-4">
                {filteredItems[lightboxIndex]?.category}
              </span>
              <span className="text-white text-sm font-semibold tracking-wide">
                {filteredItems[lightboxIndex]?.title}
              </span>
            </div>
          </div>

        </div>
      )}

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
