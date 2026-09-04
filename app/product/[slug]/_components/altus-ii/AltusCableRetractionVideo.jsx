import React from 'react';

export default function AltusCableRetractionVideo({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px] bg-[#0B140F] text-white">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          
          <div className="order-2 lg:order-1">
            <div className="bg-black border border-white/15 rounded-[26px] overflow-hidden shadow-[0_24px_60px_-30px_rgba(11,20,15,0.45)]">
              <div className="relative aspect-video">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  controls 
                  poster={data.posterSrc}
                  className="w-full h-full object-cover"
                >
                  <source src={data.videoSrc} type="video/mp4" />
                  <img src={data.posterSrc} alt="Diagram showing cable retraction" className="w-full h-full object-cover" />
                </video>
              </div>
            </div>
            <div className="mt-4 text-center font-mono text-[12.5px] text-[#9FB2A5]">
              {data.videoCaption}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt">
              <span className="inline-block w-4 h-[2px] bg-[#E2A03D]"></span>
              {data.eyebrow}
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-white mt-3.5 leading-[1.02]">
              {data.heading}
            </h2>
            <p className="mt-4 text-[17px] text-[#9FB2A5]">
              {data.description}
            </p>
            
            <div className="flex flex-col gap-3 mt-6">
              {data.bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-3 items-start text-[15px] font-semibold text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-none mt-[2px] text-volt">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {bullet}
                </div>
              ))}
            </div>

            <div className="mt-[34px]">
              <a href="#assessment" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-[#E2A03D] text-[#241300] shadow-[0_14px_30px_-14px_rgba(226,160,61,0.6)] hover:bg-[#A9640F] hover:text-white hover:-translate-y-[1px]">
                Ask About Cable Management
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
