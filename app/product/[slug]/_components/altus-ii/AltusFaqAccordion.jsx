'use client';

import React, { useState } from 'react';

const Plus = ({ size, strokeWidth }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={strokeWidth || "2.2"} strokeLinecap="round" />
  </svg>
);

export default function AltusFaqAccordion({ data }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-paper py-[64px] md:py-[96px]">
      <div className="mx-auto px-[24px] max-w-[720px]">
        <h2 className="font-display font-bold text-[clamp(28px,4vw,40px)] leading-[1.02] text-text mb-[30px]">
          {data.heading}
        </h2>
        
        <div className="flex flex-col">
          {data.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-t border-line last:border-b">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center gap-[20px] bg-transparent border-none text-left py-[22px] px-[2px] text-[16.5px] font-semibold text-text"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className={`shrink-0 text-green-deep transition-transform duration-250 ease-out ${isOpen ? 'rotate-45' : ''}`}>
                    <Plus size={16} strokeWidth={2.5} />
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-[height] duration-280 ease-out`}
                  style={{ height: isOpen ? 'auto' : 0 }}
                  role="region"
                >
                  <div className={`px-[2px] pb-[24px] text-muted text-[15.5px] max-w-[66ch] ${isOpen ? 'block' : 'hidden'}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
