import React from 'react';
import { ArrowUpRight, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">02 // THE BUILDER</span>
            <h2 className="section-title">
              THE PERSON <span className="section-title-serif">Behind The Builds.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Operating at the intersection of Swiss editorial design, modern reactive engineering, and scalable product architecture.
          </p>
        </div>

        {/* Editorial About Composition Grid */}
        <div className="about-composition-grid">
          {/* Authentic Portrait Card */}
          <div className="about-portrait-card">
            <img 
              src={PROFILE.avatarImage} 
              alt={`Portrait of ${PROFILE.name}`}
              loading="lazy"
            />
            <div className="about-portrait-meta">
              <span>{PROFILE.name.toUpperCase()}</span>
              <span>{PROFILE.location.toUpperCase()}</span>
            </div>
            <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-vermilion)', fontWeight: 600 }}>
              FOUNDER · MASTER MIND DIVYANSH
            </div>
          </div>

          {/* Editorial Text Content */}
          <div className="about-text-content">
            <h3 className="about-lead-statement">
              "{PROFILE.tagline}"
            </h3>

            {/* Verified Title Badges */}
            <div className="hero-role-badges" style={{ marginTop: 0 }}>
              {PROFILE.titles.map((title, i) => (
                <span key={i} className="hero-role-pill">
                  {title}
                </span>
              ))}
            </div>

            {/* Verified Biography */}
            <div className="about-paragraphs">
              {PROFILE.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Action Row */}
            <div className="project-actions-row" style={{ marginTop: '1.5rem' }}>
              <a 
                href={PROFILE.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
                data-cursor="action"
              >
                <span>DOWNLOAD VERIFIED RESUME</span>
                <Download size={14} />
              </a>

              <a 
                href="#contact" 
                className="btn-editorial-secondary"
                data-cursor="action"
              >
                <span>COMMISSION A BUILD</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
