'use client';

import React, { useState, useRef, useEffect } from 'react';
import SmartImage from '@/components/ui/SmartImage';
import gsap from 'gsap';

const Plus = ({ size }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export default function AltusCloserLook({ data }) {
  const [activeSection, setActiveSection] = useState(data.sections[0]?.id);
  const panelRefs = useRef({});

  useEffect(() => {
    // Auto-open the active section if needed, though simple CSS/state handles this well.
    // For smooth height transition, we use max-height or height: auto with CSS.
    Object.keys(panelRefs.current).forEach(id => {
      const el = panelRefs.current[id];
      if (el) {
        if (id === activeSection) {
          gsap.to(el, { height: 'auto', duration: 0.28, ease: 'power2.out' });
        } else {
          gsap.to(el, { height: 0, duration: 0.28, ease: 'power2.out' });
        }
      }
    });
  }, [activeSection]);

  return (
    <section className="bg-white py-[64px] md:py-[96px] pt-[76px]" id="closer-look">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <div className="max-w-[620px] mb-[40px]">
          <h2 className="font-display font-bold text-[clamp(30px,4.4vw,46px)] leading-[1.02] text-text">
            {data.heading}
          </h2>
          <p className="mt-[16px] text-muted text-[17px]">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[44px] items-start">
          <div className="bg-paper border border-line rounded-[26px] p-[clamp(16px,2.4vw,28px)]">
            {data.sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <div key={section.id} className="border-b border-line last:border-b-0">
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className="w-full flex items-center gap-[14px] text-left bg-transparent border-none py-[18px] px-[4px] text-[16.5px] font-semibold text-text"
                    aria-expanded={isActive}
                  >
                    <span 
                      className={`w-[26px] h-[26px] rounded-full shrink-0 border-[1.5px] flex items-center justify-center transition-all duration-250 ease-out ${
                        isActive 
                          ? 'bg-green border-green text-white rotate-45' 
                          : 'bg-white border-line text-green-deep'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={14} />
                    </span>
                    {section.title}
                  </button>
                  
                  <div 
                    ref={el => panelRefs.current[section.id] = el}
                    className="overflow-hidden h-0"
                    role="region"
                  >
                    <div className="py-[2px] pr-[4px] pb-[24px] pl-[40px]">
                      <p className="text-muted text-[15px] max-w-[60ch]">
                        {section.description}
                      </p>
                      
                      {section.chips && (
                        <div className="flex flex-wrap gap-[8px] mt-[14px]">
                          {section.chips.map((chip, idx) => (
                            <span key={idx} className="font-mono text-[11.5px] font-semibold bg-white border border-line rounded-full py-[6px] px-[12px] text-text">
                              <b className="text-muted font-medium mr-[6px]">{chip.label}</b>
                              {chip.value}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {section.note && (
                        <p className="mt-[12px] text-[12px] text-muted italic">
                          {section.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block sticky top-[100px] rounded-[26px] overflow-hidden bg-[#EAEFE1] aspect-[3/4]">
            {data.sections.map((section) => (
              <div 
                key={`img-${section.id}`}
                className={`absolute inset-0 transition-opacity duration-350 ease-out ${
                  activeSection === section.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <SmartImage 
                  src={section.imageSrc} 
                  alt={section.imageAlt} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
