import SmartImage from '../ui/SmartImage';

/**
 * SplitFeatureDark Section Component
 * 
 * Reusable dark section featuring a 50/50 split layout.
 * One side contains text and a list of items.
 * The other side contains a featured image.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, text: string}>} [props.listItems] - Optional list of bullet points
 * @param {string} props.imageSrc - Featured image URL
 * @param {string} props.imageAlt - Featured image alt text
 * @param {string} props.imageDescription - Description for the SmartImage placeholder
 * @param {'left' | 'right'} [props.imagePosition='right'] - Position of the image on desktop
 * @param {boolean} [props.noPaddingBottom=false] - If true, removes the bottom padding (useful if followed by stats)
 * @returns {JSX.Element}
 */
export default function SplitFeatureDark({
  id,
  eyebrow,
  heading,
  description,
  listItems,
  imageSrc,
  imageAlt,
  imageDescription,
  imagePosition = 'right',
  noPaddingBottom = false
}) {
  return (
    <section className={`bg-ink-900 px-6 pt-24 ${noPaddingBottom ? 'pb-0' : 'pb-24'} text-[#EEF5F0] lg:px-8`} id={id}>
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2">
        <div className={imagePosition === 'left' ? 'lg:order-2' : ''}>
          <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-mist">
            {description}
          </p>
          
          {listItems && listItems.length > 0 && (
            <ul className="mt-6 space-y-3 text-sm text-mist">
              {listItems.map((item) => (
                <li key={item.id} className="flex gap-2">
                  <span className="text-volt">✓</span> {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className={`overflow-hidden rounded-[2rem] ring-1 ring-white/10 bg-ink-850 flex items-center justify-center p-10 h-[400px] lg:h-[600px] relative ${imagePosition === 'left' ? 'lg:order-1' : ''}`}>
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            description={imageDescription}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
