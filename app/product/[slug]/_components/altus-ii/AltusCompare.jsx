import React from 'react';
import Link from 'next/link';

const ArrowRight = ({ size }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default function AltusCompare({ data }) {
  return (
    <section className="bg-white py-[64px] md:py-[96px]">
      <div className="container mx-auto px-6 max-w-[1180px]">
        <h2 className="font-display font-bold text-[clamp(28px,4vw,40px)] leading-[1.02] text-text">
          {data.heading}
        </h2>
        <p className="mt-[14px] text-muted text-[17px] max-w-[54ch]">
          {data.description}
        </p>

        <div className="mt-[52px] border-t border-line">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-[1.1fr_1fr_1fr_1fr] items-center border-b border-line pb-[20px]">
            <div></div>
            {data.products.map((product, idx) => (
              <div key={idx} className={`text-center font-sans text-[22px] font-bold ${product.isCurrent ? 'text-green-deep' : 'text-text'}`}>
                {product.name}
                <span className={`block mt-[4px] font-mono text-[10.5px] tracking-[0.1em] uppercase font-semibold ${product.isCurrent ? 'text-green-deep' : 'text-muted'}`}>
                  {product.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {[
            { label: 'Best for', key: 'bestFor' },
            { label: 'Output', key: 'output' },
            { label: 'Ports', key: 'ports' },
            { label: 'Siting', key: 'siting' },
          ].map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr] gap-[6px] md:gap-0 items-center border-b border-line py-[18px] md:py-[20px] hover:bg-paper transition-colors duration-150">
              <div className="text-muted text-[13.5px]">
                {row.label}
              </div>
              {data.products.map((product, colIdx) => (
                <div key={colIdx} className="text-left md:text-center font-mono text-[14px] text-text">
                  <span className="block md:hidden font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted mb-[2px]">
                    {product.name}
                  </span>
                  {product[row.key]}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-[28px] mt-[28px] flex-wrap">
          {data.links.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className="font-sans text-[14.5px] font-semibold text-green-deep inline-flex items-center gap-[6px] hover:text-green transition-colors"
            >
              {link.text} <ArrowRight size={13} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
