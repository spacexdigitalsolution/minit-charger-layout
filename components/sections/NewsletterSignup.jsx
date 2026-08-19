import React from 'react';

/**
 * NewsletterSignup Component
 * 
 * Renders a centered dark section with a newsletter subscription form.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.buttonText - Button text
 * @returns {JSX.Element}
 */
export default function NewsletterSignup({
  id,
  heading,
  description,
  placeholder,
  buttonText
}) {
  return (
    <section className="bg-ink-950 py-24 text-center" id={id}>
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-white">{heading}</h2>
        <p className="mt-4 text-mist">{description}</p>
        <form className="mt-8 flex max-w-md mx-auto" action="#" method="POST">
          <input 
            type="email" 
            placeholder={placeholder} 
            className="w-full min-w-0 flex-auto rounded-l-full border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-mist/50 focus:border-volt focus:outline-none" 
            required 
          />
          <button 
            type="submit" 
            className="rounded-r-full bg-volt px-6 py-3 text-sm font-semibold text-[#04150C] transition hover:brightness-110 shrink-0"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
