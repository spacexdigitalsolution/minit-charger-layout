'use client';

import React, { useRef, useState, useEffect } from 'react';
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videoSrcArray = Array.isArray(data.videoSrc) ? data.videoSrc : (data.videoSrc ? [data.videoSrc] : []);
  const currentVideo = videoSrcArray.length > 0 ? videoSrcArray[currentVideoIndex] : null;

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      videoRef.current.load();
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => console.log("Playback prevented:", e));
        }
      }
    }
  }, [currentVideo]); // Only run on video change, not play/pause toggle

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
    <>
      <section className="relative overflow-hidden bg-ink text-white flex items-center min-h-[100svh]">
        <div className="absolute inset-0">
          {currentVideo ? (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              poster={data.posterSrc}
              aria-label={data.posterAlt}
              className="w-full h-full object-cover animate-[heroZoom_22s_ease-in-out_infinite_alternate]"
            >
              <source src={currentVideo} type="video/mp4" />
            </video>
          ) : (
            <SmartImage src={data.posterSrc} alt={data.posterAlt} fill className="object-cover animate-[heroZoom_22s_ease-in-out_infinite_alternate]" />
          )}

          {/* Improved contrast gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,20,15,0.95)] via-[rgba(11,20,15,0.65)] to-[rgba(11,20,15,0.1)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,20,15,0.95)] via-[rgba(11,20,15,0.2)] to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_85%_15%,rgba(63,190,108,.15),transparent_60%)] pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full py-[60px] md:py-[100px] mt-12 md:mt-0">
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
                  className={`inline-flex items-center justify-center gap-2 font-sans font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-transform transition-colors whitespace-nowrap hover:-translate-y-[1px] ${cta.type === 'primary'
                    ? 'bg-green text-white shadow-[0_14px_30px_-14px_rgba(46,153,85,.55)] hover:bg-green-deep'
                    : 'bg-transparent border-[1.5px] border-current text-white hover:bg-[rgba(255,255,255,.10)]'
                    }`}
                >
                  {cta.text}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-[12px] mt-[26px]">
              {currentVideo && (
                <button
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pause background video" : "Play background video"}
                  className="inline-flex items-center gap-[8px] bg-[rgba(255,255,255,.12)] border border-[rgba(255,255,255,.14)] text-white rounded-full px-[16px] py-[9px] text-[13px] font-semibold hover:bg-[rgba(255,255,255,.2)] transition-colors"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  {isPlaying ? "Pause video" : "Play video"}
                </button>
              )}

              {videoSrcArray.length > 1 && (
                <div className="flex items-center gap-[8px] ml-[8px]">
                  {videoSrcArray.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVideoIndex(idx)}
                      aria-label={`View video ${idx + 1}`}
                      className={`w-[8px] h-[8px] rounded-full transition-colors ${idx === currentVideoIndex ? 'bg-white scale-125' : 'bg-[rgba(255,255,255,.3)] hover:bg-[rgba(255,255,255,.6)]'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes heroZoom {
            from { transform: scale(1); }
            to { transform: scale(1.08); }
          }
        `}} />
      </section>

      {/* Spec Ribbon - Moved to its own section below the hero */}
      <div className="bg-ink border-b border-[rgba(255,255,255,.14)]">
        <div className="container mx-auto px-6 max-w-[1180px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[16px]">
            {data.specRibbon?.map((spec, index) => (
              <div key={index} className="py-[18px] md:py-[30px]">
                <div className="font-display text-[clamp(22px,2.4vw,28px)] font-bold text-white leading-tight">
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
    </>
  );
}
