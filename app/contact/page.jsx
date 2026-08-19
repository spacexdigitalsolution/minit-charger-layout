import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactFormSection from '@/components/sections/ContactFormSection';
import SupportRoutingGrid from '@/components/sections/SupportRoutingGrid';
import AddressesGrid from '@/components/sections/AddressesGrid';
import DarkImageBanner from '@/components/sections/DarkImageBanner';
import FaqAccordion from '@/components/sections/FaqAccordion';
import LogoStripFeatureGrid from '@/components/sections/LogoStripFeatureGrid';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { contactData } from '@/data/contactData';

export const metadata = {
  title: 'Contact Us | Minit Charger',
  description: 'Get in touch with the Minit Charger team for sales inquiries, technical support, or to discuss your industrial fast charging needs.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactFormSection {...contactData.contactForm} />
        <SupportRoutingGrid {...contactData.supportRouting} />
        <AddressesGrid {...contactData.addresses} />
        <DarkImageBanner {...contactData.networkMap} />
        <FaqAccordion {...contactData.faq} />
        <LogoStripFeatureGrid {...contactData.logoStrip} />
        <NewsletterSignup {...contactData.newsletter} />
        <ImageGalleryStrip {...contactData.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
