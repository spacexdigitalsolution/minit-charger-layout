import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function AboutHero({ eyebrow, heading, sub, bgImageSrc, bgImageAlt, bgImageDescription }) {
  return (
    <section className="relative min-h-[78vh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SmartImage
          src={bgImageSrc}
          alt={bgImageAlt}
          description={bgImageDescription}
          fill
          className="object-cover object-[55%_40%] animate-kenburns"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(100deg, rgba(9, 17, 12, .65) 0%, rgba(9, 17, 12, .3) 45%, rgba(9, 17, 12, .1) 75%), linear-gradient(0deg, rgba(9, 17, 12, .6) 0%, rgba(9, 17, 12, 0) 35%)'
          }}
        />
      </div>
      
      <div className="container relative z-10 pt-[180px] pb-[80px] w-full">
        <span className="eyebrow text-green-bright font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-amber before:inline-block">
          {eyebrow}
        </span>
        <h1 className="text-[clamp(38px,5.8vw,78px)] font-display font-bold text-white max-w-[760px] leading-none mt-4">
          {heading}
        </h1>
        <p className="mt-[18px] text-[18px] text-mist max-w-[480px]">
          {sub}
        </p>
      </div>
    </section>
  );
}
