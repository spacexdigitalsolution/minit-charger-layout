import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * DarkUseCasesGrid Section Component
 * 
 * Reusable dark section with a subtle glow effect and a 4-column
 * grid of cards linking to use cases or industries.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Center-aligned heading
 * @param {Array<{id: string, title: string, href: string, imageSrc: string, imageAlt: string, imageDescription: string}>} props.cards - Array of 4 use case cards
 * @returns {JSX.Element}
 */
export default function DarkUseCasesGrid({
  id,
  heading,
  cards
}) {
  return (
    <section className="bg-[#040A07] py-24" id={id}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950/80 border border-white/5 p-8 sm:p-10 shadow-2xl">
          {/* Subtle Glow */}
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-volt/10 blur-[80px] pointer-events-none"></div>

          <h2 className="text-center text-3xl sm:text-4xl font-display font-medium text-white mb-10 mt-2 tracking-wide">
            {heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group flex flex-col rounded-xl bg-ink-900 border border-white/5 overflow-hidden transition-all hover:border-volt/30 hover:shadow-[0_0_20px_-5px_rgba(92,242,160,0.2)]"
              >
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <SmartImage
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    description={card.imageDescription}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-5 bg-ink-900">
                  <span className="text-white font-medium text-[17px]">{card.title}</span>
                  <svg className="h-5 w-5 text-volt transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
