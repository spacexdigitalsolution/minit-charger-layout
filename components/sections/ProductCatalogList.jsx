import Link from 'next/link';
import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * ProductCatalogList Section Component
 * 
 * Reusable section featuring a list of stacked product cards.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, label: string, href: string}>} [props.navLinks] - Optional anchor links to jump to specific products
 * @param {Array<{
 *   id: string,
 *   badge: string,
 *   imageSrc: string,
 *   imageAlt: string,
 *   imageDescription: string,
 *   eyebrow: string,
 *   title: string,
 *   description: string,
 *   specs: Array<{label: string, value: string}>,
 *   features: string[],
 *   usage: React.ReactNode,
 *   primaryCta: {text: string, href: string},
 *   secondaryCta: {text: string, href: string}
 * }>} props.products - Array of product objects
 * @returns {JSX.Element}
 */
export default function ProductCatalogList({
  id,
  eyebrow,
  heading,
  description,
  jumpLinks,
  industries
}) {
  return (
    <section className="bg-paper-dim py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
            {description}
          </p>
        </div>

        {jumpLinks && jumpLinks.length > 0 && (
          <nav className="mb-14 flex flex-wrap gap-2" aria-label="Jump to industry">
            {jumpLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/5 hover:ring-volt-dim transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {industries && industries.map((industry) => (
          <div key={industry.id} className="mb-24" id={industry.id}>
            <div className="mb-10 border-b border-black/10 pb-4">
              <h3 className="font-display text-4xl font-semibold text-ink-950">{industry.name}</h3>
            </div>

            {industry.parentProducts && industry.parentProducts.map((product) => (
              <article
                key={product.id}
                className="mb-16 rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 items-stretch">

                  {/* Parent Product Section (Left) */}
                  <div className="flex flex-col p-6 lg:p-10 gap-8">
                    <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_center,_#235a3c,_#0b1712)] w-full h-[300px] sm:h-[400px] shrink-0">
                      <SmartImage
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        displayHeight={720}
                        displayWidth={1080}
                        safeAreaHeight={720}
                        safeAreaWidth={1080}
                        description={product.imageDescription}
                        fill
                        className="mx-auto object-contain p-8"
                      />
                      {product.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-volt px-3 py-1 text-xs font-bold text-ink-950">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-wider text-volt-dim">
                        {product.eyebrow}
                      </span>
                      <h3 className="font-display mt-2 text-3xl font-semibold">{product.title}</h3>
                      <p className="mt-3 leading-relaxed text-[#4C5C54]">{product.description}</p>

                      {product.specs && product.specs.length > 0 && (
                        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                          {product.specs.map((spec, idx) => (
                            <div key={idx}>
                              <dt className="text-mist">{spec.label}</dt>
                              <dd className="font-semibold text-ink-950">{spec.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {product.features && product.features.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="rounded-full bg-paper-dim px-3 py-1.5 text-xs font-semibold text-ink-950">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {product.useCases && (
                        <p className="mt-5 text-sm text-[#4C5C54]">
                          <span className="font-semibold text-ink-950 mr-2">Use Cases:</span>
                          {product.useCases}
                        </p>
                      )}

                      <div className="mt-8 flex flex-wrap gap-3 mt-auto pt-6">
                        {product.secondaryCta && (
                          <Button href={product.secondaryCta.href} variant="outline-dark">
                            {product.secondaryCta.text}
                          </Button>
                        )}
                        {product.primaryCta && (
                          <Button href={product.primaryCta.href}>
                            {product.primaryCta.text}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Nested Child Products Section (Right) */}
                  {product.childProducts && product.childProducts.length > 0 && (
                    <div className="bg-paper-dim p-6 lg:p-10 border-t lg:border-t-0 lg:border-l border-black/5 flex flex-col">
                      <h4 className="text-[13px] font-bold uppercase tracking-wider text-mist mb-6">
                        Supporting Products
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {product.childProducts.map((child) => (
                          <div key={child.id} className="flex flex-col gap-4 bg-white p-5 rounded-2xl shadow-sm ring-1 ring-black/5 h-full relative">
                            <div className="relative w-full h-32 shrink-0 bg-ink-900 rounded-xl overflow-hidden flex items-center justify-center">
                              <SmartImage
                                src={child.imageSrc}
                                alt={child.title}
                                description={child.title}
                                displayHeight={720}
                                displayWidth={1080}
                                safeAreaHeight={720}
                                safeAreaWidth={1080}
                                fill
                                className="object-contain p-4"
                              />
                              {child.badge && (
                                <span className="absolute left-2.5 top-2.5 rounded bg-volt px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-950 shadow-sm">
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 flex flex-col">
                              <h5 className="font-display font-semibold text-ink-950 text-[15px]">{child.title}</h5>

                              {child.specs && child.specs.length > 0 && (
                                <div className="mt-3 mb-1 grid grid-cols-2 gap-x-2 gap-y-2 border-t border-black/5 pt-3">
                                  {child.specs.map((spec, idx) => (
                                    <div key={idx} className="text-[11px]">
                                      <span className="text-mist block leading-none mb-0.5">{spec.label}</span>
                                      <span className="font-semibold text-ink-950 block leading-tight">{spec.value}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              <p className="text-[13px] text-[#4C5C54] mt-2 mb-4 leading-relaxed flex-1">{child.description}</p>

                              {child.ctaText && child.href && (
                                <a
                                  href={child.href}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-volt-dim hover:text-volt transition"
                                >
                                  {child.ctaText}
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
