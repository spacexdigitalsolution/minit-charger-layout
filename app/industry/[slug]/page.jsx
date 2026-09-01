import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import LogoTextStrip from '@/components/sections/LogoTextStrip';
import IndustryProseSidebar from '@/components/sections/IndustryProseSidebar';
import FeatureSplitRightImage from '@/components/sections/FeatureSplitRightImage';
import CaseStudySplit from '@/components/sections/CaseStudySplit';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import RelatedProducts from '@/components/sections/RelatedProducts';
import { industryData } from '@/data/industryData';

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = industryData[resolvedParams.slug];
  if (!data) return { title: 'Industry Not Found' };
  
  return {
    title: `${data.hero.title} Charging Solutions | Minit Charger`,
    description: data.hero.description,
  };
}

export default async function IndustryPage({ params }) {
  const resolvedParams = await params;
  const data = industryData[resolvedParams.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
