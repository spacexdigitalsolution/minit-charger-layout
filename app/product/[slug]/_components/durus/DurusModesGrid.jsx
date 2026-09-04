import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function DurusModesGrid({ data }) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-panel to-paper">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-[60px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block justify-center">
            {data.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,4.4vw,44px)] mt-4">
            {data.heading}
          </h2>
          <p className="mt-4 text-[16.5px] text-muted">
            {data.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {data.modes.map((mode, i) => (
            <div key={i} className={`rounded-[20px] overflow-hidden border border-line bg-white flex flex-col ${i === 0 ? 'shadow-[0_20px_40px_-16px_rgba(0,0,0,0.08)] lg:-translate-y-2' : ''}`}>
              {mode.image ? (
                <div className="bg-panel aspect-[16/10] relative">
                  <SmartImage src={mode.image} alt={mode.title} fill className="object-cover" description={mode.description} />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-ink to-[#1B3627] aspect-[16/10] flex items-center justify-center text-green-bright">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <use href={`#${mode.icon}`} />
                  </svg>
                </div>
              )}
              
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] font-bold text-amber-deep mb-4 inline-block">
                  {mode.badge}
                </span>
                <h3 className="font-display font-bold text-[22px]">
                  {mode.title}
                </h3>
                <p className="mt-3 text-[15px] text-muted mb-8">
                  {mode.description}
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  {mode.bullets.map((bullet, j) => (
                    <div key={j} className="flex gap-3 text-[14.5px] text-text">
                      <svg className="w-5 h-5 text-green-deep shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <use href="#i-check" />
                      </svg>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-[15px] text-muted max-w-[500px] mx-auto font-medium">
          {data.footerText}
        </p>
      </div>
    </section>
  );
}
