import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FeaturedProgramsSection from '@/components/sections/FeaturedProgramsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsEventsSection from '@/components/sections/NewsEventsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "St. Augustine's Academy - Excellence in Learning. Leadership in Life.",
  description: 'Premier educational institution offering world-class academics, holistic development, and modern facilities. Nurturing future leaders through excellence in education.',
  openGraph: {
    title: "St. Augustine's Academy - Excellence in Learning. Leadership in Life.",
    description: 'Premier educational institution offering world-class academics, holistic development, and modern facilities.',
    images: ['/hero.jpg'],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUsSection />
      <FeaturedProgramsSection />
      <TestimonialsSection />
      <NewsEventsSection />
    </Layout>
  );
}
