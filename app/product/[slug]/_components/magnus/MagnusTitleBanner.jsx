import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function MagnusTitleBanner({
  eyebrow,
  heading,
  description,
  imageSrc,
  imageAlt
}) {
  return (
    <section className="relative text-ink-950 bg-paper overflow-hidden py-[70px] pb-[46px]">
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={imageSrc}
          alt={imageAlt}
          description="Hero background image showing Magnus charger in action"
          fill
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/78 via-paper/90 to-paper"></div>
      </div>
      <div className="container relative z-20 mx-auto px-6 max-w-[1180px]">
        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-ink-600">
          <span className="inline-block w-4 h-[2px] bg-copper"></span>
          {eyebrow}
        </span>
        <h1 className="text-[clamp(44px,7vw,84px)] text-ink-950 font-display font-bold mt-3 leading-[1.02] tracking-[0.01em]">
          {heading}
        </h1>
        <p className="mt-3 text-[18px] text-ink-600 max-w-[560px]">
          {description}
        </p>
      </div>
    </section>
  );
}
