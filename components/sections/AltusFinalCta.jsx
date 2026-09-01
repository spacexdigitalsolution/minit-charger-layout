import React from 'react';

export default function AltusFinalCta({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px] bg-ink-950 text-white text-center">
      <div className="container mx-auto max-w-[1180px] px-6">
        <h2 className="text-white text-[clamp(30px,4.6vw,48px)] font-display font-bold max-w-[760px] mx-auto leading-[1.02]">
          {data.heading}
        </h2>
        <p className="text-[#9FB2A5] mt-[18px] mx-auto max-w-[560px] text-[17px]">
          {data.description}
        </p>
        <div className="flex justify-center gap-3.5 mt-[30px] flex-wrap">
          <a href="#assessment" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] shadow-volt hover:brightness-110 hover:-translate-y-[1px]">
            Request a Quote
          </a>
          <a href="#spec-sheet" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-transparent border border-[#DEE6D2] text-white hover:bg-white/5 hover:-translate-y-[1px]">
            Download Spec Sheet
          </a>
        </div>
        <div className="mt-[34px] font-mono text-[13px] text-[#9FB2A5]">
          {data.contact}
        </div>
      </div>
    </section>
  );
}
