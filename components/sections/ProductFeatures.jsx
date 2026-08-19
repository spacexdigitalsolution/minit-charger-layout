import SmartImage from '../ui/SmartImage';

/**
 * ProductFeatures Component
 * 
 * Renders a grid layout with a large product shot on one side and a list of key features on the other.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, title: string, description: string}>} props.features - Array of features
 * @param {string} props.imageSrc - Product image source
 * @param {string} props.imageAlt - Product image alt
 * @param {string} props.imageDescription - Placeholder description
 * @returns {JSX.Element}
 */
export default function ProductFeatures({
  id,
  eyebrow,
  heading,
  features,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="bg-white py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            {features.map((feature) => (
              <div key={feature.id}>
                <h3 className="font-display text-xl font-semibold text-ink-950">{feature.title}</h3>
                <p className="mt-2 text-[#4C5C54] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 rounded-3xl bg-paper-dim p-10 flex items-center justify-center">
            <div className="relative w-full max-w-md h-[400px]">
              <SmartImage
                src={imageSrc}
                alt={imageAlt}
                description={imageDescription}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
