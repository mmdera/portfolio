import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-colophon">
      <div className="container">
        {/* Top Colophon Grid */}
        <div className="colophon-top-grid">
          {/* Identity & Statement */}
          <div>
            <div className="editorial-tag" style={{ marginBottom: '1rem' }}>
              <span className="editorial-tag-dot" />
              <span>COLOPHON & ARCHIVE REGISTER</span>
            </div>
            
            <h2 className="colophon-brand-title">
              DIVYANSH VERMA
            </h2>
            <div className="colophon-sub">
              MASTER MIND DIVYANSH (MMD) // {PROFILE.editionTag}
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '440px', marginBottom: '1.5rem' }}>
              "I turn ambitious ideas into digital products people remember. Engineered with architectural rigor, Swiss typographic discipline, and zero layout shift."
            </p>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              LOCAL TIME: INDIA (IST) · {PROFILE.location.toUpperCase()}
            </div>
          </div>

          {/* Directory Navigation Index */}
          <div>
            <h3 className="colophon-col-title">DIRECTORY INDEX</h3>
            <ul className="colophon-links-list">
              <li className="colophon-link">
                <a href="#work" data-cursor="action">01. Selected Work</a>
              </li>
              <li className="colophon-link">
                <a href="#about" data-cursor="action">02. About The Builder</a>
              </li>
              <li className="colophon-link">
                <a href="#philosophy" data-cursor="action">03. Architectural Creed</a>
              </li>
              <li className="colophon-link">
                <a href="#capabilities" data-cursor="action">04. Capabilities & Tech</a>
              </li>
              <li className="colophon-link">
                <a href="#process" data-cursor="action">05. Working Process</a>
              </li>
              <li className="colophon-link">
                <a href="#archive" data-cursor="action">06. Project Archive</a>
              </li>
              <li className="colophon-link">
                <a href={PROFILE.resumePath} target="_blank" rel="noopener noreferrer" data-cursor="action">
                  <span>07. Verified Resume PDF</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels & Platforms */}
          <div>
            <h3 className="colophon-col-title">DIRECT CHANNELS</h3>
            <ul className="colophon-links-list">
              <li className="colophon-link">
                <a 
                  href={`https://wa.me/${PROFILE.whatsappInternational}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="action"
                >
                  <Phone size={13} color="var(--accent-vermilion)" />
                  <span>WhatsApp: {PROFILE.whatsappNumber}</span>
                </a>
              </li>
              <li className="colophon-link">
                <a 
                  href={`mailto:${PROFILE.email}`}
                  data-cursor="action"
                >
                  <Mail size={13} color="var(--accent-cobalt)" />
                  <span>Email: {PROFILE.email}</span>
                </a>
              </li>
              <li className="colophon-link" style={{ marginTop: '0.5rem' }}>
                <a 
                  href="https://mmdstudio.divyansh-mastermind05.workers.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="action"
                >
                  <span>MMD Studio Platform</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li className="colophon-link">
                <a 
                  href="https://tracken.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="action"
                >
                  <span>TRACKEN Productivity OS</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li className="colophon-link">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-vermilion)', fontWeight: 600 }}>
                  ● {PROFILE.status.toUpperCase()}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="colophon-bottom-bar">
          <div>
            © {new Date().getFullYear()} {PROFILE.brand} ({PROFILE.name}). All rights reserved. Set in Instrument Serif, Syne & Plus Jakarta Sans.
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            data-cursor="action"
            aria-label="Back to top of publication"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
