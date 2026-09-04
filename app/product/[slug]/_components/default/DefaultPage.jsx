import React from 'react';
import StandardHero from '@/components/sections/StandardHero';
import SplitFeatureLight from '@/components/sections/SplitFeatureLight';
import VideoSpotlight from '@/components/sections/VideoSpotlight';
import BentoFeatureGrid from '@/components/sections/BentoFeatureGrid';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FaqAccordion from '@/components/sections/FaqAccordion';
import RelatedProducts from '@/components/sections/RelatedProducts';
import AltusEngineeringStrip from '../altus-ii/AltusEngineeringStrip';
import AltusQuickAnswer from '../altus-ii/AltusQuickAnswer';
import PainPointsGrid from '@/components/sections/PainPointsGrid';
import MagnusGalleryIntro from '../magnus/MagnusGalleryIntro';
import AltusValueProp from '../altus-ii/AltusValueProp';
import PillStrip from '@/components/sections/PillStrip';
import SpecStoryGrid from '@/components/sections/SpecStoryGrid';
import CtaBanner from '@/components/sections/CtaBanner';

export default function DefaultPage({ data }) {
  return (
    <main>
      {data.hero && <StandardHero {...data.hero} />}
      {data.intro && <MagnusGalleryIntro data={data.intro} />}
      {data.engineeringStrip && <AltusEngineeringStrip data={data.engineeringStrip} />}
      {data.inShort && <AltusQuickAnswer data={data.inShort} />}
      {data.painPoints && <PainPointsGrid {...data.painPoints} />}
      {data.valueProp && <AltusValueProp data={data.valueProp} />}
      {data.targetIndustries && <PillStrip {...data.targetIndustries} />}
      {data.specStory && <SpecStoryGrid {...data.specStory} />}
      {data.demo && <SplitFeatureLight {...data.demo} />}
      {data.outdoor && <SplitFeatureLight {...data.outdoor} />}
      {data.installPhoto && <SplitFeatureLight {...data.installPhoto} />}
      {data.videoSpotlight && <VideoSpotlight {...data.videoSpotlight} />}
      {data.bentoFeatures && <BentoFeatureGrid {...data.bentoFeatures} />}
      {data.specs && <TechSpecsTable {...data.specs} />}
      {data.comparison && <ComparisonTable {...data.comparison} />}
      {data.faq && <FaqAccordion {...data.faq} />}
      {data.relatedProducts && (
        <RelatedProducts
          eyebrow={data.relatedProducts.eyebrow}
          heading={data.relatedProducts.heading}
          products={data.relatedProducts.products}
          theme="light"
          columns={3}
        />
      )}
      {data.finalCta && (
        <CtaBanner
          heading={data.finalCta.heading}
          description={data.finalCta.description}
          primaryCta={data.finalCta.cta}
          secondaryCta={data.finalCta.datasheetCta}
          contactText={data.finalCta.contact}
        />
      )}
    </main>
  );
}
