import { Metadata } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { staff, programs } from '@/data/site';
import { GraduationCapIcon, MicroscopeIcon, LibraryIcon, UsersIcon } from '@/components/ui/Icons';
import { Mail, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore our comprehensive academic programs, world-class faculty, and innovative curriculum designed to prepare students for success.',
};

const curriculumLevels = [
  {
    icon: GraduationCapIcon,
    title: 'Primary School (Grades K-5)',
    description: 'Foundation years focusing on core literacy, numeracy, and social skills development.',
    features: [
      'Play-based learning approach',
      'Integrated curriculum design',
      'Character development programs',
      'Creative arts and music',
      'Physical education and wellness'
    ]
  },
  {
    icon: MicroscopeIcon,
    title: 'Middle School (Grades 6-8)',
    description: 'Transitional years emphasizing critical thinking, research skills, and subject specialization.',
    features: [
      'Subject-specific teaching',
      'Science laboratory experiences',
      'Technology integration',
      'Leadership opportunities',
      'Community service projects'
    ]
  },
  {
    icon: LibraryIcon,
    title: 'High School (Grades 9-12)',
    description: 'Advanced academic preparation with IB Diploma Programme and university readiness focus.',
    features: [
      'IB Diploma Programme',
      'Advanced Placement courses',
      'University counseling',
      'Research projects',
      'Internship opportunities'
    ]
  }
];

export default function AcademicsPage() {
  const facultyMembers = staff.filter(member => member.highlight);

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Our comprehensive academic program combines rigorous curriculum with innovative teaching 
            methods to prepare students for success in higher education and beyond.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">15:1</div>
              <div className="text-slate-300">Student-Teacher Ratio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">25+</div>
              <div className="text-slate-300">Subject Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-slate-300">University Acceptance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">IB</div>
              <div className="text-slate-300">World School</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Curriculum Overview */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Our Curriculum
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive educational journey designed to develop critical thinking, 
            creativity, and character at every stage of learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {curriculumLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card key={index} hover className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-gold-600" />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {level.title}
                  </CardTitle>
                  <p className="text-slate-600">
                    {level.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Featured Programs */}
      <Section background="cream" padding="xl" id="programs">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Signature Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized programs designed to nurture talents and prepare students 
            for future success in their areas of interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} hover className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gold-500 text-white text-sm font-medium rounded-full">
                    {program.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {program.longDescription || program.shortDescription}
                </p>
                <div className="text-gold-600 font-medium">
                  Learn More →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Faculty Section */}
      <Section background="white" padding="xl" id="faculty">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our dedicated educators bring expertise, passion, and innovation to the classroom, 
            inspiring students to achieve their best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member) => (
            <Card key={member.id} hover className="text-center">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gold-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-slate-100 rounded-full hover:bg-gold-100 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4 text-slate-600" />
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 rounded-full hover:bg-gold-100 transition-colors"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4 text-slate-600" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Faculty CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-slate-50">
            <CardContent className="p-0">
              <UsersIcon className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                Meet All Our Faculty
              </h3>
              <p className="text-slate-600 mb-4">
                Discover the full team of dedicated educators who make learning exceptional.
              </p>
              <div className="text-gold-600 font-medium">
                View Complete Faculty Directory →
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Academic Support */}
      <Section background="slate" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Academic Support Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive support systems to ensure every student reaches their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Learning Support',
              description: 'Individualized assistance for students with diverse learning needs.',
              features: ['One-on-one tutoring', 'Study skills workshops', 'Learning assessments']
            },
            {
              title: 'University Counseling',
              description: 'Expert guidance for university applications and career planning.',
              features: ['Application support', 'Scholarship guidance', 'Career counseling']
            },
            {
              title: 'Research Center',
              description: 'State-of-the-art facilities for independent research projects.',
              features: ['Digital resources', 'Research mentorship', 'Publication opportunities']
            },
            {
              title: 'Language Support',
              description: 'ESL and multilingual education support for international students.',
              features: ['ESL classes', 'Language immersion', 'Cultural integration']
            }
          ].map((service, index) => (
            <Card key={index} hover>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-slate-500">
                      <div className="w-1 h-1 bg-gold-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
