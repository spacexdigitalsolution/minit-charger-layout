import React from 'react';

export default function EnvironmentCompareGrid({ eyebrow, heading, leftTitle, leftItems, rightTitle, rightItems }) {
  return (
    <section className="bg-paper-dim py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/5 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full">
            <h3 className="font-display text-[22px] font-bold text-ink-950 pb-5 mb-5 border-b border-dashed border-black/10">
              {leftTitle}
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] text-[#5B6A5C] flex-grow">
              {leftItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start leading-relaxed">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-black/5 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full">
            <h3 className="font-display text-[22px] font-bold text-ink-950 pb-5 mb-5 border-b border-dashed border-black/10">
              {rightTitle}
            </h3>
            <ul className="flex flex-col gap-4 text-[15px] text-[#5B6A5C] flex-grow">
              {rightItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start leading-relaxed">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
