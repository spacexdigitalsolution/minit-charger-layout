import React from 'react';

export default function MagnusEngineeringStrip({ data }) {
  const getIcon = (name) => {
    switch (name) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[26px] h-[26px] text-volt-dim flex-none">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[26px] h-[26px] text-volt-dim flex-none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[26px] h-[26px] text-volt-dim flex-none">
            <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-ink-950 border-y border-white/10">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="flex flex-wrap items-stretch">
          {data.map((item, idx) => (
            <div key={idx} className={`flex-1 min-w-[200px] p-[22px_24px] flex items-center gap-3.5 ${idx !== data.length - 1 ? 'border-r border-white/10' : ''}`}>
              {getIcon(item.icon)}
              <div>
                <div className="font-display text-[20px] text-white leading-[1.05]">{item.value}</div>
                <div className="font-mono text-[10.5px] tracking-[0.06em] uppercase text-[#9FB2A5] mt-0.5">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
