import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DarkHeroBanner from '@/components/sections/DarkHeroBanner';
import ProseSection from '@/components/sections/ProseSection';
import BentoFeatureGrid from '@/components/sections/BentoFeatureGrid';
import IconCardsGrid from '@/components/sections/IconCardsGrid';
import ProcessStepsGrid from '@/components/sections/ProcessStepsGrid';
import SplitFeatureLight from '@/components/sections/SplitFeatureLight';
import SplitFeatureDark from '@/components/sections/SplitFeatureDark';
import TextComparisonSplit from '@/components/sections/TextComparisonSplit';
import ProductCatalogGrid from '@/components/sections/ProductCatalogGrid';
import TestimonialGridLight from '@/components/sections/TestimonialGridLight';
import FaqAccordion from '@/components/sections/FaqAccordion';
import SimpleCtaBanner from '@/components/sections/SimpleCtaBanner';
import ContactFormSection from '@/components/sections/ContactFormSection';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import { industryAviationData } from '@/data/industryAviationData';

export const metadata = {
  title: 'Electric GSE Fast Chargers for Airports | Aviation Ground Support Charging — Minit Charger',
  description: 'Outdoor-rated dual-port DC fast chargers for airport GSE — tugs, belt loaders, tow tractors, pushback units. No electrical upgrade required with BPM power sharing. Get a free charging assessment.',
};

export default function AviationIndustryPage() {
  const data = industryAviationData;

  return (
    <>
      <Navbar />
      <main>
        <DarkHeroBanner 
          heading={data.hero.heading}
          description={data.hero.description}
          imageSrc={data.hero.imageSrc}
          imageAlt={data.hero.imageAlt}
          imageDescription={data.hero.imageDescription}
          primaryCta={data.hero.primaryCta}
          secondaryCta={data.hero.secondaryCta}
        />
        
        {/* We place the Contact Form here since we couldn't embed it perfectly inline in the Hero without a custom component */}
        <div id="assessment" className="bg-paper-dim py-12 border-b border-black/5">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
            <h2 className="text-3xl font-display font-semibold mb-2">Get a charging plan for your ramp</h2>
            <p className="text-mist-dark mb-8">One call. We&apos;ll size a charger fleet to your GSE mix and your existing power feed.</p>
            {/* The standard contact form provides the inputs we need. */}
            <ContactFormSection contactDetails={[]} />
          </div>
        </div>

        <div className="bg-white py-16 text-center">
          <div className="mx-auto max-w-[820px] px-6 lg:px-8">
             <span className="font-mono text-volt-dim uppercase tracking-widest text-xs font-bold block mb-2">{data.quickAnswer.eyebrow}</span>
             <h2 className="font-display font-bold text-3xl mb-4">{data.quickAnswer.heading}</h2>
             <p className="text-[#4C5C54] text-lg leading-relaxed">{data.quickAnswer.description}</p>
          </div>
        </div>

        <IconCardsGrid 
          id="pain-points"
          eyebrow={data.painPoints.eyebrow}
          heading={data.painPoints.heading}
          description={data.painPoints.description}
          cards={data.painPoints.cards}
        />

        <ProcessStepsGrid 
          eyebrow={data.causalChain.eyebrow}
          heading={data.causalChain.heading}
          description="Every link in that chain starts with the charger. See what it's worth to break the chain — use the ramp downtime calculator below."
          steps={data.causalChain.steps.map((s, i) => ({ ...s, number: `0${i+1}` }))}
        />

        <SplitFeatureLight 
          eyebrow={data.valueProp.eyebrow}
          heading={data.valueProp.heading}
          description={data.valueProp.description}
          features={data.valueProp.features.map((f, i) => ({ id: `vf${i}`, text: f }))}
          imageSrc={data.valueProp.imageSrc}
          imageAlt={data.valueProp.imageAlt}
          imageDescription={data.valueProp.imageDescription}
          primaryCta={data.valueProp.primaryCta}
        />

        <SplitFeatureDark 
          eyebrow={data.bpmCallout.eyebrow}
          heading={data.bpmCallout.heading}
          description={data.bpmCallout.description}
          features={data.bpmCallout.features.map((f, i) => ({ id: `bf${i}`, text: f }))}
          imageSrc={data.bpmCallout.imageSrc}
          imageAlt={data.bpmCallout.imageAlt}
          imageDescription={data.bpmCallout.imageDescription}
          primaryCta={{ text: "Ask About BPM for Your Ramp", href: "#assessment" }}
        />

        <IconCardsGrid 
          eyebrow={data.fleetIntelligence.eyebrow}
          heading={data.fleetIntelligence.heading}
          description={data.fleetIntelligence.description}
          cards={data.fleetIntelligence.cards}
        />

        <TextComparisonSplit 
          eyebrow={data.rampVsHangar.eyebrow}
          heading={data.rampVsHangar.heading}
          leftTitle={data.rampVsHangar.leftTitle}
          leftItems={data.rampVsHangar.leftItems}
          rightTitle={data.rampVsHangar.rightTitle}
          rightItems={data.rampVsHangar.rightItems}
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

        {/* Lead Magnet Block */}
        <section className="bg-ink-950 py-24 text-white">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-volt uppercase tracking-widest text-xs font-bold block mb-2">{data.leadMagnet.eyebrow}</span>
              <h2 className="font-display font-bold text-4xl mb-4">{data.leadMagnet.heading}</h2>
              <p className="text-mist text-lg leading-relaxed mb-6">{data.leadMagnet.description}</p>
              <ul className="space-y-4">
                {data.leadMagnet.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-mist">
                    <svg className="w-5 h-5 text-volt flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink-900 border border-white/10 rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-white">Send Me the Guide</h3>
              <ContactFormSection contactDetails={[]} />
            </div>
          </div>
        </section>

        {/* ROI Calculator Block */}
        <section className="bg-paper-dim py-24 border-y border-black/5" id="calculator">
          <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="font-mono text-volt-dim uppercase tracking-widest text-xs font-bold block mb-2">{data.calculator.eyebrow}</span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink-950 mb-4">{data.calculator.heading}</h2>
              <p className="text-[#4C5C54] text-lg leading-relaxed">{data.calculator.description}</p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_24px_60px_-30px_rgba(11,20,15,0.45)] ring-1 ring-black/5 max-w-4xl mx-auto text-center">
               <h3 className="text-2xl font-display font-bold mb-6">Interactive Calculator</h3>
               <p className="text-mist-dark mb-8">Talk to an engineer for a tailored estimate specific to your ramp.</p>
               <a href="#assessment" className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-[26px] py-[14px] rounded-full bg-volt text-ink-950 hover:bg-volt-dark transition-colors">
                 Get My Tailored Estimate
               </a>
            </div>
          </div>
        </section>

        {/* Growth Path */}
        <ProductCatalogGrid 
          eyebrow={data.growthPath.eyebrow}
          heading={data.growthPath.heading}
          description={data.growthPath.description}
          products={data.growthPath.cards}
        />

        <TestimonialGridLight 
          heading={data.testimonials.heading}
          testimonials={data.testimonials.testimonials}
        />

        <FaqAccordion 
          heading={data.faq.heading}
          description={data.faq.description}
          faqs={data.faq.items}
        />

        <SimpleCtaBanner 
          heading={data.cta.heading}
          description={data.cta.description}
          buttons={data.cta.buttons}
        />

      </main>
      <Footer />
    </>
  );
}
