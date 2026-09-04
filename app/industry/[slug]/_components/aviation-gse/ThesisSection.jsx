"use client";
import React, { useRef } from 'react';
import SmartImage from '@/components/ui/SmartImage';

const icons = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function ThesisSection({ data }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.9;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="bg-panel py-[80px] md:py-[130px] overflow-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      
      <div className="max-w-[1240px] mx-auto px-8 sm:px-[22px] relative group">
        
        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[50px] h-[50px] bg-white border border-line rounded-full flex items-center justify-center text-green-deep hover:bg-green-wash transition-colors shadow-sm opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            {icons.chevronLeft}
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-[50px] h-[50px] bg-white border border-line rounded-full flex items-center justify-center text-green-deep hover:bg-green-wash transition-colors shadow-sm opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            {icons.chevronRight}
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-[16px] md:gap-[24px] pb-6 md:pb-12 -mx-8 px-8 sm:-mx-[22px] sm:px-[22px] scrollbar-hide scroll-smooth"
        >
          
          {data.map((slide, idx) => (
            <div key={slide.id} className="w-[92%] md:w-[95%] shrink-0 snap-center bg-white rounded-[24px] border border-line p-[24px] md:p-[60px] flex flex-col justify-center">
              <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[30px] md:gap-[60px] items-center">
                
                <div className="thesis-copy order-2 md:order-1">
                  <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep flex items-center gap-[10px]">
                    <span className="w-[18px] h-[1.5px] bg-[#A9640F] inline-block"></span>
                    Why Minit
                  </span>
                  <h2 className="text-[clamp(28px,3.5vw,42px)] mt-4 max-w-[560px] font-display font-bold tracking-[0.01em] leading-none text-text">
                    {slide.heading}
                  </h2>
                  <p className="mt-5 text-[17px] text-muted max-w-[520px] leading-[1.72]">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col gap-[14px] mt-[30px]">
                    {slide.features.map((feature, fIdx) => (
                      <span key={fIdx} className="flex items-center gap-3 text-[14px] font-semibold text-green-deep">
                        <span className="w-[18px] h-[18px] flex-none">
                          {icons[feature.icon] || icons.arrow}
                        </span>
                        {feature.text}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-panel order-1 md:order-2">
                  {slide.imageSrc ? (
                    <SmartImage 
                      src={slide.imageSrc} 
                      alt={slide.heading}
                      fill
                      sizes="(max-width: 768px) 90vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted">
                      Image Placeholder
                    </div>
                  )}
                </div>
                
              </div>
            </div>
          ))}
          
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button 
            onClick={() => scroll('left')} 
            className="w-[44px] h-[44px] bg-white border border-line rounded-full flex items-center justify-center text-green-deep shadow-sm"
            aria-label="Previous slide"
          >
            {icons.chevronLeft}
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-[44px] h-[44px] bg-white border border-line rounded-full flex items-center justify-center text-green-deep shadow-sm"
            aria-label="Next slide"
          >
            {icons.chevronRight}
          </button>
        </div>

      </div>
    </section>
  );
}
