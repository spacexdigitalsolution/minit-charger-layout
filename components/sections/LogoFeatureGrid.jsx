import React from 'react';

/**
 * LogoFeatureGrid Component
 * 
 * Strip of logos followed by a 3-column feature grid.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.logoLabel - Label for logos
 * @param {Array<string>} props.logos - Array of brand names
 * @param {Array<{id: string, title: string, description: string, icon: JSX.Element}>} props.features - Array of features
 * @returns {JSX.Element}
 */
export default function LogoFeatureGrid({
  id,
  logoLabel,
  logos,
  features
}) {
  return (
    <section className="border-y border-black/5 bg-white py-14" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <p className="font-mono text-center text-[11px] uppercase tracking-wider text-[#4C5C54]">
          {logoLabel}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-10 opacity-60 grayscale lg:gap-16">
          {logos.map((logo, idx) => (
            <span key={idx} className="font-display text-xl font-bold">{logo}</span>
          ))}
        </div>
        
        {features && features.length > 0 && (
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id}>
                <div className="h-8 w-8 text-volt-dim [&>svg]:w-full [&>svg]:h-full">
                  {feature.icon}
                </div>
                <h3 className="font-display mt-4 font-semibold text-ink-950">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#4C5C54]">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
