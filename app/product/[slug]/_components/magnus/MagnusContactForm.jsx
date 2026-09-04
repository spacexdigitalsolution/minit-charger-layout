import React from 'react';

export default function MagnusContactForm({ data }) {
  return (
    <section className="py-[88px] max-md:py-[56px]" id="assessment">
      <div className="container mx-auto max-w-[720px] px-6">
        <div className="mx-auto mb-[30px] text-center max-w-[680px]">
          <span className="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
            <span className="inline-block w-4 h-[2px] bg-copper"></span>
            {data.eyebrow}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-display font-bold text-ink-950 mt-3.5 leading-[1.02]">
            {data.heading}
          </h2>
          <p className="mt-4 text-[17px] text-[#5B6A5C]">
            {data.description}
          </p>
        </div>
        
        <form className="bg-white border border-[#D7DECB] rounded-[26px] p-[30px] shadow-[0_24px_60px_-30px_rgba(11,20,15,0.45)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            <div>
              <label htmlFor="q-name" className="block text-[12px] font-semibold text-[#5B6A5C] mb-[6px]">
                Full name
              </label>
              <input
                id="q-name"
                type="text"
                placeholder="Your name"
                required
                className="w-full p-[12px_14px] border border-[#D7DECB] rounded-[9px] font-body text-[14.5px] focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="q-org" className="block text-[12px] font-semibold text-[#5B6A5C] mb-[6px]">
                Company / organization
              </label>
              <input
                id="q-org"
                type="text"
                placeholder="Company name"
                required
                className="w-full p-[12px_14px] border border-[#D7DECB] rounded-[9px] font-body text-[14.5px] focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-[14px]">
            <label htmlFor="q-email" className="block text-[12px] font-semibold text-[#5B6A5C] mb-[6px]">
              Work email
            </label>
            <input
              id="q-email"
              type="email"
              placeholder="you@company.com"
              required
              className="w-full p-[12px_14px] border border-[#D7DECB] rounded-[9px] font-body text-[14.5px] focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-[20px] bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] shadow-volt px-[26px] py-[14px] rounded-full font-body font-semibold text-[15px] transition-all hover:brightness-110 hover:-translate-y-[1px]"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
}
