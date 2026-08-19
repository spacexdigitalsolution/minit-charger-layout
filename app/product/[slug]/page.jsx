import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductHero from '@/components/sections/ProductHero';
import SplitFeatureLight from '@/components/sections/SplitFeatureLight';
import VideoSpotlight from '@/components/sections/VideoSpotlight';
import BentoFeatureGrid from '@/components/sections/BentoFeatureGrid';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FaqAccordion from '@/components/sections/FaqAccordion';
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
        {data.hero && <ProductHero {...data.hero} />}
        {data.installPhoto && <SplitFeatureLight {...data.installPhoto} />}
        {data.videoSpotlight && <VideoSpotlight {...data.videoSpotlight} />}
        {data.bentoFeatures && <BentoFeatureGrid {...data.bentoFeatures} />}
        {data.specs && <TechSpecsTable {...data.specs} />}
        {data.comparison && <ComparisonTable {...data.comparison} />}
        {data.faq && <FaqAccordion {...data.faq} />}
      </main>
      <Footer />
    </>
  );
}
