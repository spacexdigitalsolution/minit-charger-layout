import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Custom Sections for LSV
import StandardHero from '@/components/sections/StandardHero';
import LsvOnboardAdvantage from '@/components/sections/LsvOnboardAdvantage';
import LsvProductBlurbs from '@/components/sections/LsvProductBlurbs';
import IconCardsGrid from '@/components/sections/IconCardsGrid'; // Reusing for venue grid

// Existing Sections
import PainPointsGrid from '@/components/sections/PainPointsGrid';
import CausalChainSection from '@/components/sections/CausalChainSection';
import ValuePropBand from '@/components/sections/ValuePropBand';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import ProcessStepsGrid from '@/components/sections/ProcessStepsGrid';
import LeadMagnet from '@/components/sections/LeadMagnet';
import RoiCalculator from '@/components/sections/RoiCalculator';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactFormSection from '@/components/sections/ContactFormSection';
import RelatedProducts from '@/components/sections/RelatedProducts';

import { industryLsvData } from '@/data/industryLsvData';

export const metadata = {
  title: 'Low Speed Vehicle Chargers | Golf Cart & Utility Fleet Charging — Minit Charger',
  description: 'Onboard chargers for low speed vehicles (LSV) like golf carts, campus shuttles, and utility vehicles. Stop building charging stations and start plugging in.',
};

export default function LsvPage() {
  const data = industryLsvData;

  return (
    <>
      <Navbar />
      <main>
        <StandardHero
          eyebrow={data.heroBanner.eyebrow}
          heading={
            <>
              {data.heroBanner.heading} <span className="text-volt-dim">{data.heroBanner.headingHighlight}</span>
            </>
          }
          description={data.heroBanner.description}
          bgImage={data.heroBanner.bgImage}
          primaryCta={data.heroBanner.primaryCta}
          secondaryCta={data.heroBanner.secondaryCta}
        />

        {/* Proof Strip */}
        <div className="bg-paper-dim border-b border-black/5 py-4 text-center font-mono text-[11.5px] uppercase tracking-wider text-muted font-semibold">
          <span className="text-amber mx-2">[CLIENT TO CONFIRM]</span>
          <span>Resort, campus, or municipal fleet logos and deployment count go here once approved for this vertical.</span>
        </div>

        {/* AEO Quick-Answer Block */}
        <div className="bg-white py-24 text-left">
          <div className="mx-auto max-w-[820px] px-6 lg:px-8">
            <span className="font-mono text-green-deep uppercase tracking-[0.14em] text-[11.5px] font-bold block mb-3">
              {data.shortAnswer.eyebrow}
            </span>
            <h2 className="font-display font-bold text-[24px] mb-4 text-ink">
              {data.shortAnswer.heading}
            </h2>
            <p className="text-muted text-[16.5px] leading-relaxed">
              {data.shortAnswer.description}
            </p>
          </div>
        </div>

        <PainPointsGrid
          eyebrow={data.painPoints.eyebrow}
          heading={data.painPoints.heading}
          description={data.painPoints.description}
          painPoints={data.painPoints.cards}
        />

        <CausalChainSection
          eyebrow={data.causalChain.eyebrow}
          heading={data.causalChain.heading}
          steps={data.causalChain.steps}
          footerText={data.causalChain.footerText}
        />

        <ValuePropBand
          eyebrow={data.valueProp.eyebrow}
          heading={data.valueProp.heading}
          description={data.valueProp.description}
          features={data.valueProp.chips.map(c => c.label)}
        />

        <LsvOnboardAdvantage 
          eyebrow={data.onboardAdvantage.eyebrow}
          heading={data.onboardAdvantage.heading}
          description={data.onboardAdvantage.description}
          chips={data.onboardAdvantage.chips}
          cta={data.onboardAdvantage.cta}
        />

        {/* Venue Grid uses IconCardsGrid for a similar look, but tailored mapping */}
        <div className="bg-panel">
          <IconCardsGrid
            eyebrow={data.venueGrid.eyebrow}
            heading={data.venueGrid.heading}
            cards={data.venueGrid.cards}
          />
        </div>

        <LsvProductBlurbs
          eyebrow={data.productBlurbs.eyebrow}
          heading={data.productBlurbs.heading}
          description={data.productBlurbs.description}
          cards={data.productBlurbs.cards}
        />

        <div className="bg-panel">
          <TechSpecsTable
            eyebrow={data.techSpecs.eyebrow}
            heading={data.techSpecs.heading}
            description={data.techSpecs.footerNote}
            column1Label="Capability"
            column2Label="Specification"
            specs={data.techSpecs.rows.map((row, i) => ({ id: `spec${i}`, capability: row.label, value: row.value }))}
          />
        </div>

        <ProcessStepsGrid
          eyebrow={data.processSteps.eyebrow}
          heading={data.processSteps.heading}
          steps={data.processSteps.steps}
        />

        <div id="guide">
          <LeadMagnet
            eyebrow={data.leadMagnet.eyebrow}
            heading={data.leadMagnet.heading}
            description={data.leadMagnet.description}
            checklist={data.leadMagnet.checkmarks}
          />
        </div>

        <RoiCalculator
          eyebrow={data.roiCalculator.eyebrow}
          heading={data.roiCalculator.heading}
          description={data.roiCalculator.description}
        />

        <FaqAccordion
          eyebrow={data.faq.eyebrow}
          heading={data.faq.heading}
          faqs={data.faq.questions}
        />

        {data.relatedProducts && (
          <RelatedProducts
            heading={data.relatedProducts.heading}
            products={data.relatedProducts.products}
            theme="light"
            columns={3}
          />
        )}

        <CtaBanner
          heading={data.ctaBanner.heading}
          description={data.ctaBanner.description}
          primaryCta={data.ctaBanner.primaryCta}
        />

        <div id="assessment" className="bg-paper-dim border-b border-black/5">
          <ContactFormSection
            heading={data.contactForm.heading}
            description={data.contactForm.description}
            contactDetails={[]}
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
