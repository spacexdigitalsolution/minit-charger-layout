import React from 'react';

/**
 * Renders the minimal text-only Intro section.
 * @param {Object} props
 * @param {Object} props.data - The intro data object
 */
export default function IntroSolo({ data }) {
  if (!data) return null;

  return (
    <section className="py-[80px] md:py-[130px] bg-paper">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-[22px]">
        <div className="max-w-[680px]">
          <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep">
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,46px)] mt-4 font-display font-bold tracking-[0.01em] leading-none text-text">
            {data.heading}
          </h2>
          <p className="mt-5 text-[18px] text-muted leading-[1.65]">
            {data.description}
          </p>
          <a 
            href={data.cta.href} 
            className="inline-flex items-center gap-2 font-semibold text-[14.5px] no-underline text-green-deep group mt-[26px]"
          >
            {data.cta.text} 
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
