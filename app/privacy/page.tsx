import { Metadata } from 'next';
import Layout from '@/components/Layout';
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how St. Augustine\'s Academy collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <Layout>
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-800 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Personal Information</h4>
                <p>
                  We collect personal information that you provide directly to us, including:
                </p>
                <ul>
                  <li>Name, email address, and phone number</li>
                  <li>Student academic records and enrollment information</li>
                  <li>Parent/guardian contact information</li>
                  <li>Emergency contact details</li>
                  <li>Medical information relevant to student care</li>
                </ul>

                <h4>Automatically Collected Information</h4>
                <p>
                  When you visit our website, we automatically collect:
                </p>
                <ul>
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide educational services and support</li>
                  <li>Communicate with students, parents, and guardians</li>
                  <li>Process admissions applications</li>
                  <li>Maintain academic records and transcripts</li>
                  <li>Ensure campus safety and security</li>
                  <li>Improve our website and services</li>
                  <li>Send newsletters and important updates</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information in the following circumstances:
                </p>
                <ul>
                  <li><strong>Educational Partners:</strong> With authorized educational institutions for transcript requests</li>
                  <li><strong>Service Providers:</strong> With trusted vendors who assist in our operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Emergency Situations:</strong> To protect the health and safety of students</li>
                  <li><strong>Parent/Guardian Access:</strong> Academic information shared with authorized parents/guardians</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h4>Types of Cookies We Use</h4>
                <ul>
                  <li><strong>Necessary Cookies:</strong> Essential for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage (optional)</li>
                  <li><strong>Marketing Cookies:</strong> Used for personalized content (optional)</li>
                </ul>

                <h4>Your Cookie Choices</h4>
                <p>
                  You can control cookie preferences through our cookie banner or browser settings. 
                  Note that disabling certain cookies may affect website functionality.
                </p>

                <h4>Third-Party Analytics</h4>
                <p>
                  We use privacy-focused analytics tools like Plausible Analytics, which:
                </p>
                <ul>
                  <li>Does not use cookies</li>
                  <li>Does not collect personal data</li>
                  <li>Respects Do Not Track signals</li>
                  <li>Is GDPR compliant</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We implement appropriate security measures to protect your information:
                </p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and staff training</li>
                  <li>Secure backup and recovery procedures</li>
                  <li>Compliance with educational data protection standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li><strong>Access:</strong> Request copies of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Complaint:</strong> File a complaint with relevant authorities</li>
                </ul>

                <p>
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:privacy@staugustine.edu" className="text-gold-600 hover:text-gold-700">
                    privacy@staugustine.edu
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Student Privacy (FERPA)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We comply with the Family Educational Rights and Privacy Act (FERPA), which protects 
                  the privacy of student education records. Parents and eligible students have the right to:
                </p>
                <ul>
                  <li>Inspect and review education records</li>
                  <li>Request amendments to inaccurate records</li>
                  <li>Control disclosure of personally identifiable information</li>
                  <li>File complaints with the Department of Education</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place for international transfers, including:
                </p>
                <ul>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes</li>
                  <li>Binding corporate rules</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We are committed to protecting children's privacy. For students under 13:
                </p>
                <ul>
                  <li>We obtain parental consent before collecting personal information</li>
                  <li>We limit collection to what is necessary for educational purposes</li>
                  <li>We do not share information for commercial purposes</li>
                  <li>Parents can review and request deletion of their child's information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by:
                </p>
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Providing notice through our student information system</li>
                </ul>
                <p>
                  Your continued use of our services after changes become effective constitutes 
                  acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  If you have questions about this privacy policy or our data practices, please contact:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>Privacy Officer</strong><br />
                  St. Augustine's Academy<br />
                  12 Oak Avenue, Education District<br />
                  New Delhi, 110001<br />
                  Email: <a href="mailto:privacy@staugustine.edu" className="text-gold-600 hover:text-gold-700">privacy@staugustine.edu</a><br />
                  Phone: +91-11-23456789</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
