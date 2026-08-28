import React from 'react';
import SmartImage from '../ui/SmartImage';

export default function MagnusTitleBanner({
  eyebrow,
  heading,
  description,
  imageSrc,
  imageAlt
}) {
  return (
    <section className="relative text-white overflow-hidden py-[70px] pb-[46px]">
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={imageSrc}
          alt={imageAlt}
          description="Hero background image showing Magnus charger in action"
          fill
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-950/78 via-ink-950/90 to-ink-950"></div>
      </div>
      <div className="container relative z-20 mx-auto px-6 max-w-[1180px]">
        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt">
          <span className="inline-block w-4 h-[2px] bg-copper"></span>
          {eyebrow}
        </span>
        <h1 className="text-[clamp(44px,7vw,84px)] text-white font-display font-bold mt-3 leading-[1.02] tracking-[0.01em]">
          {heading}
        </h1>
        <p className="mt-3 text-[18px] text-[#9FB2A5] max-w-[560px]">
          {description}
        </p>
      </div>
    </section>
  );
}
