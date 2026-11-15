import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Section Heading & Narrative */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
              01. Engineering Philosophy
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4"
              style={{ textWrap: 'balance' }}
            >
              Bridging Mathematical Rigor with Practical Systems Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              As a second-year Computer Science &amp; Engineering (AI &amp; ML) student at{' '}
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                Jain University, Bengaluru
              </strong>
              , my work sits at the intersection of statistical machine learning, embedded physical
              computing, and responsive web interfaces.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Rather than treating models as isolated notebooks, I focus on the complete lifecycle:
              cleaning noisy real-world telemetry, validating generalization across stratified folds,
              and delivering clean interfaces that humans can trust and operate.
            </p>
          </div>

          {/* Right Column: 3 First-Principles Pillars */}
          <div className="lg:col-span-7 divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
            {portfolioData.personal.engineeringPhilosophy.map((pillar) => (
              <div key={pillar.index} className="py-6 first:pt-6 last:pb-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="text-sm font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums shrink-0 pt-0.5">
                  {pillar.index}.
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
