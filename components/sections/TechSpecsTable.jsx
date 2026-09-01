/**
 * TechSpecsTable Section Component
 * 
 * Reusable section featuring a technical specifications table.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {string} props.column1Label - Header for the first column (e.g. 'Capability')
 * @param {string} props.column2Label - Header for the second column (e.g. 'Minit Charger platform')
 * @param {Array<{id: string, capability: string, value: string}>} props.specs - Array of spec objects
 * @param {React.ReactNode} [props.footer] - Optional footnote below the table
 * @returns {JSX.Element}
 */
export default function TechSpecsTable({
  id,
  eyebrow,
  heading,
  description,
  column1Label,
  column2Label,
  specs,
  footer
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
        <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
          {description}
        </p>
      </div>
      
      <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-paper-dim font-semibold">
            <tr>
              <th className="px-6 py-4 lg:px-8">{column1Label}</th>
              <th className="px-4 py-4 pr-6 lg:pr-8">{column2Label}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {specs.map((spec) => (
              <tr key={spec.id}>
                <td className="px-6 py-4 font-medium text-[#4C5C54] lg:px-8">{spec.capability}</td>
                <td className="px-4 py-4 pr-6 font-semibold lg:pr-8">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer && (
        <p className="mt-6 text-[12px] leading-relaxed text-[#4C5C54] max-w-4xl text-left font-mono">
          {footer}
        </p>
      )}
    </section>
  );
}
