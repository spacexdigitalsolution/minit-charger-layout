import React from 'react';

export default function CompactPageHeader({ eyebrow, heading, sub }) {
  return (
    <section className="pt-[50px] pb-[40px] max-md:pt-[120px] max-md:pb-[30px]">
      <div className="container">
        <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-amber before:inline-block">
          {eyebrow}
        </span>
        <h1 className="text-[clamp(34px,5vw,54px)] font-display font-bold text-text max-w-[640px] mt-[14px] leading-tight">
          {heading}
        </h1>
        <p className="mt-[16px] text-[17px] text-muted max-w-[480px]">
          {sub}
        </p>
      </div>
    </section>
  );
}
