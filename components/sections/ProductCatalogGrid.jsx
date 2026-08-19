import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * ProductCatalogGrid Component
 * 
 * Renders a grid of product cards with an image on top and text below.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {Array<{id: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.products - Products
 * @returns {JSX.Element}
 */
export default function ProductCatalogGrid({
  id,
  eyebrow,
  heading,
  description,
  products
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
        <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54] max-w-2xl">
          {description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group flex flex-col rounded-3xl bg-white ring-1 ring-black/5 transition hover:shadow-lg">
              <div className="h-48 bg-ink-900 p-6 flex items-center justify-center rounded-t-3xl overflow-hidden relative">
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
              <div className="p-6 flex-1">
                <h3 className="font-display text-xl font-semibold text-ink-950 group-hover:text-volt-dim transition">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4C5C54]">
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
