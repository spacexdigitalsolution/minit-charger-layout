import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Custom Sections
import IndustryHero from '@/components/sections/AviationHero'; // Reusing AviationHero as IndustryHero
import PainPointsGrid from '@/components/sections/PainPointsGrid';
import CausalChainSection from '@/components/sections/CausalChainSection';
import ValuePropBand from '@/components/sections/ValuePropBand';
import SpecStoryGrid from '@/components/sections/SpecStoryGrid';
import BpmCallout from '@/components/sections/BpmCallout';
import EnvironmentCompareGrid from '@/components/sections/EnvironmentCompareGrid';

// Existing Sections
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import ProcessStepsGrid from '@/components/sections/ProcessStepsGrid';
import LeadMagnet from '@/components/sections/LeadMagnet';
import RoiCalculator from '@/components/sections/RoiCalculator';
import ResourceGuideGrid from '@/components/sections/ResourceGuideGrid';
import PillStrip from '@/components/sections/PillStrip';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactFormSection from '@/components/sections/ContactFormSection';
import RelatedProducts from '@/components/sections/RelatedProducts';
import { industryWarehouseData } from '@/data/industryWarehouseData';

export const metadata = {
  title: 'Industrial Forklift & Material Handling Chargers | Warehouse Fleet Charging — Minit Charger',
  description: 'Fast, compact DC chargers for forklifts, pallet jacks, reach trucks, and AGVs. Multi-chemistry, wall or pedestal, indoor or outdoor. End battery-swap downtime across multi-shift warehouses.',
};

export default function WarehouseManufacturingPage() {
  const data = industryWarehouseData;

  return (
    <>
      <Navbar />
      <main>
        <IndustryHero
          eyebrow={data.hero.eyebrow}
          heading={data.hero.heading}
          description={data.hero.description}
          tagsLabel={data.hero.tagsLabel}
          tags={data.hero.tags}
          proofText="Deployment count, warehouse / 3PL logos, or years-in-service line goes here once approved for this vertical."
        />

        {/* AEO Quick-Answer Block */}
        <div className="bg-white py-24 text-left">
          <div className="mx-auto max-w-[820px] px-6 lg:px-8">
            <span className="font-mono text-volt-dim uppercase tracking-widest text-xs font-bold block mb-2">{data.quickAnswer.eyebrow}</span>
            <h2 className="font-display font-bold text-2xl mb-4 text-ink-950">{data.quickAnswer.heading}</h2>
            <p className="text-[#4C5C54] text-[16.5px] leading-relaxed font-medium">{data.quickAnswer.description}</p>
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
          footerText="Every link in that chain starts with the charger. See what it's worth to break the chain — use the downtime calculator below."
        />

        <ValuePropBand
          eyebrow={data.valueProp.eyebrow}
          heading={data.valueProp.heading}
          description={data.valueProp.description}
          features={data.valueProp.features}
          primaryCta={data.valueProp.primaryCta}
          secondaryCta={{ text: "Talk to an Engineer", href: "#assessment" }}
        />

        <SpecStoryGrid
          eyebrow={data.specStory.eyebrow}
          heading={data.specStory.heading}
          description={data.specStory.description}
          cards={data.specStory.cards}
        />

        <BpmCallout
          eyebrow={data.bpmCallout.eyebrow}
          heading={data.bpmCallout.heading}
          description={data.bpmCallout.description}
          features={data.bpmCallout.features}
        />

        {/* Fleet Intelligence uses SpecStoryGrid */}
        <SpecStoryGrid
          eyebrow={data.fleetIntelligence.eyebrow}
          heading={data.fleetIntelligence.heading}
          description={data.fleetIntelligence.description}
          cards={data.fleetIntelligence.cards.map(c => ({
            title: c.title,
            description: c.description
          }))}
        />
        {/* Fleet intelligence pills */}
        <div className="bg-white pb-24 -mt-16 px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px] flex flex-wrap gap-2.5">
            {data.fleetIntelligence.features.map((feature, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.05em] uppercase bg-volt/10 text-green-900 border border-volt/30 rounded-full px-3.5 py-1.5">
                <svg className="w-3.5 h-3.5 text-volt-dim" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {feature}
              </span>
            ))}
          </div>
        </div>

        <EnvironmentCompareGrid
          eyebrow={data.environmentCompare.eyebrow}
          heading={data.environmentCompare.heading}
          leftTitle={data.environmentCompare.leftTitle}
          leftItems={data.environmentCompare.leftItems}
          rightTitle={data.environmentCompare.rightTitle}
          rightItems={data.environmentCompare.rightItems}
        />

        <TechSpecsTable
          eyebrow={data.specs.eyebrow}
          heading={data.specs.heading}
          description={data.specs.footer}
          column1Label="Capability"
          column2Label="Specification"
          specs={data.specs.items.map((item, i) => ({ id: `spec${i}`, capability: item.label, value: item.value }))}
        />

        <ProcessStepsGrid
          eyebrow={data.process.eyebrow}
          heading={data.process.heading}
          steps={data.process.steps}
        />

        <LeadMagnet
          eyebrow={data.leadMagnet.eyebrow}
          heading={data.leadMagnet.heading}
          description={data.leadMagnet.description}
          checklist={data.leadMagnet.checklist}
        />

        <RoiCalculator
          eyebrow={data.calculator.eyebrow}
          heading={data.calculator.heading}
          description={data.calculator.description}
        />


        <ResourceGuideGrid
          eyebrow={data.resources.eyebrow}
          heading={data.resources.heading}
          guides={data.resources.guides}
        />

        <PillStrip
          eyebrow={data.resources.exploreHeading}
          items={data.resources.explorePills.map(p => p.label)}
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
          heading={data.cta.heading}
          description={data.cta.description}
          primaryCta={data.cta.buttons[0]}
          secondaryCta={data.cta.buttons[1]}
        />

        <div id="assessment" className="bg-paper-dim border-b border-black/5">
          <ContactFormSection
            heading="Get a charging plan for your floor"
            description="One call. We'll size a charger fleet to your equipment mix, shift pattern, and floor layout."
            contactDetails={[]}
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
