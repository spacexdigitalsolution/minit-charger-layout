import React from 'react';

/**
 * ComparisonTable Component
 * 
 * A tabular layout for side-by-side comparison of multiple products/models.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, name: string}>} props.columns - Product columns to compare (e.g. models)
 * @param {Array<{id: string, feature: string, values: string[]}>} props.rows - Features and their values for each column
 * @param {string} [props.footer] - Optional footnote to display below the table
 * @returns {JSX.Element}
 */
export default function ComparisonTable({
  id,
  eyebrow,
  heading,
  description,
  columns,
  rows,
  footer
}) {
  return (
    <section className="bg-paper py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3.5 text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-ink-950 leading-[1.02]">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#5B6A5C]">
            {description}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-[#D7DECB]">
            <thead className="bg-ink-950 font-semibold text-left font-mono text-[11px] tracking-[0.08em] uppercase text-mist">
              <tr>
                <th className="p-[16px_20px]">Capability</th>
                {columns.map((col) => (
                  <th 
                    key={col.id} 
                    className={`p-[16px_20px] ${col.highlight ? 'text-volt-dim' : ''}`}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={row.id} className={rowIdx !== rows.length - 1 ? 'border-b border-[#D7DECB]' : ''}>
                  <td className="p-[16px_20px] text-[14.5px] font-semibold text-[#101A13] w-[26%] align-top">{row.feature}</td>
                  {row.values.map((val, idx) => {
                    const isHighlighted = columns[idx]?.highlight;
                    return (
                      <td 
                        key={idx} 
                        className={`p-[16px_20px] text-[13.5px] font-mono align-top ${isHighlighted ? 'font-semibold text-volt-dim bg-volt/10' : 'text-[#5B6A5C]'}`}
                      >
                        {val === 'true' || val === true ? (
                          <svg className="h-5 w-5 text-volt-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        ) : val === 'false' || val === false ? (
                          <span className="text-gray-300">—</span>
                        ) : (
                          val
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footer && (
          <p className="mt-6 text-[12px] leading-relaxed text-[#4C5C54] max-w-4xl text-left">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
}
