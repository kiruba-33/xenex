import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-24 pb-8 border-t border-gray-200">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-gray-100">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-4">
            <Link to="/" className="inline-block mb-6 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
              <h2 className="text-[22px] md:text-[24px] font-bold tracking-tight text-gray-900 leading-none">
                XENEX
                <br />
                <span className="text-gray-400">FIBER WORKS</span>
              </h2>
            </Link>
            <p className="text-[15px] text-gray-600 font-medium leading-relaxed max-w-[320px]">
              Fiberglass manufacturing expertise across marine, automotive, construction, oil & gas, power plant and semiconductor industries.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Industries', path: '/industries' },
                { name: 'Manufacturing', path: '/manufacturing' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+918838908082" className="text-[15px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                  +91 88389 08082
                </a>
              </li>
              <li>
                <a href="https://wa.me/919677309890" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                  +91 9677309890
                </a>
              </li>
              <li>
                <a href="mailto:sales@xenexeng.com" className="text-[15px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300 break-all focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm">
                  sales@xenexeng.com
                </a>
              </li>
              <li>
                <address className="text-[14px] text-gray-600 font-medium leading-relaxed not-italic max-w-[240px] mt-2">
                  Pudhuvalasai, Ramanathapuram District,<br />
                  Tamil Nadu &ndash; 623522, India
                </address>
              </li>
            </ul>
          </div>

          {/* Location & CTA Column */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              India Manufacturing
            </h3>
            <p className="text-[15px] text-gray-600 font-medium mb-10">
              Ramanathapuram, Tamil Nadu
            </p>
            
            <div className="flex flex-col items-start pt-6 border-t border-gray-100">
              <p className="text-[14px] text-gray-900 font-semibold mb-4">
                Ready to discuss your requirement?
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-gray-900 hover:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm"
              >
                Get In Touch
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-gray-400 font-medium">
            &copy; 2026 Xenex Fiber Works. All rights reserved.
          </p>
          <p className="text-[13px] text-gray-400 font-medium">
            Xenex Fiber Works
          </p>
        </div>

      </div>
    </footer>
  );
}
