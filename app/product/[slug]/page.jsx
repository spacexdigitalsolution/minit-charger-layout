import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StandardHero from '@/components/sections/StandardHero';
import SplitFeatureLight from '@/components/sections/SplitFeatureLight';
import VideoSpotlight from '@/components/sections/VideoSpotlight';
import BentoFeatureGrid from '@/components/sections/BentoFeatureGrid';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FaqAccordion from '@/components/sections/FaqAccordion';
import RelatedProducts from '@/components/sections/RelatedProducts';
import AltusEngineeringStrip from '@/components/sections/AltusEngineeringStrip';
import AltusQuickAnswer from '@/components/sections/AltusQuickAnswer';
import PainPointsGrid from '@/components/sections/PainPointsGrid';
import MagnusGalleryIntro from '@/components/sections/MagnusGalleryIntro';
import AltusValueProp from '@/components/sections/AltusValueProp';
import PillStrip from '@/components/sections/PillStrip';
import SpecStoryGrid from '@/components/sections/SpecStoryGrid';
import CtaBanner from '@/components/sections/CtaBanner';
import { productData } from '@/data/productData';

// Generates the static routes
export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = productData[resolvedParams.slug];
  if (!data) return { title: 'Product Not Found' };

  return {
    title: `${data.hero.title} Industrial Battery Charger | Minit Charger`,
    description: data.hero.description,
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const data = productData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
