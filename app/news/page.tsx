import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { newsArticles } from '@/data/site';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and achievements at St. Augustine\'s Academy.',
};

const upcomingEvents = [
  {
    id: 'e1',
    title: 'Open House & Campus Tour',
    date: '2025-03-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Main Campus',
    type: 'Admissions',
    description: 'Join us for a comprehensive campus tour and meet our faculty and students.'
  },
  {
    id: 'e2',
    title: 'Science Fair 2025',
    date: '2025-03-22',
    time: '9:00 AM - 4:00 PM',
    location: 'Science Wing',
    type: 'Academic',
    description: 'Annual showcase of student research projects and scientific innovations.'
  },
  {
    id: 'e3',
    title: 'Annual Sports Day',
    date: '2025-04-05',
    time: '8:00 AM - 5:00 PM',
    location: 'Sports Complex',
    type: 'Sports',
    description: 'Inter-house sports competition featuring various athletic events.'
  },
  {
    id: 'e4',
    title: 'Cultural Festival',
    date: '2025-04-12',
    time: '6:00 PM - 9:00 PM',
    location: 'Auditorium',
    type: 'Cultural',
    description: 'Celebration of diverse cultures with performances, food, and exhibitions.'
  },
  {
    id: 'e5',
    title: 'Parent-Teacher Conference',
    date: '2025-04-20',
    time: '2:00 PM - 6:00 PM',
    location: 'Classrooms',
    type: 'Academic',
    description: 'Individual meetings to discuss student progress and development.'
  },
  {
    id: 'e6',
    title: 'Graduation Ceremony',
    date: '2025-05-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Main Auditorium',
    type: 'Ceremony',
    description: 'Celebrating the achievements of our graduating class of 2025.'
  }
];

export default function NewsPage() {
  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            News & Events
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Stay connected with the latest happenings, achievements, and upcoming events 
            at St. Augustine's Academy. Discover the stories that make our community special.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
              <div className="text-slate-300">News Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">100+</div>
              <div className="text-slate-300">Annual Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">25+</div>
              <div className="text-slate-300">Awards Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">1000+</div>
              <div className="text-slate-300">Community Members</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Article */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Featured Story
          </h2>
        </div>

        <Card hover className="overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-full">
              <Image
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(featuredArticle.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredArticle.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center px-2 py-1 bg-gold-100 text-gold-700 text-xs font-medium rounded"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4">
                {featuredArticle.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={featuredArticle.author.photo}
                      alt={featuredArticle.author.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-800">
                      {featuredArticle.author.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {featuredArticle.author.role}
                    </div>
                  </div>
                </div>
                
                <Link href={`/news/${featuredArticle.slug}`}>
                  <Button className="group">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Recent News */}
      <Section background="cream" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Recent News
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Catch up on the latest developments and achievements from our school community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherArticles.map((article) => (
            <Card key={article.id} hover className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar className="h-4 w-4 text-gold-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="inline-block px-2 py-1 bg-gold-100 text-gold-700 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-primary-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{article.author.name}</span>
                  </div>
                  
                  <Link 
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium group"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All News Articles
          </Button>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section background="white" padding="xl" id="events">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mark your calendar for these exciting upcoming events and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} hover>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-center min-w-[60px]">
                    <div className="text-2xl font-bold text-primary-800">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm text-slate-500 uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        event.type === 'Admissions' ? 'bg-gold-100 text-gold-700' :
                        event.type === 'Academic' ? 'bg-blue-100 text-blue-700' :
                        event.type === 'Sports' ? 'bg-green-100 text-green-700' :
                        event.type === 'Cultural' ? 'bg-purple-100 text-purple-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-primary-800 mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-3">
                      {event.description}
                    </p>
                    
                    <div className="text-sm text-slate-500 space-y-1">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Subscribe to our newsletter to receive the latest news, event updates, 
            and important announcements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <Button className="bg-gold-500 hover:bg-gold-600 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
