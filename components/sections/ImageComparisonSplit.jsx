import SmartImage from '../ui/SmartImage';

/**
 * ImageComparisonSplit Component
 * 
 * Side-by-side comparison with images, titles, descriptions, and feature lists.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Main heading
 * @param {Object} props.left - Left side data
 * @param {Object} props.right - Right side data
 * @returns {JSX.Element}
 */
export default function ImageComparisonSplit({
  id,
  eyebrow,
  heading,
  left,
  right
}) {
  return (
    <section className="bg-ink-900 px-6 py-24 text-[#EEF5F0] lg:px-8" id={id}>
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <div className="rounded-2xl bg-ink-950 p-10 flex items-center justify-center relative w-full h-[300px]">
              <SmartImage
                src={left.imageSrc}
                alt={left.imageAlt}
                description={left.imageDescription || left.imageAlt}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-display mt-6 text-2xl font-semibold text-white">{left.title}</h3>
            <p className="mt-2 text-mist">{left.description}</p>
            {left.features && left.features.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-mist">
                {left.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-volt">✓</span> {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Right Side */}
          <div>
            <div className="rounded-2xl bg-ink-950 p-10 flex items-center justify-center relative w-full h-[300px]">
              <SmartImage
                src={right.imageSrc}
                alt={right.imageAlt}
                description={right.imageDescription || right.imageAlt}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-display mt-6 text-2xl font-semibold text-white">{right.title}</h3>
            <p className="mt-2 text-mist">{right.description}</p>
            {right.features && right.features.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-mist">
                {right.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-volt">✓</span> {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
