import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * CoreCategoriesGrid Component
 * 
 * Grid of main categories.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.categories - Array of categories
 * @returns {JSX.Element}
 */
export default function CoreCategoriesGrid({
  id,
  heading,
  categories
}) {
  return (
    <section className="bg-paper py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition hover:shadow-lg">
              <div className="relative h-80 bg-ink-900 overflow-hidden">
                <div className="w-full h-full relative group-hover:scale-105 transition duration-500">
                  <SmartImage
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    description={category.imageDescription || category.imageAlt}
                    fill
                    className={category.imageSrc.includes('CMS') ? 'object-cover' : 'object-contain p-8'}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-ink-950 group-hover:text-volt-dim transition">
                  {category.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4C5C54]">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-volt-dim group-hover:gap-2 transition-all">
                  Explore {category.title.split(' ')[0]} <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
