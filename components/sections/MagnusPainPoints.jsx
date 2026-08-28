import React from 'react';

export default function MagnusPainPoints({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px]" id="failure-modes">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="max-w-[680px] mb-[44px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-[#5B6A5C]">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {data.cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#D7DECB] rounded-2xl p-[28px] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-copper"></div>
              
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-copper bg-copper/10 px-2.5 py-1 rounded-full">
                {card.tag}
              </span>
              
              <h3 className="font-body font-bold text-[19px] mt-4">
                {card.title}
              </h3>
              
              <p className="mt-2.5 text-[#5B6A5C] text-[15px]">
                {card.description}
              </p>
              
              <div className="mt-[18px] pt-[16px] border-t border-dashed border-[#D7DECB] flex gap-2.5">
                <span className="flex-none font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-volt-dim bg-volt/10 px-2.5 py-1 rounded-full h-fit">
                  {card.fixTag}
                </span>
                <p className="text-[14.5px] text-[#101A13] font-medium">
                  {card.fixDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
