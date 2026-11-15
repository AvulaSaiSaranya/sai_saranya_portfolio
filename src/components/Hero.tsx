import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Search, Sun, Moon, SlidersHorizontal, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  onSelectProjectById: (id: string) => void;
}

export function Hero({
  onOpenResume,
  onOpenCommandPalette,
  onSelectProjectById,
}: HeroProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeRoleIdx, setActiveRoleIdx] = useState(0);
  const [workbenchTab, setWorkbenchTab] = useState<'diagnostic' | 'irrigation' | 'profile'>('diagnostic');
  const [threshold, setThreshold] = useState<number>(0.38);
  const [moistureLevel, setMoistureLevel] = useState<number>(24);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Compute live diagnostic metrics from threshold tau
  const sensitivity = Math.min(99.4, Math.max(78.0, 96.8 + (0.38 - threshold) * 28)).toFixed(1);
  const specificity = Math.min(99.2, Math.max(74.0, 91.5 + (threshold - 0.38) * 32)).toFixed(1);
  const f1Score = (
    (2 * parseFloat(sensitivity) * parseFloat(specificity)) /
    (parseFloat(sensitivity) + parseFloat(specificity))
  ).toFixed(1);

  // Compute live irrigation state from soil moisture level
  const isValveOpen = moistureLevel < 28 ? true : moistureLevel >= 62 ? false : moistureLevel < 45;
  const flowRateLpm = isValveOpen ? (2.4 + (45 - Math.min(45, moistureLevel)) * 0.04).toFixed(2) : '0.00';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="top" className="pt-6 pb-16 md:pt-10 md:pb-24 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Workspace Utility Bar (Search Command Palette + Theme Toggle + Location Metadata) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200/80 dark:border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {portfolioData.personal.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>{portfolioData.personal.batch}</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {portfolioData.personal.availability}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Open Quick Command Palette (Ctrl+K or Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Quick Jump</span>
              <kbd className="font-mono text-[11px] text-slate-500 dark:text-slate-400 pl-1">⌘K</kbd>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Surface</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-600" />
                  <span>Dark Surface</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Typographic Hierarchy & Primary Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono tracking-wide text-slate-500 dark:text-slate-400 mb-4">
                Jain University, Bengaluru · B.Tech CSE (Artificial Intelligence &amp; Machine Learning)
              </p>

              <h1
                className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.08] mb-6"
                style={{ textWrap: 'balance' }}
              >
                Building Intelligence.{' '}
                <span className="font-serif italic font-normal text-blue-600 dark:text-blue-400">
                  Engineering Possibilities.
                </span>
              </h1>

              {/* Interactive Role Focus Selector */}
              <div className="mb-6">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Select engineering focus lens:
                </div>
                <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                  {portfolioData.personal.roles.map((role, idx) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setActiveRoleIdx(idx)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        activeRoleIdx === idx
                          ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-[64ch] mb-8">
                Hi, I&apos;m <strong className="font-semibold text-slate-900 dark:text-slate-100">Sai Saranya Avula</strong>.{' '}
                {portfolioData.personal.shortBio}
              </p>
            </div>

            {/* Primary CTA & Action Bar */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/60 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Engineered Systems</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Printable Resume</span>
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Systems & Applied AI Workbench Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800 p-6">
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Interactive Project Workbench
                    </div>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                      Live Model &amp; Controller Sandbox
                    </h2>
                  </div>
                  <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                </div>

                {/* Workbench Mode Switcher */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg mb-5">
                  <button
                    type="button"
                    onClick={() => setWorkbenchTab('diagnostic')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      workbenchTab === 'diagnostic'
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    ML Classifier
                  </button>
                  <button
                    type="button"
                    onClick={() => setWorkbenchTab('irrigation')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      workbenchTab === 'irrigation'
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    IoT Hysteresis
                  </button>
                  <button
                    type="button"
                    onClick={() => setWorkbenchTab('profile')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      workbenchTab === 'profile'
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Academic Info
                  </button>
                </div>

                {workbenchTab === 'diagnostic' && (
                  <div className="space-y-4">
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Test decision threshold calibration (<span className="font-mono">τ</span>) on the{' '}
                      <strong className="text-slate-900 dark:text-slate-200">
                        Applied AI/ML Health Diagnostic Engine
                      </strong>
                      :
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-600 dark:text-slate-400">
                          Classification Threshold (τ)
                        </span>
                        <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                          {threshold.toFixed(2)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.20"
                        max="0.80"
                        step="0.02"
                        value={threshold}
                        onChange={(e) => setThreshold(parseFloat(e.target.value))}
                        aria-label="Classification Threshold"
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                        <span>0.20 (High Recall)</span>
                        <span>0.50 (Balanced)</span>
                        <span>0.80 (High Precision)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                      <div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Sensitivity</div>
                        <div className="text-lg font-mono font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                          {sensitivity}%
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Specificity</div>
                        <div className="text-lg font-mono font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                          {specificity}%
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">F1-Score</div>
                        <div className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                          {f1Score}%
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {workbenchTab === 'irrigation' && (
                  <div className="space-y-4">
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Simulate capacitive ADC root-zone moisture input for the{' '}
                      <strong className="text-slate-900 dark:text-slate-200">
                        Smart Irrigation Controller
                      </strong>
                      :
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-600 dark:text-slate-400">
                          Volumetric Soil Moisture
                        </span>
                        <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                          {moistureLevel}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="85"
                        step="1"
                        value={moistureLevel}
                        onChange={(e) => setMoistureLevel(parseInt(e.target.value, 10))}
                        aria-label="Volumetric Soil Moisture"
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                        <span>10% (Arid)</span>
                        <span>28% (Trigger Low)</span>
                        <span>62% (Cutoff High)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                      <div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Solenoid Valve</div>
                        <div className="text-sm font-mono font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                          {isValveOpen ? 'ACTUATED (OPEN)' : 'LATCHED (CLOSED)'}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Dispense Rate</div>
                        <div className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums mt-0.5">
                          {flowRateLpm} L/min
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {workbenchTab === 'profile' && (
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-slate-200/70 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400">Institution</span>
                      <span className="font-medium text-slate-900 dark:text-slate-200 text-right">
                        Jain University, Bengaluru
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-200/70 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400">Specialization</span>
                      <span className="font-medium text-slate-900 dark:text-slate-200 text-right">
                        B.Tech CSE (AI &amp; ML)
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-200/70 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400">Primary Languages</span>
                      <span className="font-mono text-slate-900 dark:text-slate-200 text-right">
                        Python · Java · TypeScript · C
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Target Roles</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400 text-right">
                        AI/ML &amp; SWE Internships
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">
                  Want the full architectural case study?
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onSelectProjectById(
                      workbenchTab === 'irrigation'
                        ? 'smart-irrigation-controller'
                        : 'ai-ml-health-diagnostic-engine'
                    )
                  }
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
                >
                  Open Deep-Dive Modal →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Row Below Hero Split */}
        <div className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.heroMetrics.map((metric) => (
            <div key={metric.unit} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-slate-50 tabular-nums">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
