import React from 'react';
import { PHILOSOPHY } from '../data/portfolioData';

export default function Philosophy() {
  return (
    <section className="section-wrapper" id="philosophy">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">03 // ARCHITECTURAL CREED</span>
            <h2 className="section-title">
              MY <span className="section-title-serif">Philosophy.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Three core engineering and design principles that anchor every application, interface, and system I deploy.
          </p>
        </div>

        {/* Triptych Editorial Spread */}
        <div className="philosophy-grid">
          {PHILOSOPHY.map((item) => (
            <article key={item.number} className="philosophy-card">
              <div className="philosophy-number">{item.number}</div>
              <div className="philosophy-card-label">{item.label} // {item.subtitle}</div>
              <h3 className="philosophy-card-title">{item.title}</h3>
              <p className="philosophy-card-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
