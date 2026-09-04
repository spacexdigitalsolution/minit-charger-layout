"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SmartImage from '@/components/ui/SmartImage';

/**
 * ThesisHorizontal handles the horizontal scrolling for Section 3.
 * It features a fixed banner background and scrolls through thesis items.
 * @param {Object} props
 * @param {Array} props.data - Array of thesis items
 */
export default function ThesisHorizontal({ data }) {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".thesis-panel");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  if (!data || !Array.isArray(data)) return null;

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-ink">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src="/assets/Industries/Aviation-GSE/Why Minit Charger/Banner.webp"
          alt="Altus II charging on airport ramp"
          description="Altus II charging a TLD electric tug and a TLD GPU 2400 unit on an airport ramp"
          fill
          sizes="100vw"
          className="object-cover" 
        />
        {/* Gradient overlay for readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(7, 16, 12, 0.9) 0%, rgba(7, 16, 12, 0.6) 50%, rgba(7, 16, 12, 0) 100%)'
          }}
        />
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="relative z-10 flex flex-nowrap w-[300vw] h-screen">
        {data.map((row, idx) => (
          <div 
            key={row.id} 
            className="thesis-panel w-[100vw] h-full flex items-center justify-center shrink-0 px-8 sm:px-[22px]"
          >
            <div className="max-w-[1440px] w-full mx-auto flex flex-col items-start justify-center">
              
              {/* Text Content */}
              <div className="flex flex-col text-white w-full max-w-[800px]">
                <div className="font-mono text-[14px] text-green-light font-bold tracking-[0.1em] mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.05] mb-6">
                  {row.heading}
                </h3>
                <p className="text-[18px] text-white/90 leading-[1.6] mb-8">
                  {row.description}
                </p>
                
                {/* Proof Chips */}
                {row.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {row.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3 bg-white/5 p-4 rounded-[12px] border border-white/10">
                        <span className="text-green-light mt-0.5">•</span>
                        <span className="text-[14px] font-semibold text-white/90 leading-tight">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
