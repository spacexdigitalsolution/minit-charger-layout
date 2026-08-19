/**
 * PillStrip Section Component
 * 
 * Reusable thin section displaying a row of text items (pills),
 * typically used for logos, keywords, or industries.
 * 
 * @param {Object} props
 * @param {string} props.eyebrow - Small uppercase text on the left
 * @param {Array<string>} props.items - Array of strings to display as pills/keywords
 * @returns {JSX.Element}
 */
export default function PillStrip({
  eyebrow,
  items
}) {
  return (
    <section className="border-b border-black/5 bg-paper-dim py-5" aria-label="Trusted across industries">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-4 px-6 lg:px-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-volt-dim">
          {eyebrow}
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#4C5C54]">
          {items.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
