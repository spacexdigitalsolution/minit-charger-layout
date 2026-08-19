import React from 'react';

/**
 * QuotePullout Component
 * 
 * A large pullout quote section.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.quote - Quote text
 * @returns {JSX.Element}
 */
export default function QuotePullout({ id, quote }) {
  return (
    <section className="bg-paper-dim py-16 border-y border-black/5" id={id}>
      <div className="mx-auto max-w-[800px] px-6 lg:px-8 text-center">
        <svg className="mx-auto h-12 w-12 text-volt-dim mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h4V8h-4zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h4V8h-4z"/>
        </svg>
        <p className="font-display text-2xl font-medium leading-relaxed text-ink-950 sm:text-3xl">
          "{quote}"
        </p>
      </div>
    </section>
  );
}
