import Button from '../ui/Button';
import ImageSlider from '../ui/ImageSlider';

/**
 * HeroBanner Section Component
 * 
 * Reusable full-width hero section with a sliding background image,
 * large heading, subheading, and up to two CTA buttons.
 * 
 * @param {Object} props
 * @param {Array<{src: string, alt: string, description: string}>} [props.images] - Array of images for slider
 * @param {string} [props.imageSrc] - Fallback single background image URL
 * @param {string} [props.imageAlt] - Fallback background image alt text
 * @param {string} [props.imageDescription] - Fallback description for the SmartImage placeholder
 * @param {React.ReactNode} props.heading - Main heading content
 * @param {string} props.subheading - Subheading/body text
 * @param {Object} [props.primaryCta] - Primary CTA button { text, href }
 * @param {Object} [props.secondaryCta] - Secondary CTA button { text, href }
 * @returns {JSX.Element}
 */
export default function HeroBanner({
  images,
  imageSrc,
  imageAlt,
  imageDescription,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}) {
  const sliderImages = images || (imageSrc ? [{ src: imageSrc, alt: imageAlt, description: imageDescription }] : []);

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-[#e4eaee] to-[#f4f7f6] pt-20 pb-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <ImageSlider images={sliderImages} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6  text-left">
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
