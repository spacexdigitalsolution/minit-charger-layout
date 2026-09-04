import React from 'react';

export default function DurusVenueGrid({ data }) {
  return (
    <section className="bg-panel py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-[60px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block justify-center">
            {data.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,4.4vw,44px)] mt-4">
            {data.heading}
          </h2>
          <p className="mt-4 text-[16.5px] text-muted">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-5">
          {data.cards.map((card, i) => (
            <div key={i} className="bg-white rounded-[14px] p-6 lg:p-7 border border-line flex flex-col gap-4 shadow-sm">
              <div className="w-[42px] h-[42px] rounded-lg bg-green-wash text-green-deep flex items-center justify-center">
                {/* Simplified icon placeholder - in a real app this would map the ID to an SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <use href={`#${card.icon}`} />
                </svg>
              </div>
              <h3 className="font-display font-bold text-[17px] leading-tight">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
