import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryHero from '@/components/sections/CategoryHero';
import BadgeStrip from '@/components/sections/BadgeStrip';
import CategoryProductGrid from '@/components/sections/CategoryProductGrid';
import LogoFeatureGrid from '@/components/sections/LogoFeatureGrid';
import ImageComparisonSplit from '@/components/sections/ImageComparisonSplit';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { categoryData } from '@/data/categoryData';

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = categoryData[resolvedParams.slug];
  if (!data) return { title: 'Category Not Found' };
  
  return {
    title: `${data.hero.title} | Minit Charger`,
    description: data.hero.description,
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const data = categoryData[resolvedParams.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CategoryHero {...data.hero} />
        <BadgeStrip {...data.badgeStrip} />
        <CategoryProductGrid {...data.products} />
        <LogoFeatureGrid {...data.logoFeature} />
        <ImageComparisonSplit {...data.comparison} />
        <FaqAccordion {...data.faq} />
        <CtaBanner {...data.cta} />
        <ImageGalleryStrip {...data.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
