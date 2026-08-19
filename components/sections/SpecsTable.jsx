import React from 'react';

/**
 * SpecsTable Component
 * 
 * Renders a technical specifications table with a left-aligned header text block.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.tableCol1Header - Header for column 1
 * @param {string} props.tableCol2Header - Header for column 2
 * @param {Array<{id: string, label: string, value: string}>} props.rows - Data rows
 * @returns {JSX.Element}
 */
export default function SpecsTable({
  id,
  eyebrow,
  heading,
  tableCol1Header,
  tableCol2Header,
  rows
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8" id={id}>
      <div className="mb-12 max-w-2xl">
        <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
          {eyebrow}
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-paper-dim font-semibold">
            <tr>
              <th className="px-6 py-4 lg:px-8">{tableCol1Header}</th>
              <th className="px-4 py-4 pr-6 lg:pr-8">{tableCol2Header}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 font-medium text-[#4C5C54] lg:px-8">{row.label}</td>
                <td className="px-4 py-4 pr-6 font-semibold lg:pr-8">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
