import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * SplitFeatureLight Section Component
 * 
 * Reusable light section featuring a 50/50 split layout.
 * One side contains text, a list of items, and a CTA.
 * The other side contains a featured image.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, text: React.ReactNode}>} [props.listItems] - Optional list of bullet points
 * @param {Object} [props.cta] - CTA button { text, href }
 * @param {string} props.imageSrc - Featured image URL
 * @param {string} props.imageAlt - Featured image alt text
 * @param {string} props.imageDescription - Description for the SmartImage placeholder
 * @param {'left' | 'right'} [props.imagePosition='right'] - Position of the image on desktop
 * @returns {JSX.Element}
 */
export default function SplitFeatureLight({
  id,
  eyebrow,
  heading,
  description,
  listItems,
  cta,
  imageSrc,
  imageAlt,
  imageDescription,
  imagePosition = 'right'
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8" id={id}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className={imagePosition === 'left' ? 'lg:order-2' : ''}>
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-[#4C5C54]">{description}</p>
          
          {listItems && listItems.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-[#4C5C54]">
              {listItems.map((item) => (
                <li key={item.id} className="flex gap-2">
                  <span className="font-bold text-volt-dim">✓</span> 
                  {item.text}
                </li>
              ))}
            </ul>
          )}
          
          {cta && (
            <div className="mt-8">
              <Button href={cta.href}>
                {cta.text}
              </Button>
            </div>
          )}
        </div>
        
        <div className={`overflow-hidden rounded-[2rem] bg-ink-900 ring-1 ring-black/10 h-[400px] lg:h-[600px] relative ${imagePosition === 'left' ? 'lg:order-1' : ''}`}>
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            description={imageDescription}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
