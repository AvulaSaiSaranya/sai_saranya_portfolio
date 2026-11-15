import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExperienceTimeline } from './ExperienceTimeline';
import { Certifications } from './Certifications';

export function Education() {
  const [activeTab, setActiveTab] = useState<'coursework' | 'experience' | 'certifications'>(
    'coursework'
  );

  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
              04. Academic &amp; Professional Foundation
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Jain University B.Tech CSE (AI &amp; ML), Experience &amp; Credentials
            </h2>
          </div>

          {/* Interactive Section Mode Selector */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('coursework')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'coursework'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              University &amp; Coursework
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Timeline &amp; Internships
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Verified Certifications
            </button>
          </div>
        </div>

        {activeTab === 'coursework' && (
          <div className="space-y-8">
            {/* Primary Institution Header Panel */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span className="font-mono text-blue-600 dark:text-blue-400">
                      {education.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{education.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{education.currentStatus}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                    {education.institution}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {education.degree}
                  </p>
                </div>

                <div className="text-left lg:text-right shrink-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Academic Standing</div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {education.academicStanding}
                  </div>
                </div>
              </div>

              {/* Core Coursework Table / Grid */}
              <div>
                <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                  Completed &amp; Active B.Tech CSE-AIML Core Modules
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.coreCoursework.map((course) => (
                    <div
                      key={course.code}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 tabular-nums">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            {course.code}
                          </span>
                          <span>{course.term}</span>
                        </div>
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                          {course.name}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {course.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && <ExperienceTimeline />}

        {activeTab === 'certifications' && <Certifications />}
      </div>
    </section>
  );
}
