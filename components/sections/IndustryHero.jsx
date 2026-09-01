import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * IndustryHero Component
 * 
 * Light hero section for individual industry pages with breadcrumbs and
 * a bottom volt border.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{label: string, href: string}>} props.breadcrumbs - Breadcrumbs
 * @param {string} props.imageSrc - Background image source
 * @param {string} props.imageAlt - Background image alt
 * @param {string} props.imageDescription - Placeholder description
 * @param {React.ReactNode} props.title - Title
 * @param {string} props.description - Description
 * @returns {JSX.Element}
 */
export default function IndustryHero({
  id,
  breadcrumbs,
  imageSrc,
  imageAlt,
  imageDescription,
  title,
  description
}) {
  return (
    <section className="relative bg-paper text-ink-950 py-24 overflow-hidden border-b-[8px] border-volt" id={id}>
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-10 bg-black">
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            description={imageDescription || imageAlt}
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-600">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx}>
                {idx > 0 && ' › '}
                {idx < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-ink-950">{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl max-w-3xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-600 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
