import Link from 'next/link';

/**
 * ContactCtaSection Component
 * 
 * Dark section for simple legal contact CTA.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {React.ReactNode} props.heading - Heading
 * @param {string} props.description - Description
 * @param {Object} props.cta - Button {text, href}
 * @returns {JSX.Element}
 */
export default function ContactCtaSection({
  id,
  heading,
  description,
  cta
}) {
  return (
    <section className="bg-ink-950 py-24 text-center text-white" id={id}>
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <h2 className="font-display font-semibold text-3xl">{heading}</h2>
        <p className="mt-4 text-mist text-lg">{description}</p>
        <div className="mt-8">
          <Link href={cta.href} className="inline-flex rounded-full bg-volt px-8 py-3.5 text-sm font-bold text-[#04150C] transition hover:brightness-110">
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
