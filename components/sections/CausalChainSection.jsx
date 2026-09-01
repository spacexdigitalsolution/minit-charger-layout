import React from 'react';

export default function CausalChainSection({ eyebrow, heading, steps, footerText }) {
  return (
    <section className="bg-ink-950 py-16 text-white border-y border-white/5">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-copper">
            <span className="h-1.5 w-1.5 rounded-full bg-copper shadow-[0_0_0_4px_rgba(226,160,61,0.25)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            {heading}
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center gap-6 relative z-10">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex-1 bg-[#0E1A13] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -z-10 group-hover:bg-copper/20 transition-colors duration-500"></div>
                <div className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-copper">
                  {step.title || step.label}
                </div>
                <div className="font-display text-[26px] font-medium text-white mt-2.5">
                  {step.description || step.value}
                </div>
              </div>
              
              {i < steps.length - 1 && (
                <div className="flex-none flex justify-center text-mist-dark rotate-90 md:rotate-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {footerText && (
          <p className="mt-8 text-[15px] text-mist-dark max-w-2xl leading-relaxed">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}
