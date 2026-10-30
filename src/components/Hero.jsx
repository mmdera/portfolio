import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section hero-section-full" id="cover">
      <div className="container hero-container-full">
        {/* Top Editorial Masthead Line */}
        <div className="hero-masthead">
          <div className="hero-masthead-title">
            DIVYANSH VERMA — INDEPENDENT DIGITAL BUILDER
          </div>
          <div className="hero-masthead-meta">
            LUCKNOW, UTTAR PRADESH, INDIA
          </div>
          <div className="hero-masthead-status">
            <span className="status-pulse-dot" />
            <span>AVAILABLE FOR SELECT COMMISSIONS</span>
          </div>
        </div>

        {/* Expansive Full-Screen Cover Typography */}
        <div className="hero-main-content">
          <div className="hero-lead-badge">
            <span className="editorial-tag-dot" />
            <span className="hero-editorial-lead">
              VOL. 26 // ISSUE NO. 04 — THE DIGITAL EDITION
            </span>
          </div>

          <h1 className="hero-headline hero-headline-grand">
            <span className="hero-headline-line">
              <span className="hero-headline-word">IDEAS</span>
              <span className="hero-headline-word">INTO</span>
            </span>
            <span className="hero-headline-line hero-headline-line-accent">
              <span className="hero-headline-word accent-line">Digital</span>
              <span className="hero-headline-word">EXPERIENCES.</span>
            </span>
          </h1>

          {/* Verified Role Badges */}
          <div className="hero-role-badges">
            {PROFILE.titles.map((title, i) => (
              <span key={i} className="hero-role-pill">
                {title}
              </span>
            ))}
          </div>

          {/* Grand Statement & Primary Actions */}
          <div className="hero-grand-footer">
            <div className="hero-statement-lead">
              <p className="hero-statement-text">
                "{PROFILE.statement}"
              </p>
              <p className="hero-bio-short">
                {PROFILE.bio[0]}
              </p>
            </div>

            <div className="hero-action-row">
              <a 
                href="#work" 
                className="btn-editorial-primary"
                data-cursor="action"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown size={14} />
              </a>

              <a 
                href="#contact" 
                className="btn-editorial-secondary"
                data-cursor="action"
              >
                <span>INITIATE ENQUIRY</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Full-width Structural Editorial Anchor Ribbon */}
        <div className="hero-status-ribbon">
          <div className="hero-ribbon-item">
            <span className="hero-ribbon-num">01</span>
            <div className="hero-ribbon-content">
              <span className="hero-ribbon-label">ARCHITECTURE</span>
              <span className="hero-ribbon-val">FULL-STACK & AI SYSTEMS</span>
            </div>
          </div>
          <div className="hero-ribbon-item">
            <span className="hero-ribbon-num">02</span>
            <div className="hero-ribbon-content">
              <span className="hero-ribbon-label">CRAFT METHOD</span>
              <span className="hero-ribbon-val">SWISS TYPOGRAPHY</span>
            </div>
          </div>
          <div className="hero-ribbon-item">
            <span className="hero-ribbon-num">03</span>
            <div className="hero-ribbon-content">
              <span className="hero-ribbon-label">FLAGSHIPS</span>
              <span className="hero-ribbon-val">04 VERIFIED BUILDS</span>
            </div>
          </div>
          <div className="hero-ribbon-item">
            <span className="hero-ribbon-num">04</span>
            <div className="hero-ribbon-content">
              <span className="hero-ribbon-label">DISPATCH</span>
              <span className="hero-ribbon-val">LUCKNOW, UP, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
