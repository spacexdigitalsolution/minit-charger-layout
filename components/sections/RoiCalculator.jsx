'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

/**
 * RoiCalculator Component
 * 
 * Interactive ROI Calculator section. Uses client-side state.
 */
export default function RoiCalculator({ eyebrow, heading, description }) {
  const [vehicles, setVehicles] = useState(12);
  const [hours, setHours] = useState(6);
  const [cost, setCost] = useState(150);

  const [weekly, setWeekly] = useState(0);
  const [yearly, setYearly] = useState(0);

  useEffect(() => {
    // Illustrative model: downtime hours/week * hourly delay cost,
    // scaled lightly by fleet size to reflect more vehicles competing for fewer working chargers.
    const scale = Math.max(1, vehicles / 12);
    const w = hours * cost * scale;
    const y = w * 52;
    setWeekly(w);
    setYearly(y);
  }, [vehicles, hours, cost]);

  const formatCurrency = (val) => {
    return '$' + Math.round(val).toLocaleString('en-US');
  };

  return (
    <section className="bg-white py-24" id="calculator">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.08em] text-volt-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_0_4px_rgba(92,242,160,0.35)]"></span>
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-ink-950">
            {heading}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#4C5C54]">
            {description}
          </p>
        </div>

        <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-md p-8 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <label className="flex justify-between text-[13.5px] font-semibold text-ink-950 mb-4">
                  GSE vehicles charged daily <span className="font-mono font-bold text-volt-dim">{vehicles}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="80"
                  value={vehicles}
                  onChange={(e) => setVehicles(parseInt(e.target.value, 10))}
                  className="w-full accent-volt h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="mb-8">
                <label className="flex justify-between text-[13.5px] font-semibold text-ink-950 mb-4">
                  Avg. charger downtime (hrs / week) <span className="font-mono font-bold text-volt-dim">{hours}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value, 10))}
                  className="w-full accent-volt h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label className="flex justify-between text-[13.5px] font-semibold text-ink-950 mb-4">
                  Estimated cost per delayed turn ($/hr) <span className="font-mono font-bold text-volt-dim">{cost}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={cost}
                  onChange={(e) => setCost(parseInt(e.target.value, 10))}
                  className="w-full accent-volt h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-ink-950 p-8 text-white flex flex-col justify-center">
              <div className="flex justify-between items-baseline py-4 border-b border-white/10">
                <span className="text-[13.5px] text-mist-dark">Estimated weekly cost of downtime</span>
                <span className="font-mono text-2xl font-semibold text-amber">{formatCurrency(weekly)}</span>
              </div>
              <div className="flex justify-between items-baseline py-4 border-b border-white/10">
                <span className="text-[13.5px] text-mist-dark">Estimated annual cost of downtime</span>
                <span className="font-mono text-[32px] font-semibold text-volt">{formatCurrency(yearly)}</span>
              </div>
              <div className="mt-6 text-xs text-mist-dark leading-relaxed">
                Illustrative estimate based on the figures you enter, for discussion purposes only — not a guaranteed savings figure. Talk to an engineer for a plan specific to your ramp.
              </div>
              <div className="mt-8">
                <Button href="#assessment" variant="primary" className="w-full">
                  Get My Tailored Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
