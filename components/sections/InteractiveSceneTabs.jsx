'use client';

import { useState } from 'react';

/**
 * InteractiveSceneTabs Section Component
 * 
 * Highly custom SVG cutaways with React tab switching (Warehouse vs Airport).
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text above the heading
 * @param {React.ReactNode} props.heading - Main section heading
 * @param {string} props.description - Paragraph description below heading
 * @param {React.ReactNode} props.warehouseScene - SVG or content for the warehouse scene
 * @param {string} props.warehouseCaption - Caption for the warehouse scene
 * @param {React.ReactNode} props.airportScene - SVG or content for the airport scene
 * @param {string} props.airportCaption - Caption for the airport scene
 * @returns {JSX.Element}
 */
export default function InteractiveSceneTabs({
  id,
  eyebrow,
  heading,
  description,
  warehouseScene,
  warehouseCaption,
  airportScene,
  airportCaption
}) {
  const [activeTab, setActiveTab] = useState('warehouse');

  return (
    <section className="bg-paper py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-mono mb-4 text-[11px] uppercase tracking-wider text-volt-dim">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
          <p className="mt-4 text-[#4C5C54] max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10" role="tablist" aria-label="Environment">
          <button
            className={`rounded-full px-8 py-3 text-sm font-bold transition shadow-sm ${
              activeTab === 'warehouse' 
                ? 'bg-ink-950 text-white' 
                : 'bg-white text-ink-950 hover:bg-gray-50 border border-black/10'
            }`}
            role="tab"
            aria-selected={activeTab === 'warehouse'}
            onClick={() => setActiveTab('warehouse')}
          >
            Warehouse
          </button>
          <button
            className={`rounded-full px-8 py-3 text-sm font-bold transition shadow-sm ${
              activeTab === 'airport' 
                ? 'bg-ink-950 text-white' 
                : 'bg-white text-ink-950 hover:bg-gray-50 border border-black/10'
            }`}
            role="tab"
            aria-selected={activeTab === 'airport'}
            onClick={() => setActiveTab('airport')}
          >
            Airport
          </button>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* WAREHOUSE SCENE */}
          <figure
            className={`transition-opacity duration-500 ${activeTab === 'warehouse' ? 'block opacity-100' : 'hidden opacity-0'}`}
            data-scene="warehouse"
          >
            {warehouseScene}
            <figcaption className="mt-6 text-center text-sm font-medium text-[#4C5C54] italic max-w-3xl mx-auto">
              {warehouseCaption}
            </figcaption>
          </figure>

          {/* AIRPORT SCENE */}
          <figure
            className={`transition-opacity duration-500 ${activeTab === 'airport' ? 'block opacity-100' : 'hidden opacity-0'}`}
            data-scene="airport"
          >
            {airportScene}
            <figcaption className="mt-6 text-center text-sm font-medium text-[#4C5C54] italic max-w-3xl mx-auto">
              {airportCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
