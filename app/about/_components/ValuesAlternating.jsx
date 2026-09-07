import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function ValuesAlternating({ values }) {
  return (
    <section className="pt-[120px] max-md:pt-[72px] pb-0">
      <div className="container">
        {values.map((val, i) => {
          const isReverse = i % 2 !== 0;
          return (
            <div 
              key={i} 
              className={`grid grid-cols-[0.9fr_1.1fr] max-md:grid-cols-1 gap-[64px] max-md:gap-[30px] items-center py-[64px] border-t border-line first-of-type:border-t-0 ${isReverse ? 'grid-cols-[1.1fr_0.9fr]' : ''}`}
            >
              <div className={`aspect-[5/4] rounded-[18px] overflow-hidden bg-panel relative ${isReverse ? 'order-2 max-md:order-none' : ''}`}>
                <SmartImage
                  src={val.imageSrc}
                  alt={val.imageAlt}
                  description={val.imageDescription}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={isReverse ? 'order-1 max-md:order-none' : ''}>
                <div className="font-mono text-[12px] text-green-deep font-bold tracking-[0.1em]">
                  {val.num}
                </div>
                <h3 className="text-[clamp(23px,2.8vw,30px)] font-display font-bold mt-[12px] max-w-[440px] leading-tight">
                  {val.heading}
                </h3>
                <div className="mt-[14px] text-[16px] text-muted max-w-[440px] leading-[1.65]">
                  {val.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
