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
 * @returns {JSX.Element}
 */
export default function ComparisonTable({
  id,
  eyebrow,
  heading,
  description,
  columns,
  rows
}) {
  return (
    <section className="bg-paper py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
            {description}
          </p>
        </div>

        <div className="overflow-x-auto rounded-[2rem] bg-white ring-1 ring-black/5 shadow-sm">
          <table className="min-w-full text-left text-sm border-collapse">
            <thead className="bg-ink-950 text-white font-semibold">
              <tr>
                <th className="px-6 py-5 lg:px-8 w-1/3 rounded-tl-[2rem]">Feature</th>
                {columns.map((col, idx) => (
                  <th 
                    key={col.id} 
                    className={`px-4 py-5 pr-6 lg:pr-8 text-center ${idx === columns.length - 1 ? 'rounded-tr-[2rem]' : ''} ${col.highlight ? 'bg-volt text-ink-950' : ''}`}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {rows.map((row, rowIdx) => (
                <tr key={row.id} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="px-6 py-4 font-medium text-ink-950 lg:px-8">{row.feature}</td>
                  {row.values.map((val, idx) => (
                    <td key={idx} className="px-4 py-4 pr-6 text-center text-[#4C5C54] lg:pr-8">
                      {val === 'true' || val === true ? (
                        <svg className="mx-auto h-5 w-5 text-volt-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : val === 'false' || val === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
