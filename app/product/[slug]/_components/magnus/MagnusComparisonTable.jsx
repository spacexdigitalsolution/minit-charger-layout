import React from 'react';

export default function MagnusComparisonTable({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px] bg-[#EAEFE1]">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="max-w-[680px] mb-[44px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-[#5B6A5C]">
            {data.description}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-[#D7DECB]">
            <thead>
              <tr>
                <th className="text-left font-mono text-[11px] tracking-[0.08em] uppercase p-[16px_20px] bg-ink-950 text-mist font-semibold">
                  Capability
                </th>
                <th className="text-left font-mono text-[11px] tracking-[0.08em] uppercase p-[16px_20px] bg-ink-950 text-mist font-semibold">
                  Typical single-purpose setup
                </th>
                <th className="text-left font-mono text-[11px] tracking-[0.08em] uppercase p-[16px_20px] bg-ink-950 text-volt-dim font-semibold">
                  Magnus
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, idx) => (
                <tr key={idx} className={idx !== data.rows.length - 1 ? "border-b border-[#D7DECB]" : ""}>
                  <td className="p-[16px_20px] text-[14.5px] font-semibold text-[#101A13] w-[26%] align-top">
                    {row.feature}
                  </td>
                  <td className="p-[16px_20px] text-[13.5px] text-[#5B6A5C] font-mono align-top">
                    {row.typical}
                  </td>
                  <td className="p-[16px_20px] text-[13.5px] font-semibold text-volt-dim bg-volt/10 font-mono align-top">
                    {row.magnus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3.5 text-[12.5px] text-[#5B6A5C]">
          {data.note}
        </p>
      </div>
    </section>
  );
}
