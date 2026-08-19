import React from 'react';

/**
 * LogoTextStrip Component
 * 
 * Reusable strip that shows a label and a series of text-based logos (brand names).
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.label - Small uppercase text above logos
 * @param {Array<{id: string, name: string}>} props.logos - Array of brand names
 * @returns {JSX.Element}
 */
export default function LogoTextStrip({
  id,
  label,
  logos
}) {
  return (
    <section className="border-y border-black/5 bg-paper-dim py-14" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <p className="font-mono text-center text-[11px] uppercase tracking-wider text-[#4C5C54]">
          {label}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-10 opacity-60 grayscale lg:gap-16">
          {logos.map((logo) => (
            <span key={logo.id} className="font-display text-xl font-bold">
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
