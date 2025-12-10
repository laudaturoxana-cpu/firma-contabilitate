import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-premium py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-2xl font-serif font-bold text-primary">
                ContaExpert
              </span>
            </div>
            <span className="text-xs text-text-secondary ml-10 font-sans">
              Contabilitate de Încredere
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicii')}
              className="text-text-primary hover:text-primary transition-colors font-sans font-medium"
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection('de-ce-noi')}
              className="text-text-primary hover:text-primary transition-colors font-sans font-medium"
            >
              De ce noi
            </button>
            <button
              onClick={() => scrollToSection('proces')}
              className="text-text-primary hover:text-primary transition-colors font-sans font-medium"
            >
              Proces
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-primary hover:text-primary transition-colors font-sans font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm"
            >
              Solicită Consultație Gratuită
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-border"
          >
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('servicii')}
                className="text-text-primary hover:text-primary transition-colors font-sans font-medium text-left"
              >
                Servicii
              </button>
              <button
                onClick={() => scrollToSection('de-ce-noi')}
                className="text-text-primary hover:text-primary transition-colors font-sans font-medium text-left"
              >
                De ce noi
              </button>
              <button
                onClick={() => scrollToSection('proces')}
                className="text-text-primary hover:text-primary transition-colors font-sans font-medium text-left"
              >
                Proces
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-primary hover:text-primary transition-colors font-sans font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm mt-2"
              >
                Solicită Consultație Gratuită
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
