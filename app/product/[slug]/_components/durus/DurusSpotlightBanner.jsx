import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function DurusSpotlightBanner({ data }) {
  return (
    <>
      <section className="bg-ink text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1180px] px-6 py-11 lg:py-16 grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-8 lg:gap-[50px] items-center">
          <div className="bg-[radial-gradient(circle_at_40%_30%,_rgba(63,190,108,0.18),_transparent_65%)] border border-white/10 rounded-[26px] flex items-center justify-center p-[26px] min-h-[280px]">
            <SmartImage src={data.bgImage} alt="Durus compact charger, front view" description="Durus compact charger, front view" className="max-w-[230px]" width={230} height={230} />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-bright before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
              {data.eyebrow}
            </span>
            <h1 className="font-display font-bold text-[clamp(40px,6.4vw,68px)] text-white mt-1 leading-[1.02]">
              {data.heading}
            </h1>
            <p className="mt-3.5 text-[17px] text-[#9FB2A5] max-w-[480px]">
              {data.description}
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              <a href="#assessment" className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-[26px] py-[14px] rounded-full bg-green text-white hover:bg-green-deep shadow-[0_14px_30px_-14px_rgba(46,153,85,0.55)] transition-all hover:-translate-y-[1px]">
                Request a Quote
              </a>
              <a href="#spec-sheet" className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-[26px] py-[14px] rounded-full bg-transparent border-[1.5px] border-white text-white hover:bg-white/10 transition-all hover:-translate-y-[1px]">
                Download Spec Sheet
              </a>
            </div>
            <div className="flex gap-5 flex-wrap mt-7 pt-[22px] border-t border-white/10">
              {data.quickSpecs.map((spec, i) => (
                <div key={i}>
                  <div className="font-display font-bold text-[22px] text-green-bright leading-none">{spec.num}</div>
                  <div className="font-mono text-[10.5px] tracking-[0.06em] uppercase text-[#9FB2A5] mt-1">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-panel border-b border-black/10">
        <div className="mx-auto max-w-[1180px] px-6 py-4 flex items-center gap-6 flex-wrap font-mono text-xs tracking-[0.04em] text-muted">
          <span className="px-2.5 py-1 border border-dashed border-amber-deep rounded-full text-amber-deep font-semibold">
            [CLIENT TO CONFIRM]
          </span>
          <span>Marketing status pending confirmation for this product — see notes in page source before publishing.</span>
        </div>
      </div>
    </>
  );
}
