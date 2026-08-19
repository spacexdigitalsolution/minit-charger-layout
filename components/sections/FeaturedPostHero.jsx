import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * FeaturedPostHero Component
 * 
 * Featured article hero for the blog page.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Featured article heading
 * @param {string} props.description - Featured article description
 * @param {string} props.imageSrc - Main image source
 * @param {string} props.imageAlt - Main image alt
 * @param {string} props.imageDescription - Placeholder description
 * @param {Object} props.cta - Call to action {text, href}
 * @param {string} props.readTime - Read time
 * @returns {JSX.Element}
 */
export default function FeaturedPostHero({
  id,
  eyebrow,
  heading,
  description,
  imageSrc,
  imageAlt,
  imageDescription,
  cta,
  readTime
}) {
  return (
    <section className="bg-paper-dim py-16 lg:py-24 border-b border-black/5" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-ink-900 ring-1 ring-black/5 shadow-xl relative">
            <div className="w-full h-full relative">
              <SmartImage
                src={imageSrc}
                alt={imageAlt}
                description={imageDescription || imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
              {eyebrow}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-ink-950">
              {heading}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4C5C54]">
              {description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href={cta.href} className="rounded-full bg-ink-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-ink-800">
                {cta.text}
              </Link>
              <span className="text-sm text-mist font-mono">{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
