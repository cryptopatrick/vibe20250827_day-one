import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar') as HTMLElement;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        if (navbar) navbar.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        if (navbar) navbar.style.transform = 'translateY(0)';
      }
      
      setIsScrolled(scrollTop > 50);
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background-light/95 dark:bg-background/95' : 'bg-background-light/95 dark:bg-background/95'
    }`}>
      <div className="max-w-content mx-auto px-8 py-4 flex justify-between items-center">
        <div className="nav-logo">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-text-light dark:text-text tracking-[2px] hover:text-accent transition-colors"
          >
            #100DaysOfVibe
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''} hidden md:flex list-none gap-8`}>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-text-secondary-light dark:text-text-secondary hover:text-accent transition-colors font-normal"
              >
                Vibe Gallery
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-text-secondary-light dark:text-text-secondary hover:text-accent transition-colors font-normal"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary-light dark:text-text-secondary hover:text-accent transition-colors font-normal"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface-light/50 dark:bg-surface/50 hover:bg-surface-light dark:hover:bg-surface transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''} fixed left-0 top-[70px] flex-col bg-surface-light dark:bg-surface w-full text-center transition-all duration-300 shadow-xl p-8 md:hidden ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-text-secondary-light dark:text-text-secondary hover:text-accent transition-colors font-normal py-2"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-text-secondary-light dark:text-text-secondary hover:text-accent transition-colors font-normal py-2"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-text-secondary-light dark:text-text-secondary hover:text-accent transition-colors font-normal py-2"
          >
            Contact
          </button>
          
          {/* Theme Toggle for Mobile */}
          <div className="pt-4 border-t border-border-light dark:border-border mt-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 p-2 rounded-lg bg-surface-light/50 dark:bg-surface/50 hover:bg-surface-light dark:hover:bg-surface transition-colors mx-auto"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary-light dark:text-text-secondary">Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span className="text-text-secondary-light dark:text-text-secondary">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div 
          className={`nav-toggle md:hidden flex flex-col cursor-pointer ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-text-light dark:bg-text my-0.5 transition-all duration-300 ${
            isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-text-light dark:bg-text my-0.5 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-text-light dark:bg-text my-0.5 transition-all duration-300 ${
            isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
          }`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;