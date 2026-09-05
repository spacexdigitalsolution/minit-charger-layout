"use client";
import React, { useRef, useEffect } from 'react';

export default function PainPointsHorizontal({ data }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef.current || !data || data.length <= 1) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          // Reached the end, snap back to start
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to the next item
          container.scrollTo({ 
            left: container.scrollLeft + container.clientWidth, 
            behavior: 'smooth' 
          });
        }
      }
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [data]);

  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="bg-paper border-y border-black/5">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {data.map((row, idx) => {
          const isReverse = idx % 2 !== 0;
          return (
            <div
              key={row.id}
              className="w-full shrink-0 snap-center px-8 sm:px-[22px] py-[80px] md:py-[120px]"
            >
              <div className="max-w-[1240px] w-full mx-auto flex flex-col">

                <div className="why-copy flex flex-col items-center text-center">
                  <div className="font-mono text-[12px] text-green-deep font-bold tracking-[0.1em]">
                    {row.num}
                  </div>
                  <h3 className="font-display font-bold text-[clamp(24px,3.5vw,42px)] mt-[12px] max-w-[800px] leading-[1.05] text-text mx-auto">
                    {row.heading}
                  </h3>

                  <span className="block font-mono text-[10.5px] font-bold tracking-[0.1em] uppercase mt-[20px] text-[#A9640F]">
                    {row.eyebrow}
                  </span>
                  <p className="mt-[6px] text-[16.5px] text-text max-w-[600px] leading-[1.6] mx-auto">
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
