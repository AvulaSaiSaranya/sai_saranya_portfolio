import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function ExperienceTimeline() {
  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 px-6 sm:px-8">
      {portfolioData.experienceTimeline.map((item, idx) => (
        <div key={item.id} className="py-7 flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="lg:w-64 shrink-0">
            <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums mb-1">
              0{idx + 1} · {item.period}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {item.type} · {item.location}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {item.role}
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
              {item.organization}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {item.summary}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {item.highlights.map((hl) => (
                <li key={hl} className="leading-relaxed">
                  — {hl}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
