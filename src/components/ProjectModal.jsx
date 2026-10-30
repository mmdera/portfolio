import React, { useEffect } from 'react';
import { ExternalLink, X, Check, ShieldCheck, Layers, Calendar, UserCheck } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className={`project-modal-backdrop ${isOpen ? 'is-open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="project-modal-card">
        {/* Header Bar */}
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="editorial-tag-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              {project.number} // {project.category}
            </span>
          </div>

          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            data-cursor="action"
          >
            <span>CLOSE</span>
            <X size={14} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-content-body">
          {/* Main Visual */}
          <div className="modal-img-wrap">
            <img 
              src={project.image} 
              alt={`${project.title} interface preview`}
              loading="lazy" 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h2 id="modal-project-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
                {project.title}
              </h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-vermilion)', marginTop: '0.5rem', fontWeight: 600 }}>
                {project.deliverable}
              </div>
            </div>

            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary"
              data-cursor="action"
            >
              <span>VISIT LIVE WEBSITE</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
            {project.description}
          </p>

          {/* Specifications Matrix */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              SPECIFICATION METADATA
            </div>
            <div className="project-specs-grid" style={{ marginTop: 0 }}>
              {project.specs?.map((spec, i) => (
                <div key={i} className="project-spec-item">
                  <div className="project-spec-label">{spec.label}</div>
                  <div className="project-spec-val">{spec.val}</div>
                </div>
              ))}
              <div className="project-spec-item">
                <div className="project-spec-label">VERIFIED ROLE</div>
                <div className="project-spec-val">{project.role}</div>
              </div>
              <div className="project-spec-item">
                <div className="project-spec-label">YEAR</div>
                <div className="project-spec-val">{project.year}</div>
              </div>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              ENGINEERING & UX HIGHLIGHTS
            </div>
            <ul className="project-highlights-list" style={{ marginTop: 0, marginBottom: 0 }}>
              {project.highlights?.map((hl, i) => (
                <li key={i} className="project-highlight-item">
                  <Check size={16} className="highlight-check-icon" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              TECHNOLOGY STACK
            </div>
            <div className="cafe-tags" style={{ marginBottom: 0 }}>
              {project.tags?.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
