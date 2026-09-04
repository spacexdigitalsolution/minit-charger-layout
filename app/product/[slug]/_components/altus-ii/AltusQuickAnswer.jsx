import React from 'react';

export default function AltusQuickAnswer({ data }) {
  return (
    <section className="py-[60px] max-md:py-[40px] bg-paper-dim">
      <div className="container mx-auto max-w-[820px] px-6">
        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
          <span className="inline-block w-4 h-[2px] bg-copper"></span>
          {data.eyebrow}
        </span>
        <h2 className="text-[24px] mt-3 font-body font-bold text-ink-950">
          {data.heading}
        </h2>
        <p className="mt-3.5 text-[#5B6A5C] text-[16.5px]">
          {data.description}
        </p>
      </div>
    </section>
  );
}
