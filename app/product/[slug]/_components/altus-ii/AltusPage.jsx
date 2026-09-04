import React from 'react';
import StandardHero from '@/components/sections/StandardHero';
import AltusGalleryIntro from './AltusGalleryIntro';
import AltusEngineeringStrip from './AltusEngineeringStrip';
import AltusQuickAnswer from './AltusQuickAnswer';
import AltusPainPoints from './AltusPainPoints';
import AltusValueProp from './AltusValueProp';
import AltusInfrastructureDiagram from './AltusInfrastructureDiagram';
import AltusFeatureDeepDive from './AltusFeatureDeepDive';
import AltusCableRetractionVideo from './AltusCableRetractionVideo';
import AltusUspGraphicsGrid from './AltusUspGraphicsGrid';
import AltusTechSpecsTable from './AltusTechSpecsTable';
import AltusTrustBand from './AltusTrustBand';
import RelatedProducts from '@/components/sections/RelatedProducts';
import AltusContactForm from './AltusContactForm';
import AltusFaqAccordion from './AltusFaqAccordion';
import AltusFinalCta from './AltusFinalCta';

export default function AltusPage({ data }) {
  return (
    <main>
      <StandardHero {...data.hero} />
      <AltusGalleryIntro data={data.intro} />
      <AltusEngineeringStrip data={data.engineeringStrip} />
      <AltusQuickAnswer data={data.quickAnswer} />
      <AltusPainPoints data={data.failureModes} />
      <AltusValueProp data={data.valueProp} />
      <AltusInfrastructureDiagram data={data.infrastructure} />
      <AltusFeatureDeepDive data={data.featureDeepDive} />
      <AltusCableRetractionVideo data={data.cableVideo} />
      <AltusUspGraphicsGrid data={data.uspGraphics} />
      <AltusTechSpecsTable data={data.specs} />
      <AltusTrustBand data={data.trustBand} />
      <RelatedProducts heading={data.relatedProducts.heading} products={data.relatedProducts.products} theme="light" columns={3} />
      <AltusContactForm data={data.form} />
      <AltusFaqAccordion data={data.faq} />
      <AltusFinalCta data={data.finalCta} />
    </main>
  );
}
