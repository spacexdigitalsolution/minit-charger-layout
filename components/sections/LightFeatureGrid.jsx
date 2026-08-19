/**
 * LightFeatureGrid Section Component
 * 
 * Reusable section featuring a light background, left-aligned introduction,
 * and a grid of white cards containing titles and descriptions.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, title: string, description: string}>} props.cards - Array of feature cards
 * @returns {JSX.Element}
 */
export default function LightFeatureGrid({
  id,
  eyebrow,
  heading,
  description,
  cards
}) {
  return (
    <section className="bg-paper-dim py-24" id={id} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 id={id ? `${id}-heading` : undefined} className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
            {description}
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold text-ink-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4C5C54]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
