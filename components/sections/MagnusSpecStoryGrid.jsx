import React from 'react';
import SmartImage from '../ui/SmartImage';

export default function MagnusSpecStoryGrid({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px]" id="features">
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
            <div key={idx} className="bg-white border border-[#D7DECB] rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-paper-dim aspect-[4/3] flex items-center justify-center p-[18px]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <SmartImage src={card.image} alt={card.title} description={card.description} fill className="object-contain" />
                </div>
              </div>
              <div className="p-[20px_22px_24px]">
                <span className="font-mono text-[10.5px] font-bold tracking-[0.1em] uppercase text-volt-dim">
                  {card.label}
                </span>
                <h3 className="font-body font-bold text-[16.5px] mt-2">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] text-[#5B6A5C]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
