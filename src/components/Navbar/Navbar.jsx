import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industries', path: '/industries' },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state after 20px of scroll
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3 lg:py-4' 
          : 'bg-[#F9F9F9] border-b border-transparent py-4 lg:py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          
          {/* Brand Logo Wordmark */}
          <Link 
            to="/" 
            className="flex flex-col group focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-sm" 
            aria-label="Xenex Fiber Works Home"
          >
            <span className="text-2xl font-extrabold text-[#0A0A0A] tracking-tight leading-none group-hover:text-gray-700 transition-colors">
              XENEX
            </span>
            <span className="text-[0.65rem] font-bold text-[#555555] tracking-[0.2em] mt-0.5 uppercase">
              Fiber Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-semibold transition-colors duration-300 relative py-2 outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-sm ${
                    isActive ? 'text-[#0A0A0A]' : 'text-[#666666] hover:text-[#1A1A1A]'
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {/* Subtle animated active indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1A1A1A] transform origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-[15px] font-semibold text-white bg-[#1A1A1A] rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-[#1A1A1A] hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1 mb-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-semibold py-3 px-4 rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
                    isActive 
                      ? 'bg-gray-50 text-[#0A0A0A]' 
                      : 'text-[#555555] hover:bg-gray-50 hover:text-[#1A1A1A]'
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="px-4 pb-4">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full py-4 text-base font-semibold text-white bg-[#1A1A1A] rounded-xl hover:bg-black active:scale-[0.98] transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
