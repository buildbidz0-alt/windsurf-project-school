'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { galleryImages } from '@/data/site';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const categories = ['All', 'Campus', 'Sports', 'Events', 'Classroom', 'Facilities'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (lightboxImage !== null) {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Campus Gallery
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Explore our vibrant campus life through these captured moments of learning, 
            achievement, and community at St. Augustine's Academy.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-slate-300">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
              <div className="text-slate-300">Events Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">25+</div>
              <div className="text-slate-300">Facilities Showcased</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">10+</div>
              <div className="text-slate-300">Years of Memories</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Filter Section */}
      <Section background="white" padding="md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-slate-600" />
            <span className="text-slate-700 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section background="cream" padding="xl">
        <div className="masonry-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="masonry-item group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary-800/0 group-hover:bg-primary-800/20 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-gold-100 text-gold-700 text-xs font-medium rounded">
                      {image.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Filter className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              No images found
            </h3>
            <p className="text-slate-500">
              Try selecting a different category to view more images.
            </p>
          </div>
        )}
      </Section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxImage].image}
              alt={filteredImages[lightboxImage].caption}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block px-2 py-1 bg-gold-500 text-white text-xs font-medium rounded mb-2">
                  {filteredImages[lightboxImage].category}
                </span>
                <p className="text-sm">
                  {filteredImages[lightboxImage].caption}
                </p>
              </div>
              <div className="text-sm text-slate-300">
                {lightboxImage + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1.5rem;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 4;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </Layout>
  );
}
