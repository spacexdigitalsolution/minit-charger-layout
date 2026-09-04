import React from 'react';

export default function AltusFeatureDeepDive({ data }) {
  const getIcon = (name) => {
    switch (name) {
      case 'plug':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-deep">
            <path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M12 17v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-deep">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'battery':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-deep">
            <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M22 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'truck':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-deep">
            <path d="M2 8h11v8H2zM13 11h5l4 3v2h-9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 'monitor':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-deep">
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-deep">
            <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'radio':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[28px] h-[28px] text-green-deep">
            <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7 9a7 7 0 0 0 0 6M17 9a7 7 0 0 1 0 6M4 6a11 11 0 0 0 0 12M20 6a11 11 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'wrench':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[28px] h-[28px] text-green-deep">
            <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-[88px] max-md:py-[56px]" id="features">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="max-w-[680px] mb-[44px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {data.cards.map((card, idx) => (
            <div key={idx} className="bg-paper-dim border border-[#D7DECB] rounded-2xl overflow-hidden group">
              <div className="h-[220px] bg-white flex items-center justify-center border-b border-[#D7DECB]">
                <div className="w-[84px] h-[84px] rounded-full bg-paper-dim border border-[#D7DECB] flex items-center justify-center">
                  {getIcon(card.icon)}
                </div>
              </div>
              <div className="p-[26px]">
                <span className="inline-block font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[#738374] bg-[#EAEFE1] px-2 py-[2px] rounded mb-3">
                  {card.label}
                </span>
                <h3 className="font-body font-bold text-[18px] text-ink-950">
                  {card.title}
                </h3>
                <p className="mt-2 text-[#5B6A5C] text-[15px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {data.diagnostics && (
          <div className="mt-8 border border-[#D7DECB] bg-white rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D7DECB]">
            {data.diagnostics.map((diag, idx) => (
              <div key={idx} className="p-6">
                <div className="flex gap-4">
                  {getIcon(diag.icon)}
                  <div>
                    <h4 className="font-body font-bold text-[16.5px] text-ink-950">{diag.title}</h4>
                    <p className="mt-1 text-[14.5px] text-[#5B6A5C]">{diag.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
