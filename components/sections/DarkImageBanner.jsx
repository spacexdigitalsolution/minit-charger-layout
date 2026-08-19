import SmartImage from '../ui/SmartImage';

/**
 * DarkImageBanner Component
 * 
 * Renders a dark section with a background image (often overlaid/blended) and centered text.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Center-aligned heading
 * @param {string} props.description - Description text
 * @param {string} props.imageSrc - Background image source
 * @param {string} props.imageAlt - Background image alt text
 * @param {string} [props.imageDescription] - Description for placeholder
 * @returns {JSX.Element}
 */
export default function DarkImageBanner({
  id,
  heading,
  description,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="bg-ink-900 py-24 overflow-hidden relative" id={id}>
      <div className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay bg-[#f0f0f0]">
        <SmartImage
          src={imageSrc}
          alt={imageAlt}
          description={imageDescription || imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8 text-center text-white z-10">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="mt-6 text-lg text-mist max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
