import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * HeroBanner Section Component
 * 
 * Reusable full-width hero section with a background image,
 * large heading, subheading, and up to two CTA buttons.
 * 
 * @param {Object} props
 * @param {string} props.imageSrc - Background image URL
 * @param {string} props.imageAlt - Background image alt text
 * @param {string} props.imageDescription - Description for the SmartImage placeholder
 * @param {React.ReactNode} props.heading - Main heading content
 * @param {string} props.subheading - Subheading/body text
 * @param {Object} [props.primaryCta] - Primary CTA button { text, href }
 * @param {Object} [props.secondaryCta] - Secondary CTA button { text, href }
 * @returns {JSX.Element}
 */
export default function HeroBanner({
  imageSrc,
  imageAlt,
  imageDescription,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-[#e4eaee] to-[#f4f7f6] pt-20 pb-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={imageSrc}
          alt={imageAlt}
          description={imageDescription}
          fill
          priority
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-left">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-6xl lg:text-[4.5rem]">
            {heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4C5C54] font-medium drop-shadow-sm">
            {subheading}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap justify-start gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="md">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="md">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
