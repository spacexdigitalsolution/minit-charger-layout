import React from 'react';

export default function MagnusInfrastructureDiagram({ data }) {
  const getIcon = (name) => {
    switch (name) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.1 4 4 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'battery':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M22 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'truck':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-deep flex-none mt-[2px]">
            <path d="M2 8h11v8H2zM13 11h5l4 3v2h-9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-[88px] bg-paper-dim max-md:py-[56px]" id="infrastructure">
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
            <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
              <rect x="16" y="150" width="120" height="60" rx="6" fill="none" stroke="#2C7A56" strokeWidth="1.6" />
              <text x="76" y="176" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#e6ede7">UTILITY</text>
              <text x="76" y="192" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#9FB2A5">323–530 VAC 3Ø</text>
              
              <line x1="136" y1="180" x2="230" y2="180" stroke="#2C7A56" strokeWidth="2" />
              <polygon points="230,175 240,180 230,185" fill="#2C7A56" />
              
              <rect x="240" y="130" width="150" height="110" rx="8" fill="#16261D" stroke="#2C7A56" strokeWidth="1.8" />
              <text x="315" y="168" textAnchor="middle" fontFamily="Big Shoulders Display, sans-serif" fontWeight="700" fontSize="20" fill="#fff">MAGNUS</text>
              <text x="315" y="188" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#9FB2A5">100–200kW</text>
              <text x="315" y="202" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#9FB2A5">24–1000 VDC</text>
              <text x="315" y="222" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9.5" fill="#E08A4A">CERTIFIED METER</text>
              
              <path d="M390 155 C 440 155, 440 90, 490 90" stroke="#2C7A56" strokeWidth="2" fill="none" />
              <polygon points="484,86 495,90 484,94" fill="#2C7A56" />
              <path d="M390 215 C 440 215, 440 290, 490 290" stroke="#2C7A56" strokeWidth="2" fill="none" />
              <polygon points="484,286 495,290 484,294" fill="#2C7A56" />
              
              <rect x="495" y="60" width="130" height="60" rx="6" fill="none" stroke="#2C7A56" strokeWidth="1.6" />
              <text x="560" y="86" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#e6ede7">LV GSE OUTPUT</text>
              <text x="560" y="102" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Anderson / Euro / REMA</text>
              
              <rect x="495" y="260" width="130" height="60" rx="6" fill="none" stroke="#2C7A56" strokeWidth="1.6" />
              <text x="560" y="286" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#e6ede7">HV EV OUTPUT</text>
              <text x="560" y="302" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">CCS1/CCS2/NACS/GB-T</text>
              
              <path d="M315 130 L 315 40 L 220 40" stroke="#E08A4A" strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
              <rect x="70" y="15" width="150" height="50" rx="6" fill="none" stroke="#E08A4A" strokeWidth="1.4" strokeDasharray="5 4" />
              <text x="145" y="36" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#E08A4A">SCADA / ERP / BMS</text>
              <text x="145" y="50" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Facilities data layer</text>
              
              <path d="M315 240 L 315 340 L 220 340" stroke="#E08A4A" strokeWidth="1.6" strokeDasharray="5 4" fill="none" />
              <rect x="70" y="315" width="150" height="50" rx="6" fill="none" stroke="#E08A4A" strokeWidth="1.4" strokeDasharray="5 4" />
              <text x="145" y="336" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#E08A4A">ASSETPRO 360</text>
              <text x="145" y="350" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#9FB2A5">Remote config + alerts</text>
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
