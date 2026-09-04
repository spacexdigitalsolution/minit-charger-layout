import React from 'react';
import IndustryHero from '@/components/sections/IndustryHero';
import LogoTextStrip from '@/components/sections/LogoTextStrip';
import IndustryProseSidebar from '@/components/sections/IndustryProseSidebar';
import FeatureSplitRightImage from '@/components/sections/FeatureSplitRightImage';
import CaseStudySplit from '@/components/sections/CaseStudySplit';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import RelatedProducts from '@/components/sections/RelatedProducts';
export default function DefaultIndustryPage({ data }) {
  return (
    <main>
        <IndustryHero {...data.hero} />
        <LogoTextStrip {...data.logoStrip} />
        <IndustryProseSidebar {...data.prose} />
        <FeatureSplitRightImage {...data.challenges} />
        <CaseStudySplit {...data.spotlight} />
        <FaqAccordion {...data.faq} />
        {data.relatedProducts && (
          <RelatedProducts
            heading={data.relatedProducts.heading}
            products={data.relatedProducts.products}
            theme="light"
            columns={3}
          />
        )}
        <CtaBanner {...data.cta} />
        <ImageGalleryStrip {...data.galleryStrip} />
      </main>
  );
}
