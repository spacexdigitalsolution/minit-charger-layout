import SmartImage from '../ui/SmartImage';

/**
 * TallImageCardGrid Section Component
 * 
 * Reusable dark section with a grid of tall cards featuring
 * background images, gradients, icons, and text at the bottom.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {Array<{id: string, imageSrc: string, imageAlt: string, imageDescription: string, icon: React.ReactNode, title: string, description: string}>} props.cards - Array of tall cards (typically 3)
 * @returns {JSX.Element}
 */
export default function TallImageCardGrid({
  id,
  cards
}) {
  return (
    <section className="bg-[#040A07] py-24 border-t border-white/5" id={id}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="relative h-[560px] overflow-hidden rounded-[2rem] border border-white/10 group">
              <div className="absolute inset-0 h-full w-full">
                <SmartImage
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  description={card.imageDescription}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent"></div>
              
              <div className="relative z-10 flex h-full flex-col justify-start p-10">
                <div className="w-12 h-12 text-white mb-6">
                  {card.icon}
                </div>
                <h3 className="text-3xl font-display font-medium text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-[#9FB3A9] leading-relaxed max-w-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
