import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { portfolioData, SkillItem } from '../data/portfolioData';

const CATEGORIES: ('All' | SkillItem['category'])[] = [
  'All',
  'Programming',
  'AI / Machine Learning',
  'Web Development',
  'Tools & Workflow',
  'Core Computer Science',
];

export function TechnicalSkills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillItem['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return portfolioData.skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesQuery =
        !q ||
        skill.name.toLowerCase().includes(q) ||
        skill.context.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
              02. Technical Capabilities
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ textWrap: 'balance' }}
            >
              Production Toolchain &amp; Core Computer Science Stack
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., Python, React, SQL)..."
              aria-label="Filter technical skills"
              className="w-full pl-9 pr-8 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear skill search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Category Segmented Filter Bar */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg mb-8 w-fit">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="py-12 text-center bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 rounded-xl">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              No technical capabilities matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-3.5 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Unboxed quiet metadata line */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span>{skill.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-blue-600 dark:text-blue-400">
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/70 text-[11px] font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                  {skill.yearsOrProjects}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
