import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Feature-colocated components
import AboutHero from './_components/AboutHero';
import OriginSection from './_components/OriginSection';
import StatsGrid from './_components/StatsGrid';
import LeadershipQuote from './_components/LeadershipQuote';
import TodaySection from './_components/TodaySection';
import ValuesAlternating from './_components/ValuesAlternating';
import FinalCta from './_components/FinalCta';

// Data
import { aboutPageData } from './_data/aboutPageData';

export const metadata = {
  title: 'About Us | Minit Charger',
  description: "Minit Charger pioneered fast, opportunity-style charging for industrial fleets. Today we build charging and fleet-intelligence systems for aviation, warehouse, and low-speed vehicle operations nationwide.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero {...aboutPageData.hero} />
        <OriginSection {...aboutPageData.origin} />
        <StatsGrid stats={aboutPageData.stats} />
        <LeadershipQuote {...aboutPageData.quote} />
        <TodaySection {...aboutPageData.today} />
        <ValuesAlternating values={aboutPageData.values} />
        <FinalCta {...aboutPageData.finalCta} />
      </main>
      <Footer />
    </>
  );
}
