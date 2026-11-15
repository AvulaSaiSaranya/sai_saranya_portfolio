import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Copy, Mail, Send, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Summer 2025/2026 Internship Opportunity');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email address, and message before sending.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // Fallback if canvas-confetti is blocked in reduced motion
    }
  };

  const formattedPayload = `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`;

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(formattedPayload);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const mailtoHref = `mailto:${encodeURIComponent(
    portfolioData.personal.email
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hi Sai Saranya,\n\n${message}\n\nBest regards,\n${name}\n${email}`
  )}`;

  return (
    <section id="contact" className="py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
                06. Get in Touch
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4"
                style={{ textWrap: 'balance' }}
              >
                Open to Internships, Research &amp; Engineering Collaborations
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you are recruiting for a Summer 2025/2026 AI/ML or Software Engineering
                internship, organizing a hackathon sprint in Bengaluru, or discussing a technical
                project, I respond promptly.
              </p>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800 text-xs">
              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-slate-500 dark:text-slate-400 mb-0.5">Direct University Email</div>
                  <div className="font-mono font-medium text-slate-900 dark:text-slate-100">
                    {portfolioData.personal.email}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-slate-500 dark:text-slate-400 mb-0.5">GitHub Repositories</div>
                  <div className="font-mono font-medium text-slate-900 dark:text-slate-100">
                    {portfolioData.personal.githubHandle}
                  </div>
                </div>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors shrink-0"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-slate-500 dark:text-slate-400 mb-0.5">LinkedIn Network</div>
                  <div className="font-mono font-medium text-slate-900 dark:text-slate-100">
                    {portfolioData.personal.linkedinHandle}
                  </div>
                </div>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-colors shrink-0"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Graceful Mailto & Clipboard Fallback */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1017] border border-slate-200 dark:border-slate-800">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Priya Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g., priya@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                    >
                      <option value="Summer 2025/2026 Internship Opportunity">
                        Summer 2025/2026 Internship Opportunity
                      </option>
                      <option value="AI/ML Research or Project Collaboration">
                        AI/ML Research or Project Collaboration
                      </option>
                      <option value="Full-Stack Engineering Role">
                        Full-Stack Engineering Role
                      </option>
                      <option value="General Technical Inquiry">
                        General Technical Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about the role, team, timeline, or project..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-medium text-rose-600 dark:text-rose-400" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Includes instant clipboard &amp; mail client fallback.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Prepare &amp; Send Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-5 py-2">
                  <div>
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                      Message Ready for Dispatch
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Thank you, {name}. Your inquiry is formatted and ready.
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      You can launch your default mail client directly below or copy the formatted
                      message + address to your clipboard so no inquiry is ever lost.
                    </p>
                  </div>

                  <pre className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                    {formattedPayload}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyPayload}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Message Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Formatted Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer ml-auto"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
