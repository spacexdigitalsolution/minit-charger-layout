import React from 'react';

/**
 * SupportRoutingGrid Component
 * 
 * Renders a center-aligned heading and a grid of cards for routing users to different support channels.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Center-aligned heading
 * @param {Array<{id: string, title: string, description: string, linkText: string, href: string}>} props.cards
 * @returns {JSX.Element}
 */
export default function SupportRoutingGrid({
  id,
  heading,
  cards
}) {
  return (
    <section className="bg-white py-24 border-b border-black/5" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-center text-ink-950 mb-16">
          {heading}
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="rounded-3xl bg-paper-dim p-8 text-center ring-1 ring-black/5">
              <h3 className="font-display text-xl font-semibold text-ink-950">{card.title}</h3>
              <p className="mt-3 text-sm text-[#4C5C54]">{card.description}</p>
              <a href={card.href} className="mt-6 inline-block font-semibold text-volt-dim hover:text-black transition">
                {card.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
