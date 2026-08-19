/**
 * ResourceGuideGrid Section Component
 * 
 * Reusable section featuring a grid of simple text-based guide cards.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {Array<{
 *   id: string, 
 *   title: string, 
 *   description: string, 
 *   ctaText: string, 
 *   ctaHref: string
 * }>} props.guides - Array of guide objects
 * @returns {JSX.Element}
 */
export default function ResourceGuideGrid({
  id,
  eyebrow,
  heading,
  guides
}) {
  return (
    <section className="bg-paper-dim py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.id} className="rounded-3xl bg-white p-8 ring-1 ring-black/5 flex flex-col h-full">
              <h3 className="font-display text-xl font-semibold">{guide.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4C5C54] flex-grow">
                {guide.description}
              </p>
              <a href={guide.ctaHref} className="mt-5 inline-block text-sm font-semibold text-volt-dim hover:text-ink-900 transition">
                {guide.ctaText} &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
