import React from 'react';

export default function DurusFeatureList({ data }) {
  return (
    <section className="py-20 lg:py-28" id="features">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-12 lg:mb-[60px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
            {data.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,4.4vw,44px)] mt-4">
            {data.heading}
          </h2>
        </div>
        
        <div className="flex flex-col">
          {data.features.map((feature, i) => (
            <div key={i} className={`grid grid-cols-[auto_1fr] gap-5 lg:gap-6 items-start py-[26px] ${i !== data.features.length - 1 ? 'border-b border-line' : ''}`}>
              <div className="w-14 h-14 rounded-[14px] bg-green-wash text-green-deep flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <use href={`#${feature.icon}`} />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-[18px]">
                  {feature.title}
                </h3>
                <div className="mt-1 font-mono text-[11.5px] text-green-deep uppercase tracking-[0.06em] font-semibold">
                  {feature.spec}
                </div>
                <p className="mt-2 text-[14.5px] text-muted max-w-[640px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
