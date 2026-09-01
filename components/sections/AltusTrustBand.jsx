import React from 'react';

export default function AltusTrustBand({ data }) {
  const getIcon = (name) => {
    switch (name) {
      case 'globe':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-bright">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 'battery':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-bright">
            <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M22 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px] text-green-bright">
            <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-[60px] max-md:py-[40px] bg-paper">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="border-2 border-green-deep rounded-[26px] p-[40px_30px] bg-ink-950 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.cards.map((card, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-[60px] h-[60px] rounded-full bg-green-deep/20 flex items-center justify-center mb-4">
                  {getIcon(card.icon)}
                </div>
                <h4 className="font-display font-bold text-[20px] text-white">
                  {card.title}
                </h4>
                <p className="mt-2 text-[15px] text-[#9FB2A5]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
