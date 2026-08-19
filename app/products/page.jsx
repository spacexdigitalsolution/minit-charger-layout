import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DarkHeroBanner from '@/components/sections/DarkHeroBanner';
import BadgeStrip from '@/components/sections/BadgeStrip';
import ProductCatalogGrid from '@/components/sections/ProductCatalogGrid';
import CaseStudySplit from '@/components/sections/CaseStudySplit';
import SpecsTable from '@/components/sections/SpecsTable';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaBanner from '@/components/sections/CtaBanner';
import { productsData } from '@/data/productsData';

export const metadata = {
  title: 'Browse Industrial Battery Charger Solutions | Minit Charger',
  description: "Browse Minit Charger's expansive portfolio of industrial battery chargers for low or high voltages or indoor or outdoor use cases.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <DarkHeroBanner {...productsData.hero} />
        <BadgeStrip {...productsData.strip} />
        <ProductCatalogGrid {...productsData.catalog} />
        <CaseStudySplit {...productsData.spotlight} />
        <SpecsTable {...productsData.specs} />
        <FaqAccordion {...productsData.faq} />
        <CtaBanner {...productsData.cta} />
      </main>
      <Footer />
    </>
  );
}
