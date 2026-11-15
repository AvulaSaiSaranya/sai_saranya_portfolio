import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export function Footer({ onOpenResume, onOpenCommandPalette }: FooterProps) {
  return (
    <footer className="py-12 bg-slate-50 dark:bg-[#07080c] text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-semibold text-slate-900 dark:text-slate-100">
            {portfolioData.personal.name}
          </div>
          <div>
            {portfolioData.personal.degree} · Jain University, Bengaluru · Class of 2027
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={onOpenResume}
            className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Printable Resume
          </button>
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Command Palette (⌘K)
          </button>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4 transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
