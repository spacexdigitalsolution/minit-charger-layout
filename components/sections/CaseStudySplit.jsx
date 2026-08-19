import React from 'react';
import SmartImage from '../ui/SmartImage';

/**
 * CaseStudySplit Component
 * 
 * Renders a dark asymmetric section with an image on the left and a featured case study on the right.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.eyebrow - Eyebrow text
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {Array<{label: string, value: string}>} [props.stats] - Array of stat tags
 * @param {string} props.imageSrc - Case study image source
 * @param {string} props.imageAlt - Case study image alt text
 * @param {string} [props.imageDescription] - Description for placeholder
 * @returns {JSX.Element}
 */
export default function CaseStudySplit({
  id,
  eyebrow,
  heading,
  description,
  stats,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="relative grid min-h-[560px] bg-ink-950 lg:grid-cols-2" id={id}>
      <div className="relative flex items-center justify-center bg-[radial-gradient(circle_at_center,_#235a3c,_#0b1712)] p-12 lg:p-24">
        <div className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-white/10 h-64 lg:h-96 bg-[#f0f0f0] overflow-hidden">
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            description={imageDescription || imageAlt}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-12 lg:p-24 text-white">
        <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-lg leading-relaxed text-mist">
          {description}
        </p>
        {stats && stats.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat, idx) => (
              <span key={idx} className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">
                <span className="mr-1">{stat.value}</span> {stat.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
