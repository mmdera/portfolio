import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Eye, Check } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const cafe = FEATURED_PROJECTS[0];
  const fitness = FEATURED_PROJECTS[1];
  const studio = FEATURED_PROJECTS[2];
  const tracken = FEATURED_PROJECTS[3];

  return (
    <section className="section-wrapper" id="work">
      <div className="container">
        {/* Section Editorial Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">01 // SELECTED WORK</span>
            <h2 className="section-title">
              CURATED <span className="section-title-serif">Flagships.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Four verified builds engineered with Swiss editorial art direction, modern frontend architectures, and business-focused conversion flows.
          </p>
        </div>

        {/* Bespoke Project Sequences */}
        <div className="projects-editorial-list">

          {/* -------------------------------------------------------------
              PROJECT 01 — CAFÉ (Hospitality / Client Work)
              ------------------------------------------------------------- */}
          <article className="project-editorial-item">
            <div className="project-folio-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="project-folio-num">{cafe.number}</span>
                <span>// {cafe.category}</span>
              </div>
              <div>DELIVERED: {cafe.year}</div>
            </div>

            <div className="project-cafe-layout">
              {/* Expansive Image Spread */}
              <div 
                className="cafe-image-container"
                onClick={() => setSelectedProject(cafe)}
                data-cursor="project"
                data-cursor-label="INSPECT"
                tabIndex={0}
                role="button"
                aria-label={`Inspect ${cafe.title} details`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(cafe)}
              >
                <img 
                  src={cafe.image} 
                  alt={`${cafe.title} culinary website preview`}
                  loading="lazy" 
                />
                <div className="cafe-overlay-badge">
                  HOSPITALITY BRAND ARCHIVE // CLIENT DEPLOYMENT
                </div>
              </div>

              {/* Editorial Description & Specs */}
              <div className="cafe-content-box">
                <div className="cafe-category">{cafe.category}</div>
                <h3 className="cafe-title">{cafe.title}</h3>
                
                <p className="cafe-description">
                  {cafe.description}
                </p>

                {/* Specs Matrix */}
                <div className="project-specs-grid">
                  {cafe.specs.slice(0, 4).map((spec, i) => (
                    <div key={i} className="project-spec-item">
                      <div className="project-spec-label">{spec.label}</div>
                      <div className="project-spec-val">{spec.val}</div>
                    </div>
                  ))}
                </div>

                {/* Verified Tags */}
                <div className="cafe-tags">
                  {cafe.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions-row">
                  <a 
                    href={cafe.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary"
                    data-cursor="action"
                  >
                    <span>VISIT LIVE DEMO</span>
                    <ExternalLink size={14} />
                  </a>

                  <button 
                    onClick={() => setSelectedProject(cafe)}
                    className="btn-editorial-secondary"
                    data-cursor="action"
                  >
                    <span>INSPECT SPECS</span>
                    <Eye size={14} />
                  </button>
                </div>
              </div>
            </div>
          </article>


          {/* -------------------------------------------------------------
              PROJECT 02 — FITNESS & ATHLETICS (Fitness / Client Work)
              ------------------------------------------------------------- */}
          <article className="project-editorial-item">
            <div className="project-folio-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="project-folio-num">{fitness.number}</span>
                <span>// {fitness.category}</span>
              </div>
              <div>DELIVERED: {fitness.year}</div>
            </div>

            <div className="project-fitness-layout">
              {/* Dynamic Content Column */}
              <div className="fitness-content-col">
                <div className="cafe-category" style={{ color: 'var(--accent-cobalt)' }}>
                  {fitness.category}
                </div>
                
                <h3 className="fitness-title">
                  FORGE <span>ATHLETICS</span>
                </h3>

                <p className="cafe-description">
                  {fitness.description}
                </p>

                {/* Highlights List */}
                <ul className="project-highlights-list">
                  {fitness.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="project-highlight-item">
                      <Check size={16} className="highlight-check-icon" style={{ color: 'var(--accent-cobalt)' }} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Specs Matrix */}
                <div className="project-specs-grid">
                  {fitness.specs.map((spec, i) => (
                    <div key={i} className="project-spec-item">
                      <div className="project-spec-label">{spec.label}</div>
                      <div className="project-spec-val">{spec.val}</div>
                    </div>
                  ))}
                </div>

                <div className="project-actions-row">
                  <a 
                    href={fitness.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary"
                    style={{ backgroundColor: 'var(--accent-cobalt)', borderColor: 'var(--accent-cobalt)' }}
                    data-cursor="action"
                  >
                    <span>VISIT LIVE SITE</span>
                    <ExternalLink size={14} />
                  </a>

                  <button 
                    onClick={() => setSelectedProject(fitness)}
                    className="btn-editorial-secondary"
                    data-cursor="action"
                  >
                    <span>VIEW CASE DETAILS</span>
                    <Eye size={14} />
                  </button>
                </div>
              </div>

              {/* Bold Athletic Image Wrap */}
              <div 
                className="fitness-image-col fitness-image-wrap"
                onClick={() => setSelectedProject(fitness)}
                data-cursor="project"
                data-cursor-label="INSPECT"
                tabIndex={0}
                role="button"
                aria-label={`Inspect ${fitness.title} details`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(fitness)}
              >
                <img 
                  src={fitness.image} 
                  alt={`${fitness.title} platform showcase`}
                  loading="lazy" 
                />
              </div>
            </div>
          </article>


          {/* -------------------------------------------------------------
              PROJECT 03 — MMD STUDIO (E-Commerce / My Business)
              ------------------------------------------------------------- */}
          <article className="project-editorial-item">
            <div className="project-folio-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="project-folio-num">{studio.number}</span>
                <span>// {studio.category}</span>
              </div>
              <div>STATUS: ACTIVE ENTERPRISE</div>
            </div>

            <div className="project-studio-layout">
              <div className="studio-header-grid">
                <div>
                  <div className="cafe-category" style={{ color: 'var(--accent-vermilion)' }}>
                    PROPRIETARY COMMERCE ARCHITECTURE
                  </div>
                  <h3 className="studio-title">{studio.title}</h3>
                </div>

                <div className="project-actions-row">
                  <a 
                    href={studio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary"
                    data-cursor="action"
                  >
                    <span>OPEN STOREFRONT</span>
                    <ExternalLink size={14} />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(studio)}
                    className="btn-editorial-secondary"
                    data-cursor="action"
                  >
                    <span>SYSTEM SPECS</span>
                    <Eye size={14} />
                  </button>
                </div>
              </div>

              {/* Platform Wide Visual */}
              <div 
                className="studio-image-display"
                onClick={() => setSelectedProject(studio)}
                data-cursor="project"
                data-cursor-label="INSPECT"
                tabIndex={0}
                role="button"
                aria-label={`Inspect ${studio.title} details`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(studio)}
              >
                <img 
                  src={studio.image} 
                  alt={`${studio.title} e-commerce interface`}
                  loading="lazy" 
                />
              </div>

              {/* Structured Metadata & Highlights */}
              <div className="studio-details-grid">
                <div>
                  <p className="cafe-description">
                    {studio.description}
                  </p>
                  <ul className="project-highlights-list">
                    {studio.highlights.map((hl, i) => (
                      <li key={i} className="project-highlight-item">
                        <Check size={16} className="highlight-check-icon" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="project-specs-grid" style={{ marginTop: 0 }}>
                    {studio.specs.map((spec, i) => (
                      <div key={i} className="project-spec-item">
                        <div className="project-spec-label">{spec.label}</div>
                        <div className="project-spec-val">{spec.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="cafe-tags" style={{ marginTop: '1rem' }}>
                    {studio.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>


          {/* -------------------------------------------------------------
              PROJECT 04 — TRACKEN (Productivity / Digital Product)
              ------------------------------------------------------------- */}
          <article className="project-editorial-item">
            <div className="project-folio-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="project-folio-num">{tracken.number}</span>
                <span>// {tracken.category}</span>
              </div>
              <div>PRODUCT OS // ACTIVE WEB APP</div>
            </div>

            <div className="project-tracken-layout">
              {/* Product Frame */}
              <div 
                className="tracken-image-frame"
                onClick={() => setSelectedProject(tracken)}
                data-cursor="project"
                data-cursor-label="INSPECT"
                tabIndex={0}
                role="button"
                aria-label={`Inspect ${tracken.title} details`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(tracken)}
              >
                <img 
                  src={tracken.image} 
                  alt={`${tracken.title} productivity dashboard`}
                  loading="lazy" 
                />
              </div>

              {/* Content & Metrics */}
              <div>
                <div className="cafe-category">{tracken.category}</div>
                <h3 className="tracken-title">{tracken.title}</h3>
                
                <p className="cafe-description">
                  {tracken.description}
                </p>

                <div className="project-specs-grid">
                  {tracken.specs.map((spec, i) => (
                    <div key={i} className="project-spec-item">
                      <div className="project-spec-label">{spec.label}</div>
                      <div className="project-spec-val">{spec.val}</div>
                    </div>
                  ))}
                </div>

                <ul className="project-highlights-list">
                  {tracken.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="project-highlight-item">
                      <Check size={16} className="highlight-check-icon" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-actions-row">
                  <a 
                    href={tracken.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary"
                    data-cursor="action"
                  >
                    <span>LAUNCH TRACKEN</span>
                    <ExternalLink size={14} />
                  </a>

                  <button 
                    onClick={() => setSelectedProject(tracken)}
                    className="btn-editorial-secondary"
                    data-cursor="action"
                  >
                    <span>INSPECT ARCHITECTURE</span>
                    <Eye size={14} />
                  </button>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={Boolean(selectedProject)} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
