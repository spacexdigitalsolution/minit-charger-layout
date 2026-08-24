'use client';

import React, { useState } from 'react';

export default function LeadMagnet({ eyebrow, heading, description, checklist }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-24" id="guide">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="rounded-3xl bg-ink-950 p-8 lg:p-16 text-white grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_0_4px_rgba(226,160,61,0.25)]"></span>
              {eyebrow || 'Free download'}
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              {heading || 'The Airport GSE Charging Guide'}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-mist-dark mb-8">
              {description}
            </p>
            <div className="flex flex-col gap-3">
              {checklist && checklist.map((item, i) => (
                <div key={i} className="flex gap-3 text-[14px] text-[#dce7df]">
                  <svg className="w-5 h-5 text-amber shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5 mb-4">
                <label htmlFor="mg-name" className="text-xs font-semibold text-mist-dark">Full name</label>
                <input
                  id="mg-name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-volt focus:ring-1 focus:ring-volt placeholder-white/30"
                />
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label htmlFor="mg-email" className="text-xs font-semibold text-mist-dark">Work email</label>
                <input
                  id="mg-email"
                  type="email"
                  placeholder="you@airline.com"
                  required
                  className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-volt focus:ring-1 focus:ring-volt placeholder-white/30"
                />
              </div>
              <div className="flex flex-col gap-1.5 mb-6">
                <label htmlFor="mg-airport" className="text-xs font-semibold text-mist-dark">Airport / company</label>
                <input
                  id="mg-airport"
                  type="text"
                  placeholder="e.g. PHX Ground Ops"
                  className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-volt focus:ring-1 focus:ring-volt placeholder-white/30"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber text-ink-950 font-bold py-3.5 rounded-full hover:bg-amber-deep transition hover:-translate-y-0.5 shadow-md"
              >
                Send Me the Guide
              </button>

              {submitted && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-volt font-semibold text-[13.5px]">
                  Check your inbox — the guide is on its way.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
