import React from 'react';
import StandardHero from '@/components/sections/StandardHero';
import MagnusGalleryIntro from './MagnusGalleryIntro';
import MagnusEngineeringStrip from './MagnusEngineeringStrip';
import MagnusQuickAnswer from './MagnusQuickAnswer';
import MagnusPainPoints from './MagnusPainPoints';
import MagnusValueProp from './MagnusValueProp';
import MagnusInfrastructureDiagram from './MagnusInfrastructureDiagram';
import MagnusSpecStoryGrid from './MagnusSpecStoryGrid';
import MagnusFeatureBanner from './MagnusFeatureBanner';
import MagnusComparisonTable from './MagnusComparisonTable';
import MagnusServiceabilityGrid from './MagnusServiceabilityGrid';
import MagnusTechSpecsTable from './MagnusTechSpecsTable';
import MagnusContactForm from './MagnusContactForm';
import MagnusFaqAccordion from './MagnusFaqAccordion';
import MagnusFinalCta from './MagnusFinalCta';
import RelatedProducts from '@/components/sections/RelatedProducts';

export default function MagnusPage({ data }) {
  return (
    <main>
      <StandardHero {...data.hero} />
      <MagnusGalleryIntro data={data.intro} />
      <MagnusEngineeringStrip data={data.engineeringStrip} />
      <MagnusQuickAnswer data={data.quickAnswer} />
      <MagnusPainPoints data={data.failureModes} />
      <MagnusValueProp data={data.valueProp} />
      <MagnusInfrastructureDiagram data={data.infrastructure} />
      <MagnusSpecStoryGrid data={data.featureDeepDive} />
      <MagnusFeatureBanner data={data.multiVehicle} />
      <MagnusComparisonTable data={data.comparison} />
      <MagnusServiceabilityGrid data={data.serviceability} />
      <MagnusTechSpecsTable data={data.specs} />
      <MagnusContactForm data={data.form} />
      <MagnusFaqAccordion data={data.faq} />
      {data.relatedProducts && (
        <RelatedProducts
          heading={data.relatedProducts.heading}
          products={data.relatedProducts.products}
          theme="dark"
          columns={3}
        />
      )}
      <MagnusFinalCta data={data.finalCta} />
    </main>
  );
}
