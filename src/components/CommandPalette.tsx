import React, { useEffect, useState, useMemo } from 'react';
import { Search, X, ArrowRight, Sun, Moon, FileText, Copy, Check } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

interface CommandAction {
  id: string;
  label: string;
  category: 'Navigation' | 'Project Deep-Dive' | 'System Action';
  keywords: string;
  onTrigger: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
}: CommandPaletteProps) {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const actions: CommandAction[] = useMemo(() => {
    const scrollTo = (hash: string) => {
      onClose();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return [
      {
        id: 'act-resume',
        label: 'Open Printable Resume & CV Modal',
        category: 'System Action',
        keywords: 'resume cv pdf print download profile',
        onTrigger: () => {
          onClose();
          onOpenResume();
        },
      },
      {
        id: 'act-theme',
        label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Surface Mode`,
        category: 'System Action',
        keywords: 'theme dark light mode toggle appearance',
        onTrigger: () => {
          toggleTheme();
          onClose();
        },
      },
      {
        id: 'act-copy-email',
        label: `Copy Email Address (${portfolioData.personal.email})`,
        category: 'System Action',
        keywords: 'email copy contact hire internship',
        onTrigger: () => {
          navigator.clipboard.writeText(portfolioData.personal.email);
          setCopiedEmail(true);
          setTimeout(() => {
            setCopiedEmail(false);
            onClose();
          }, 900);
        },
      },
      ...portfolioData.projects.map((p) => ({
        id: `proj-${p.id}`,
        label: `Inspect Case Study: ${p.title}`,
        category: 'Project Deep-Dive' as const,
        keywords: `${p.title} ${p.category} ${p.techStack.join(' ')}`,
        onTrigger: () => {
          onClose();
          onSelectProject(p);
        },
      })),
      {
        id: 'nav-projects',
        label: 'Jump to Selected Engineering Works',
        category: 'Navigation',
        keywords: 'projects builds portfolio case studies',
        onTrigger: () => scrollTo('#projects'),
      },
      {
        id: 'nav-skills',
        label: 'Jump to Technical Capabilities & Toolchain',
        category: 'Navigation',
        keywords: 'skills python java react machine learning sql',
        onTrigger: () => scrollTo('#skills'),
      },
      {
        id: 'nav-education',
        label: 'Jump to Jain University Education & Certifications',
        category: 'Navigation',
        keywords: 'education university degree coursework certifications',
        onTrigger: () => scrollTo('#education'),
      },
      {
        id: 'nav-learning',
        label: 'Jump to Active Learning Radar & Weekly Sprints',
        category: 'Navigation',
        keywords: 'learning radar rag dsa pytorch sprints',
        onTrigger: () => scrollTo('#learning'),
      },
      {
        id: 'nav-contact',
        label: 'Jump to Contact & Internship Inquiry Form',
        category: 'Navigation',
        keywords: 'contact email message hire internship',
        onTrigger: () => scrollTo('#contact'),
      },
    ];
  }, [theme, toggleTheme, onClose, onOpenResume, onSelectProject]);

  const filteredActions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.keywords.toLowerCase().includes(q)
    );
  }, [actions, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quick Command Palette"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section (e.g., Resume, Irrigation, Skills)..."
            className="w-full text-sm bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/70 p-2">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500 dark:text-slate-400">
              No matching commands found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredActions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={action.onTrigger}
                className="w-full flex items-center justify-between gap-4 px-3.5 py-2.5 text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors cursor-pointer group"
              >
                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {action.category}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {action.id === 'act-copy-email' && copiedEmail
                      ? 'Email Copied to Clipboard!'
                      : action.label}
                  </div>
                </div>

                <span className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0">
                  {action.id === 'act-theme' ? (
                    theme === 'dark' ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )
                  ) : action.id === 'act-resume' ? (
                    <FileText className="w-4 h-4" />
                  ) : action.id === 'act-copy-email' ? (
                    copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span>Click any item to execute</span>
          <span>Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}
