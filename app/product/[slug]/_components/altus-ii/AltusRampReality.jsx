'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AltusRampReality({ data }) {
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

  const renderAnswer = (text) => {
    const parts = text.split(/\{([^}]+)\}/g);
    return (
      <>
        {parts.map((part, i) => {
          if (i % 2 === 1) {
            return (
              <span key={i} className="relative whitespace-nowrap group-in-view">
                {part}
                <svg className="absolute left-0 -bottom-[4px] w-full h-[8px] overflow-visible" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path
                    d="M2 5 Q50 -2 98 5"
                    className="stroke-green-bright transition-all duration-1000 ease-out delay-200 [.in-view_&]:![stroke-dashoffset:0]"
                    style={{
                      fill: 'transparent',
                      strokeWidth: '2.4px',
                      vectorEffect: 'non-scaling-stroke',
                      strokeDasharray: 100,
                      strokeDashoffset: 100
                    }}
                  />
                </svg>
              </span>
            );
          }
          return part;
        })}
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden text-white flex items-center min-h-[520px] md:min-h-[640px] py-[96px]"
      id="ramp-reality"
    >
      <div
        ref={bgRef}
        className="absolute -inset-[3%] bg-cover bg-center scale-[1.06]"
        style={{ backgroundImage: `url(${data.bgImageSrc})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,20,15,.55)] to-[rgba(11,20,15,.72)]"></div>

      <div className="relative z-10 w-full container mx-auto px-6 max-w-[1180px]">
        <div className="mx-auto text-center max-w-[640px]">
          <div className="font-mono text-[12px] tracking-[0.12em] uppercase text-green-bright font-semibold">
            {data.kicker}
          </div>
          <h2 className="text-white text-[clamp(30px,4.6vw,50px)] font-display font-bold leading-[1.02] mt-[14px] max-w-[20ch] mx-auto">
            {data.heading}
          </h2>
          <p className="mt-[16px] text-[#DCE7DF] text-[17px] max-w-[46ch] mx-auto">
            {data.description}
          </p>

          <div className="mt-[52px] grid gap-[30px] max-w-[640px] text-left mx-auto">
            {data.quotes.map((item, idx) => (
              <div key={idx} className="border-t border-[rgba(255,255,255,.14)] pt-[20px]">
                <div className="text-[18px] font-semibold leading-[1.4] text-white">
                  {item.q}
                </div>
                <div className="mt-[10px] text-[#DCE7DF] text-[15px]">
                  {renderAnswer(item.a)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
