import React from 'react';

export default function Location() {
  const addressStr = "No. 1/31/111, Kadarkarai Chathiram Beach Road, Pudhuvalasai, Ramanathapuram Taluka, Ramanathapuram District, Tamil Nadu 623522, India";
  const encodedAddress = encodeURIComponent(addressStr);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section id="contact-location" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden">
      {/* Pure white background enforcement */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Our Location
              </span>
            </div>
            
            <h2 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              Find Xenex Fiber Works
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-gray-600 leading-relaxed font-medium mb-12 max-w-[480px]">
              Visit or connect with Xenex Fiber Works at our India manufacturing location in Ramanathapuram, Tamil Nadu.
            </p>

            <div className="pt-8 border-t border-gray-200 w-full">
              <address className="text-[16px] md:text-[18px] text-gray-900 font-medium leading-loose not-italic mb-10">
                No. 1/31/111,<br />
                Kadarkarai Chathiram Beach Road,<br />
                Pudhuvalasai,<br />
                Ramanathapuram Taluka,<br />
                Ramanathapuram District,<br />
                Tamil Nadu &ndash; 623522,<br />
                India
              </address>

              <a 
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[13px] font-bold tracking-[0.15em] uppercase text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm"
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Real Interactive Map (Right) */}
          <div className="lg:col-span-7 w-full min-h-[400px] lg:min-h-[550px] bg-[#F9FAFB] border border-gray-200 rounded-sm overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <iframe 
              src={mapsEmbedUrl}
              title="Xenex Fiber Works India manufacturing facility location"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px', display: 'block' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full lg:min-h-[550px]"
            ></iframe>
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
