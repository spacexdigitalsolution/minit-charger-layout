/**
 * ServiceAreaContactStrip Section Component
 * 
 * Reusable section featuring a centered text block for service area
 * or general contact information.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {string} props.contactInfo - Small text containing contact details
 * @returns {JSX.Element}
 */
export default function ServiceAreaContactStrip({
  id,
  heading,
  description,
  contactInfo
}) {
  return (
    <section className="bg-paper-dim py-20" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[17px] leading-relaxed text-[#4C5C54]">
          {description}
        </p>
        <p className="mt-6 font-mono text-sm text-volt-dim">
          {contactInfo}
        </p>
      </div>
    </section>
  );
}
