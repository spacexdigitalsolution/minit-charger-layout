import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedPostHero from '@/components/sections/FeaturedPostHero';
import BlogTopics from '@/components/sections/BlogTopics';
import BlogGrid from '@/components/sections/BlogGrid';
import VideoSpotlight from '@/components/sections/VideoSpotlight';
import TestimonialCentered from '@/components/sections/TestimonialCentered';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import LightCtaBanner from '@/components/sections/LightCtaBanner';
import ImageGalleryStrip from '@/components/sections/ImageGalleryStrip';
import { blogData } from '@/data/blogData';

export const metadata = {
  title: 'Blog & News | Minit Charger',
  description: 'Read the latest insights, product updates, and industry news from Minit Charger, the leader in industrial fast charging solutions.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedPostHero {...blogData.hero} />
        <BlogTopics {...blogData.topics} />
        <BlogGrid {...blogData.recentPosts} />
        <VideoSpotlight {...blogData.webinar} />
        <TestimonialCentered {...blogData.testimonial} />
        <NewsletterSignup {...blogData.newsletter} />
        <LightCtaBanner {...blogData.cta} />
        <ImageGalleryStrip {...blogData.galleryStrip} />
      </main>
      <Footer />
    </>
  );
}
