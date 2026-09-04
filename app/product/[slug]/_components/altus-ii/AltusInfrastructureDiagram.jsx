import React from 'react';

export default function AltusInfrastructureDiagram({ data }) {
  const getIcon = (name) => {
    switch (name) {
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'monitor':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'cpu':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-[88px] bg-paper-dim max-md:py-[56px]" id="integration">
      <div className="container mx-auto max-w-[1180px] px-6">
        
        <div className="max-w-[680px] mb-[44px]">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-volt-dim">
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[50px] items-center">
          
          <div>
            <div className="mt-[22px] flex flex-col gap-4">
              {data.features.map((feature, idx) => (
                <div key={idx} className="flex gap-[14px] items-start">
                  {getIcon(feature.icon)}
                  <div>
                    <div className="font-bold text-[15px]">{feature.title}</div>
                    <div className="mt-[3px] text-[14px] text-[#5B6A5C]">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-[14px] flex-wrap mt-[30px]">
              <a href="#assessment" className="inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] px-[26px] py-[14px] rounded-full transition-all bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] shadow-volt hover:brightness-110 hover:-translate-y-[1px]">
                Request Electrical Spec Package
              </a>
            </div>
          </div>

          <div className="bg-ink-950 rounded-[26px] p-[26px] border border-white/10">
            <svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
              <rect x="16" y="145" width="120" height="60" rx="6" fill="none" stroke="#3FBE6C" strokeWidth="1.6" />
              <text x="76" y="171" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#e6ede7">RAMP FEED</text>
              <text x="76" y="187" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#9FB2A5">208–480 VAC 3Ø</text>
              
              <line x1="136" y1="175" x2="230" y2="175" stroke="#3FBE6C" strokeWidth="2" />
              <polygon points="230,170 240,175 230,180" fill="#3FBE6C" />
              
              <rect x="240" y="125" width="150" height="110" rx="8" fill="#16261D" stroke="#3FBE6C" strokeWidth="1.8" />
              <text x="315" y="163" textAnchor="middle" fontFamily="Big Shoulders Display, sans-serif" fontWeight="700" fontSize="19" fill="#fff">ALTUS II</text>
              <text x="315" y="183" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#9FB2A5">30–80kW · DUAL PORT</text>
              <text x="315" y="217" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" fill="#E2A03D">ON-SCREEN DIAGNOSTICS</text>
              
              <path d="M390 150 C 440 150, 440 90, 490 90" stroke="#3FBE6C" strokeWidth="2" fill="none" />
              <polygon points="484,86 495,90 484,94" fill="#3FBE6C" />
              <path d="M390 210 C 440 210, 440 270, 490 270" stroke="#3FBE6C" strokeWidth="2" fill="none" />
              <polygon points="484,266 495,270 484,274" fill="#3FBE6C" />
              
              <rect x="495" y="60" width="130" height="60" rx="6" fill="none" stroke="#3FBE6C" strokeWidth="1.6" />
              <text x="560" y="86" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#e6ede7">GSE PORT 1</text>
              <text x="560" y="102" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Anderson / Euro / REMA</text>
              
              <rect x="495" y="240" width="130" height="60" rx="6" fill="none" stroke="#3FBE6C" strokeWidth="1.6" />
              <text x="560" y="266" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#e6ede7">GSE PORT 2</text>
              <text x="560" y="282" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Anderson / Euro / REMA</text>
              
              <path d="M315 125 L 315 40 L 210 40" stroke="#E2A03D" strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
              <rect x="60" y="15" width="150" height="50" rx="6" fill="none" stroke="#E2A03D" strokeWidth="1.4" strokeDasharray="5 4" />
              <text x="135" y="36" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#E2A03D">AIRPORT SYSTEMS</text>
              <text x="135" y="50" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Ops &amp; maintenance</text>
              
              <path d="M315 235 L 315 320 L 210 320" stroke="#E2A03D" strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
              <rect x="60" y="295" width="150" height="50" rx="6" fill="none" stroke="#E2A03D" strokeWidth="1.4" strokeDasharray="5 4" />
              <text x="135" y="316" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#E2A03D">ASSETPRO 360</text>
              <text x="135" y="330" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Charge history + billing data</text>
            </svg>
            <div className="flex gap-[22px] flex-wrap mt-4 font-mono text-[11px] text-[#9FB2A5]">
              <span className="inline-flex items-center gap-2">
                <span className="w-5 h-[2px] bg-volt-dim inline-block"></span> Power path
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-5 h-0 border-t-2 border-dashed border-copper inline-block"></span> Data / control path
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
