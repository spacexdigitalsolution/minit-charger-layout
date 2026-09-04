import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function DurusChargingFactors({ data }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-[720px] mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
            {data.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,4.4vw,44px)] mt-4">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-muted max-w-[640px]">
            {data.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-11 items-center">
          <div className="rounded-[16px] overflow-hidden border border-line shadow-sm relative aspect-[4/3] bg-panel">
            <SmartImage 
              src={data.image} 
              alt="Durus charging factors infographic" 
              fill 
              className="object-cover" 
              description="Infographic showing factors that affect Durus charging speed"
            />
          </div>
          
          <div className="flex flex-col gap-6">
            {data.factors.map((factor, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <svg className="w-5 h-5 text-green-deep shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <use href={`#${factor.icon}`} />
                </svg>
                <div>
                  <div className="font-bold text-[14.5px]">
                    {factor.title}
                  </div>
                  <div className="mt-1 text-[13.5px] text-muted">
                    {factor.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
