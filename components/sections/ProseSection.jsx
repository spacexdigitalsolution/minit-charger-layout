import React from 'react';

/**
 * ProseSection Component
 * 
 * Reusable section for rendering centered rich text/prose content.
 * Useful for legacy text blocks, privacy policies, terms, and blog posts.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.content - React nodes containing the prose (e.g. paragraphs, headings)
 * @returns {JSX.Element}
 */
export default function ProseSection({
  id,
  content
}) {
  return (
    <section className="bg-white py-24" id={id}>
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <div className="prose prose-lg prose-green max-w-none text-[#4C5C54] text-center prose-headings:text-ink-950 prose-headings:font-display prose-headings:font-semibold">
          {content}
        </div>
      </div>
    </section>
  );
}
