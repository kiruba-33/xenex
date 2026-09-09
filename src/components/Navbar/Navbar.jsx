import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industries', path: '/industries' },
  { name: 'Manufacturing', path: '/manufacturing' },
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

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  const getHeaderClasses = () => {
    if (isTransparent) {
      return 'bg-transparent py-4 lg:py-6 border-b border-transparent';
    }
    return isScrolled 
      ? 'bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)] py-3 lg:py-4' 
      : 'bg-[var(--color-background)] border-b border-transparent py-4 lg:py-6';
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          
          {/* Brand Logo Image */}
          <Link 
            to="/" 
            className="flex flex-col justify-center group focus:outline-none focus:ring-2 focus:ring-[var(--color-border)] rounded-sm" 
            aria-label="Xenex Fiber Works Home"
          >
            <img 
              src={logoImg} 
              alt="Xenex Fiber Works" 
              className="h-9 md:h-10 lg:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              let linkClasses = 'text-[15px] font-semibold transition-colors duration-300 relative py-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border)] rounded-sm ';
              
              // Always use the dark #161B2B (var(--color-text)) text for default state
              // Keep primary brand color for active/hover state
              linkClasses += isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)] hover:text-[var(--color-primary)]';

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={linkClasses}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {/* Subtle animated active indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ease-out bg-[var(--color-primary)] ${
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
              className="inline-flex items-center justify-center px-7 py-3 text-[13px] font-bold tracking-[0.15em] uppercase text-white bg-[var(--color-accent)] rounded-full hover:brightness-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`lg:hidden p-2 -mr-2 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-border)] ${
              isTransparent 
                ? 'text-white hover:bg-white/10' 
                : 'text-[var(--color-text)] hover:bg-[var(--color-background-muted)]'
            }`}
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
        className={`lg:hidden absolute top-full left-0 w-full bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-xl transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
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
                  className={`text-lg font-semibold py-3 px-4 rounded-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border)] ${
                    isActive 
                      ? 'bg-[var(--color-background-muted)] text-[var(--color-primary)]' 
                      : 'text-[var(--color-text)] hover:bg-[var(--color-background-muted)] hover:text-[var(--color-primary)]'
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
              className="flex items-center justify-center w-full py-4 text-[14px] font-bold tracking-[0.15em] uppercase text-white bg-[var(--color-accent)] rounded-full hover:brightness-90 transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
