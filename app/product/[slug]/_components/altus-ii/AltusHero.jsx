'use client';

import React, { useRef, useState } from 'react';
import SmartImage from '@/components/ui/SmartImage';

const Pause = ({ size }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
    <path d="M9 5v14M15 5v14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Play = ({ size }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
);
export default function AltusHero({ data }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white flex items-end min-h-[min(90vh,780px)]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 96%)' }}>
      <div className="absolute inset-0">
        {data.videoSrc ? (
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            poster={data.posterSrc}
            aria-label={data.posterAlt}
            className="w-full h-full object-cover animate-[heroZoom_22s_ease-in-out_infinite_alternate]"
          >
            <source src={data.videoSrc} type="video/mp4" />
            <img src={data.posterSrc} alt={data.posterAlt} />
          </video>
        ) : (
          <SmartImage src={data.posterSrc} alt={data.posterAlt} fill className="object-cover animate-[heroZoom_22s_ease-in-out_infinite_alternate]" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,20,15,.50)] via-[rgba(11,20,15,.18)] to-[rgba(11,20,15,.94)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_78%_8%,rgba(63,190,108,.20),transparent_62%)] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full pt-[130px]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <span className="font-mono text-xs font-semibold tracking-[0.12em] uppercase text-green-bright">
            {data.eyebrow}
          </span>
          <h1 className="text-[clamp(40px,6.4vw,72px)] font-display font-bold leading-[1.02] mt-[18px] text-white max-w-[16ch]">
            {data.heading}
          </h1>
          <p className="mt-[20px] text-[19px] text-[#DCE7DF] max-w-[52ch]">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-[14px] mt-[32px]">
            {data.ctas?.map((cta, index) => (
              <a 
                key={index} 
                href={cta.href}
                className={`inline-flex items-center justify-center gap-2 font-sans font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-transform transition-colors whitespace-nowrap hover:-translate-y-[1px] ${
                  cta.type === 'primary' 
                    ? 'bg-green text-white shadow-[0_14px_30px_-14px_rgba(46,153,85,.55)] hover:bg-green-deep' 
                    : 'bg-transparent border-[1.5px] border-current text-white hover:bg-[rgba(255,255,255,.10)]'
                }`}
              >
                {cta.text}
              </a>
            ))}
          </div>
          {data.videoSrc && (
            <button 
              onClick={toggleVideo}
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
              className="inline-flex items-center gap-[8px] bg-[rgba(255,255,255,.12)] border border-[rgba(255,255,255,.14)] text-white rounded-full px-[16px] py-[9px] text-[13px] font-semibold mt-[26px] hover:bg-[rgba(255,255,255,.2)] transition-colors"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              {isPlaying ? "Pause video" : "Play video"}
            </button>
          )}
        </div>

        <div className="relative z-10 mt-[56px] border-t border-[rgba(255,255,255,.14)]">
          <div className="container mx-auto px-6 max-w-[1180px]">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {data.specRibbon?.map((spec, index) => (
                <div key={index} className={`py-[18px] md:py-[26px] pb-[20px] md:pb-[34px] border-b md:border-b-0 border-[rgba(255,255,255,.08)] md:border-r border-r-[rgba(255,255,255,.08)] ${index % 2 !== 0 ? 'border-r-0 md:border-r-[rgba(255,255,255,.08)]' : ''} ${index === data.specRibbon.length - 1 ? 'md:border-r-0' : ''}`}>
                  <div className="font-display text-[clamp(26px,3.2vw,38px)] font-bold text-white leading-none">
                    {spec.prefix}{spec.num}{spec.suffix}
                  </div>
                  <div className="mt-[9px] font-mono text-[11.5px] tracking-[0.12em] uppercase text-mist">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}} />
    </section>
  );
}
