/**
 * BentoFeatureGrid Section Component
 * 
 * Reusable section featuring an asymmetric bento box grid layout
 * for showcasing features or advantages.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, icon: React.ReactNode, title: string, description: string, spanClass: string}>} props.cards - Array of feature cards with their grid span classes
 * @returns {JSX.Element}
 */
export default function BentoFeatureGrid({
  id,
  eyebrow,
  heading,
  description,
  cards
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

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          // Adjust padding and icon sizes based on whether it's a large card or small card
          const isLarge = card.spanClass.includes('row-span-2');
          
          return (
            <article
              key={card.id}
              className={`rounded-3xl bg-white shadow-sm ring-1 ring-black/5 ${card.spanClass} ${
                isLarge ? 'p-7 lg:p-10' : 'p-7'
              }`}
            >
              <div
                className={`mb-4 flex items-center justify-center rounded-2xl ${
                  isLarge
                    ? 'h-12 w-12 bg-ink-900 text-volt mb-5'
                    : 'h-11 w-11 bg-paper-dim text-volt-dim'
                }`}
              >
                {card.icon}
              </div>
              <h3
                className={`font-display font-semibold ${
                  isLarge ? 'text-2xl' : 'text-lg'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-[#4C5C54] ${
                  isLarge ? 'mt-3' : 'text-sm'
                }`}
              >
                {card.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
