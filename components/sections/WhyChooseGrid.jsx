import React from 'react';

/**
 * WhyChooseGrid Component
 * 
 * Grid of features explaining why to choose the product/company.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, title: string, description: string, icon: JSX.Element}>} props.features - Array of features
 * @returns {JSX.Element}
 */
export default function WhyChooseGrid({
  id,
  eyebrow,
  heading,
  features
}) {
  return (
    <section className="bg-white py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="font-mono mb-4 text-xs uppercase tracking-[0.08em] text-volt-dim font-bold">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="rounded-3xl bg-paper-dim p-8 ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-volt-dim mb-6 shadow-sm [&>svg]:w-6 [&>svg]:h-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-950">{feature.title}</h3>
              <p className="mt-3 text-sm text-[#4C5C54] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
