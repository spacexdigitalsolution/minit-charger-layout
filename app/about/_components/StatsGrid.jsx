import React from 'react';

export default function StatsGrid({ stats }) {
  return (
    <section className="bg-ink text-white py-[64px]">
      <div className="container">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-[40px] max-md:gap-y-[36px] max-md:gap-x-[24px]">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-[clamp(30px,4.4vw,50px)] text-white leading-none">
                {stat.num}
              </div>
              <div className="mt-[10px] font-mono text-[11px] tracking-[0.06em] uppercase text-mist leading-[1.5]">
                {stat.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
