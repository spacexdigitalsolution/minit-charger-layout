import React from 'react';

export default function DirectContactStrip({ directContact }) {
  return (
    <section className="bg-panel py-[56px]">
      <div className="container">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[1px] bg-line rounded-[18px] overflow-hidden max-w-[640px]">
          {directContact.map((item, i) => (
            <div key={i} className="bg-white px-[26px] py-[28px]">
              <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                {item.lbl}
              </div>
              <div className="mt-[8px] text-[16px] font-semibold text-text">
                {item.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
