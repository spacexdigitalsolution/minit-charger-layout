import React from 'react';

/**
 * BadgeStrip Component
 * 
 * Reusable strip with a label and a series of badge pills.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.label - Label text
 * @param {Array<{id: string, text: string}>} props.badges - Badges to display
 * @returns {JSX.Element}
 */
export default function BadgeStrip({
  id,
  label,
  badges
}) {
  return (
    <section className="border-b border-black/5 bg-paper-dim py-5" id={id}>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-[#4C5C54]">
          {label}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((badge) => (
            <span key={badge.id} className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink-900 shadow-sm ring-1 ring-black/5">
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
