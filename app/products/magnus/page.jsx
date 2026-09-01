import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import StandardHero from '@/components/sections/StandardHero';
import MagnusGalleryIntro from '@/components/sections/MagnusGalleryIntro';
import MagnusEngineeringStrip from '@/components/sections/MagnusEngineeringStrip';
import MagnusQuickAnswer from '@/components/sections/MagnusQuickAnswer';
import MagnusPainPoints from '@/components/sections/MagnusPainPoints';
import MagnusValueProp from '@/components/sections/MagnusValueProp';
import MagnusInfrastructureDiagram from '@/components/sections/MagnusInfrastructureDiagram';
import MagnusSpecStoryGrid from '@/components/sections/MagnusSpecStoryGrid';
import MagnusFeatureBanner from '@/components/sections/MagnusFeatureBanner';
import MagnusComparisonTable from '@/components/sections/MagnusComparisonTable';
import MagnusServiceabilityGrid from '@/components/sections/MagnusServiceabilityGrid';
import MagnusTechSpecsTable from '@/components/sections/MagnusTechSpecsTable';
import MagnusContactForm from '@/components/sections/MagnusContactForm';
import MagnusFaqAccordion from '@/components/sections/MagnusFaqAccordion';
import MagnusFinalCta from '@/components/sections/MagnusFinalCta';
import RelatedProducts from '@/components/sections/RelatedProducts';

import { productMagnusData } from '@/data/productMagnusData';

export const metadata = {
  title: 'Magnus — Universal Mixed-Fleet DC Fast Charger | Minit Charger',
  description: 'Magnus charges GSE, buses, trucks, and passenger EVs from one platform — 100–200 kW, 24–1000 VDC, SCADA/ERP integration, certified metering, and intelligent power sharing.',
};

export default function MagnusProductPage() {
  const data = productMagnusData;

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
