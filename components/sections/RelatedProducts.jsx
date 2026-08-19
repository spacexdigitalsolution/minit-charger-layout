import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * RelatedProducts Component
 * 
 * Renders a grid of related products (usually 3 cards) in a dark section.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Main heading
 * @param {Array<{id: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.products - Related products
 * @returns {JSX.Element}
 */
export default function RelatedProducts({
  id,
  heading,
  products
}) {
  return (
    <section className="bg-ink-950 py-24 text-white" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold mb-8">
          {heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group flex flex-col rounded-3xl bg-ink-900 ring-1 ring-white/10 transition hover:bg-ink-800">
              <div className="p-6 h-40 flex items-center justify-center relative overflow-hidden">
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
                <h3 className="font-display text-xl font-semibold text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-mist">
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
