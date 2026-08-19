import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import LogoStripFeatureGrid from '@/components/sections/LogoStripFeatureGrid';
import LightFeatureGrid from '@/components/sections/LightFeatureGrid';
import DarkUseCasesGrid from '@/components/sections/DarkUseCasesGrid';
import BentoFeatureGrid from '@/components/sections/BentoFeatureGrid';
import TallImageCardGrid from '@/components/sections/TallImageCardGrid';
import InteractiveSceneTabs from '@/components/sections/InteractiveSceneTabs';
import ComparisonSplit from '@/components/sections/ComparisonSplit';
import PillStrip from '@/components/sections/PillStrip';
import ProductSpotlight from '@/components/sections/ProductSpotlight';
import GalleryFeaturesGrid from '@/components/sections/GalleryFeaturesGrid';
import ProductCatalogList from '@/components/sections/ProductCatalogList';
import TestimonialGrid from '@/components/sections/TestimonialGrid';
import SplitFeatureLight from '@/components/sections/SplitFeatureLight';
import SplitFeatureDark from '@/components/sections/SplitFeatureDark';
import StatStripDark from '@/components/sections/StatStripDark';
import TechSpecsTable from '@/components/sections/TechSpecsTable';
import ProcessStepsGrid from '@/components/sections/ProcessStepsGrid';
import ResourceGuideGrid from '@/components/sections/ResourceGuideGrid';
import ResourceCardsGrid from '@/components/sections/ResourceCardsGrid';
import GlossaryList from '@/components/sections/GlossaryList';
import FaqAccordion from '@/components/sections/FaqAccordion';
import ServiceAreaContactStrip from '@/components/sections/ServiceAreaContactStrip';
import CtaBanner from '@/components/sections/CtaBanner';
import ContactFormSection from '@/components/sections/ContactFormSection';
import { homeData } from '@/data/homeData';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner {...homeData.heroBanner} />
        <LogoStripFeatureGrid {...homeData.logoStripFeatureGrid} />
        <LightFeatureGrid {...homeData.lightFeatureGrid} />
        <DarkUseCasesGrid {...homeData.darkUseCasesGrid} />
        <BentoFeatureGrid {...homeData.bentoFeatureGrid} />
        {/**
      * 
      <TallImageCardGrid {...homeData.tallImageCardGrid} />
      * 
      */}
        <InteractiveSceneTabs {...homeData.interactiveSceneTabs} />
        <ComparisonSplit {...homeData.comparisonSplit} />
        <PillStrip {...homeData.pillStrip} />
        <ProductSpotlight {...homeData.productSpotlight} />
        <GalleryFeaturesGrid {...homeData.galleryFeaturesGrid} />
        <ProductCatalogList {...homeData.productCatalogList} />
        <TestimonialGrid {...homeData.testimonialGrid} />
        <SplitFeatureLight {...homeData.batteryChemistry} />
        <SplitFeatureLight {...homeData.assetPro} />
        <SplitFeatureDark {...homeData.company} noPaddingBottom />
        <StatStripDark {...homeData.companyStats} />
        <TechSpecsTable {...homeData.techSpecs} />
        <ProcessStepsGrid {...homeData.processSteps} />
        <ResourceGuideGrid {...homeData.buyerGuides} />
        <ResourceCardsGrid {...homeData.recommendedResources} />
        <GlossaryList {...homeData.glossary} />
        <FaqAccordion {...homeData.faq} />
        <ServiceAreaContactStrip {...homeData.serviceArea} />
        <CtaBanner {...homeData.ctaBanner} />
        <ContactFormSection {...homeData.contactForm} />
      </main>
      <Footer />
    </>
  );
}
