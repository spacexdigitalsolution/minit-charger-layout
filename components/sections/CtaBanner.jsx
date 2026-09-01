import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * CtaBanner Section Component
 * 
 * Reusable section featuring a call to action with a background effect
 * and optional images.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Object} props.primaryCta - Primary CTA button { text, href }
 * @param {Object} [props.secondaryCta] - Secondary CTA button { text, href }
 * @param {string} [props.contactText] - Optional contact string like MINIT CHARGER - [PHONE / EMAIL]
 * @param {Array<{id: string, src: string, alt: string, description: string, hiddenOnMobile?: boolean}>} [props.images] - Optional images to display alongside
 * @returns {JSX.Element}
 */
export default function CtaBanner({
  id,
  heading,
  description,
  primaryCta,
  secondaryCta,
  contactText,
  images
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950" id={id}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(92,242,160,0.15),transparent_55%)]"
        aria-hidden="true"
      ></div>
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-mist">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button href={primaryCta.href}>
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.text}
              </Button>
            )}
          </div>
          {contactText && (
            <div className="mt-8 font-mono text-[11px] lg:text-[13px] tracking-wide text-[#9FB3A9] uppercase text-center lg:text-left">
              {contactText}
            </div>
          )}
        </div>

        {images && images.length > 0 && (
          <div className="flex justify-center gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative w-[280px] sm:w-[480px] lg:w-[540px] h-64 sm:h-80 lg:h-[320px] ${image.hiddenOnMobile ? 'hidden sm:block' : ''}`}
              >
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  displayHeight={540}
                  displayWidth={540}
                  safeAreaHeight={540}
                  safeAreaWidth={540}
                  description={`${image.description}. Images should have transparent backgrounds inorder to blend with the background.`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
