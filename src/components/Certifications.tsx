import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {portfolioData.certifications.map((cert) => (
        <div
          key={cert.id}
          className="p-6 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">
                {cert.issueDate}
              </span>
              <span aria-hidden="true">·</span>
              <span>{cert.focusArea}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">ID: {cert.credentialId}</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
              {cert.title}
            </h3>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-4">
              Issued by {cert.issuer}
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 mb-5">
              {cert.keyTakeaways.map((takeaway) => (
                <p key={takeaway} className="leading-relaxed">
                  — {takeaway}
                </p>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Verified Academic &amp; Technical Credential
            </span>
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
            >
              <span>Course Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
