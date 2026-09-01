import React from 'react';

/**
 * TextHero Component
 * 
 * Simple text-based hero for legal/text-heavy pages.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.title - Title
 * @param {string} props.subtitle - Subtitle / Date
 * @returns {JSX.Element}
 */
export default function TextHero({
  id,
  title,
  subtitle
}) {
  return (
    <section className="bg-paper border-b border-black/5 py-24 text-center" id={id}>
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-ink-950">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm text-ink-600 font-mono uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
