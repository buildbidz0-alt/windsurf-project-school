'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ChevronRight, Play } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=2400&h=1200&fit=crop"
          alt="St. Augustine's Academy Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-800/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gold-500/20 backdrop-blur-sm rounded-full text-gold-300 text-sm font-medium mb-6 border border-gold-400/30">
            <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse" />
            Admissions Open for 2025-26
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Excellence in Learning.
            <br />
            <span className="text-gradient bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
              Leadership in Life.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nurturing young minds through world-class education, character development, 
            and holistic growth. Join our legacy of academic excellence and leadership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/admissions">
              <Button size="lg" className="group">
                Apply Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-800"
              >
                Book a Campus Visit
              </Button>
            </Link>
          </div>

          {/* Video Play Button */}
          <div className="flex justify-center">
            <button
              className="group flex items-center space-x-3 text-white hover:text-gold-300 transition-colors"
              aria-label="Play campus tour video"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all duration-300 group-hover:scale-110">
                <Play className="h-6 w-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Campus Tour</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { number: '2000+', label: 'Students' },
            { number: '150+', label: 'Faculty' },
            { number: '40+', label: 'Years of Excellence' },
            { number: '98%', label: 'University Acceptance' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
