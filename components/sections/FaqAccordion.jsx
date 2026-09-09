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
          {description && (
            <p 
              className="mt-4 text-[#4C5C54] [&>a]:text-volt-dim [&>a]:underline [&>a]:underline-offset-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          
          {cta && (
            <a 
              href={cta.href}
              className="mt-6 inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition hover:border-volt-dim hover:text-volt-dim"
            >
              {cta.text}
            </a>
          )}
        </div>
        
        <div className="divide-y divide-black/10 border-t border-b border-black/10 lg:border-t-0 lg:border-b-0">
          <div className="lg:border-t lg:border-black/10 lg:border-b">
            {faqs.map((faq, index) => (
              <details 
                key={faq.id} 
                className={`group ${index !== 0 ? 'border-t border-black/10' : ''}`} 
                open={faq.isOpen}
              >
                <summary className="flex cursor-pointer items-start gap-4 py-6 font-semibold transition hover:text-black/70 list-none [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-volt-dim transition-transform duration-200 group-open:rotate-180">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="leading-snug">{faq.question}</span>
                </summary>
                <div className="pb-6 pl-8 pr-4 text-sm leading-relaxed text-[#4C5C54]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
