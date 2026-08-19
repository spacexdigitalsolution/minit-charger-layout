import React from 'react';

/**
 * AddressesGrid Component
 * 
 * Renders a grid of addresses with a top heading.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {Array<{id: string, title: string, lines: string[]}>} props.addresses
 * @returns {JSX.Element}
 */
export default function AddressesGrid({
  id,
  heading,
  addresses
}) {
  return (
    <section className="bg-paper-dim py-24 border-b border-black/5" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink-950 mb-12">
          {heading}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white p-8 rounded-3xl ring-1 ring-black/5">
              <h3 className="font-display font-semibold text-xl text-ink-950">{address.title}</h3>
              <address className="not-italic mt-4 text-[#4C5C54] text-sm leading-loose">
                {address.lines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < address.lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </address>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
