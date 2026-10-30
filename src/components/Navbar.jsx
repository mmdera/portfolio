import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('folio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('folio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setIsScrolled(currentScroll > 40);
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Hairline Reading Progress */}
      <div className="reading-progress-track">
        <div 
          className="reading-progress-bar" 
          style={{ width: `${scrollProgress}%` }} 
          aria-hidden="true" 
        />
      </div>

      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Masthead Identity */}
          <div className="nav-brand-group">
            <a href="#" className="nav-brand" data-cursor="action">
              <span className="nav-brand-name">DIVYANSH</span>
              <span className="nav-brand-slash">/</span>
              <span className="nav-brand-sub">MMD</span>
            </a>

            {/* Issue Edition Badge */}
            <div className="nav-edition-badge">
              <span className="editorial-tag-dot" />
              <span>EDITION 2026 // DIGITAL FOLIO</span>
            </div>
          </div>

          {/* Desktop Navigation Links — Only WORK & ABOUT for pure premium minimalism */}
          <nav className="nav-links-wrapper" aria-label="Main Navigation">
            <ul className="nav-links">
              <li className="nav-link-item">
                <a href="#work" data-cursor="action">WORK</a>
              </li>
              <li className="nav-link-item">
                <a href="#about" data-cursor="action">ABOUT</a>
              </li>
            </ul>
          </nav>

          {/* Right Action: Theme Toggle aside ENQUIRE Button */}
          <div className="nav-actions-group">
            <button 
              type="button" 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              data-cursor="action"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className="theme-toggle-icon">
                {theme === 'dark' ? <Sun size={14} strokeWidth={2.2} /> : <Moon size={14} strokeWidth={2.2} />}
              </span>
              <span className="theme-toggle-text">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
            </button>

            <a 
              href="#contact" 
              className="nav-cta-btn"
              data-cursor="action"
            >
              <span>ENQUIRE</span>
              <ArrowUpRight size={13} strokeWidth={2.4} />
            </a>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation index" : "Open navigation index"}
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div>
          <div className="editorial-tag" style={{ marginBottom: '1.5rem' }}>
            <span className="editorial-tag-dot" />
            <span>PORTFOLIO DIRECTORY</span>
          </div>

          <ul className="mobile-nav-links">
            <li>
              <a href="#work" className="mobile-nav-link" onClick={closeMobile}>
                <span>Selected Work</span>
                <span className="mobile-nav-num">01</span>
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-nav-link" onClick={closeMobile}>
                <span>About Divyansh</span>
                <span className="mobile-nav-num">02</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-nav-link" onClick={closeMobile}>
                <span>Enquire & Connect</span>
                <span className="mobile-nav-num">03</span>
              </a>
            </li>
          </ul>

          <div style={{ marginTop: '2rem' }}>
            <button 
              type="button" 
              className="theme-toggle-btn mobile-theme-btn"
              onClick={toggleTheme}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span className="theme-toggle-icon">
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </span>
              <span>{theme === 'dark' ? 'SWITCH TO LIGHT MODE' : 'SWITCH TO DARK MODE'}</span>
            </button>
          </div>
        </div>

        <div className="mobile-nav-footer">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            DIRECT WHATSAPP: {PROFILE.whatsappNumber}
          </div>
          <a 
            href="#contact" 
            className="btn-editorial-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMobile}
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </>
  );
}
