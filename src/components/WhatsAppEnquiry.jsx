import React, { useState, useId } from 'react';
import { Send, MessageSquare, AlertCircle, ExternalLink, Mail, Phone } from 'lucide-react';
import {
  PROFILE,
  PROJECT_TYPES,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS
} from '../data/portfolioData';

export default function WhatsAppEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Business website',
    budget: '₹10,000–₹25,000',
    timeline: 'Within one month',
    description: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const nameId = useId();
  const companyId = useId();
  const emailId = useId();
  const descriptionId = useId();
  const additionalNotesId = useId();

  // Construct message matching exact brief specifications
  const constructMessage = (data) => {
    let msg = `Hi Divyansh! I'd like to discuss a project.\n\n`;
    msg += `Name: ${data.name.trim() || '[Your Full Name]'}\n`;
    if (data.company.trim()) {
      msg += `Business: ${data.company.trim()}\n`;
    }
    msg += `Project type: ${data.projectType}\n`;
    if (data.budget) {
      msg += `Budget: ${data.budget}\n`;
    }
    if (data.timeline) {
      msg += `Timeline: ${data.timeline}\n`;
    }
    if (data.email.trim()) {
      msg += `Email: ${data.email.trim()}\n`;
    }
    msg += `\nProject details:\n${data.description.trim() || '[Project requirements and goals]'}\n`;
    if (data.additionalNotes.trim()) {
      msg += `\nAdditional requirements:\n${data.additionalNotes.trim()}\n`;
    }
    msg += `\nI found your portfolio at DivyanshBuilds.com and would like to discuss the next steps.`;
    return msg;
  };

  const previewMessage = constructMessage(formData);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a project type';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please describe your project (required)';
    } else if (formData.description.trim().length < 8) {
      errs.description = 'Please provide a little more detail (min 8 characters)';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const finalMessage = constructMessage(formData);
    const encoded = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/${PROFILE.whatsappInternational}?text=${encoded}`;

    // Open WhatsApp click-to-chat
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">07 // DIRECT COMMISSIONS</span>
            <h2 className="section-title">
              HAVE AN IDEA? <br />
              <span className="section-title-serif">Let's Give It Form.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Tell me what you're thinking. Let's explore what we can build together. Fill in the parameters below to draft an instant WhatsApp transmission.
          </p>
        </div>

        {/* Interactive Dual-Column Form Grid */}
        <div className="contact-interactive-grid">
          {/* Left: Refined Editorial Input Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">COMMISSION BRIEF</h3>
            <span className="contact-form-subtitle">
              DIRECT DISPATCH TO DIVYANSH VERMA (+91 8765989913)
            </span>

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name (Required) */}
              <div className="form-group">
                <label htmlFor={nameId} className="form-label">
                  FULL NAME <span className="req">*</span>
                </label>
                <input
                  id={nameId}
                  type="text"
                  placeholder="e.g. Alexander Vance"
                  className={`form-input ${errors.name ? 'is-error' : ''}`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              {/* Company / Business (Optional) */}
              <div className="form-group">
                <label htmlFor={companyId} className="form-label">
                  COMPANY / BUSINESS (OPTIONAL)
                </label>
                <input
                  id={companyId}
                  type="text"
                  placeholder="e.g. Vance Hospitality Co."
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Email Address (Optional) */}
              <div className="form-group">
                <label htmlFor={emailId} className="form-label">
                  EMAIL ADDRESS (OPTIONAL)
                </label>
                <input
                  id={emailId}
                  type="email"
                  placeholder="e.g. alex@vancehospitality.com"
                  className={`form-input ${errors.email ? 'is-error' : ''}`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              {/* Project Type Chips (Required) */}
              <div className="form-group">
                <label className="form-label">
                  PROJECT TYPE <span className="req">*</span>
                </label>
                <div className="chips-grid">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`choice-chip ${formData.projectType === type ? 'is-selected' : ''}`}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.projectType && <span className="form-error-msg">{errors.projectType}</span>}
              </div>

              {/* Budget Options Chips */}
              <div className="form-group">
                <label className="form-label">
                  ESTIMATED BUDGET
                </label>
                <div className="chips-grid">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`choice-chip ${formData.budget === opt ? 'is-selected' : ''}`}
                      onClick={() => setFormData({ ...formData, budget: opt })}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Options Chips */}
              <div className="form-group">
                <label className="form-label">
                  EXPECTED TIMELINE
                </label>
                <div className="chips-grid">
                  {TIMELINE_OPTIONS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`choice-chip ${formData.timeline === time ? 'is-selected' : ''}`}
                      onClick={() => setFormData({ ...formData, timeline: time })}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description (Required) */}
              <div className="form-group">
                <label htmlFor={descriptionId} className="form-label">
                  PROJECT DESCRIPTION <span className="req">*</span>
                </label>
                <textarea
                  id={descriptionId}
                  rows={4}
                  placeholder="Outline your project scope, core challenges, and intended deliverables..."
                  className={`form-textarea ${errors.description ? 'is-error' : ''}`}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
                {errors.description && <span className="form-error-msg">{errors.description}</span>}
              </div>

              {/* Additional Requirements (Optional) */}
              <div className="form-group">
                <label htmlFor={additionalNotesId} className="form-label">
                  ADDITIONAL REQUIREMENTS / NOTES (OPTIONAL)
                </label>
                <input
                  id={additionalNotesId}
                  type="text"
                  placeholder="e.g. Existing domain, Figma designs ready, specific API integrations..."
                  className="form-input"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                />
              </div>

              {/* Submit Trigger (Mobile-visible or direct fallback) */}
              <button
                type="submit"
                className="whatsapp-submit-btn"
                data-cursor="action"
              >
                <Send size={16} />
                <span>SEND DIRECT VIA WHATSAPP</span>
              </button>

              <span className="whatsapp-disclaimer">
                Clicking opens WhatsApp with your pre-composed brief. You will review and confirm sending inside WhatsApp.
              </span>
            </form>
          </div>

          {/* Right: Live Transmission Preview Sheet */}
          <div className="preview-sheet-wrap">
            <div className="preview-sheet-card">
              <div className="preview-sheet-header">
                <div className="preview-sheet-title">
                  <span className="whatsapp-dot" />
                  <span>TRANSMISSION PREVIEW</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                  ENCRYPTED / WA.ME
                </span>
              </div>

              <div className="preview-sheet-body">
                {previewMessage}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="whatsapp-submit-btn"
                data-cursor="action"
              >
                <Send size={16} />
                <span>OPEN IN WHATSAPP NOW</span>
              </button>

              {/* Alternative Direct Channels */}
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-rule)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  ALTERNATIVE DIRECT ROUTES
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}
                    data-cursor="action"
                  >
                    <Mail size={14} color="var(--accent-vermilion)" />
                    <span>Email: {PROFILE.email}</span>
                  </a>

                  <a
                    href={`tel:${PROFILE.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}
                    data-cursor="action"
                  >
                    <Phone size={14} color="var(--accent-cobalt)" />
                    <span>Direct: {PROFILE.whatsappNumber}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
