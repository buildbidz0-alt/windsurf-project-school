import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { newsArticles } from '@/data/site';
import { formatDate } from '@/lib/utils';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export default function NewsEventsSection() {
  const featuredNews = newsArticles.slice(0, 3);

  return (
    <Section background="white" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
          Latest News & Events
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay updated with the latest happenings, achievements, and upcoming events 
          at St. Augustine's Academy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredNews.map((article, index) => (
          <Card key={article.id} hover className="overflow-hidden group h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <div className="flex items-center space-x-2 mb-3">
                {article.tags.slice(0, 2).map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block px-2 py-1 bg-gold-100 text-gold-700 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  <span>3 min read</span>
                </div>
                
                <Link 
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium group/link"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-slate-50 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-2">
              Upcoming Events
            </h3>
            <p className="text-slate-600">
              Mark your calendar for these important dates
            </p>
          </div>
          <Link href="/news#events">
            <Button variant="outline">
              View All Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              date: '2025-03-15',
              title: 'Open House & Campus Tour',
              time: '10:00 AM - 2:00 PM',
              location: 'Main Campus',
              type: 'Admissions'
            },
            {
              date: '2025-03-22',
              title: 'Science Fair 2025',
              time: '9:00 AM - 4:00 PM',
              location: 'Science Wing',
              type: 'Academic'
            },
            {
              date: '2025-04-05',
              title: 'Annual Sports Day',
              time: '8:00 AM - 5:00 PM',
              location: 'Sports Complex',
              type: 'Sports'
            },
            {
              date: '2025-04-12',
              title: 'Cultural Festival',
              time: '6:00 PM - 9:00 PM',
              location: 'Auditorium',
              type: 'Cultural'
            }
          ].map((event, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
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
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-primary-800 mb-1">
                    {event.title}
                  </h4>
                  
                  <div className="text-sm text-slate-600 space-y-1">
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
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 text-center bg-primary-800 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-serif font-semibold mb-4">
          Stay in the Loop
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest news, event updates, 
          and important announcements directly in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <Button className="bg-gold-500 hover:bg-gold-600">
            Subscribe
          </Button>
        </div>
      </div>
    </Section>
  );
}
