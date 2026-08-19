import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TextHero from '@/components/sections/TextHero';
import LegalProseSection from '@/components/sections/LegalProseSection';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { legalData } from '@/data/legalData';

export const metadata = {
  title: 'Terms of Service | Minit Charger',
  description: "Read Minit Charger's Terms of Service governing the use of our website and services.",
};

export default function TermsPage() {
  const data = legalData.terms;
  
  return (
    <>
      <Navbar />
      <main>
        <TextHero {...data.hero} />
        {data.sections.map((section) => (
          <LegalProseSection key={section.id} {...section} />
        ))}
        <ContactCtaSection {...data.cta} />
        <ImageGalleryStrip {...legalData.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
