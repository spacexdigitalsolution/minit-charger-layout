import React from 'react';

/**
 * TestimonialGridLight Component
 * 
 * Light background version of testimonial grid, typically 2 columns.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Center heading
 * @param {Array<{id: string, quote: string, authorName: string, authorRole: string}>} props.testimonials - Array of testimonials
 * @returns {JSX.Element}
 */
export default function TestimonialGridLight({
  id,
  eyebrow,
  heading,
  testimonials
}) {
  return (
    <section className="bg-white py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="text-center mb-16">
          {eyebrow && (
            <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
              {eyebrow}
            </p>
          )}
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-3xl bg-paper-dim p-10 ring-1 ring-black/5 relative">
              <svg className="absolute top-8 right-8 h-12 w-12 text-black/5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h4V8h-4zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h4V8h-4z"/>
              </svg>
              <p className="text-lg leading-relaxed text-[#4C5C54] relative z-10">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-mist/30"></div>
                <div>
                  <div className="font-bold text-ink-950">{t.authorName}</div>
                  <div className="text-sm text-[#4C5C54]">{t.authorRole}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
