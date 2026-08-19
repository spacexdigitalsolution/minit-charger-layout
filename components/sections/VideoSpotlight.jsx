import SmartImage from '../ui/SmartImage';
import Link from 'next/link';

/**
 * VideoSpotlight Component
 * 
 * Dark section featuring a video thumbnail and descriptive text.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {Object} props.cta - Button {text, href}
 * @param {string} props.imageSrc - Thumbnail image source
 * @param {string} props.imageAlt - Thumbnail image alt
 * @param {string} props.imageDescription - Placeholder description
 * @returns {JSX.Element}
 */
export default function VideoSpotlight({
  id,
  heading,
  description,
  cta,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="bg-ink-950 py-24 text-white" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">{description}</p>
            {cta && (
              <div className="mt-8">
                <Link href={cta.href} className="inline-flex items-center gap-3 rounded-full bg-volt px-7 py-3 text-sm font-semibold text-[#04150C] transition hover:brightness-110">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  {cta.text}
                </Link>
              </div>
            )}
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-ink-900 aspect-video ring-1 ring-white/10 shadow-2xl flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 w-full h-full opacity-50 group-hover:opacity-40 transition relative">
              <SmartImage
                src={imageSrc}
                alt={imageAlt}
                description={imageDescription || imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute z-10 h-20 w-20 rounded-full bg-volt/90 flex items-center justify-center text-[#04150C] group-hover:scale-110 transition shadow-[0_0_0_10px_rgba(92,242,160,0.2)]">
               <svg className="h-8 w-8 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
