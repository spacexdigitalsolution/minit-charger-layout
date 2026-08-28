import React from 'react';
import SmartImage from '../ui/SmartImage';

export default function MagnusServiceabilityGrid({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#D7DECB] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <SmartImage src={card.image} alt={card.title} description={card.description} fill className="object-cover" />
              </div>
              <div className="p-[16px_20px]">
                <span className="font-mono text-[11px] text-volt-dim font-bold">{card.tag}</span>
                <h4 className="font-body font-bold text-[15.5px] mt-1.5 leading-[1.02]">{card.title}</h4>
                <p className="mt-1.5 text-[13.5px] text-[#5B6A5C]">
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
