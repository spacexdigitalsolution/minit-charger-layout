"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

export default function ProductCatalogList({
  eyebrow,
  heading,
  description,
  industries
}) {
  const [activeTabId, setActiveTabId] = useState(industries?.[0]?.id || null);

  const activeIndustry = industries?.find((ind) => ind.id === activeTabId) || industries?.[0];

  return (
    <section className="bg-paper py-24" id="products">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          {eyebrow && (
            <p className="font-mono mb-4 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-green-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_0_4px_rgba(46,153,85,0.25)]"></span>
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-[#4C5C54]">
              {description}
            </p>
          )}
        </div>

        {industries && industries.length > 0 && (
          <div className="mb-10 border-b border-black/10">
            <nav className="-mb-px flex space-x-8 overflow-x-auto pb-4" aria-label="Tabs">
              {industries.map((industry) => {
                const isActive = activeTabId === industry.id;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveTabId(industry.id)}
                    className={`whitespace-nowrap px-1 pb-4 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'border-b-2 border-volt text-ink-950'
                        : 'border-b-2 border-transparent text-[#4C5C54] hover:border-black/20 hover:text-ink-900'
                    }`}
                  >
                    {industry.name}
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeIndustry?.products?.map((product) => (
            <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/3] bg-panel flex items-center justify-center p-6 border-b border-black/5 relative overflow-hidden">
                <SmartImage
                  src={product.imageSrc}
                  alt={product.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-volt-dim/10 px-2.5 py-0.5 text-xs font-semibold text-ink">
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink-950">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-[#4C5C54] line-clamp-3 mb-6">
                  {product.description}
                </p>
                
                <Link
                  href={product.href || '#'}
                  className="mt-auto inline-flex items-center text-sm font-bold text-green-deep hover:text-green-bright group-hover:underline"
                >
                  View details
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
