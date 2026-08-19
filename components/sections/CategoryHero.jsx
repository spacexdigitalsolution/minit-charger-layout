import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';
import Link from 'next/link';

/**
 * CategoryHero Component
 * 
 * Hero section for category pages. Left text with breadcrumbs, right image.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{label: string, href: string}>} props.breadcrumbs - Breadcrumb links
 * @param {React.ReactNode} props.title - Main title
 * @param {string} props.description - Main description
 * @param {Array<string>} props.features - Bullet points
 * @param {Object} props.cta - CTA button {text, href}
 * @param {string} props.imageSrc - Main image source
 * @param {string} props.imageAlt - Main image alt
 * @param {string} props.imageDescription - Placeholder description
 * @returns {JSX.Element}
 */
export default function CategoryHero({
  id,
  breadcrumbs,
  title,
  description,
  features,
  cta,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="bg-white py-24 border-b border-black/5" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 font-mono text-xs uppercase tracking-wider text-mist">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx}>
                {idx > 0 && ' › '}
                {idx < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-volt-dim">{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl text-ink-950">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4C5C54]">
              {description}
            </p>
            {features && features.length > 0 && (
              <ul className="mt-6 space-y-3 text-sm text-[#4C5C54]">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-bold text-volt-dim">✓</span> {feature}
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="mt-8">
                <Button href={cta.href} variant="primary">
                  {cta.text}
                </Button>
              </div>
            )}
          </div>
          <div className="rounded-3xl bg-ink-900 overflow-hidden shadow-lg aspect-[4/3] p-10 flex items-center justify-center relative">
            <div className="w-full h-full relative opacity-90">
              <SmartImage
                src={imageSrc}
                alt={imageAlt}
                description={imageDescription || imageAlt}
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
