/**
 * TestimonialGrid Section Component
 * 
 * Reusable section featuring a grid of testimonial quotes.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {Array<{
 *   id: string,
 *   quote: string,
 *   initials: string,
 *   authorName: string,
 *   authorRole: string
 * }>} props.testimonials - Array of testimonial objects
 * @returns {JSX.Element}
 */
export default function TestimonialGrid({
  id,
  eyebrow,
  heading,
  testimonials
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8" id={id}>
      <div className="mb-12 text-center">
        <p className="font-mono mb-3 text-[11px] uppercase tracking-wider text-[#4C5C54]">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <p className="font-display text-lg font-medium leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display font-bold text-volt"
                aria-hidden="true"
              >
                {testimonial.initials}
              </div>
              <div>
                <cite className="not-italic font-bold">{testimonial.authorName}</cite>
                <p className="text-sm text-[#4C5C54]">{testimonial.authorRole}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
