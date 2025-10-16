import { Metadata } from 'next';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with St. Augustine\'s Academy. Find our contact information, office hours, and location details.',
};

export default function ContactPage() {
  return (
    <Layout>
      <Section background="primary" padding="xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto">
            We would love to hear from you. Reach out to us for admissions inquiries,
            academic questions, or general information about St. Augustine's Academy.
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-gold-600" />
                    <span>Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    12 Oak Avenue<br />
                    Education District<br />
                    New Delhi, 110001<br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-gold-600" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Admissions: +91-11-23456789<br />
                    General: +91-11-23456790<br />
                    Fax: +91-11-23456791
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-gold-600" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Admissions: admissions@staugustine.edu<br />
                    General: info@staugustine.edu<br />
                    Support: support@staugustine.edu
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-gold-600" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-600">
                    <p className="font-semibold mb-2">Monday - Friday</p>
                    <p>8:00 AM - 6:00 PM</p>
                    <p className="font-semibold mb-2 mt-4">Saturday</p>
                    <p>9:00 AM - 2:00 PM</p>
                    <p className="font-semibold mb-2 mt-4">Sunday</p>
                    <p>Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" href="/admissions">
                  Apply Now
                </Button>
                <Button variant="outline" href="/about">
                  About Us
                </Button>
                <Button variant="outline" href="/academics">
                  Academics
                </Button>
                <Button variant="outline" href="/campus-life">
                  Campus Life
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-8">
              Find Us
            </h2>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-semibold">Interactive Map</p>
                    <p className="text-sm">Google Maps integration would go here</p>
                    <p className="text-xs mt-2">
                      12 Oak Avenue, Education District, New Delhi, 110001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">
                Transportation
              </h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600">
                  <strong>By Metro:</strong> Nearest station is Education District Central (2 km away).
                  Buses and auto-rickshaws are readily available.
                </p>
                <p className="text-slate-600 mt-4">
                  <strong>By Bus:</strong> Multiple bus routes serve the area. Routes 101, 205, and 301
                  stop within 500 meters of the school.
                </p>
                <p className="text-slate-600 mt-4">
                  <strong>Parking:</strong> Ample parking is available for visitors and parents.
                  Please arrive 15 minutes before your scheduled appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream" padding="lg">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
            Have Questions?
          </h2>
          <p className="text-slate-600 mb-6">
            Our admissions team is here to help you navigate the enrollment process and answer any questions you may have.
          </p>
          <Button variant="primary" size="lg" href="/admissions">
            Schedule a Visit
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
