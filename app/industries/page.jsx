import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import IndustryCardsGrid from '@/components/sections/IndustryCardsGrid';
import LogoStripFeatureGrid from '@/components/sections/LogoStripFeatureGrid';
import IconCardsGrid from '@/components/sections/IconCardsGrid';
import CaseStudySplit from '@/components/sections/CaseStudySplit';
import TestimonialGridLight from '@/components/sections/TestimonialGridLight';
import TextComparisonSplit from '@/components/sections/TextComparisonSplit';
import SimpleCtaBanner from '@/components/sections/SimpleCtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { industriesData } from '@/data/industriesData';

export const metadata = {
  title: 'Industries We Serve | Minit Charger',
  description: "Discover how Minit Charger's fast charging technology keeps mission-critical fleets powered across warehouses, aviation GSE, LSV, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <IndustryCardsGrid {...industriesData.heroGrid} />
        <LogoStripFeatureGrid {...industriesData.logoStrip} />
        <IconCardsGrid {...industriesData.insights} />
        <CaseStudySplit {...industriesData.caseStudy} />
        <TestimonialGridLight {...industriesData.testimonials} />
        <TextComparisonSplit {...industriesData.comparison} />
        <SimpleCtaBanner {...industriesData.cta} />
        <ImageGalleryStrip {...industriesData.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
