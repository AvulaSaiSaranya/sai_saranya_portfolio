import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export function CurrentlyLearning() {
  const [selectedId, setSelectedId] = useState<string>(portfolioData.currentlyLearning[0].id);

  const activeTrack =
    portfolioData.currentlyLearning.find((t) => t.id === selectedId) ||
    portfolioData.currentlyLearning[0];

  return (
    <section id="learning" className="py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
            05. Active Learning Sprints
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
            style={{ textWrap: 'balance' }}
          >
            Current Study Radar &amp; Weekly Engineering Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Selectable Study Tracks */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {portfolioData.currentlyLearning.map((track, index) => {
              const isSelected = track.id === activeTrack.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedId(track.id)}
                  className={`text-left p-5 rounded-xl border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-[#0d1017] border-blue-600 dark:border-blue-500'
                      : 'bg-white/60 dark:bg-[#0d1017]/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                    <span className="font-mono text-blue-600 dark:text-blue-400 tabular-nums">
                      0{index + 1} · {track.domain}
                    </span>
                    <span className="font-mono tabular-nums">{track.cadence}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                    {track.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Track Deep-Dive Panel */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-blue-600 dark:text-blue-400">
                    Active Track Specification
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeTrack.domain}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{activeTrack.cadence}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {activeTrack.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {activeTrack.currentFocus}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                    Completed Sprint Milestones
                  </h4>
                  <div className="space-y-2">
                    {activeTrack.completedMilestones.map((milestone, i) => (
                      <div
                        key={milestone}
                        className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                      >
                        <span className="font-mono text-blue-600 dark:text-blue-400 tabular-nums shrink-0">
                          0{i + 1}.
                        </span>
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-500 dark:text-slate-400 mb-1">
                    Next Target Deliverable
                  </div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">
                    {activeTrack.nextDeliverable}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 dark:text-slate-400 mb-1">
                    Primary Reference Text
                  </div>
                  <div className="font-mono text-slate-700 dark:text-slate-300">
                    {activeTrack.referenceMaterial}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
