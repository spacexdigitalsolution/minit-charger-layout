import React from 'react';
import Link from 'next/link';

export default function FinalCta({ heading, description, primaryCta, secondaryCta }) {
  return (
    <section className="bg-ink text-white text-center py-[120px] max-md:py-[72px]">
      <div className="container">
        <h2 className="font-display font-bold text-[clamp(30px,4.6vw,50px)] max-w-[720px] mx-auto leading-tight">
          {heading}
        </h2>
        <p className="mt-[16px] mx-auto max-w-[480px] text-mist text-[16.5px]">
          {description}
        </p>
        <div className="mt-[32px] flex justify-center gap-[16px] flex-wrap">
          {primaryCta && (
            <Link 
              href={primaryCta.href}
              className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] px-[28px] py-[15px] rounded-[100px] no-underline transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-deep hover:-translate-y-[1px]"
            >
              {primaryCta.text}
            </Link>
          )}
          {secondaryCta && (
            <Link 
              href={secondaryCta.href}
              className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] px-[28px] py-[15px] rounded-[100px] no-underline transition-all duration-200 whitespace-nowrap border-[1.5px] border-current text-white hover:bg-white/10"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
