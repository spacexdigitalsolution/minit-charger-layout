import React from 'react';

export default function AltusUspGraphicsGrid({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px] bg-panel">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="max-w-[680px] mb-[44px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#D7DECB] rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-paper flex items-center justify-center font-display font-bold text-green-deep text-[18px]">
                0{idx + 1}
              </div>
              <h3 className="font-body font-bold text-[18px] text-ink-950">
                {card.title}
              </h3>
              <p className="text-[15px] text-[#5B6A5C]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
