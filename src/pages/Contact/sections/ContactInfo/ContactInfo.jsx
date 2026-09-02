import React from 'react';

export default function ContactInfo() {
  return (
    <section id="contact-info" className="relative w-full py-24 lg:py-32 bg-[#F6F7F9] overflow-hidden border-b border-gray-100">
      {/* Pure white background enforcement */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300 hidden sm:block"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                Get In Touch
              </span>
            </div>
            
            <h2 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold text-gray-900 leading-[1.05] tracking-tight mb-8">
              Connect With Xenex
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-gray-600 leading-relaxed font-medium">
              Reach Xenex Fiber Works through the contact channels below for product enquiries and fiberglass requirements.
            </p>
          </div>

          {/* Contact Details Editorial List (Right) */}
          <div className="lg:col-span-7 w-full flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 pt-12 lg:pt-0 lg:pl-16">
            
            {/* Phone */}
            <div className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-8 pb-10 mb-10 border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0 w-[60px]">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">
                  01 /
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Phone
                </h3>
                <a href="tel:+918838908082" className="text-[20px] md:text-[22px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                  +91 88389 08082
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-8 pb-10 mb-10 border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex-shrink-0 w-[60px]">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">
                  02 /
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-2">
                  WhatsApp
                </h3>
                <a href="https://wa.me/919677309890" target="_blank" rel="noopener noreferrer" className="text-[20px] md:text-[22px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                  +91 9677309890
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-8 pb-10 mb-10 border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0 w-[60px]">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">
                  03 /
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Email
                </h3>
                <div className="flex flex-col gap-2">
                  <a href="mailto:muthu@xenexeng.com" className="text-[18px] md:text-[20px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 break-all focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                    muthu@xenexeng.com
                  </a>
                  <a href="mailto:sales@xenexeng.com" className="text-[18px] md:text-[20px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 break-all focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                    sales@xenexeng.com
                  </a>
                  <a href="mailto:xenexeng2020@gmail.com" className="text-[18px] md:text-[20px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 break-all focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                    xenexeng2020@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-8 pb-10 mb-10 border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex-shrink-0 w-[60px]">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">
                  04 /
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Website
                </h3>
                <a href="https://www.xenexeng.com" target="_blank" rel="noopener noreferrer" className="text-[20px] md:text-[22px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                  www.xenexeng.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0 w-[60px]">
                <span className="text-[13px] font-bold text-gray-400 tracking-[0.1em] group-hover:text-gray-900 transition-colors duration-300">
                  05 /
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Address
                </h3>
                <address className="text-[17px] md:text-[19px] text-gray-900 font-medium leading-relaxed not-italic max-w-[400px]">
                  No. 1/31/111, Kadarkarai Chathiram Beach Road,<br />
                  Pudhuvalasai, Ramanathapuram Taluka,<br />
                  Ramanathapuram District, Tamil Nadu,<br />
                  Pincode 623522, India
                </address>
              </div>
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
