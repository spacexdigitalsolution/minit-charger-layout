import React from 'react';

export default function AltusFaqAccordion({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px] bg-paper-dim">
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

        <div className="flex flex-col gap-3">
          {data.items.map((item, idx) => (
            <details key={idx} className="bg-white border border-[#D7DECB] rounded-xl overflow-hidden group">
              <summary className="flex items-center justify-between gap-4 p-[20px_22px] cursor-pointer font-semibold text-[15.5px] list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] flex-none transition-transform duration-200 text-volt-dim group-open:rotate-45">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="px-[22px] pb-[20px] text-[14.5px] text-[#5B6A5C] max-w-[820px]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
