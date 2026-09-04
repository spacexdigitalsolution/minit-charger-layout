import React from 'react';
import SmartImage from '@/components/ui/SmartImage';

const icons = {
  cloud: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
};

export default function WhyAlternating({ data }) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="py-[80px] md:py-[130px] pb-0 bg-paper">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-[22px]">
        {data.map((row, idx) => {
          const isReverse = row.isReverse;
          
          return (
            <div 
              key={row.id} 
              className={`grid grid-cols-1 ${isReverse ? 'md:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1.1fr]'} gap-[30px] md:gap-[64px] items-center py-[70px] ${idx !== 0 ? 'border-t border-line' : ''}`}
            >
              <div 
                className={`aspect-[5/4] rounded-[18px] overflow-hidden relative ${row.isIconic ? 'flex items-center justify-center' : 'bg-panel'} ${isReverse ? 'order-1 md:order-2' : 'order-1'}`}
                style={row.isIconic ? { background: 'linear-gradient(135deg, #0B140F, #173824)' } : {}}
              >
                {row.isIconic ? (
                  <div className="w-[74px] h-[74px] text-green-bright">
                    {icons[row.icon]}
                  </div>
                ) : (
                  <SmartImage 
                    src={row.imageSrc} 
                    alt={row.imageAlt}
                    description={row.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={row.imageClass?.includes('contain') ? { objectFit: 'contain' } : undefined}
                  />
                )}
              </div>
              
              <div className={`why-copy ${isReverse ? 'order-2 md:order-1' : 'order-2'}`}>
                <div className="font-mono text-[12px] text-green-deep font-bold tracking-[0.1em]">
                  {row.num}
                </div>
                <h3 className="font-display font-bold text-[clamp(24px,3vw,34px)] mt-[12px] max-w-[440px] leading-tight text-text">
                  {row.heading}
                </h3>
                
                <span className="block font-mono text-[10.5px] font-bold tracking-[0.1em] uppercase mt-[20px] text-[#A9640F]">
                  {row.problemTag}
                </span>
                <p className="mt-[6px] text-[16.5px] text-text max-w-[440px] leading-[1.6]">
                  {row.problemText}
                </p>
                
                <span className="block font-mono text-[10.5px] font-bold tracking-[0.1em] uppercase mt-[20px] text-green-deep">
                  {row.fixTag}
                </span>
                <p className="mt-[6px] text-[16.5px] text-muted max-w-[440px] leading-[1.65]">
                  {row.fixText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
