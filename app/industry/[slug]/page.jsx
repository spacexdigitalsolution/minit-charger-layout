import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { industryData, getIndustryData } from './_data';
import WarehousePage from './_components/warehouse/WarehousePage';
import AviationPage from './_components/aviation/AviationPage';
import AviationGsePage from './_components/aviation-gse/AviationGsePage';
import LsvPage from './_components/lsv/LsvPage';
import DefaultIndustryPage from './_components/default/DefaultIndustryPage';
import { getRelatedProducts } from '@/data/productRegistry';

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = await getIndustryData(resolvedParams.slug);
  if (!data) return { title: 'Industry Not Found' };
  
  return {
    title: `${data.hero?.title || data.heroBanner?.heading || 'Industry'} Charging Solutions | Minit Charger`,
    description: data.hero?.description || data.heroBanner?.description || '',
  };
}

export default async function IndustryPage({ params }) {
  const resolvedParams = await params;
  const data = await getIndustryData(resolvedParams.slug);
  
  if (!data) {
    notFound();
  }

  // Map verbose URL slugs to internal industry IDs for the registry
  const slugToIdMap = {
    'warehouse-manufacturing': 'warehouse',
    'aviation-ground-support-equipment': 'aviation',
    'aviation-gse': 'aviation',
    'low-speed-vehicles': 'lsv'
  };
  const internalIndustryId = slugToIdMap[resolvedParams.slug] || resolvedParams.slug;

  if (data.relatedProducts) {
    data.relatedProducts.products = getRelatedProducts({ currentIndustryId: internalIndustryId, maxItems: 4 });
  }

  const renderContent = () => {
    if (resolvedParams.slug === 'warehouse-manufacturing') return <WarehousePage data={data} />;
    if (resolvedParams.slug === 'aviation-ground-support-equipment') return <AviationPage data={data} />;
    if (resolvedParams.slug === 'aviation-gse') return <AviationGsePage data={data} />;
    if (resolvedParams.slug === 'low-speed-vehicles') return <LsvPage data={data} />;
    return <DefaultIndustryPage data={data} />;
  };

  return (
    <>
      <Navbar variant={resolvedParams.slug === 'aviation-gse' ? 'transparent' : 'default'} />
      {renderContent()}
      <Footer />
    </>
  );
}
