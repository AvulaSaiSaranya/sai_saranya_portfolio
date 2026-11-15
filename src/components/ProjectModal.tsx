import React, { useEffect, useState } from 'react';
import { X, Check, Copy, ArrowUpRight, Sliders } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  // Interactive simulator states inside modal
  const [soilMoisture, setSoilMoisture] = useState(22);
  const [ambientTemp, setAmbientTemp] = useState(33);
  const [diagThreshold, setDiagThreshold] = useState(0.38);
  const [hubTrackFilter, setHubTrackFilter] = useState<'ALL' | 'AIML' | 'DSA' | 'SYSTEMS'>('ALL');
  const [polyDegree, setPolyDegree] = useState(2);
  const [ridgeAlpha, setRidgeAlpha] = useState(1.2);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Calculations for irrigation simulator
  const effectiveLowThreshold = ambientTemp > 32 ? 31 : 28;
  const valveActive = soilMoisture < effectiveLowThreshold;
  const waterSavedPct = (38.4 + (30 - Math.min(30, soilMoisture)) * 0.15).toFixed(1);

  // Calculations for diagnostic simulator
  const tp = Math.round(142 + (0.5 - diagThreshold) * 35);
  const fn = Math.max(2, 150 - tp);
  const tn = Math.round(138 + (diagThreshold - 0.35) * 30);
  const fp = Math.max(3, 150 - tn);
  const modalRecall = ((tp / (tp + fn)) * 100).toFixed(1);
  const modalPrecision = ((tp / (tp + fp)) * 100).toFixed(1);

  // Calculations for analytics pipeline simulator
  const r2Score = Math.min(
    0.945,
    Math.max(0.76, 0.914 - Math.abs(polyDegree - 2) * 0.032 - Math.abs(ridgeAlpha - 1.2) * 0.015)
  ).toFixed(3);
  const rmseVal = (0.184 + Math.abs(polyDegree - 2) * 0.04 + Math.abs(ridgeAlpha - 1.2) * 0.02).toFixed(3);

  const sampleModules = [
    { code: 'CSM401', title: 'Stratified Cross-Validation & ROC Calibration Guide', track: 'AIML', sem: 'Sem 4' },
    { code: 'CSC302', title: 'Graph Shortest Paths: Dijkstra & Bellman-Ford in Java', track: 'DSA', sem: 'Sem 3' },
    { code: 'CSC305', title: 'POSIX Threads, Semaphores & Page Replacement Simulator', track: 'SYSTEMS', sem: 'Sem 4' },
    { code: 'CSM405', title: 'Vectorized Backpropagation & Regularization in NumPy', track: 'AIML', sem: 'Sem 4' },
  ].filter((m) => hubTrackFilter === 'ALL' || m.track === hubTrackFilter);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-900 dark:text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
                Case Study {project.index}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.timeframe}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-8">
          {/* Problem & Engineering Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mb-2">
                01. Problem Statement
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2">
                02. Engineering Solution
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.engineeringApproach}
              </p>
            </div>
          </div>

          {/* Interactive Architecture Simulator */}
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Interactive System Behaviour Simulator
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Real-Time Parameter Tuning
              </span>
            </div>

            {project.simulatorType === 'irrigation' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        Root-Zone Capacitive Moisture (%)
                      </span>
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                        {soilMoisture}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="80"
                      value={soilMoisture}
                      onChange={(e) => setSoilMoisture(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        Ambient Field Temperature (°C)
                      </span>
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                        {ambientTemp} °C
                      </span>
                    </div>
                    <input
                      type="range"
                      min="18"
                      max="44"
                      value={ambientTemp}
                      onChange={(e) => setAmbientTemp(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Relay State</div>
                    <div className="text-sm font-mono font-bold text-slate-900 dark:text-slate-100 mt-1">
                      {valveActive ? 'VALVE OPEN (ENERGIZED)' : 'VALVE CLOSED (STANDBY)'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Dynamic Trigger Point
                    </div>
                    <div className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums mt-1">
                      &lt; {effectiveLowThreshold}% Moisture
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Median Filter Window
                    </div>
                    <div className="text-sm font-mono text-slate-800 dark:text-slate-200 tabular-nums mt-1">
                      5 ADC Samples (50ms)
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Projected Water Savings
                    </div>
                    <div className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular-nums mt-1">
                      {waterSavedPct}% vs. Timer
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.simulatorType === 'diagnostic' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        Decision Probability Threshold (τ)
                      </span>
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                        {diagThreshold.toFixed(2)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.20"
                      max="0.75"
                      step="0.02"
                      value={diagThreshold}
                      onChange={(e) => setDiagThreshold(parseFloat(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Lowering <span className="font-mono">τ</span> increases screening sensitivity
                    (fewer missed positive cases), while raising <span className="font-mono">τ</span>{' '}
                    reduces false positives.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-4 rounded-lg bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 font-mono text-xs tabular-nums">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900">
                    <div className="text-slate-500 dark:text-slate-400">True Positives (TP)</div>
                    <div className="text-base font-bold text-slate-900 dark:text-slate-100">{tp}</div>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900">
                    <div className="text-slate-500 dark:text-slate-400">False Negatives (FN)</div>
                    <div className="text-base font-bold text-slate-900 dark:text-slate-100">{fn}</div>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900">
                    <div className="text-slate-500 dark:text-slate-400">Recall (Sensitivity)</div>
                    <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                      {modalRecall}%
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900">
                    <div className="text-slate-500 dark:text-slate-400">Precision</div>
                    <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                      {modalPrecision}%
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.simulatorType === 'devhub' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-1 p-1 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 rounded-lg w-fit">
                  {(['ALL', 'AIML', 'DSA', 'SYSTEMS'] as const).map((track) => (
                    <button
                      key={track}
                      type="button"
                      onClick={() => setHubTrackFilter(track)}
                      className={`px-3 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                        hubTrackFilter === track
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {track}
                    </button>
                  ))}
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 rounded-lg px-4">
                  {sampleModules.map((mod) => (
                    <div key={mod.code} className="py-2.5 flex items-center justify-between text-xs gap-4">
                      <div>
                        <span className="font-mono text-blue-600 dark:text-blue-400 mr-2">
                          {mod.code}
                        </span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                          {mod.title}
                        </span>
                      </div>
                      <span className="font-mono text-slate-500 dark:text-slate-400 shrink-0">
                        {mod.track} · {mod.sem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.simulatorType === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        Polynomial Basis Degree (d)
                      </span>
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                        Degree {polyDegree}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={polyDegree}
                      onChange={(e) => setPolyDegree(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        Ridge L2 Penalty (α)
                      </span>
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
                        α = {ridgeAlpha.toFixed(1)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="5.0"
                      step="0.1"
                      value={ridgeAlpha}
                      onChange={(e) => setRidgeAlpha(parseFloat(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-slate-800 font-mono tabular-nums">
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Validation R² Score
                    </div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
                      {r2Score}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Out-of-Fold RMSE
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                      {rmseVal}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3-Step System Architecture Breakdown */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">
              System Architecture &amp; Data Flow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.architectureSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800"
                >
                  <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1 tabular-nums">
                    Stage {step.step}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
                    {step.title}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Implementation Snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Implementation Excerpt · {project.codeSnippet.filename}
              </span>
              <button
                type="button"
                onClick={handleCopySnippet}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>View Full Repository on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
