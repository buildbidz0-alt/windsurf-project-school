export interface SiteSettings {
  title: string;
  tagline: string;
  logo: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  image: string;
  slug: string;
  category: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  highlight?: boolean;
}

export interface Event {
  id: string;
  title: string;
  excerpt: string;
  body?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  coverImage: string;
  slug: string;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  author: Staff;
  publishedAt: string;
  coverImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  photo?: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  caption: string;
  category: 'Campus' | 'Sports' | 'Events' | 'Classroom' | 'Facilities';
}

export interface AdmissionsDocument {
  id: string;
  title: string;
  file: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredVisitDate?: string;
  subject?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
