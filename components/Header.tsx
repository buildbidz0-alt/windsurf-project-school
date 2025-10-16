'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'Our Story', href: '/about' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Awards', href: '/about#awards' }
    ]
  },
  { 
    name: 'Academics', 
    href: '/academics',
    submenu: [
      { name: 'Curriculum', href: '/academics' },
      { name: 'Faculty', href: '/academics#faculty' },
      { name: 'Programs', href: '/academics#programs' }
    ]
  },
  { name: 'Admissions', href: '/admissions' },
  { 
    name: 'Campus Life', 
    href: '/campus-life',
    submenu: [
      { name: 'Facilities', href: '/campus-life' },
      { name: 'Sports', href: '/campus-life#sports' },
      { name: 'Arts', href: '/campus-life#arts' }
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="St. Augustine's Academy Home"
          >
            <Image
              src="/logo.svg"
              alt="St. Augustine's Academy Logo"
              width={200}
              height={60}
              className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <button
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-180 ${
                        isActive(item.href)
                          ? 'text-gold-600 bg-gold-50'
                          : isScrolled
                          ? 'text-slate-700 hover:text-gold-600 hover:bg-gold-50'
                          : 'text-white hover:text-gold-300 hover:bg-white/10'
                      }`}
                      aria-expanded={activeSubmenu === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Submenu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 transition-all duration-200 ${
                        activeSubmenu === item.name
                          ? 'opacity-100 visible transform translate-y-0'
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:text-gold-600 hover:bg-gold-50 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-180 ${
                      isActive(item.href)
                        ? 'text-gold-600 bg-gold-50'
                        : isScrolled
                        ? 'text-slate-700 hover:text-gold-600 hover:bg-gold-50'
                        : 'text-white hover:text-gold-300 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/admissions"
              className={`btn-outline ${
                isScrolled ? '' : 'border-white text-white hover:bg-white hover:text-primary-800'
              }`}
            >
              Apply / Enquire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white border-t border-slate-200 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-slate-700 hover:text-gold-600 hover:bg-gold-50 transition-colors"
                      onClick={() =>
                        setActiveSubmenu(
                          activeSubmenu === item.name ? null : item.name
                        )
                      }
                      aria-expanded={activeSubmenu === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        activeSubmenu === item.name ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-8 py-2 text-sm text-slate-600 hover:text-gold-600 hover:bg-gold-50 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-slate-700 hover:text-gold-600 hover:bg-gold-50 transition-colors ${
                      isActive(item.href) ? 'text-gold-600 bg-gold-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-slate-200">
              <Link
                href="/admissions"
                className="btn-primary w-full justify-center"
              >
                Apply / Enquire
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
