'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AltusBpm({ data }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          sectionRef.current.classList.add('in-view');
        }
      });
    }

    if (bgRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(bgRef.current, { scale: 1, duration: 2.2, ease: "power2.out" });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden text-white flex items-center min-h-[520px] md:min-h-[640px] py-[96px]"
      id="bpm"
    >
      <div 
        ref={bgRef}
        className="absolute -inset-[3%] bg-cover bg-center scale-[1.06]"
        style={{ backgroundImage: `url(${data.bgImageSrc})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-l from-[rgba(11,20,15,.82)] via-[rgba(11,20,15,.30)_55%] to-[rgba(11,20,15,.10)]"></div>
      
      <div className="relative z-10 w-full container mx-auto px-6 max-w-[1180px]">
        <div className="ml-auto text-left md:text-right max-w-[620px]">
          <span className="inline-flex items-center gap-[7px] font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-amber-deep bg-amber-wash px-[12px] py-[6px] rounded-full">
            {data.tag}
          </span>
          <h2 className="text-white text-[clamp(30px,4.6vw,50px)] font-display font-bold leading-[1.02] mt-[14px] max-w-[16ch] md:ml-auto">
            {data.heading}
          </h2>
          <p className="mt-[16px] text-[#DCE7DF] text-[17px] max-w-[46ch] md:ml-auto">
            {data.description}
          </p>
          <a 
            href={data.cta.href} 
            className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-transform bg-green text-white shadow-[0_14px_30px_-14px_rgba(46,153,85,.55)] hover:bg-green-deep hover:-translate-y-[1px] mt-[26px]"
          >
            {data.cta.text}
          </a>

          <div className="relative mt-[44px] max-w-[620px] md:ml-auto group" aria-hidden="true">
            <svg viewBox="0 0 460 180" className="w-full h-auto overflow-visible">
              <circle cx="40" cy="90" r="16" className="fill-amber" />
              <text x="40" y="130" textAnchor="middle" className="font-mono text-[10px] fill-[#DCE7DF]">GRID</text>
              <path d="M56 90 H150" className="stroke-[rgba(255,255,255,.5)] stroke-[1.6px] fill-none" />
              <path d="M150 90 V30 H430" className="stroke-[rgba(255,255,255,.5)] stroke-[1.6px] fill-none" />
              <path d="M150 90 V150 H430" className="stroke-[rgba(255,255,255,.5)] stroke-[1.6px] fill-none" />
              <path d="M150 90 H430" className="stroke-[rgba(255,255,255,.5)] stroke-[1.6px] fill-none" />
              
              <path d="M56 90 H150 V30 H430" className="stroke-green-bright stroke-[2.4px] fill-none stroke-[length:8_7] opacity-0 [.in-view_&]:opacity-100 [.in-view_&]:animate-[flow_1.6s_linear_infinite]" />
              <path d="M150 90 H430" className="stroke-green-bright stroke-[2.4px] fill-none stroke-[length:8_7] opacity-0 [.in-view_&]:opacity-100 [.in-view_&]:animate-[flow_1.6s_linear_infinite] [animation-delay:0.4s]" />
              <path d="M150 90 V150 H430" className="stroke-green-bright stroke-[2.4px] fill-none stroke-[length:8_7] opacity-0 [.in-view_&]:opacity-100 [.in-view_&]:animate-[flow_1.6s_linear_infinite] [animation-delay:0.8s]" />
              
              <circle cx="430" cy="30" r="12" className="fill-ink-soft stroke-[rgba(255,255,255,.14)] stroke-[1.5px]" />
              <text x="430" y="14" textAnchor="middle" className="font-mono text-[10px] fill-[#DCE7DF]">A</text>
              
              <circle cx="430" cy="90" r="12" className="fill-ink-soft stroke-[rgba(255,255,255,.14)] stroke-[1.5px]" />
              <text x="430" y="112" textAnchor="middle" className="font-mono text-[10px] fill-[#DCE7DF]">B</text>
              
              <circle cx="430" cy="150" r="12" className="fill-ink-soft stroke-[rgba(255,255,255,.14)] stroke-[1.5px]" />
              <text x="430" y="170" textAnchor="middle" className="font-mono text-[10px] fill-[#DCE7DF]">C</text>
            </svg>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes flow {
                to { stroke-dashoffset: -30; }
              }
            `}} />
          </div>
          <p className="mt-[20px] text-[13px] text-mist max-w-[44ch] md:ml-auto">
            Power moves to whichever charger needs it, instead of every unit reserving its maximum.
          </p>
        </div>
      </div>
    </section>
  );
}
