import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TextHero from '@/components/sections/TextHero';
import LegalProseSection from '@/components/sections/LegalProseSection';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { legalData } from '@/data/legalData';

export const metadata = {
  title: 'Privacy Policy | Minit Charger',
  description: "Read Minit Charger's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const data = legalData.privacy;
  
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
