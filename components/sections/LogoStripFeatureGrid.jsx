/**
 * LogoStripFeatureGrid Section Component
 * 
 * Reusable section featuring a top row of trusted company logos/names
 * followed by a 3-column grid of key features with icons.
 * 
 * @param {Object} props
 * @param {string} props.eyebrow - Small uppercase text above logos
 * @param {Array<{id: string, name: string}>} props.logos - Array of logo text/names
 * @param {Array<{id: string, icon: React.ReactNode, title: string, description: string}>} props.features - Array of exactly 3 features
 * @returns {JSX.Element}
 */
export default function LogoStripFeatureGrid({
  eyebrow,
  logos,
  features
}) {
  return (
    <section className="border-y border-black/5 bg-white py-14" aria-labelledby="partners-heading">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h2 id="partners-heading" className="text-center font-mono text-[11px] uppercase tracking-wider text-[#4C5C54]">
          {eyebrow}
        </h2>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {logos.map((logo) => (
            <span key={logo.id} className="font-display text-lg font-bold tracking-wide text-ink-900/35">
              {logo.name}
            </span>
          ))}
        </div>
        
        {features && features.length > 0 && (
          <div className="mt-14 grid gap-6 border-t border-black/5 pt-12 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-volt">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-[#4C5C54]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
