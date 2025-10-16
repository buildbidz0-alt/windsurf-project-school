'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { siteSettings } from '@/data/site';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredVisitDate: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    preferredVisitDate: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
        preferredVisitDate: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We're here to answer your questions and help you discover how St. Augustine's Academy 
            can be the perfect educational home for your child.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="h-8 w-8 text-gold-400 mx-auto mb-2" />
              <div className="text-gold-400 font-medium">Call Us</div>
              <div className="text-slate-300">Available 24/7</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-gold-400 mx-auto mb-2" />
              <div className="text-gold-400 font-medium">Email Us</div>
              <div className="text-slate-300">Quick Response</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-gold-400 mx-auto mb-2" />
              <div className="text-gold-400 font-medium">Visit Us</div>
              <div className="text-slate-300">Campus Tours</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  Send Us a Message
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Enter your full name"
                          required
                        />
                        {errors.name && (
                          <p className="form-error" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="Enter your email address"
                          required
                        />
                        {errors.email && (
                          <p className="form-error" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="Enter your phone number"
                          required
                        />
                        {errors.phone && (
                          <p className="form-error" role="alert">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Admissions">Admissions</option>
                          <option value="Campus Visit">Campus Visit</option>
                          <option value="Academic Programs">Academic Programs</option>
                          <option value="Financial Aid">Financial Aid</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredVisitDate" className="form-label">
                        Preferred Visit Date (Optional)
                      </label>
                      <input
                        type="date"
                        id="preferredVisitDate"
                        name="preferredVisitDate"
                        value={formData.preferredVisitDate}
                        onChange={handleInputChange}
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Tell us how we can help you..."
                        required
                      />
                      {errors.message && (
                        <p className="form-error" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      loading={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-800">Address</div>
                      <address className="text-slate-600 not-italic">
                        {siteSettings.contact.address}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gold-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-800">Phone</div>
                      <a
                        href={`tel:${siteSettings.contact.phone}`}
                        className="text-slate-600 hover:text-gold-600 transition-colors"
                      >
                        {siteSettings.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gold-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-800">Email</div>
                      <a
                        href={`mailto:${siteSettings.contact.email}`}
                        className="text-slate-600 hover:text-gold-600 transition-colors"
                      >
                        {siteSettings.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-800">Monday - Friday</div>
                      <div className="text-slate-600">8:00 AM - 5:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-800">Saturday</div>
                      <div className="text-slate-600">9:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-primary-800">Sunday</div>
                      <div className="text-slate-600">Closed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a href="/admissions" className="block text-gold-600 hover:text-gold-700 transition-colors">
                    → Admissions Process
                  </a>
                  <a href="/academics" className="block text-gold-600 hover:text-gold-700 transition-colors">
                    → Academic Programs
                  </a>
                  <a href="/campus-life" className="block text-gold-600 hover:text-gold-700 transition-colors">
                    → Campus Facilities
                  </a>
                  <a href="/gallery" className="block text-gold-600 hover:text-gold-700 transition-colors">
                    → Photo Gallery
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="cream" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Located in the heart of the education district, our campus is easily accessible 
            by public transport and offers ample parking for visitors.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="relative h-96 bg-slate-200">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  Interactive Map
                </h3>
                <p className="text-slate-600 mb-4">
                  Google Maps integration would be embedded here
                </p>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg">
            <div className="text-2xl font-bold text-gold-600 mb-2">🚌</div>
            <div className="font-medium text-primary-800 mb-1">Public Transport</div>
            <div className="text-sm text-slate-600">Metro Station: 5 min walk<br />Bus Stop: 2 min walk</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="text-2xl font-bold text-gold-600 mb-2">🚗</div>
            <div className="font-medium text-primary-800 mb-1">Parking</div>
            <div className="text-sm text-slate-600">Free parking available<br />200+ spaces</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="text-2xl font-bold text-gold-600 mb-2">🏥</div>
            <div className="font-medium text-primary-800 mb-1">Nearby</div>
            <div className="text-sm text-slate-600">Hospital: 1 km<br />Shopping: 500m</div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
