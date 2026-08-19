import React from 'react';

/**
 * LegalProseSection Component
 * 
 * Standard text section for long-form legal content.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.heading - Heading
 * @param {React.ReactNode} props.content - Content (HTML/JSX)
 * @param {boolean} [props.alternateBg=false] - Whether to use the alternate background color
 * @returns {JSX.Element}
 */
export default function LegalProseSection({
  id,
  heading,
  content,
  alternateBg = false
}) {
  return (
    <section className={`${alternateBg ? 'bg-paper-dim' : 'bg-white'} py-16 border-b border-black/5`} id={id}>
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <div className="prose prose-lg prose-green max-w-none text-[#4C5C54]">
          <h2 className="font-display font-semibold text-2xl text-ink-950">{heading}</h2>
          {content}
        </div>
      </div>
    </section>
  );
}
