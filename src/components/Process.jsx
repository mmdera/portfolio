import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function Process() {
  return (
    <section className="section-wrapper" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">05 // WORKFLOW SEQUENCE</span>
            <h2 className="section-title">
              HOW I <span className="section-title-serif">Build.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            A disciplined, 5-phase engineering protocol transforming abstract project concepts into high-converting, resilient digital flagships.
          </p>
        </div>

        {/* Connected Editorial Step Sequence */}
        <div className="process-timeline-list">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-step-card">
              <div className="process-step-num">{step.step}</div>
              <div className="process-step-phase">// {step.phase}</div>
              <div>
                <h3 className="process-step-name">{step.name}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
