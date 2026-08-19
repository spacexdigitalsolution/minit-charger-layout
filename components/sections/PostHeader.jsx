import Link from 'next/link';

/**
 * PostHeader Component
 * 
 * Header for blog posts featuring breadcrumbs, title, author, and date.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{label: string, href: string}>} props.breadcrumbs - Breadcrumbs
 * @param {React.ReactNode} props.title - Post title
 * @param {string} props.author - Author name
 * @param {string} props.date - Published date (e.g. 'August 10, 2026')
 * @param {string} props.readTime - Read time (e.g. '5 min read')
 * @returns {JSX.Element}
 */
export default function PostHeader({
  id,
  breadcrumbs,
  title,
  author,
  date,
  readTime
}) {
  return (
    <section className="bg-ink-950 py-24 text-white" id={id}>
      <div className="mx-auto max-w-[900px] px-6 lg:px-8 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 font-mono text-xs uppercase tracking-wider text-mist">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx}>
                {idx > 0 && ' › '}
                {idx < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-volt">{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl text-white leading-tight">
          {title}
        </h1>
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-mist">
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-full bg-volt/20 flex items-center justify-center text-volt">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
             </div>
             <span className="font-semibold text-white">{author}</span>
          </div>
          <span>&bull;</span>
          <time dateTime={new Date(date).toISOString()}>{date}</time>
          <span>&bull;</span>
          <span>{readTime}</span>
        </div>
      </div>
    </section>
  );
}
