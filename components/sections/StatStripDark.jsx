/**
 * StatStripDark Section Component
 * 
 * Reusable dark section displaying a grid of statistics.
 * Best used immediately following a SplitFeatureDark section.
 * 
 * @param {Object} props
 * @param {Array<{id: string, value: string, label: string}>} props.stats - Array of 4 stat objects
 * @param {string} [props.disclaimer] - Optional small text below the stats
 * @param {boolean} [props.standalone=false] - If true, wraps in its own section with padding
 * @returns {JSX.Element}
 */
export default function StatStripDark({
  stats,
  disclaimer,
  standalone = false
}) {
  const content = (
    <>
      <div className={`mx-auto grid max-w-[1240px] gap-6 sm:grid-cols-2 lg:grid-cols-4 ${standalone ? '' : 'pt-16'}`}>
        {stats.map((stat) => (
          <div key={stat.id} className="rounded-3xl bg-ink-850 p-6 ring-1 ring-white/5">
            <p className="font-display text-4xl font-bold text-volt">{stat.value}</p>
            <p className="mt-2 text-sm text-mist">{stat.label}</p>
          </div>
        ))}
      </div>
      {disclaimer && (
        <p className="mx-auto mt-4 max-w-[1240px] text-xs text-mist/70">
          {disclaimer}
        </p>
      )}
    </>
  );

  if (standalone) {
    return (
      <section className="bg-ink-900 px-6 py-24 lg:px-8">
        {content}
      </section>
    );
  }

  // If not standalone, we assume it's sitting inside another dark section (like SplitFeatureDark's parent or immediately after with appropriate margins)
  return (
    <div className="bg-ink-900 px-6 pb-24 lg:px-8">
      {content}
    </div>
  );
}
