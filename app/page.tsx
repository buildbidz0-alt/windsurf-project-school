import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import FounderMissionSection from '@/components/sections/FounderMissionSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FeaturedProgramsSection from '@/components/sections/FeaturedProgramsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsEventsSection from '@/components/sections/NewsEventsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Narayana Public School - Transforming Rural Education, Empowering Every Child.',
  description:
    'Discover how Narayana Public School in Gopalganj, Bihar is modernizing rural education with technology-driven learning.',
  openGraph: {
    title: 'Narayana Public School - Transforming Rural Education, Empowering Every Child.',
    description:
      'Narayana Public School delivers AI-enhanced, future-ready education for rural students in Gopalganj, Bihar.',
    images: ['/hero.jpg'],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FounderMissionSection />
      <WhyChooseUsSection />
      <FeaturedProgramsSection />
      <TestimonialsSection />
      <NewsEventsSection />
    </Layout>
  );
}
