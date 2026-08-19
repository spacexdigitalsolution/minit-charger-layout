/**
 * ContactFormSection Section Component
 * 
 * Reusable section featuring contact information and a lead form.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {Array<{id: string, icon: React.ReactNode, content: React.ReactNode}>} props.contactDetails - Array of contact detail objects
 * @returns {JSX.Element}
 */
export default function ContactFormSection({
  id,
  heading,
  description,
  contactDetails
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8" id={id}>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-[#4C5C54]">
            {description}
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {contactDetails.map((detail) => (
              <li key={detail.id} className="flex gap-3">
                <span className="mt-0.5 h-5 w-5 text-volt-dim flex-shrink-0">
                  {detail.icon}
                </span>
                <span>{detail.content}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8" action="#" method="post">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">Name
              <input type="text" name="name" required
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-volt-dim" />
            </label>
            <label className="block text-sm font-medium">Company
              <input type="text" name="company"
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-volt-dim" />
            </label>
            <label className="block text-sm font-medium">Email
              <input type="email" name="email" required
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-volt-dim" />
            </label>
            <label className="block text-sm font-medium">Phone
              <input type="tel" name="phone"
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-volt-dim" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium">How can we help?
            <textarea name="message" rows="4"
              className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-volt-dim"></textarea>
          </label>
          <button type="submit"
            className="mt-6 w-full rounded-full bg-gradient-to-b from-[#6BFFB1] to-volt py-3.5 text-sm font-semibold text-[#04150C] shadow-volt hover:opacity-90 transition">
            Submit quote request
          </button>
        </form>
      </div>
    </section>
  );
}
