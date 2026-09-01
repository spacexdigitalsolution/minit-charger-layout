'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function VideoHero({ 
  eyebrow, 
  heading, 
  headingHighlight, 
  description, 
  primaryCta,
  secondaryCta,
  tagsLabel, 
  tags, 
  videoSrc,
  posterSrc,
  formTitle,
  formSubtitle
}) {
  const [submitted, setSubmitted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden text-white min-h-[640px] flex items-center pt-24 pb-32">
        <div className="absolute inset-0 z-0 bg-[#0B140F]">
          <video 
            ref={videoRef}
            id="lsv-hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster={posterSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src={posterSrc}
              alt="Video placeholder"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B140F]/55 via-[#0B140F]/72 to-[#0B140F]/92"></div>
        </div>

        <button 
          onClick={toggleMute}
          className="absolute z-20 right-6 bottom-6 md:right-10 md:bottom-10 flex items-center gap-2 bg-[#0B140F]/55 border border-white/10 text-white px-3.5 py-2 rounded-full font-mono text-[11.5px] backdrop-blur-sm hover:bg-[#0B140F]/80 transition"
          aria-label="Toggle video sound"
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <line x1="17" y1="9" x2="21" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="21" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M16 8a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
          <span>{isMuted ? 'Sound off' : 'Sound on'}</span>
        </button>

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8 w-full">
          <span className="font-mono text-[12px] font-semibold tracking-[0.14em] uppercase text-volt flex items-center gap-2">
            <span className="w-4 h-0.5 bg-amber inline-block"></span>
            {eyebrow}
          </span>
          
          <h1 className="mt-4 text-[clamp(38px,5.6vw,60px)] font-display font-bold max-w-[820px] leading-tight text-white">
            {heading} <span className="text-amber">{headingHighlight}</span>
          </h1>
          
          <p className="mt-5 text-lg text-mist-dark max-w-[560px] leading-relaxed">
            {description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3.5">
            {primaryCta && (
              <a href={primaryCta.href} className="inline-flex items-center justify-center rounded-full font-semibold shadow-sm transition px-6 py-3.5 text-[15px] bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] hover:brightness-110 shadow-volt hover:-translate-y-0.5">
                {primaryCta.text}
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="inline-flex items-center justify-center rounded-full font-semibold shadow-sm transition px-6 py-3.5 text-[15px] bg-transparent border-[1.5px] border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                {secondaryCta.text}
              </a>
            )}
          </div>
          
          {tags && tags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/10 max-w-[760px]">
              <div className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-mist-dark">{tagsLabel}</div>
              <div className="mt-2.5 flex flex-wrap gap-2 gap-y-2.5 text-[13.5px] text-[#dfe9e2]">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 border border-white/15 rounded-full bg-white/5 backdrop-blur-sm">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Floating Quote Card */}
      <div className="relative z-20 mx-auto max-w-[1240px] px-6 lg:px-8 -mt-16 mb-10">
        <form onSubmit={handleSubmit} className="bg-white border border-line rounded-[26px] shadow-2xl p-6 lg:p-8 grid lg:grid-cols-[1.1fr_1fr_auto] gap-5 items-end">
          <div className="lg:col-span-3 mb-1">
            <div className="font-bold text-[16.5px] text-ink">{formTitle || "Get a charging plan for your fleet"}</div>
            <div className="text-[13px] text-muted mt-1">{formSubtitle || "One call. We'll size onboard charging to your fleet mix and growth plan."}</div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hf-name" className="text-[11.5px] text-muted font-semibold">Full name</label>
            <input 
              id="hf-name" 
              type="text" 
              placeholder="Jordan Ramirez" 
              required 
              className="border border-line rounded-lg px-3 py-2.5 text-[14.5px] focus:outline-none focus:border-green focus:ring-1 focus:ring-green text-ink placeholder-ink/30" 
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hf-org" className="text-[11.5px] text-muted font-semibold">Property / organization</label>
            <input 
              id="hf-org" 
              type="text" 
              placeholder="e.g. Riverside Resort" 
              required 
              className="border border-line rounded-lg px-3 py-2.5 text-[14.5px] focus:outline-none focus:border-green focus:ring-1 focus:ring-green text-ink placeholder-ink/30" 
            />
          </div>
          
          <button type="submit" className="inline-flex items-center justify-center rounded-full font-semibold transition px-6 py-3 text-[15px] bg-green text-white hover:bg-green-deep shadow-[0_14px_30px_-14px_rgba(46,153,85,0.55)] hover:-translate-y-0.5">
            Get My Assessment
          </button>
          
          {submitted && (
            <div className="lg:col-span-3 mt-2 p-3 bg-green-wash text-green-deep rounded-xl text-[13.5px] font-semibold border border-green/20">
              Thanks — someone from our team will reach out within one business day.
            </div>
          )}
        </form>
      </div>
    </>
  );
}
