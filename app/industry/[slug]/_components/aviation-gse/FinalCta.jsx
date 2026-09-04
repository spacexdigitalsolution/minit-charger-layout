import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function FinalCta({ data }) {
  if (!data) return null;

  return (
    <section id="assessment" className="relative text-white py-[100px] md:py-[150px] text-center overflow-hidden bg-ink">
      {data.bgImage && (
        <div className="absolute inset-0 z-0">
          <SmartImage 
            src={data.bgImage} 
            alt="Call to action background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-transparent to-ink/90" />
        </div>
      )}

      {/* Decorative Green Lines */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] -translate-x-[40%] -translate-y-[40%] opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <path key={i} d={`M 0 ${i*10} L ${i*10} 0`} stroke="#28A745" strokeWidth="0.5" />
          ))}
          {[...Array(10)].map((_, i) => (
            <path key={`2-${i}`} d={`M 0 ${i*10 + 100} L ${i*10 + 100} 0`} stroke="#28A745" strokeWidth="0.5" />
          ))}
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-x-[40%] translate-y-[40%] opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <path key={i} d={`M 100 ${100 - i*10} L ${100 - i*10} 100`} stroke="#28A745" strokeWidth="0.5" />
          ))}
          {[...Array(10)].map((_, i) => (
            <path key={`2-${i}`} d={`M 100 ${-i*10} L ${-i*10} 100`} stroke="#28A745" strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-8 sm:px-[22px]">
        <h2 className="text-[clamp(32px,5vw,56px)] max-w-[720px] mx-auto font-display font-bold leading-[1.1]">
          {data.heading}
        </h2>
        <p className="mt-[18px] mx-auto max-w-[480px] text-[#A9BAAE] text-[17px]">
          {data.description}
        </p>
        <div className="mt-[34px] flex justify-center gap-4 flex-wrap">
          <a 
            href={data.primaryCta.href} 
            className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] py-[15px] px-[28px] rounded-full no-underline transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-deep hover:-translate-y-px"
          >
            {data.primaryCta.text}
          </a>
          <a 
            href={data.secondaryCta.href} 
            className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] py-[15px] px-[28px] rounded-full no-underline transition-all duration-200 whitespace-nowrap border-[1.5px] border-white text-white hover:bg-white/10"
          >
            {data.secondaryCta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
