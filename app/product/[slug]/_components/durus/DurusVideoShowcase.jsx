import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function DurusVideoShowcase({ data }) {
  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-bright before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
              {data.eyebrow}
            </span>
            <h2 className="font-display font-bold text-[clamp(28px,4.4vw,44px)] mt-4">
              {data.heading}
            </h2>
            <p className="mt-5 text-[17.5px] leading-[1.6] text-[#9FB2A5]">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {data.chips.map((chip, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[13.5px] font-semibold text-[#e6ede7] shadow-sm">
                  {chip}
                </span>
              ))}
            </div>
            <a href="#assessment" className="inline-flex items-center justify-center font-semibold text-[15px] px-[26px] py-[14px] rounded-full bg-amber text-[#241300] hover:bg-[#F2B622] transition-colors mt-10 shadow-sm">
              Ask Which Mode Fits Your Fleet
            </a>
          </div>
          <div className="rounded-[20px] shadow-sm border border-white/10 overflow-hidden flex flex-col bg-black">
            <div className="relative aspect-[16/10] bg-black w-full">
              {process.env.NEXT_PUBLIC_SHOW_IMAGE_PLACEHOLDERS === 'true' ? (
                <SmartImage
                  src={data.posterUrl}
                  alt="Durus Video Placeholder"
                  fill
                  description="Placeholder for application demo video"
                  className="object-cover opacity-50"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  poster={data.posterUrl}
                  className="w-full h-full object-cover"
                >
                  <source src={data.videoUrl} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="text-center font-mono text-[11.5px] uppercase tracking-[0.06em] text-[#9FB2A5] bg-[#0E1A13] px-[18px] py-[14px] font-semibold">
              {data.caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
