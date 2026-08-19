/**
 * GlossaryList Section Component
 * 
 * Reusable section featuring a grid list of terms and definitions.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {Array<{id: string, term: string, definition: string}>} props.terms - Array of term objects
 * @returns {JSX.Element}
 */
export default function GlossaryList({
  id,
  eyebrow,
  heading,
  terms
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
      
      <dl className="grid gap-4 sm:grid-cols-2">
        {terms.map((item) => (
          <div key={item.id} className="rounded-2xl bg-paper-dim p-6">
            <dt className="font-display font-semibold">{item.term}</dt>
            <dd className="mt-2 text-sm text-[#4C5C54]">
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
