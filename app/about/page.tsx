import { Metadata } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { staff } from '@/data/site';
import { Award, Users, Target, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about St. Augustine\'s Academy\'s mission, vision, history, and leadership team. Discover our commitment to excellence in education.',
};

const timeline = [
  {
    year: '1985',
    title: 'Foundation',
    description: 'St. Augustine\'s Academy was established with a vision to provide world-class education.'
  },
  {
    year: '1995',
    title: 'IB Authorization',
    description: 'Became an authorized IB World School, expanding our international curriculum offerings.'
  },
  {
    year: '2005',
    title: 'Campus Expansion',
    description: 'Opened our state-of-the-art science wing and sports complex.'
  },
  {
    year: '2015',
    title: 'Digital Innovation',
    description: 'Launched our comprehensive digital learning initiative with smart classrooms.'
  },
  {
    year: '2020',
    title: 'Global Recognition',
    description: 'Received international accreditation and recognition for educational excellence.'
  }
];

const awards = [
  {
    icon: Award,
    title: 'Best School Award 2024',
    organization: 'National Education Excellence Council',
    year: '2024'
  },
  {
    icon: Users,
    title: 'Outstanding Faculty Recognition',
    organization: 'International Teaching Standards Board',
    year: '2023'
  },
  {
    icon: Target,
    title: 'Innovation in Education',
    organization: 'Global Education Innovation Summit',
    year: '2023'
  },
  {
    icon: Heart,
    title: 'Community Service Excellence',
    organization: 'National Community Service Foundation',
    year: '2022'
  }
];

export default function AboutPage() {
  const principal = staff.find(member => member.role === 'Principal');

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About St. Augustine's Academy
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              For over four decades, we have been nurturing young minds and shaping future leaders 
              through our commitment to academic excellence, character development, and holistic education.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">40+</div>
                <div className="text-slate-300">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">2000+</div>
                <div className="text-slate-300">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">150+</div>
                <div className="text-slate-300">Faculty Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
                <div className="text-slate-300">University Acceptance</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
              alt="St. Augustine's Academy Campus"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-8 border-l-4 border-l-gold-500">
            <CardContent className="p-0">
              <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To provide a transformative educational experience that develops critical thinking, 
                creativity, and character in our students. We are committed to fostering a love of 
                learning, preparing students for success in higher education and life, while 
                instilling values of integrity, compassion, and global citizenship.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-l-4 border-l-primary-500">
            <CardContent className="p-0">
              <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To be a globally recognized institution that sets the standard for educational 
                excellence, innovation, and character development. We envision our graduates as 
                confident, compassionate leaders who contribute positively to society and make 
                a meaningful impact in their chosen fields.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* History Timeline */}
      <Section background="cream" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading educational institution, 
            our journey has been marked by continuous growth and innovation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold-300 hidden md:block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card hover className="p-6">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-gold-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10" />
                
                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Principal's Message */}
      {principal && (
        <Section background="white" padding="xl" id="leadership">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
                Principal's Message
              </h2>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 p-8 bg-slate-50">
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                      <Image
                        src={principal.photo}
                        alt={principal.name}
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">
                      {principal.name}
                    </h3>
                    <p className="text-gold-600 font-medium mb-4">
                      {principal.role}
                    </p>
                    <p className="text-sm text-slate-600">
                      {principal.bio}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <div className="text-6xl text-gold-400 mb-4">"</div>
                  <div className="text-lg text-slate-700 leading-relaxed space-y-4">
                    <p>
                      Welcome to St. Augustine's Academy, where we believe that every child has the 
                      potential to achieve greatness. Our commitment to excellence in education goes 
                      beyond academic achievement – we nurture the whole child, developing not just 
                      intellectual capabilities but also character, creativity, and compassion.
                    </p>
                    <p>
                      In our rapidly changing world, we prepare our students to be adaptable, 
                      innovative thinkers who can navigate challenges with confidence and integrity. 
                      Our dedicated faculty, state-of-the-art facilities, and comprehensive programs 
                      create an environment where students thrive academically, socially, and personally.
                    </p>
                    <p>
                      I invite you to explore our campus, meet our community, and discover how 
                      St. Augustine's Academy can be the foundation for your child's bright future.
                    </p>
                  </div>
                  <div className="mt-6 text-right">
                    <div className="font-semibold text-primary-800">
                      {principal.name}
                    </div>
                    <div className="text-slate-600">
                      Principal, St. Augustine's Academy
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* Awards & Recognition */}
      <Section background="slate" padding="xl" id="awards">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading educational 
            organizations and institutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card key={index} hover className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-gold-600" />
                  </div>
                  <h3 className="font-semibold text-primary-800 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {award.organization}
                  </p>
                  <div className="text-gold-600 font-medium">
                    {award.year}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </Layout>
  );
}
