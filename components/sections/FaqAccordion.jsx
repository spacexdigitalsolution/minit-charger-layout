/**
 * FaqAccordion Section Component
 * 
 * Reusable section featuring a list of expandable FAQ items.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Object} [props.cta] - Optional CTA button { text, href }
 * @param {Array<{id: string, question: string, answer: string, isOpen?: boolean}>} props.faqs - Array of FAQ objects
 * @returns {JSX.Element}
 */
export default function FaqAccordion({
  id,
  heading,
  description,
  cta,
  faqs
}) {
  return (
    <section className="bg-paper-dim py-24" id={id}>
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-[#4C5C54]">{description}</p>
          
          {cta && (
            <a 
              href={cta.href}
              className="mt-6 inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition hover:border-volt-dim hover:text-volt-dim"
            >
              {cta.text}
            </a>
          )}
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.id} className="group rounded-2xl bg-white open:ring-1 open:ring-volt/30" open={faq.isOpen}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold">
                {faq.question}
                <span className="text-volt-dim transition group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[#4C5C54]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
