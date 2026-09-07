import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Feature-colocated components
import CompactPageHeader from './_components/CompactPageHeader';
import TabbedContactForms from './_components/TabbedContactForms';
import DirectContactStrip from './_components/DirectContactStrip';

// Data
import { contactPageData } from './_data/contactPageData';

export const metadata = {
  title: 'Contact Us | Minit Charger',
  description: "Get in touch with Minit Charger for sales, product support, or customer service. Tell us what you need and we'll route it to the right team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <CompactPageHeader {...contactPageData.header} />
        <TabbedContactForms formsData={contactPageData.forms} />
        <DirectContactStrip directContact={contactPageData.directContact} />
      </main>
      <Footer />
    </>
  );
}
