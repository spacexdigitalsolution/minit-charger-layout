import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoriesHero from '@/components/sections/CategoriesHero';
import BadgeStrip from '@/components/sections/BadgeStrip';
import CoreCategoriesGrid from '@/components/sections/CoreCategoriesGrid';
import WhyChooseGrid from '@/components/sections/WhyChooseGrid';
import TestimonialGridLight from '@/components/sections/TestimonialGridLight';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { categoriesData } from '@/data/categoriesData';

export const metadata = {
  title: 'Product Categories | Minit Charger',
  description: "Explore Minit Charger's expansive portfolio of industrial battery chargers and fleet management software.",
};

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CategoriesHero {...categoriesData.hero} />
        <BadgeStrip {...categoriesData.badgeStrip} />
        <CoreCategoriesGrid {...categoriesData.coreCategories} />
        <WhyChooseGrid {...categoriesData.whyChoose} />
        <TestimonialGridLight {...categoriesData.testimonials} />
        <FaqAccordion {...categoriesData.faq} />
        <CtaBanner {...categoriesData.cta} />
        <ImageGalleryStrip {...categoriesData.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
