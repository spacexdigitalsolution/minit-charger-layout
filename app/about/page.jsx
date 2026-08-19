import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import OverlappingImageBlock from '@/components/sections/OverlappingImageBlock';
import LogoStripFeatureGrid from '@/components/sections/LogoStripFeatureGrid';
import ProseSection from '@/components/sections/ProseSection';
import IconCardsGrid from '@/components/sections/IconCardsGrid';
import SplitFeatureLight from '@/components/sections/SplitFeatureLight';
import CtaBanner from '@/components/sections/CtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { aboutData } from '@/data/aboutData';

export const metadata = {
  title: 'About Us | Minit Charger',
  description: "Learn about Minit Charger's 25+ year history of pioneering industrial fast charging technology and our mission to power the world's supply chain.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner {...aboutData.heroBanner} />
        <OverlappingImageBlock {...aboutData.imageBlock} />
        <LogoStripFeatureGrid {...aboutData.logoStrip} />
        <ProseSection {...aboutData.legacyProse} />
        <IconCardsGrid {...aboutData.coreValues} />
        <SplitFeatureLight {...aboutData.manufacturing} />
        <CtaBanner {...aboutData.ctaBanner} />
        <ImageGalleryStrip {...aboutData.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
