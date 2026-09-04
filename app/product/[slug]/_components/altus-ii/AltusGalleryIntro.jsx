'use client';

import React, { useState } from 'react';
import SmartImage from '@/components/ui/SmartImage';
import Button from '@/components/ui/Button';

export default function AltusGalleryIntro({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-[60px] md:py-[40px] bg-paper">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-14 items-start">
          
          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-[76px_1fr] gap-3.5">
            <div className="flex sm:flex-col flex-row gap-2.5 overflow-x-auto">
              {data.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`border-2 rounded-[10px] overflow-hidden bg-white p-1.5 cursor-pointer transition-colors flex-none w-[76px] h-[76px] ${activeIndex === idx ? 'border-volt-dim' : 'border-[#D7DECB] hover:border-volt-dim'}`}
                  aria-label={img.alt}
                >
                  <div className="relative w-full h-full">
                    <SmartImage src={img.src} alt={img.alt} description={img.alt} fill className="object-contain" />
                  </div>
                </button>
              ))}
            </div>
            <div>
              <div className="bg-white border border-[#D7DECB] rounded-[26px] p-[26px] shadow-[0_24px_60px_-30px_rgba(11,20,15,0.45)] flex items-center justify-center min-h-[380px]">
                <div className="relative w-full h-[440px]">
                  <SmartImage src={data.gallery[activeIndex].src} alt={data.gallery[activeIndex].alt} description={data.gallery[activeIndex].alt} fill className="object-contain" />
                </div>
              </div>
              <div className="mt-3 text-center font-mono text-[12.5px] text-[#5B6A5C]">
                {data.mainGalleryCaption}
              </div>
            </div>
          </div>

          {/* Intro Copy */}
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
              <span className="inline-block w-4 h-[2px] bg-copper"></span>
              {data.eyebrow}
            </span>
            <h2 className="text-[clamp(26px,3.6vw,36px)] font-display font-bold text-[#101A13] mt-3.5 leading-[1.02]">
              {data.heading}
            </h2>
            <p className="mt-4.5 text-[17px] text-[#5B6A5C]">
              {data.description}
            </p>

            <div className="flex gap-2.5 flex-wrap mt-4.5">
              {data.badges.map((badge, idx) => (
                <span key={idx} className="font-mono text-xs font-semibold text-volt-dim bg-volt/10 px-3 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-7">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="bg-paper-dim rounded-xl p-4">
                  <div className="font-display text-[26px] text-volt-dim leading-none">{stat.num}</div>
                  <div className="mt-1.5 text-xs text-[#5B6A5C] font-semibold">{stat.lbl}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3.5 flex-wrap mt-7.5">
              <a href="#assessment" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] shadow-volt hover:brightness-110 hover:-translate-y-[1px]">
                Request a Quote
              </a>
              <a href="#spec-sheet" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-transparent border-[1.5px] border-[#DEE6D2] text-[#101A13] hover:bg-[rgba(16,26,19,0.06)] hover:-translate-y-[1px]">
                Download Spec Sheet
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
