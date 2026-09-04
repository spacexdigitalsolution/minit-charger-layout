import React from 'react';
import DurusSpotlightBanner from './DurusSpotlightBanner';
import DurusVenueGrid from './DurusVenueGrid';
import DurusModesGrid from './DurusModesGrid';
import DurusVideoShowcase from './DurusVideoShowcase';
import DurusPainPoints from './DurusPainPoints';
import DurusValueProp from './DurusValueProp';
import DurusFeatureList from './DurusFeatureList';
import DurusChargingFactors from './DurusChargingFactors';
import DurusTrustBadges from './DurusTrustBadges';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import RelatedProducts from '@/components/sections/RelatedProducts';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';

export default function DurusPage({ data }) {
  // Format specs for the generic TechSpecsTable component
  const formattedSpecs = data.specs.items.map((spec, index) => ({
    id: `spec-${index}`,
    capability: spec.label,
    value: spec.value
  }));

  // Format FAQs for the generic FaqAccordion component
  const formattedFaqs = data.faq.items.map((faq, index) => ({
    id: `faq-${index}`,
    question: faq.q,
    answer: faq.a,
    isOpen: index === 0
  }));

  return (
    <main>
      <DurusSpotlightBanner data={data.heroBanner} />
      
      {/* Quick Answer section integrated directly as it's small */}
      <section className="py-16">
        <div className="mx-auto max-w-[820px] px-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase text-green-deep before:content-[''] before:w-4 before:h-0.5 before:bg-amber before:inline-block">
            {data.shortAnswer.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[23px] mt-3">
            {data.shortAnswer.heading}
          </h2>
          <p className="mt-4 text-[16.5px] text-muted leading-relaxed">
            {data.shortAnswer.description}
          </p>
        </div>
      </section>

      <DurusVenueGrid data={data.venueGrid} />
      <DurusModesGrid data={data.modesGrid} />
      <DurusVideoShowcase data={data.videoShowcase} />
      <DurusPainPoints data={data.painPoints} />
      <DurusValueProp data={data.valueProp} />
      <DurusFeatureList data={data.featureList} />
      <DurusChargingFactors data={data.chargingFactors} />
      
      <div className="bg-panel">
        <TechSpecsTable 
          id="specs"
          eyebrow={data.specs.eyebrow}
          heading={data.specs.heading}
          column1Label="Specification"
          column2Label="Value"
          specs={formattedSpecs}
          footer={<>Need this as a shareable document? <a href={data.specs.pdfLink} className="text-green-deep font-semibold hover:underline">Download the full Durus spec sheet (PDF)</a> — <span className="text-amber-deep font-semibold">[client to confirm link, and confirm marketing status before this is distributed externally]</span>.</>}
        />
      </div>
      
      <DurusTrustBadges data={data.trustBadges} />
      
      <RelatedProducts
        heading={data.relatedProducts.heading}
        products={data.relatedProducts.products.map(p => ({
          ...p,
          id: p.title.toLowerCase()
        }))}
        theme="light"
      />
      
      <FaqAccordion
        heading={data.faq.heading}
        faqs={formattedFaqs}
      />
      
      <CtaBanner 
        heading={data.cta.heading}
        description={data.cta.description}
        primaryCta={data.cta.primaryCta}
        secondaryCta={data.cta.secondaryCta}
        contactInfo="MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
      />
    </main>
  );
}
