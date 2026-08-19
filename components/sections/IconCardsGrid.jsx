/**
 * IconCardsGrid Component
 * 
 * Renders a centered heading and a grid of cards with icons, titles, and text.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Center-aligned heading
 * @param {Array<{id: string, icon: React.ReactNode, title: string, description: string}>} props.cards - Array of icon cards
 * @returns {JSX.Element}
 */
export default function IconCardsGrid({
  id,
  eyebrow,
  heading,
  description,
  cards
}) {
  return (
    <section className="bg-paper-dim py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          {eyebrow && (
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
              {eyebrow}
            </p>
          )}
          <h2 className={`font-display font-semibold tracking-tight sm:text-4xl text-ink-950 ${eyebrow ? 'mt-3 text-3xl' : 'text-3xl'}`}>
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
              {description}
            </p>
          )}
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="rounded-3xl bg-white p-8 ring-1 ring-black/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-dim/10 text-volt-dim">
                {card.icon}
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-ink-950">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4C5C54]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
