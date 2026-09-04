import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

/**
 * Renders the Aviation GSE Hero section matching the minimal HTML template.
 * @param {Object} props
 * @param {Object} props.data - The hero data object
 */
export default function AviationHero({ data }) {
  if (!data) return null;

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink">
      <style>{`
        @keyframes scrollLine {
          0% { top: -100%; }
          60% { top: 100%; }
          100% { top: 100%; }
        }
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.09); }
        }
        .animate-kenburns {
          animation: kenburns 22s ease-in-out infinite alternate;
        }
        .animate-scrollLine {
          animation: scrollLine 2s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full animate-kenburns relative">
          <SmartImage
            src={data.bgImage}
            alt={data.bgAlt}
            description={data.bgAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_42%]"
          />
        </div>
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(7, 16, 12, 0.95) 0%, rgba(7, 16, 12, 0.75) 35%, rgba(7, 16, 12, 0) 75%), linear-gradient(0deg, rgba(7, 16, 12, 0.8) 0%, rgba(7, 16, 12, 0) 35%)'
          }}
        />
      </div>

      <div className="container relative z-10 w-full max-w-[1640px] mx-auto px-8">
        <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-bright block mb-5">
          {data.eyebrow}
        </span>
        <h1 className="text-[clamp(40px,5.2vw,64px)] text-white max-w-[820px] font-display font-bold tracking-[0.01em] leading-none mb-5">
          {data.heading}
        </h1>
        <p className="text-[20px] text-white/90 max-w-[480px]">
          {data.description}
        </p>

        <div className="flex gap-4 items-center mt-[34px] flex-wrap">
          <a
            href={data.primaryCta.href}
            className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] py-[15px] px-[28px] rounded-full no-underline transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-deep hover:-translate-y-px"
          >
            {data.primaryCta.text}
          </a>
          <a
            href={data.secondaryCta.href}
            className="inline-flex items-center gap-2 font-semibold text-[14.5px] no-underline text-white group"
          >
            {data.secondaryCta.text}
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-[28px] left-[32px] z-10 flex items-center gap-[10px] font-mono text-[11px] tracking-[0.1em] text-[#A9BAAE] uppercase">
        <span className="w-px h-[34px] bg-white/15 relative overflow-hidden">
          <span className="absolute top-[-100%] left-0 w-full h-full bg-green-bright animate-scrollLine" />
        </span>
        {data.scrollCue}
      </div>
    </section>
  );
}
