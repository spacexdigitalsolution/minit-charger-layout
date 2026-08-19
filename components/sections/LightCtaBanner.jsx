import Button from '../ui/Button';

/**
 * LightCtaBanner Component
 * 
 * Simple centered CTA banner with a white/light background.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {Object} props.cta - Call to action button {text, href}
 * @returns {JSX.Element}
 */
export default function LightCtaBanner({
  id,
  heading,
  description,
  cta
}) {
  return (
    <section className="bg-white py-20 text-center border-t border-black/5" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink-950">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-[#4C5C54]">
          {description}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={cta.href} variant="dark">
            {cta.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
