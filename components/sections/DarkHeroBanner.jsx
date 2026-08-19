import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * DarkHeroBanner Section Component
 * 
 * Reusable full-width hero section with a dark background, an image overlay,
 * large heading, description, and up to two CTA buttons.
 * 
 * @param {Object} props
 * @param {string} props.imageSrc - Background image URL
 * @param {string} props.imageAlt - Background image alt text
 * @param {string} [props.imageDescription] - Description for the SmartImage placeholder
 * @param {React.ReactNode} props.heading - Main heading content
 * @param {string} props.description - Description text
 * @param {Object} [props.primaryCta] - Primary CTA button { text, href }
 * @param {Object} [props.secondaryCta] - Secondary CTA button { text, href }
 * @returns {JSX.Element}
 */
export default function DarkHeroBanner({
  imageSrc,
  imageAlt,
  imageDescription,
  heading,
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-ink-950 px-6 py-24 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-30 bg-ink-900">
          {imageSrc && (
            <SmartImage
              src={imageSrc}
              alt={imageAlt || ''}
              description={imageDescription || imageAlt || ''}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-transparent"></div>
      </div>
      <div className="relative mx-auto w-full max-w-[1240px]">
        <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mist">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary">
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
