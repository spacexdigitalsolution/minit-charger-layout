import React from 'react';

export default function SpecStoryGrid({ eyebrow, heading, description, cards }) {
  const cardsLength = cards.length;
  const gridColumnsClass =
    cardsLength === 1
      ? 'grid-cols-1'
      : cardsLength === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : cardsLength === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';



  return (
    <section className="bg-white py-24" id="altus-deep-dive">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
              {description}
            </p>
          )}
        </div>

        <div className={`grid ${gridColumnsClass} gap-6`}>
          {cards.map((card, i) => (
            <div key={i} className="bg-paper-dim border border-black/5 rounded-3xl p-8 lg:p-10 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex gap-4 items-start pb-6 mb-6 border-b border-dashed border-black/10">
                <span className="flex-none inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-green-800 bg-[#e3f4e8] px-2.5 py-1 rounded-full mt-0.5">
                  Spec
                </span>
                <p className="font-body text-[18px] font-bold text-ink-950">
                  {card.title}
                </p>
              </div>
              <div className="flex gap-4 items-start text-[15.5px] text-[#5B6A5C] leading-relaxed">
                <svg className="flex-none w-6 h-5 text-amber opacity-60" viewBox="0 0 24 20" fill="currentColor">
                  <path d="M10 8c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4h4v12H6V8h4zm-10 0c0-4.4 3.6-8 8-8v4c-2.2 0-4 1.8-4 4h4v12H-4V8h4z" transform="translate(4, 0)" />
                </svg>
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
