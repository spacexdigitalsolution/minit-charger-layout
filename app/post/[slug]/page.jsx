import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PostHeader from '@/components/sections/PostHeader';
import PostArticle from '@/components/sections/PostArticle';
import QuotePullout from '@/components/sections/QuotePullout';
import PostSpotlight from '@/components/sections/PostSpotlight';
import RelatedArticles from '@/components/sections/RelatedArticles';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import LightCtaBanner from '@/components/sections/LightCtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { postData } from '@/data/postData';

export function generateStaticParams() {
  return Object.keys(postData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }) {
  const data = postData[params.slug];
  if (!data) return { title: 'Post Not Found' };
  
  return {
    title: `${data.header.title} | Minit Charger`,
    description: data.article.contentBlocks.find(b => b.type === 'lead')?.content || "Read the latest from Minit Charger.",
  };
}

export default function PostPage({ params }) {
  const data = postData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <PostHeader {...data.header} />
        <PostArticle {...data.article} />
        <QuotePullout {...data.quote} />
        <PostSpotlight {...data.spotlight} />
        <RelatedArticles {...data.relatedArticles} />
        <NewsletterSignup {...data.newsletter} />
        <LightCtaBanner {...data.cta} />
        <ImageGalleryStrip {...data.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
