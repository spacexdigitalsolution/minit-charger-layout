import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * RelatedProducts Component
 * 
 * Renders a grid of related products.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Main heading
 * @param {Array<{id: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.products - Related products
 * @param {string} [props.theme='dark'] - Theme to use: 'dark' or 'light'
 * @param {number} [props.columns=3] - Number of columns for the grid (3 or 4)
 * @returns {JSX.Element}
 */
export default function RelatedProducts({
  id,
  heading,
  products,
  theme = 'dark',
  columns = 3
}) {
  const isDark = theme === 'dark';
  
  const sectionBg = isDark ? 'bg-ink-950 text-white' : 'bg-paper-dim text-ink-950';
  const headingColor = isDark ? 'text-white' : 'text-ink-950';
  const cardBg = isDark ? 'bg-ink-900 ring-white/10 hover:bg-ink-800' : 'bg-white border border-[#D7DECB] hover:shadow-[0_24px_60px_-30px_rgba(11,20,15,0.45)]';
  const imageBg = isDark ? '' : 'bg-paper-dim';
  const titleColor = isDark ? 'text-white' : 'text-ink-950';
  const descColor = isDark ? 'text-mist' : 'text-[#5B6A5C]';
  const gridCols = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';

  return (
    <section className={`py-24 ${sectionBg}`} id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Altus HTML uses eyebrow "Related products", but existing Magnus doesn't pass eyebrow, we will stick to heading */}
        {heading && typeof heading === 'string' && heading !== 'Build the rest of your charging ecosystem.' && (
          <h2 className={`font-display text-3xl font-semibold mb-8 ${headingColor}`}>
            {heading}
          </h2>
        )}
        {/* Supporting Altus HTML pattern with eyebrow */}
        {heading === 'Build the rest of your charging ecosystem.' && (
          <div className="max-w-[680px] mb-[44px]">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
              <span className="inline-block w-4 h-[2px] bg-copper"></span>
              Related products
            </span>
            <h2 className={`text-[clamp(28px,4vw,42px)] font-display font-bold mt-3.5 leading-[1.02] ${headingColor}`}>
              {heading}
            </h2>
          </div>
        )}
        <div className={`grid gap-6 ${gridCols}`}>
          {products.map((product) => (
            <Link key={product.id} href={product.href} className={`group flex flex-col rounded-2xl ring-1 transition ${cardBg} ${isDark ? '' : 'overflow-hidden'}`}>
              <div className={`p-6 h-40 flex items-center justify-center relative overflow-hidden ${imageBg}`}>
                <div className="w-full h-full relative group-hover:scale-105 transition">
                  <SmartImage
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    description={product.imageDescription || product.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className={`font-display text-[15px] font-bold ${titleColor}`}>
                  {product.title}
                </h3>
                <p className={`mt-1.5 text-[12.5px] ${descColor}`}>
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
