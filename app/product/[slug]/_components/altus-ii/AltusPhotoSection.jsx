'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AltusPhotoSection({ data }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const isLight = data.theme === 'light';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  const getAlignmentClasses = () => {
    switch(data.alignment) {
      case 'right':
        return 'ml-auto text-left md:text-right';
      case 'center':
        return 'mx-auto text-center max-w-[640px]';
      case 'left':
      default:
        return 'text-left';
    }
  };

  const getSubAlignmentClasses = () => {
    switch(data.alignment) {
      case 'right':
        return 'ml-0 md:ml-auto';
      case 'center':
        return 'mx-auto';
      case 'left':
      default:
        return '';
    }
  };

  const getScrimStyle = () => {
    switch(data.scrim) {
      case 'side':
        return 'bg-gradient-to-r from-[rgba(11,20,15,.82)] via-[rgba(11,20,15,.30)_55%] to-[rgba(11,20,15,.10)]';
      case 'side-reverse':
        return 'bg-gradient-to-l from-[rgba(11,20,15,.82)] via-[rgba(11,20,15,.30)_55%] to-[rgba(11,20,15,.10)]';
      case 'dark':
      default:
        return 'bg-gradient-to-b from-[rgba(11,20,15,.55)] to-[rgba(11,20,15,.72)]';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden flex items-center ${isLight ? 'bg-white text-ink' : 'text-white'} ${data.alignment === 'center' ? 'min-h-[520px] md:min-h-[640px]' : 'min-h-[520px] md:min-h-[640px]'} py-[96px]`}
    >
      {!isLight && (
        <>
          <div 
            ref={bgRef}
            className="absolute -inset-[3%] bg-cover bg-center scale-[1.06]"
            style={{ backgroundImage: `url('${data.bgImageSrc}')` }}
          ></div>
          <div className={`absolute inset-0 ${getScrimStyle()}`}></div>
        </>
      )}
      
      <div className={`relative z-10 w-full container mx-auto px-6 max-w-[1180px]`}>
        <div className={getAlignmentClasses()}>
          <div className="font-mono text-[12px] tracking-[0.12em] uppercase text-green-bright font-semibold">
            {data.kicker}
          </div>
          <h2 className={`${isLight ? 'text-ink' : 'text-white'} text-[clamp(30px,4.6vw,50px)] font-display font-bold leading-[1.02] mt-[14px] ${data.alignment === 'center' ? 'max-w-[20ch] mx-auto' : 'max-w-[16ch]'} ${data.alignment === 'right' ? 'md:ml-auto' : ''}`}>
            {data.heading}
          </h2>
          <p className={`mt-[16px] ${isLight ? 'text-ink/80' : 'text-[#DCE7DF]'} text-[17px] max-w-[46ch] ${getSubAlignmentClasses()}`}>
            {data.description}
          </p>

          {data.pills && (
            <div className={`mt-[34px] flex gap-[14px] flex-wrap ${data.alignment === 'center' ? 'justify-center' : ''} ${data.alignment === 'right' ? 'justify-start md:justify-end' : ''}`}>
              {data.pills.map((pill, idx) => (
                <span key={idx} className={`font-mono text-[12.5px] border rounded-full py-[8px] px-[16px] ${isLight ? 'border-line text-ink bg-paper' : 'border-[rgba(255,255,255,.14)] text-white bg-[rgba(255,255,255,.06)]'}`}>
                  <b className="text-green-bright font-semibold mr-[6px]">{pill.label}</b> — {pill.desc}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
