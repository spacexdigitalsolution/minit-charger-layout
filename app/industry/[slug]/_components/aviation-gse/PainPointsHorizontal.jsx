"use client";
import React from 'react';

export default function PainPointsHorizontal({ data }) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="bg-paper border-y border-black/5">
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {data.map((row, idx) => {
          const isReverse = idx % 2 !== 0;
          return (
            <div 
              key={row.id} 
              className="w-full shrink-0 snap-center px-8 sm:px-[22px] py-[80px] md:py-[120px]"
            >
              <div className="max-w-[1240px] w-full mx-auto flex flex-col">
                
                <div className="why-copy flex flex-col items-start text-left">
                  <div className="font-mono text-[12px] text-green-deep font-bold tracking-[0.1em]">
                    {row.num}
                  </div>
                  <h3 className="font-display font-bold text-[clamp(24px,3.5vw,42px)] mt-[12px] max-w-[800px] leading-[1.05] text-text">
                    {row.heading}
                </h3>
                
                <span className="block font-mono text-[10.5px] font-bold tracking-[0.1em] uppercase mt-[20px] text-[#A9640F]">
                  {row.eyebrow}
                </span>
                  <p className="mt-[6px] text-[16.5px] text-text max-w-[600px] leading-[1.6]">
                    {row.description}
                  </p>
                  
                  {row.cta && (
                    <a
                      href={row.cta.href}
                      className="inline-block mt-[32px] font-sans font-semibold text-[15px] py-[12px] px-[24px] rounded-full no-underline transition-all duration-200 bg-green text-white hover:bg-green-deep"
                    >
                      {row.cta.text}
                    </a>
                  )}
                </div>
  
              </div>
            </div>
          );
        })}</div>
    </section>
  );
}
