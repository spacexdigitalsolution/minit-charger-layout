import SmartImage from '../ui/SmartImage';

/**
 * IndustryCardsGrid Component
 * 
 * Renders a grid of industry cards with an image on top, heading, description, and link text.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Main heading
 * @param {string} props.description - Description
 * @param {Array<{id: string, imageSrc: string, imageAlt: string, imageDescription: string, title: string, description: string, href: string}>} props.cards - Array of industry cards
 * @returns {JSX.Element}
 */
export default function IndustryCardsGrid({
  id,
  eyebrow,
  heading,
  description,
  cards
}) {
  return (
    <section className="bg-paper-dim py-24 min-h-[70vh]" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-ink-950">
          {heading}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54] max-w-2xl">
          {description}
        </p>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <a key={card.id} href={card.href} className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition hover:shadow-lg">
              <div className="h-64 bg-ink-900 overflow-hidden relative">
                <SmartImage
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  description={card.imageDescription || card.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ink-950 group-hover:text-volt-dim transition">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4C5C54]">
                  {card.description}
                </p>
                <div className="mt-5 text-sm font-bold text-volt-dim">Explore Solutions &rarr;</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
