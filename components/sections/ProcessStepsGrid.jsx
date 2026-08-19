/**
 * ProcessStepsGrid Section Component
 * 
 * Reusable section featuring a grid of numbered process steps.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, number: string, title: string, description: string}>} props.steps - Array of step objects
 * @returns {JSX.Element}
 */
export default function ProcessStepsGrid({
  id,
  eyebrow,
  heading,
  description,
  steps
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8" id={id}>
      <div className="mb-14 max-w-xl">
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
      
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.id} className="rounded-3xl bg-white p-7 ring-1 ring-black/5 flex flex-col">
            <span className="font-mono text-volt-dim">{step.number}</span>
            <h3 className="font-display mt-3 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4C5C54]">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
