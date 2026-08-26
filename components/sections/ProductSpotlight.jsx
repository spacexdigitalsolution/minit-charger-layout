import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * ProductSpotlight Section Component
 * 
 * Reusable split section featuring a large product image on one side
 * and detailed text, badges, and CTAs on the other side.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.imageSrc - Product image URL
 * @param {string} props.imageAlt - Product image alt text
 * @param {string} props.imageDescription - Description for the SmartImage placeholder
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<string>} props.badges - Array of short strings for small badges
 * @param {Object} [props.primaryCta] - Primary CTA button { text, href }
 * @param {Object} [props.secondaryCta] - Secondary CTA button { text, href }
 * @returns {JSX.Element}
 */
export default function ProductSpotlight({
  id,
  imageSrc,
  imageAlt,
  imageDescription,
  eyebrow,
  heading,
  description,
  badges,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="relative grid min-h-[560px] lg:grid-cols-2" id={id}>
      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-ink-900 p-8 sm:p-12">
        <div className="relative z-10 w-full max-w-[800px] h-[420px]">
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            displayHeight={540}
            displayWidth={1080}
            safeAreaHeight={540}
            safeAreaWidth={1080}
            description={imageDescription}
            fill
            className="object-contain"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(92,242,160,0.12),transparent_55%)]"
          aria-hidden="true"
        ></div>
      </div>

      <div className="flex flex-col justify-center bg-ink-900 px-8 py-16 text-[#EEF5F0] sm:px-12 lg:px-16">
        <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-mist">
          {description}
        </p>

        {badges && badges.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <li key={index} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/85">
                {badge}
              </li>
            ))}
          </ul>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Button href={primaryCta.href}>
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
