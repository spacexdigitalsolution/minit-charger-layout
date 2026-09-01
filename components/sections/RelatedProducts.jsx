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
  eyebrow,
  heading,
  products,
  theme = 'dark',
  columns = 3
}) {
  const isDark = theme === 'dark';
  
  const sectionBg = isDark ? 'bg-ink-950 text-white' : 'bg-paper-dim text-ink-950';
  const headingColor = isDark ? 'text-white' : 'text-ink-950';
  const cardBg = isDark ? 'bg-ink-900 border border-white/10 hover:bg-ink-800' : 'bg-white border border-[#D7DECB] hover:shadow-[0_24px_60px_-30px_rgba(11,20,15,0.45)]';
  const imageBg = 'bg-transparent';
  const titleColor = isDark ? 'text-white' : 'text-ink-950';
  const descColor = isDark ? 'text-mist' : 'text-[#5B6A5C]';
  const gridCols = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';

  const getTag = (product) => {
    if (product.tag) return product.tag;
    if (product.title.includes("Altus")) return "Outdoor rated";
    if (product.title.includes("CellTrac")) return "Telematics";
    return "Hardware";
  };

  return (
    <section className={`py-24 ${sectionBg}`} id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
              {eyebrow}
            </p>
          )}
          {heading && typeof heading === 'string' && (
            <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${headingColor}`}>
              {heading}
            </h2>
          )}
        </div>
        <div className={`grid gap-6 ${gridCols}`}>
          {products.map((product) => (
            <Link key={product.id} href={product.href} className={`group flex flex-col rounded-[20px] transition ${cardBg} ${isDark ? '' : 'overflow-hidden'}`}>
              <div className={`p-8 h-[220px] flex items-center justify-center relative overflow-hidden ${imageBg}`}>
                <div className="w-full h-full relative group-hover:scale-105 transition duration-500">
                  <SmartImage
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    description={product.imageDescription || product.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-7 pt-2 flex flex-col flex-1">
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold tracking-[0.05em] uppercase px-2.5 py-1 rounded-full ${isDark ? 'bg-white/10 text-mist' : 'bg-[#F2F5F0] text-[#4C5C54]'}`}>
                    {getTag(product)}
                  </span>
                </div>
                <h3 className={`font-display text-[19px] font-bold ${titleColor}`}>
                  {product.title}
                </h3>
                <p className={`mt-2.5 text-[14px] leading-relaxed flex-1 ${descColor}`}>
                  {product.description}
                </p>
                <div className={`mt-7 flex items-center gap-1 font-bold text-[13.5px] ${isDark ? 'text-white' : 'text-ink-950'}`}>
                  View details 
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
