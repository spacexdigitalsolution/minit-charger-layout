import React from 'react';

export default function DurusValueProp({ data }) {
  return (
    <section className="py-16 lg:py-20 border-y border-line">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
            {data.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(26px,3.8vw,40px)] mt-4">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-muted">
            {data.description}
          </p>
          
          <div className="flex flex-wrap gap-2.5 mt-8">
            {data.chips.map((chip, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-line bg-white text-[14.5px] font-semibold text-text shadow-sm">
                <svg className="w-4 h-4 text-green-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <use href={`#${chip.icon}`} />
                </svg>
                {chip.label}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 flex-wrap mt-8 pt-2">
            <a href="#specs" className="inline-flex items-center justify-center font-semibold text-[15px] px-[26px] py-[14px] rounded-full bg-green text-white hover:bg-green-deep transition-colors shadow-sm">
              See Full Specs
            </a>
            <a href="#assessment" className="inline-flex items-center justify-center font-semibold text-[15px] px-[26px] py-[14px] rounded-full bg-transparent border-[1.5px] border-text text-text hover:bg-black/5 transition-colors">
              Talk to an Engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
