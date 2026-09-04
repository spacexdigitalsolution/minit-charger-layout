import React from 'react';
import SmartImage from '@/components/ui/SmartImage';
import Link from 'next/link';

export default function EcosystemGrid({ data }) {
  if (!data) return null;

  return (
    <section id="ecosystem" className="bg-panel py-[80px] md:py-[130px]">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-[22px]">
        <div className="max-w-[560px] mb-[50px]">
          <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep">
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(26px,3.6vw,38px)] mt-[14px] font-display font-bold leading-none text-text">
            {data.heading}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-line rounded-[18px] overflow-hidden">
          {data.products.map((product) => (
            <Link 
              key={product.id}
              href={product.href}
              className="bg-white p-[30px_22px] flex flex-col gap-[14px] no-underline text-inherit transition-colors duration-200 hover:bg-green-wash group"
            >
              <div className="w-[50px] h-[50px] rounded-[11px] bg-panel flex items-center justify-center overflow-hidden relative">
                <SmartImage 
                  src={product.imageSrc} 
                  alt={product.imageAlt}
                  description={product.imageAlt}
                  fill
                  sizes="50px"
                  className="object-contain p-[7px]"
                />
              </div>
              <div>
                <h4 className="font-sans font-bold text-[15px] leading-tight text-text">
                  {product.title}
                </h4>
                <p className="mt-[5px] text-[13px] text-muted leading-[1.5]">
                  {product.description}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 font-semibold text-[12.5px] no-underline text-green-deep">
                Explore 
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
