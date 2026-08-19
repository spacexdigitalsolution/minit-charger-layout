import SmartImage from '../ui/SmartImage';

/**
 * CategoriesHero Component
 * 
 * Dark hero for the categories index page.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Main heading
 * @param {string} props.description - Main description
 * @param {string} props.imageSrc - Background image source
 * @param {string} props.imageAlt - Background image alt
 * @param {string} props.imageDescription - Placeholder description
 * @returns {JSX.Element}
 */
export default function CategoriesHero({
  id,
  eyebrow,
  heading,
  description,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="relative bg-ink-950 py-24 text-white overflow-hidden min-h-[50vh] flex flex-col justify-center" id={id}>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-transparent z-10"></div>
      <div className="absolute inset-0 w-full h-full opacity-40">
        <SmartImage
          src={imageSrc}
          alt={imageAlt}
          description={imageDescription || imageAlt}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl text-white max-w-3xl">
          {heading}
        </h1>
        <p className="mt-6 text-lg text-mist max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
