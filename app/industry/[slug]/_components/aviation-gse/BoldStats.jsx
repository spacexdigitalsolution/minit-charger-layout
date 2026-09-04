import React from 'react';
import CounterEffect from '@/components/ui/CounterEffect';

/**
 * Renders the Bold Stats section matching the minimal HTML template.
 * @param {Object} props
 * @param {Object} props.data - The bold stats data object
 */
export default function BoldStats({ data }) {
  if (!data) return null;

  return (
    <section className="bg-ink text-white py-[70px]">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-[22px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[36px] md:gap-[40px]">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="stat">
              <div className="font-display text-[clamp(40px,5.4vw,64px)] text-white leading-none flex items-baseline gap-1">
                <span>
                  {stat.isTextNum ? stat.num : <CounterEffect value={stat.num} />}
                </span>
                {stat.unit && (
                  <span className="text-[0.4em] text-green-bright font-mono font-semibold">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="mt-[10px] font-mono text-[11.5px] tracking-[0.08em] uppercase text-[#A9BAAE]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
