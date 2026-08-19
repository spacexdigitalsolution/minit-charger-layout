import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * PostSpotlight Component
 * 
 * A dark inline spotlight section typically showing a featured solution or product.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Main heading
 * @param {string} props.description - Description
 * @param {Object} props.cta - CTA button {text, href}
 * @param {string} props.imageSrc - Product image source
 * @param {string} props.imageAlt - Product image alt
 * @param {string} props.imageDescription - Placeholder description
 * @returns {JSX.Element}
 */
export default function PostSpotlight({
  id,
  eyebrow,
  heading,
  description,
  cta,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="bg-white py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="rounded-3xl bg-ink-950 p-8 lg:p-12 ring-1 ring-black/5 flex flex-col lg:flex-row items-center gap-12 text-white">
          <div className="lg:w-1/2">
             <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
                <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
                {eyebrow}
             </p>
             <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
             <p className="mt-4 text-lg text-mist">{description}</p>
             <div className="mt-8">
               <Button href={cta.href} variant="primary">
                 {cta.text}
               </Button>
             </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
             <div className="relative w-full max-w-sm h-64">
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
