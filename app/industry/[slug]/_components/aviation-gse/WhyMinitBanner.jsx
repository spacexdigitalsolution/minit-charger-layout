import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

export default function WhyMinitBanner({ data }) {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-ink py-[100px] md:py-[140px] xl:py-[180px]">
      {/* Background Image Container */}
      {data.bgImage && (
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={data.bgImage}
            alt={data.bgAlt || "Banner Background"}
            description={data.bgAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay to ensure text readability */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(7, 16, 12, 0.9) 0%, rgba(7, 16, 12, 0.6) 50%, rgba(7, 16, 12, 0) 100%)'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 w-full max-w-[1640px] mx-auto px-8">
        <div className="max-w-[800px]">
          <h2 className="text-[clamp(36px,5vw,64px)] text-white font-display font-bold tracking-[0.01em] leading-[1.05] mb-[24px]">
            {data.heading}
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/90 leading-[1.6]">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
