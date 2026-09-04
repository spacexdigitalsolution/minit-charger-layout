import React from 'react';

export default function MagnusValueProp({ data }) {
  const getIcon = (name) => {
    switch (name) {
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'battery':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-none">
            <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M22 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-none">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-none">
            <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-paper-dim py-[60px] max-md:py-[40px]">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(26px,3.8vw,40px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-[#5B6A5C]">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-[10px_22px] mt-[22px]">
            {data.features.map((feature, idx) => (
              <span key={idx} className="flex items-center gap-2 text-[14.5px] font-semibold text-volt-dim">
                {getIcon(feature.icon)}
                {feature.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
