import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * RelatedArticles Component
 * 
 * Renders a 2-column grid of related blog articles.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, date: string, title: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.articles - Array of related articles
 * @returns {JSX.Element}
 */
export default function RelatedArticles({
  id,
  heading,
  articles
}) {
  return (
    <section className="bg-paper-dim py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl text-ink-950">
            {heading}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.id} href={article.href} className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition hover:shadow-lg">
              <div className="relative h-48 bg-ink-900 overflow-hidden">
                <div className="w-full h-full relative group-hover:scale-105 transition duration-500">
                  <SmartImage
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    description={article.imageDescription || article.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <time dateTime={new Date(article.date).toISOString()} className="text-sm text-mist font-mono mb-3">
                  {article.date}
                </time>
                <h3 className="font-display text-xl font-semibold text-ink-950 group-hover:text-volt-dim transition">
                  {article.title}
                </h3>
                <div className="mt-5 text-sm font-bold text-volt-dim">Read Article &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
