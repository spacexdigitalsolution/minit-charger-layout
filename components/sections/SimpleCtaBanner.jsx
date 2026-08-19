import React from 'react';
import Button from '../ui/Button';

/**
 * SimpleCtaBanner Component
 * 
 * Centered CTA banner on a primary brand color background (e.g., bg-volt).
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {Array<{id: string, text: string, href: string, variant?: 'primary'|'secondary'|'outline'}>} props.buttons - Buttons
 * @returns {JSX.Element}
 */
export default function SimpleCtaBanner({
  id,
  heading,
  description,
  buttons
}) {
  return (
    <section className="relative overflow-hidden bg-volt" id={id}>
      <div className="relative mx-auto max-w-[1240px] px-6 py-20 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-ink-800">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="mt-8 flex justify-center gap-4">
            {buttons.map((btn) => (
              <Button key={btn.id} href={btn.href} variant={btn.variant || 'primary'}>
                {btn.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
