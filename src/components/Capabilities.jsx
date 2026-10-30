import React from 'react';
import { CAPABILITIES, TECHNOLOGIES } from '../data/portfolioData';

export default function Capabilities() {
  return (
    <section className="section-wrapper" id="capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">04 // CAPABILITIES & ARCHIVE</span>
            <h2 className="section-title">
              TECHNICAL <span className="section-title-serif">Capabilities.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            A verified inventory of digital craft, commercial solutions, and engineering competencies backed by active deployments.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="capabilities-list">
          {CAPABILITIES.map((cap) => (
            <div key={cap.number} className="capability-item">
              <div className="cap-number">{cap.number}</div>
              
              <div className="cap-title-wrap">
                <h3 className="cap-title">{cap.title}</h3>
                <span className="cap-subtitle">{cap.subtitle}</span>
              </div>

              <div className="cap-desc-wrap">
                <p className="cap-desc">{cap.description}</p>
                
                <div className="cap-tags">
                  {cap.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Archive Matrix */}
        <div className="technologies-archive-box">
          <div className="tech-archive-header">
            <div>
              <span className="editorial-tag-dot" style={{ marginRight: '0.5rem' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em' }}>
                VERIFIED TECHNOLOGY REPERTORY
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              NO PERCENTAGE METRICS · EVIDENCE-BACKED
            </span>
          </div>

          <div className="tech-groups-grid">
            {TECHNOLOGIES.map((group, idx) => (
              <div key={idx} className="tech-group-col">
                <h4 className="tech-group-title">{group.group}</h4>
                <div className="tech-pills-list">
                  {group.items.map((item, i) => (
                    <div key={i} className="tech-pill-row">
                      <span>{item}</span>
                      <span style={{ color: 'var(--accent-vermilion)', fontSize: '0.75rem' }}>✓</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
