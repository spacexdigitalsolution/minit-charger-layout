import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * CategoryProductGrid Component
 * 
 * Grid of product cards within a category.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.products - Array of products
 * @returns {JSX.Element}
 */
export default function CategoryProductGrid({
  id,
  eyebrow,
  heading,
  items
}) {
  return (
    <section className="bg-paper-dim py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
          {eyebrow}
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
          {heading}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items && items.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition hover:shadow-lg hover:ring-volt-dim/30 flex flex-col">
              <div className="bg-ink-900 p-8 flex items-center justify-center h-48 relative overflow-hidden">
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
              <div className="p-7 flex-1">
                <h3 className="font-display text-xl font-semibold text-ink-950">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4C5C54]">{product.description}</p>
                <Link href={product.href} className="mt-4 inline-block text-sm font-bold text-volt-dim">
                  View Product &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
