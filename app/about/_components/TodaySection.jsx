import React from 'react';
import Link from 'next/link';

export default function TodaySection({ eyebrow, heading, description, linkText, linkHref }) {
  return (
    <section className="py-[64px] bg-panel">
      <div className="container max-w-[680px]">
        <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-amber before:inline-block">
          {eyebrow}
        </span>
        <h2 className="text-[clamp(26px,3.6vw,38px)] font-display font-bold mt-[14px]">
          {heading}
        </h2>
        <p className="mt-[18px] text-[17px] text-muted leading-[1.7]">
          {description}
        </p>
        <Link href={linkHref} className="inline-flex items-center gap-[8px] font-semibold text-[14.5px] no-underline text-green-deep mt-[24px] group">
          {linkText}
          <svg className="w-[16px] h-[16px] transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
