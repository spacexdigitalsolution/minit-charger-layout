import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';
import Link from 'next/link';

/**
 * ProductHero Component
 * 
 * Top hero section for individual product pages. Features a large image on the left,
 * breadcrumbs, labels, title, description, features, and CTA on the right.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{label: string, href: string}>} props.breadcrumbs - Breadcrumb links
 * @param {string} props.imageSrc - Product image source
 * @param {string} props.imageAlt - Product image alt
 * @param {string} props.imageDescription - Placeholder description
 * @param {string} props.eyebrow - Label text above heading
 * @param {React.ReactNode} props.title - Product title
 * @param {string} props.description - Main description
 * @param {Array<{label: string, href: string}>} props.industries - Relevant industries tags
 * @param {Array<string>} props.features - Bullet features with checkmarks
 * @param {Object} props.cta - Call to action {text, href}
 * @returns {JSX.Element}
 */
export default function ProductHero({
  id,
  breadcrumbs,
  imageSrc,
  imageAlt,
  imageDescription,
  eyebrow,
  title,
  description,
  industries,
  features,
  cta,
  datasheetCta
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
        
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-ink-900 p-10 flex items-center justify-center min-h-[500px]">
            <div className="relative w-full h-[384px]">
              <SmartImage
                src={imageSrc}
                alt={imageAlt}
                description={imageDescription}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
              {eyebrow}
            </p>
            <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl text-ink-950">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4C5C54]">
              {description}
            </p>
            
            {industries && industries.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-ink-950 uppercase tracking-wide text-sm">Relevant Industries</h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  {industries.map((industry, idx) => (
                    <Link key={idx} href={industry.href} className="px-4 py-1.5 rounded-full bg-paper-dim text-sm text-[#4C5C54] hover:bg-black/5 transition">
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {features && features.length > 0 && (
              <ul className="mt-8 space-y-4 text-sm text-[#4C5C54]">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-bold text-volt-dim">✓</span> {feature}
                  </li>
                ))}
              </ul>
            )}
            
            {(cta || datasheetCta) && (
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {cta && (
                  <Button href={cta.href}>
                    {cta.text}
                  </Button>
                )}
                {datasheetCta && (
                  <Button href={datasheetCta.href} variant="outline" target="_blank" rel="noopener noreferrer" className="border-black/20 text-ink-950 hover:bg-black/5 hover:border-black/30">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    {datasheetCta.text}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
