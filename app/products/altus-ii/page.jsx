import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import AltusTitleBanner from '@/components/sections/AltusTitleBanner';
import AltusGalleryIntro from '@/components/sections/AltusGalleryIntro';
import AltusEngineeringStrip from '@/components/sections/AltusEngineeringStrip';
import AltusQuickAnswer from '@/components/sections/AltusQuickAnswer';
import AltusPainPoints from '@/components/sections/AltusPainPoints';
import AltusValueProp from '@/components/sections/AltusValueProp';
import AltusInfrastructureDiagram from '@/components/sections/AltusInfrastructureDiagram';
import AltusFeatureDeepDive from '@/components/sections/AltusFeatureDeepDive';
import AltusCableRetractionVideo from '@/components/sections/AltusCableRetractionVideo';
import AltusUspGraphicsGrid from '@/components/sections/AltusUspGraphicsGrid';
import AltusTechSpecsTable from '@/components/sections/AltusTechSpecsTable';
import AltusTrustBand from '@/components/sections/AltusTrustBand';
import RelatedProducts from '@/components/sections/RelatedProducts';
import AltusContactForm from '@/components/sections/AltusContactForm';
import AltusFaqAccordion from '@/components/sections/AltusFaqAccordion';
import AltusFinalCta from '@/components/sections/AltusFinalCta';

import { productAltusData } from '@/data/productAltusData';

export const metadata = {
  title: 'Altus II — Outdoor DC Fast Charger for Airport GSE | Minit Charger',
  description: 'Altus II is Minit Charger\'s dual-port, outdoor-rated DC fast charger for airport ground support equipment — the everyday workhorse for tugs, belt loaders, and baggage tractors, trusted by airports worldwide.',
};

export default function AltusProductPage() {
  const data = productAltusData;

  return (
    <>
      <Navbar />
      <main>
        <AltusTitleBanner {...data.hero} />
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
      <Footer />
    </>
  );
}
