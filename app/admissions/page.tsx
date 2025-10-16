import { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FileText, Users, Calendar, Award, Download, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Learn about our admission process, requirements, fees, and scholarships. Start your journey to join St. Augustine\'s Academy.',
};

const admissionSteps = [
  {
    step: 1,
    icon: FileText,
    title: 'Submit Enquiry',
    description: 'Complete our online enquiry form or contact our admissions office to express your interest.',
    details: [
      'Online application form',
      'Basic student information',
      'Academic history',
      'Contact details'
    ]
  },
  {
    step: 2,
    icon: Calendar,
    title: 'Campus Visit',
    description: 'Schedule a personalized campus tour to experience our facilities and meet our community.',
    details: [
      'Guided campus tour',
      'Meet faculty and staff',
      'Classroom observations',
      'Q&A session'
    ]
  },
  {
    step: 3,
    icon: Users,
    title: 'Submit Application',
    description: 'Complete the formal application with required documents and application fee.',
    details: [
      'Completed application form',
      'Academic transcripts',
      'Recommendation letters',
      'Application fee payment'
    ]
  },
  {
    step: 4,
    icon: Award,
    title: 'Assessment & Interview',
    description: 'Participate in our assessment process and family interview to ensure mutual fit.',
    details: [
      'Academic assessment',
      'Student interview',
      'Parent meeting',
      'Admission decision'
    ]
  }
];

const feeStructure = [
  {
    grade: 'Kindergarten - Grade 2',
    tuition: '₹2,50,000',
    admission: '₹50,000',
    annual: '₹25,000'
  },
  {
    grade: 'Grade 3 - Grade 5',
    tuition: '₹2,75,000',
    admission: '₹50,000',
    annual: '₹25,000'
  },
  {
    grade: 'Grade 6 - Grade 8',
    tuition: '₹3,00,000',
    admission: '₹75,000',
    annual: '₹30,000'
  },
  {
    grade: 'Grade 9 - Grade 10',
    tuition: '₹3,50,000',
    admission: '₹75,000',
    annual: '₹35,000'
  },
  {
    grade: 'Grade 11 - Grade 12 (IB)',
    tuition: '₹4,00,000',
    admission: '₹1,00,000',
    annual: '₹40,000'
  }
];

const scholarships = [
  {
    title: 'Academic Excellence Scholarship',
    description: 'Merit-based scholarship for students with outstanding academic records.',
    coverage: 'Up to 50% tuition fee waiver',
    criteria: 'Minimum 95% in previous grade'
  },
  {
    title: 'Need-Based Financial Aid',
    description: 'Financial assistance for deserving students from economically disadvantaged backgrounds.',
    coverage: 'Up to 75% tuition fee waiver',
    criteria: 'Family income criteria apply'
  },
  {
    title: 'Sports Excellence Scholarship',
    description: 'Recognition and support for students with exceptional sporting achievements.',
    coverage: 'Up to 30% tuition fee waiver',
    criteria: 'State/National level achievements'
  },
  {
    title: 'Sibling Discount',
    description: 'Special discount for families with multiple children enrolled at the school.',
    coverage: '10% discount on second child',
    criteria: 'Both children enrolled simultaneously'
  }
];

export default function AdmissionsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Begin your child's journey to excellence. Our admissions process is designed to 
            identify students who will thrive in our academic environment and contribute to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#apply">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600">
                Start Application
              </Button>
            </Link>
            <Link href="#visit">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-800">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Admission Process */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Admission Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our straightforward four-step admission process ensures we find the right fit 
            for both students and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {admissionSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step} hover className="text-center relative">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="h-8 w-8 text-gold-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {step.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm">
                    {step.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-6 text-center">
            Application Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gold-600 mb-2">October - December</div>
              <div className="text-slate-700 font-medium mb-2">Application Period</div>
              <div className="text-sm text-slate-600">Submit applications for next academic year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold-600 mb-2">January - February</div>
              <div className="text-slate-700 font-medium mb-2">Assessment & Interviews</div>
              <div className="text-sm text-slate-600">Complete evaluation process</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold-600 mb-2">March</div>
              <div className="text-slate-700 font-medium mb-2">Admission Results</div>
              <div className="text-sm text-slate-600">Receive admission decisions</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Fee Structure */}
      <Section background="cream" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Fee Structure
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent and competitive fee structure for quality education with world-class facilities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Grade Level</th>
                    <th className="px-6 py-4 text-center font-semibold">Annual Tuition</th>
                    <th className="px-6 py-4 text-center font-semibold">Admission Fee</th>
                    <th className="px-6 py-4 text-center font-semibold">Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-primary-800">{fee.grade}</td>
                      <td className="px-6 py-4 text-center font-semibold text-gold-600">{fee.tuition}</td>
                      <td className="px-6 py-4 text-center">{fee.admission}</td>
                      <td className="px-6 py-4 text-center">{fee.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="bg-white p-4 rounded-lg">
              <DollarSign className="h-6 w-6 text-gold-600 mb-2" />
              <div className="font-medium text-primary-800 mb-1">Payment Options</div>
              <div>Annual, Semi-annual, or Quarterly payment plans available</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <FileText className="h-6 w-6 text-gold-600 mb-2" />
              <div className="font-medium text-primary-800 mb-1">Additional Costs</div>
              <div>Books, uniforms, and optional activities charged separately</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Award className="h-6 w-6 text-gold-600 mb-2" />
              <div className="font-medium text-primary-800 mb-1">Fee Protection</div>
              <div>Fee increases limited to 8% annually with advance notice</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Scholarships */}
      <Section background="white" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Scholarships & Financial Aid
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe exceptional education should be accessible. Our scholarship programs 
            support deserving students from diverse backgrounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarships.map((scholarship, index) => (
            <Card key={index} hover>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  {scholarship.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {scholarship.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">Coverage:</span>
                    <span className="text-gold-600 font-semibold">{scholarship.coverage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">Criteria:</span>
                    <span className="text-sm text-slate-600">{scholarship.criteria}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gold-50 border-gold-200">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Scholarship Application Deadline
              </h3>
              <p className="text-slate-600 mb-4">
                Applications for scholarships must be submitted by December 31st
              </p>
              <Button variant="outline" className="border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white">
                Apply for Scholarship
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Documents & Downloads */}
      <Section background="slate" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Application Documents
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Download our prospectus and application forms to get started with the admission process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'School Prospectus 2025-26',
              description: 'Comprehensive guide to our programs, facilities, and community',
              size: '2.5 MB',
              type: 'PDF'
            },
            {
              title: 'Application Form',
              description: 'Complete application form for new student admissions',
              size: '1.2 MB',
              type: 'PDF'
            },
            {
              title: 'Scholarship Application',
              description: 'Application form for merit and need-based scholarships',
              size: '800 KB',
              type: 'PDF'
            }
          ].map((document, index) => (
            <Card key={index} hover className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  {document.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {document.description}
                </p>
                <div className="flex justify-center items-center space-x-4 text-xs text-slate-500 mb-4">
                  <span>{document.type}</span>
                  <span>•</span>
                  <span>{document.size}</span>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="xl" className="text-white" id="apply">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Take the first step towards joining our community of learners, leaders, and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600">
              Start Your Application
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-800">
                Contact Admissions
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-slate-300">
            <p>Questions? Call us at <a href="tel:+91-11-23456789" className="text-gold-400 hover:underline">+91-11-23456789</a> or email <a href="mailto:admissions@staugustine.edu" className="text-gold-400 hover:underline">admissions@staugustine.edu</a></p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
