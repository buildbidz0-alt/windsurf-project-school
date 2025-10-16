import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteSettings } from '@/data/site';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  { name: 'Facebook', href: siteSettings.social.facebook, icon: Facebook },
  { name: 'Twitter', href: siteSettings.social.twitter, icon: Twitter },
  { name: 'Instagram', href: siteSettings.social.instagram, icon: Instagram },
  { name: 'LinkedIn', href: siteSettings.social.linkedin, icon: Linkedin },
  { name: 'YouTube', href: siteSettings.social.youtube, icon: Youtube },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white" role="contentinfo">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="St. Augustine's Academy Logo"
                width={200}
                height={60}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {siteSettings.tagline} Nurturing young minds through excellence in education, 
              character development, and holistic growth since 1985.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-700 rounded-lg hover:bg-gold-500 transition-colors duration-200 group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-400">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-gold-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                <address className="text-slate-300 not-italic leading-relaxed">
                  {siteSettings.contact.address}
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${siteSettings.contact.phone}`}
                  className="text-slate-300 hover:text-gold-400 transition-colors"
                >
                  {siteSettings.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteSettings.contact.email}`}
                  className="text-slate-300 hover:text-gold-400 transition-colors"
                >
                  {siteSettings.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-400">Stay Connected</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for updates on events, achievements, and important announcements.
            </p>
            <form className="space-y-3" aria-label="Newsletter signup">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>
                © {currentYear} {siteSettings.title}. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-gold-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gold-400 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-xs">
                Designed with ❤️ for education
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
