import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { programs } from '@/data/site';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProgramsSection() {
  return (
    <Section background="cream" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
          Featured Programs
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover our signature programs designed to unlock every student's potential 
          and prepare them for future success in their chosen fields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {programs.map((program) => (
          <Card key={program.id} hover className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full">
                  {program.category}
                </span>
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-gold-600 transition-colors">
                {program.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {program.shortDescription}
              </p>

              <Link 
                href={`/academics#${program.slug}`}
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium group/link"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-4">
          Ready to Explore Our Programs?
        </h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Schedule a campus visit to see our facilities, meet our faculty, 
          and learn more about how our programs can shape your child's future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/academics">
            <Button size="lg">
              View All Programs
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Schedule a Visit
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
