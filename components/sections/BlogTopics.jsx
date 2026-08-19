import Link from 'next/link';

/**
 * BlogTopics Component
 * 
 * Simple strip of blog topics/categories.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{id: string, label: string, href: string, active?: boolean}>} props.topics - Array of topics
 * @returns {JSX.Element}
 */
export default function BlogTopics({ id, topics }) {
  return (
    <section className="bg-white py-12 border-b border-black/5" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <Link 
              key={topic.id} 
              href={topic.href} 
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                topic.active 
                  ? 'bg-ink-950 text-white' 
                  : 'bg-paper-dim text-[#4C5C54] hover:bg-black/5'
              }`}
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
