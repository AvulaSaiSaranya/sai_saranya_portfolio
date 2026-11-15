import React, { useState } from 'react';
import { ArrowUpRight, Sliders } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

const PROJECT_CATEGORIES: ('All' | ProjectItem['category'])[] = [
  'All',
  'Embedded & IoT',
  'Applied AI / ML',
  'Full-Stack Web',
  'Data Science',
];

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectItem['category']>('All');

  const visibleProjects = portfolioData.projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
              03. Selected Engineering Works
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Engineered Systems &amp; Applied AI Case Studies
            </h2>
          </div>

          {/* Interactive Category Filter */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg w-fit">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Systems' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-Style 2-Column Project Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Quiet Unboxed Kicker Line */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
                      {project.index}.
                    </span>
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.timeframe}</span>
                  </div>
                </div>

                {/* Primary Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-1.5">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mb-4">
                  {project.subtitle}
                </p>

                {/* Architectural Pipeline Schematic Visual */}
                <div className="mb-6 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 p-4">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
                    <span>System Architecture Flow</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      3-Stage Pipeline
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.architectureSteps.map((arch) => (
                      <div key={arch.step} className="space-y-1">
                        <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 tabular-nums">
                          Stage {arch.step}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                          {arch.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary Prose */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Quantitative Proof Metrics Row */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-200/80 dark:border-slate-800/80 mb-6">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Unboxed Tech Stack Metadata with Typographic Separators */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < project.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Inspect Architecture &amp; Simulator</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
