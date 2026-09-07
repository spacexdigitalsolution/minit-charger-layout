import React from 'react';

export default function LeadershipQuote({ eyebrow, text, name, role, sourceNote }) {
  return (
    <section className="py-[120px] max-md:py-[72px]">
      <div className="container max-w-[820px]">
        <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-amber before:inline-block">
          {eyebrow}
        </span>
        <blockquote className="mt-[20px] font-display font-bold text-[clamp(24px,3.4vw,36px)] leading-[1.25] text-text m-0">
          "{text}"
        </blockquote>
        <div className="mt-[24px] flex items-center gap-[12px] text-[14.5px]">
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-muted font-mono text-[12px] uppercase tracking-[0.06em]">{role}</div>
          </div>
        </div>
        <p className="mt-[16px] text-[12.5px] text-muted">
          {sourceNote}
        </p>
      </div>
    </section>
  );
}
