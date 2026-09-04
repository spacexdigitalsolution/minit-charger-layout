import React from 'react';

export default function DurusPainPoints({ data }) {
  return (
    <section className="py-20 lg:py-28" id="failure-modes">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-[720px] mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
            {data.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,4.4vw,44px)] mt-4">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-muted max-w-[640px]">
            {data.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.cards.map((card, i) => (
            <div key={i} className="flex gap-5 lg:gap-6">
              <div className="font-mono font-bold text-[18px] text-green-bright opacity-80 pt-1 shrink-0">
                {card.num}
              </div>
              <div>
                <h3 className="font-display font-bold text-[19px] leading-tight">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] text-muted">
                  {card.description}
                </p>
                <div className="mt-4 pt-4 border-t border-dashed border-line text-[14px] text-text font-medium">
                  <span className="block text-green-deep font-mono text-[10.5px] tracking-[0.08em] uppercase font-bold mb-1.5">
                    Design response
                  </span>
                  {card.fix}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
