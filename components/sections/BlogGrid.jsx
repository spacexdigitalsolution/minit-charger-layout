import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * BlogGrid Component
 * 
 * Grid of recent blog posts.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, date: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.posts - Array of blog posts
 * @returns {JSX.Element}
 */
export default function BlogGrid({
  id,
  heading,
  posts
}) {
  return (
    <section className="bg-paper py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950 mb-12">
          {heading}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={post.href} className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition hover:shadow-lg">
              <div className="relative h-56 bg-ink-900 overflow-hidden">
                <div className="w-full h-full relative group-hover:scale-105 transition duration-500">
                  <SmartImage
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    description={post.imageDescription || post.imageAlt}
                    fill
                    className={post.imageSrc.includes('Momentus') ? 'object-contain p-4' : 'object-cover'}
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <time dateTime={new Date(post.date).toISOString()} className="text-sm text-mist font-mono mb-3">
                  {post.date}
                </time>
                <h3 className="font-display text-xl font-semibold text-ink-950 group-hover:text-volt-dim transition">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4C5C54] flex-1">
                  {post.description}
                </p>
                <div className="mt-5 text-sm font-bold text-volt-dim">Read Article &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="rounded-full border border-black/10 px-8 py-3 text-sm font-semibold transition hover:border-volt-dim hover:text-volt-dim">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
