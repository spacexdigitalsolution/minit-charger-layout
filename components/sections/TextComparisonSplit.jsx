import React from 'react';

/**
 * TextComparisonSplit Section Component
 * 
 * Reusable dark section featuring a 2-column grid comparing two text-based options
 * (e.g., Conventional vs Fast Charging), with cross and check icons.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Small uppercase text
 * @param {React.ReactNode} props.heading - Main heading
 * @param {string} props.leftTitle - Left column title
 * @param {Array<string>} props.leftItems - Left column items
 * @param {string} props.rightTitle - Right column title
 * @param {Array<string>} props.rightItems - Right column items
 * @returns {JSX.Element}
 */
export default function TextComparisonSplit({
  id,
  eyebrow,
  heading,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems
}) {
  return (
    <section className="bg-ink-900 px-6 py-24 text-[#EEF5F0] lg:px-8" id={id}>
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-ink-950 p-10 ring-1 ring-white/10">
            <h3 className="font-display text-2xl font-semibold text-white">
              {leftTitle}
            </h3>
            <ul className="mt-6 space-y-4 text-mist">
              {leftItems.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-copper">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-[radial-gradient(ellipse_at_top,_#1C3327,_#07100C)] p-10 ring-1 ring-volt/30 shadow-volt">
            <h3 className="font-display text-2xl font-semibold text-white">
              {rightTitle}
            </h3>
            <ul className="mt-6 space-y-4 text-mist">
              {rightItems.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-volt">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
