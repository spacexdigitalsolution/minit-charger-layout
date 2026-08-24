import SmartImage from '../ui/SmartImage';

/**
 * ComparisonSplit Section Component
 * 
 * Reusable dark section featuring an introduction and a 2-column grid
 * comparing two options (e.g., Indoor vs Outdoor), each with an image,
 * title, description, and bullet points.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{
 *   id: string, 
 *   imageSrc: string, 
 *   imageAlt: string, 
 *   imageDescription: string, 
 *   title: string, 
 *   description: string, 
 *   features: string[]
 * }>} props.cards - Array of exactly 2 comparison cards
 * @returns {JSX.Element}
 */
export default function ComparisonSplit({
  id,
  eyebrow,
  heading,
  description,
  cards
}) {
  return (
    <section className="bg-ink-900 px-6 py-24 text-[#EEF5F0] lg:px-8" id={id}>
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-mist">{description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <article key={card.id} className="rounded-[2rem] bg-ink-850 p-8 ring-1 ring-white/10">
              <div className="relative w-full h-[300px] mb-6">
                <SmartImage
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  displayHeight={540}
                  displayWidth={1080}
                  safeAreaHeight={540}
                  safeAreaWidth={1080}
                  description={card.imageDescription}
                  fill
                  className="mx-auto object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-volt">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                {card.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-mist">
                {card.features.map((feature, idx) => (
                  <li key={idx}>&middot; {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
