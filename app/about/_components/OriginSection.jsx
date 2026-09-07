import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function OriginSection({ eyebrow, heading, description, imageSrc, imageAlt, imageDescription }) {
  return (
    <section className="py-[120px] max-md:py-[72px]">
      <div className="container grid grid-cols-[0.9fr_1.1fr] max-md:grid-cols-1 gap-[64px] max-md:gap-[36px] items-center">
        <div className="aspect-[5/4] rounded-[18px] overflow-hidden bg-panel relative">
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            description={imageDescription}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep flex items-center gap-[10px] before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-amber before:inline-block">
            {eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-display font-bold mt-4 max-w-[480px] leading-tight">
            {heading}
          </h2>
          <p className="mt-5 text-[17px] text-muted max-w-[480px] leading-[1.7]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
