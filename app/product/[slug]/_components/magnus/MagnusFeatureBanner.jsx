import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function MagnusFeatureBanner({ data }) {
  return (
    <section className="pb-[88px] max-md:pb-[56px]">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="relative rounded-[26px] overflow-hidden text-white min-h-[420px] flex items-end">
          <div className="absolute inset-0 z-0">
            <SmartImage
              src={data.image}
              alt="Two ground support vehicles charging simultaneously from one Magnus charger at an airport ramp"
              description="Two ground support vehicles charging simultaneously from one Magnus charger at an airport ramp"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-950/92 to-ink-950/15 to-[60%] pointer-events-none"></div>
          </div>
          <div className="relative z-20 p-[40px] max-w-[560px]">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt">
              <span className="inline-block w-4 h-[2px] bg-copper"></span>
              {data.eyebrow}
            </span>
            <h2 className="text-white text-[clamp(26px,3.6vw,38px)] font-display font-bold mt-3 leading-[1.02]">
              {data.heading}
            </h2>
            <p className="mt-3.5 text-[#9FB2A5] text-[16px]">
              {data.description}
            </p>
            <a href="#specs" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-copper text-white mt-[22px] hover:bg-[#c9783c] hover:-translate-y-[1px]">
              See Dual-Port Specs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
