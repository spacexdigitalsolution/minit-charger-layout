import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { productData, getProductData } from './_data';
import MagnusPage from './_components/magnus/MagnusPage';
import AltusPage from './_components/altus-ii/AltusPage';
import DefaultPage from './_components/default/DefaultPage';
import DurusPage from './_components/durus/DurusPage';
import { getRelatedProducts } from '@/data/productRegistry';

// Generates the static routes
export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = await getProductData(resolvedParams.slug);
  if (!data) return { title: 'Product Not Found' };

  const metadata = {
    title: `${data.hero?.title || data.heroBanner?.heading || 'Product'} Industrial Battery Charger | Minit Charger`,
    description: data.hero?.description || data.heroBanner?.description || '',
  };

  if (data.seo?.noindex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const data = await getProductData(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  if (data.relatedProducts) {
    data.relatedProducts.products = getRelatedProducts({ currentProductId: resolvedParams.slug });
  }

  const renderContent = () => {
    if (resolvedParams.slug === 'magnus') return <MagnusPage data={data} />;
    if (resolvedParams.slug === 'altus-ii') return <AltusPage data={data} />;
    if (resolvedParams.slug === 'durus') return <DurusPage data={data} />;
    return <DefaultPage data={data} />;
  };

  return (
    <>
      <Navbar />
      {renderContent()}
      <Footer />
    </>
  );
}
