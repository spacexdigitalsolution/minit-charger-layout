import React from 'react';

export default function AltusFinalCta({ data }) {
  return (
    <section className="relative overflow-hidden text-white flex items-center min-h-[520px] py-[96px]" id="quote">
      <div 
        className="absolute -inset-[3%] bg-cover bg-center scale-[1.06]"
        style={{ backgroundImage: `url(${data.bgImageSrc})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,20,15,.55)] to-[rgba(11,20,15,.72)]"></div>
      
      <div className="relative z-10 w-full container mx-auto px-6 max-w-[1180px]">
        <div className="mx-auto text-center max-w-[640px]">
          <h2 className="text-white text-[clamp(30px,4.6vw,50px)] font-display font-bold leading-[1.02] max-w-[20ch] mx-auto">
            {data.heading}
          </h2>
          <p className="mt-[16px] text-[#DCE7DF] text-[17px] max-w-[46ch] mx-auto">
            {data.description}
          </p>
          
          <div className="flex justify-center flex-wrap gap-[14px] mt-[32px]">
            {data.ctas?.map((cta, index) => (
              <a 
                key={index} 
                href={cta.href}
                className={`inline-flex items-center justify-center gap-2 font-sans font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-transform transition-colors whitespace-nowrap hover:-translate-y-[1px] ${
                  cta.type === 'primary' 
                    ? 'bg-green text-white shadow-[0_14px_30px_-14px_rgba(46,153,85,.55)] hover:bg-green-deep' 
                    : 'bg-transparent border-[1.5px] border-[rgba(255,255,255,.5)] text-white hover:bg-[rgba(255,255,255,.10)]'
                }`}
              >
                {cta.text}
              </a>
            ))}
          </div>

          <div className="mt-[36px] font-mono text-[11.5px] tracking-[0.1em] text-mist uppercase">
            {data.contactInfo}
          </div>
        </div>
      </div>
    </section>
  );
}
