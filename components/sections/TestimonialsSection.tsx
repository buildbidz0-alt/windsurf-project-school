'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/data/site';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <Section background="primary" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          What Our Community Says
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Hear from our students, parents, and alumni about their experiences 
          and the impact St. Augustine's Academy has made on their lives.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-8 md:p-12 text-center">
                    <Quote className="h-12 w-12 text-gold-400 mx-auto mb-6" />
                    
                    <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4">
                      {testimonial.photo && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.photo}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <div className="font-semibold text-lg text-gold-400">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-300">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-gold-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Additional Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { number: '4.9/5', label: 'Parent Satisfaction Rating' },
          { number: '95%', label: 'Alumni Recommend Us' },
          { number: '40+', label: 'Years of Trust' },
        ].map((stat, index) => (
          <div key={index} className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
              {stat.number}
            </div>
            <div className="text-slate-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
