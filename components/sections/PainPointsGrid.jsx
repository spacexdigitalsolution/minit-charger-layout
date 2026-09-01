import React from 'react';

export default function PainPointsGrid({ eyebrow, heading, description, painPoints }) {
  const cardsLength = painPoints.length;
  const gridColumnsClass =
    cardsLength === 1
      ? 'grid-cols-1'
      : cardsLength === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : cardsLength === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';



  return (
    <section className="bg-paper-dim py-24" id="pain-points">
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
          {painPoints.map((point) => (
            <div key={point.id} className="bg-white border border-black/5 rounded-2xl p-7 relative overflow-hidden shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber"></div>

              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-amber-deep bg-amber-wash px-2.5 py-1 rounded-full">
                Pain point
              </div>

              <h3 className="font-body font-bold text-[19px] text-ink-950 mt-4">
                {point.title}
              </h3>

              <p className="mt-2.5 text-[15px] text-[#5B6A5C] leading-relaxed">
                {point.description}
              </p>

              {point.fix && (
                <div className="mt-5 pt-4 border-t border-dashed border-black/10 flex flex-col gap-3 sm:items-start">
                  <div className="flex-none font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-green-800 bg-[#e3f4e8] px-2.5 py-1 rounded-full w-fit">
                    Minit response
                  </div>
                  <p className="text-[14.5px] font-medium text-ink-950 leading-relaxed">
                    {point.fix}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
