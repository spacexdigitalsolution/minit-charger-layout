import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';
import Link from 'next/link';

/**
 * StandardHero Component
 * 
 * Reusable full-width hero section with a static background image,
 * large heading, description, breadcrumbs, and CTA buttons.
 * Used for product and industry pages.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{label: string, href: string}>} [props.breadcrumbs] - Breadcrumb links
 * @param {string} props.imageSrc - Foreground image source
 * @param {string} [props.imageAlt] - Foreground image alt text
 * @param {string} [props.imageDescription] - Description for foreground SmartImage placeholder
 * @param {string} [props.bgImage] - Background banner image source
 * @param {string} [props.eyebrow] - Eyebrow text above heading
 * @param {React.ReactNode} [props.heading] - Main heading content (fallback)
 * @param {React.ReactNode} [props.title] - Main heading content (fallback)
 * @param {string} props.description - Main description/subheading
 * @param {Object} [props.primaryCta] - Primary CTA button { text, href }
 * @param {Object} [props.secondaryCta] - Secondary CTA button { text, href }
 * @param {Object} [props.datasheetCta] - Outline CTA button for datasheets { text, href }
 * @returns {JSX.Element}
 */
export default function StandardHero({
  id,
  breadcrumbs,
  imageSrc,
  imageAlt = "Product Image",
  imageDescription,
  bgImage,
  eyebrow,
  heading,
  title,
  description,
  cta,
  primaryCta,
  secondaryCta,
  datasheetCta
}) {
  // Use cta as primaryCta if primaryCta is not provided
  const mainCta = primaryCta || cta;

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-[#e4eaee] to-[#f4f7f6] pt-20 pb-20" id={id}>
      {/* Background Banner Container */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={bgImage || ""}
          alt="Background Banner"
          description="Hero Background Banner"
          fill
          className="object-cover"
          priority
          mode={bgImage ? "image" : "placeholder"}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-[600px]">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="mb-6 font-mono text-[11px] uppercase tracking-wider text-[#4C5C54]">
                {breadcrumbs.map((crumb, idx) => (
                  <span key={idx}>
                    {idx > 0 && <span className="mx-2 text-[#4C5C54]/40">/</span>}
                    {idx < breadcrumbs.length - 1 ? (
                      <Link href={crumb.href} className="hover:text-volt-dim transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-ink-950 font-semibold">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            {eyebrow && (
              <div className="mb-4 font-mono text-[13.5px] uppercase tracking-[0.12em] text-volt-dim">
                {eyebrow}
              </div>
            )}

            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-6xl lg:text-[4.5rem]">
              {heading || title}
            </h1>

            {description && (
              <p className="mt-6 text-lg leading-relaxed text-[#4C5C54] font-medium drop-shadow-sm max-w-xl">
                {description}
              </p>
            )}

            {(mainCta || secondaryCta || datasheetCta) && (
              <div className="mt-10 flex flex-wrap justify-start gap-4 items-center">
                {mainCta && (
                  <Button href={mainCta.href} variant="primary" size="md">
                    {mainCta.text}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary" size="md">
                    {secondaryCta.text}
                  </Button>
                )}
                {datasheetCta && (
                  <Button href={datasheetCta.href} variant="secondary" size="md" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    {datasheetCta.text}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Foreground Image Container */}
          {imageSrc && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[500px]">
                <SmartImage
                  src={imageSrc}
                  alt={imageAlt}
                  description={imageDescription}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
