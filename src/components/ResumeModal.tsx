import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const plainTextResume = `${portfolioData.personal.name.toUpperCase()}
${portfolioData.personal.degree}
${portfolioData.personal.university} (${portfolioData.personal.batch})
Location: ${portfolioData.personal.location}
Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
LinkedIn: ${portfolioData.personal.linkedin}

SUMMARY
${portfolioData.personal.shortBio}

TECHNICAL SKILLS
- Programming: Python 3, Java (OOP), TypeScript, JavaScript, C / Embedded C, SQL
- AI & Machine Learning: Scikit-Learn, NumPy, Pandas, Exploratory Data Analysis, Feature Engineering, Generative AI & Prompt Engineering
- Web Engineering: React 19, Tailwind CSS, HTML5/CSS3, REST APIs
- Core CS & Tools: Data Structures & Algorithms, DBMS, Operating Systems, Git/GitHub, Linux, JupyterLab

SELECTED ENGINEERING PROJECTS
${portfolioData.projects
  .map(
    (p) =>
      `${p.index}. ${p.title} (${p.category} | ${p.timeframe})\n   - ${p.summary}\n   - Key Outcomes: ${p.metrics
        .map((m) => `${m.label}: ${m.value}`)
        .join(', ')}`
  )
  .join('\n\n')}

EDUCATION
${portfolioData.education.institution}
${portfolioData.education.degree} | ${portfolioData.education.duration}
Standing: ${portfolioData.education.academicStanding}

CERTIFICATIONS
${portfolioData.certifications.map((c) => `- ${c.title} — ${c.issuer} (${c.issueDate})`).join('\n')}
`;

  const handleCopyResume = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 id="resume-modal-title" className="text-lg font-bold">
              Candidate Profile &amp; Printable Curriculum Vitae
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Formatted for ATS-friendly plain-text extraction or PDF print export
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied Plain Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Area */}
        <div
          id="printable-resume"
          className="p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-6 text-xs leading-relaxed"
        >
          {/* Resume Header */}
          <div className="pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                {portfolioData.personal.name}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                {portfolioData.personal.degree}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {portfolioData.personal.university} · {portfolioData.personal.location}
              </p>
            </div>
            <div className="font-mono text-[11px] text-slate-600 dark:text-slate-400 sm:text-right space-y-0.5">
              <div>{portfolioData.personal.email}</div>
              <div>{portfolioData.personal.githubHandle}</div>
              <div>{portfolioData.personal.linkedinHandle}</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Education
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900 dark:text-slate-100">
              <span>{portfolioData.education.institution}</span>
              <span className="font-mono">{portfolioData.education.duration}</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300 mt-0.5">
              {portfolioData.education.degree} · {portfolioData.education.academicStanding}
            </div>
            <div className="text-slate-500 dark:text-slate-400 mt-1">
              Relevant Coursework: Machine Learning, Data Structures &amp; Algorithms (Java/Python),
              Database Management Systems, Operating Systems, Linear Algebra &amp; Probability,
              Embedded C.
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Technical Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-slate-100">Languages:</strong> Python 3,
                Java (OOP), TypeScript, JavaScript, Embedded C, SQL
              </div>
              <div>
                <strong className="text-slate-900 dark:text-slate-100">AI / ML &amp; Data:</strong>{' '}
                Scikit-Learn, Pandas, NumPy, Statistical Profiling, Prompt Engineering &amp; RAG
              </div>
              <div>
                <strong className="text-slate-900 dark:text-slate-100">Web Development:</strong>{' '}
                React 19, Tailwind CSS, HTML5, CSS3, RESTful APIs
              </div>
              <div>
                <strong className="text-slate-900 dark:text-slate-100">Developer Tools:</strong> Git,
                GitHub, JupyterLab, Google Colab, Vite, Linux CLI
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Engineered Systems &amp; Projects
            </h4>
            <div className="space-y-4">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900 dark:text-slate-100">
                    <span>
                      {proj.title} — <span className="font-normal text-slate-600 dark:text-slate-400">{proj.subtitle}</span>
                    </span>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 shrink-0">
                      {proj.timeframe}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">{proj.summary}</p>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-1 tabular-nums">
                    Key Results: {proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Verified Certifications
            </h4>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              {portfolioData.certifications.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-slate-900 dark:text-slate-100">{cert.title}</strong> —{' '}
                  {cert.issuer} ({cert.issueDate})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
