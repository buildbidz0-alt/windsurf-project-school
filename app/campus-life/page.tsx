import { Metadata } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MicroscopeIcon, LibraryIcon, SportsIcon, UsersIcon } from '@/components/ui/Icons';
import { Play, MapPin, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campus Life',
  description: 'Explore our vibrant campus life with world-class facilities, sports programs, arts initiatives, and student activities.',
};

const facilities = [
  {
    icon: MicroscopeIcon,
    title: 'Science Laboratories',
    description: 'State-of-the-art labs for Physics, Chemistry, Biology, and Computer Science.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
    features: [
      'Advanced equipment and instruments',
      'Safety protocols and training',
      'Research project support',
      'Digital microscopy systems'
    ]
  },
  {
    icon: LibraryIcon,
    title: 'Digital Library',
    description: 'Modern library with over 50,000 books and extensive digital resources.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    features: [
      '50,000+ physical books',
      'Digital database access',
      'Quiet study areas',
      'Research assistance'
    ]
  },
  {
    icon: SportsIcon,
    title: 'Sports Complex',
    description: 'Olympic-standard facilities for various sports and fitness activities.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    features: [
      'Swimming pool',
      'Basketball courts',
      'Football field',
      'Indoor gymnasium'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Arts Center',
    description: 'Creative spaces for music, drama, visual arts, and performances.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    features: [
      'Music studios',
      'Art workshops',
      'Theater auditorium',
      'Exhibition spaces'
    ]
  }
];

const sportsPrograms = [
  {
    name: 'Swimming',
    level: 'Beginner to Advanced',
    schedule: 'Mon, Wed, Fri - 4:00 PM',
    achievements: 'State Champions 2023'
  },
  {
    name: 'Basketball',
    level: 'All Levels',
    schedule: 'Tue, Thu - 4:30 PM',
    achievements: 'Regional Winners 2024'
  },
  {
    name: 'Football',
    level: 'Intermediate to Advanced',
    schedule: 'Mon, Wed, Fri - 5:00 PM',
    achievements: 'Inter-school Trophy 2023'
  },
  {
    name: 'Tennis',
    level: 'All Levels',
    schedule: 'Daily - 4:00 PM',
    achievements: 'Individual State Medals'
  },
  {
    name: 'Athletics',
    level: 'All Levels',
    schedule: 'Daily - 6:00 AM',
    achievements: 'Multiple National Records'
  },
  {
    name: 'Badminton',
    level: 'Beginner to Advanced',
    schedule: 'Tue, Thu, Sat - 4:00 PM',
    achievements: 'District Champions 2024'
  }
];

const artsPrograms = [
  {
    category: 'Music',
    programs: ['Piano', 'Guitar', 'Violin', 'Vocal Training', 'School Band', 'Orchestra']
  },
  {
    category: 'Visual Arts',
    programs: ['Painting', 'Sculpture', 'Digital Art', 'Photography', 'Ceramics', 'Printmaking']
  },
  {
    category: 'Performing Arts',
    programs: ['Drama Club', 'Dance', 'Public Speaking', 'Debate Team', 'Model UN', 'Theater Production']
  },
  {
    category: 'Creative Writing',
    programs: ['Poetry', 'Short Stories', 'Journalism', 'School Magazine', 'Creative Writing Club', 'Literary Society']
  }
];

