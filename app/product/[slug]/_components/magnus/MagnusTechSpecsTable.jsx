import React from 'react';

export default function MagnusTechSpecsTable({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px] bg-paper-dim" id="specs">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="max-w-[680px] mb-[44px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
        </div>

        <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-[#D7DECB]">
          <tbody>
            {data.items.map((item, idx) => (
              <tr key={idx} className={idx !== data.items.length - 1 ? "border-b border-[#D7DECB]" : ""}>
                <td className="p-[15px_22px] text-[14.5px] text-[#5B6A5C] font-semibold w-[36%] bg-paper-dim">
                  {item.label}
                </td>
                <td className="p-[15px_22px] text-[14.5px] font-mono text-[#101A13] font-semibold">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
