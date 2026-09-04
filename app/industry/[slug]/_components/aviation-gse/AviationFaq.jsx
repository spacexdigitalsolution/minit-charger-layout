import React from 'react';

export default function AviationFaq({ data }) {
  if (!data) return null;

  return (
    <section className="py-[70px] bg-paper">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-[22px]">
        <div className="max-w-[560px] mb-[20px]">
          <span className="font-mono text-[12.5px] font-semibold tracking-[0.18em] uppercase text-green-deep">
            {data.eyebrow}
          </span>
          <h2 className="text-[30px] mt-[14px] font-display font-bold leading-none text-text">
            {data.heading}
          </h2>
        </div>
        
        <div className="max-w-[820px]">
          {data.items.map((item, idx) => (
            <details 
              key={item.id} 
              className={`group border-t border-line ${idx === data.items.length - 1 ? 'border-b' : ''}`}
            >
              <summary className="list-none flex items-center justify-between gap-5 p-[26px_4px] cursor-pointer font-sans font-semibold text-[17px] text-text [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="w-[22px] h-[22px] flex-none relative">
                  <span className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 bg-green-deep transition-transform duration-250"></span>
                  <span className="absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 bg-green-deep transition-transform duration-250 group-open:-translate-x-1/2 group-open:rotate-90 group-open:opacity-0"></span>
                </span>
              </summary>
              <div className="p-[0_4px_28px] text-[15.5px] text-muted leading-[1.7]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
