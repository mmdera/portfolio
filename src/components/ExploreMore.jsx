import React from 'react';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { ARCHIVE_PROJECTS } from '../data/portfolioData';

export default function ExploreMore() {
  return (
    <section className="section-wrapper" id="archive">
      <div className="container">
        {/* Section Header */}
        <div className="section-editorial-header">
          <div>
            <span className="section-number-stamp">06 // SECONDARY ARCHIVE</span>
            <h2 className="section-title">
              MORE FROM <span className="section-title-serif">The Archive.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Experiments, additional builds, and ideas beyond the selected work. Engineered with focused utility and clean responsive performance.
          </p>
        </div>

        {/* Editorial Index Table */}
        <div className="archive-editorial-table">
          {ARCHIVE_PROJECTS.map((item) => (
            <div key={item.id} className="archive-row">
              <div className="archive-num">{item.number}</div>

              <div className="archive-title-wrap">
                <h3 className="archive-title">{item.title}</h3>
                <span className="archive-category">{item.category}</span>
              </div>

              <p className="archive-desc">{item.description}</p>

              <div className="cafe-tags" style={{ margin: 0 }}>
                {item.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              <div>
                <a 
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-link-btn"
                  data-cursor="action"
                >
                  <span>VISIT DEPLOYMENT</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