export default function CampusLifePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Vibrant Campus Life
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Beyond academics, our campus offers a rich tapestry of experiences that nurture 
              creativity, build character, and foster lifelong friendships through world-class 
              facilities and diverse programs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-slate-300">Student Clubs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">25+</div>
                <div className="text-slate-300">Sports Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-slate-300">Arts Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">100+</div>
                <div className="text-slate-300">Annual Events</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
              alt="Campus Life at St. Augustine's Academy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Facilities Overview */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our campus features state-of-the-art facilities designed to support learning, 
            creativity, and personal growth in every aspect of student life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card key={index} hover className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-gold-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary-800">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-4">
                      {facility.description}
                    </p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Virtual Tour */}
      <Section background="cream" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience our campus from anywhere in the world with our interactive virtual tour.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop"
              alt="Virtual Campus Tour"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-primary-800/40 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors group">
                <Play className="h-8 w-8 text-primary-800 ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-600 mb-4">
              Explore our classrooms, laboratories, sports facilities, and more in this comprehensive campus tour.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                15 minutes
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Interactive 360° views
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Student testimonials
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sports Programs */}
      <Section background="white" padding="xl" id="sports">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Sports & Athletics
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive sports program promotes physical fitness, teamwork, 
            and competitive excellence across multiple disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsPrograms.map((sport, index) => (
            <Card key={index} hover>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">
                  {sport.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Level:</span>
                    <span className="font-medium">{sport.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Schedule:</span>
                    <span className="font-medium">{sport.schedule}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-gold-600 font-medium text-xs">
                      🏆 {sport.achievements}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold-600 mb-2">15+</div>
              <div className="text-slate-700 font-medium mb-2">State Championships</div>
              <div className="text-sm text-slate-600">Won in the last 5 years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-600 mb-2">200+</div>
              <div className="text-slate-700 font-medium mb-2">Student Athletes</div>
              <div className="text-sm text-slate-600">Actively participating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-600 mb-2">25+</div>
              <div className="text-slate-700 font-medium mb-2">Professional Coaches</div>
              <div className="text-sm text-slate-600">Expert training staff</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Arts Programs */}
      <Section background="slate" padding="xl" id="arts">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Arts & Creative Expression
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nurture creativity and artistic expression through our comprehensive arts programs 
            spanning music, visual arts, performing arts, and creative writing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artsPrograms.map((category, index) => (
            <Card key={index} hover>
              <CardHeader>
                <CardTitle className="text-lg text-primary-800">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.programs.map((program, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                      {program}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Arts Events */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-8 text-center">
            Upcoming Arts Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Annual Music Concert',
                date: 'March 15, 2025',
                description: 'Showcase of student musical talents across all genres',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
              },
              {
                title: 'Art Exhibition',
                date: 'April 2, 2025',
                description: 'Student artwork display featuring paintings, sculptures, and digital art',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
              },
              {
                title: 'Drama Production',
                date: 'April 20, 2025',
                description: 'Annual theater production featuring student actors and crew',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
              }
            ].map((event, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="relative h-32">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="text-gold-600 text-sm font-medium mb-1">
                    {event.date}
                  </div>
                  <h4 className="font-semibold text-primary-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Student Life */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Student Organizations & Clubs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join one of our many student organizations to pursue your interests, 
            develop leadership skills, and make lasting friendships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: 'Academic Clubs',
              clubs: ['Math Olympiad', 'Science Club', 'Debate Society', 'Model UN', 'Quiz Club', 'Robotics Team']
            },
            {
              category: 'Service Organizations',
              clubs: ['Community Service', 'Environmental Club', 'Peer Tutoring', 'Red Cross Youth', 'Charity Drive', 'Social Impact']
            },
            {
              category: 'Special Interest',
              clubs: ['Photography Club', 'Chess Club', 'Cooking Club', 'Gardening Club', 'Book Club', 'Tech Club']
            },
            {
              category: 'Cultural Groups',
              clubs: ['International Club', 'Heritage Society', 'Language Exchange', 'Cultural Dance', 'World Music', 'Global Awareness']
            },
            {
              category: 'Leadership',
              clubs: ['Student Council', 'Prefect System', 'House Captains', 'Event Committee', 'Peer Mentors', 'Ambassador Program']
            },
            {
              category: 'Media & Communication',
              clubs: ['School Newspaper', 'Yearbook Committee', 'Broadcasting Club', 'Social Media Team', 'Public Relations', 'Creative Writing']
            }
          ].map((group, index) => (
            <Card key={index} hover>
              <CardHeader>
                <CardTitle className="text-lg text-primary-800">
                  {group.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {group.clubs.map((club, idx) => (
                    <div key={idx} className="text-sm text-slate-600 bg-slate-50 px-2 py-1 rounded">
                      {club}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
