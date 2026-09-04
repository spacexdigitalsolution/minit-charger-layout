import React from 'react';

export default function DurusTrustBadges({ data }) {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="bg-ink rounded-[20px] p-9 lg:p-[42px] border-2 border-green">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {data.badges.map((badge, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 text-green-bright">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <use href={`#${badge.icon}`} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-[15px]">
                    {badge.title}
                  </h4>
                  <p className="mt-1.5 text-[13.5px] text-[#A6B3AA]">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
