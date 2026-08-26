import SmartImage from '../ui/SmartImage';

/**
 * ResourceCardsGrid Section Component
 * 
 * Reusable section featuring a grid of resource cards with images.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{
 *   id: string,
 *   imageSrc: string,
 *   imageAlt: string,
 *   imageDescription: string,
 *   imageContain?: boolean,
 *   title: string,
 *   description: string,
 *   ctaText: string,
 *   ctaHref: string
 * }>} props.resources - Array of resource objects
 * @returns {JSX.Element}
 */
export default function ResourceCardsGrid({
  id,
  heading,
  description,
  resources
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8" id={id}>
      <h2 className="font-display text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[#4C5C54]">
        {description}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.id} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 flex flex-col h-full">
            <div className={`relative w-full aspect-video ${resource.imageContain ? 'bg-ink-900 p-6' : ''}`}>
              <SmartImage
                src={resource.imageSrc}
                alt={resource.imageAlt}
                displayHeight={540}
                displayWidth={1080}
                safeAreaHeight={540}
                safeAreaWidth={1080}
                description={resource.imageDescription}
                fill
                className={resource.imageContain ? 'object-contain' : 'object-cover'}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-semibold">{resource.title}</h3>
              <p className="mt-2 text-sm text-[#4C5C54] flex-grow">
                {resource.description}
              </p>
              <a href={resource.ctaHref} className="mt-4 inline-block text-sm font-semibold text-volt-dim hover:text-ink-900 transition">
                {resource.ctaText} &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
