import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { AcademicCapIcon, TrophyIcon, BuildingIcon } from '@/components/ui/Icons';

const features = [
  {
    icon: AcademicCapIcon,
    title: 'Academic Rigor',
    description: 'Comprehensive curriculum with IB, STEM, and advanced placement programs designed to challenge and inspire students to reach their full potential.',
    highlights: ['IB Diploma Programme', 'Advanced STEM Labs', 'University Partnerships']
  },
  {
    icon: TrophyIcon,
    title: 'Holistic Development',
    description: 'Beyond academics, we focus on character building, leadership skills, and personal growth through diverse extracurricular activities and mentorship.',
    highlights: ['Leadership Programs', 'Community Service', 'Character Education']
  },
  {
    icon: BuildingIcon,
    title: 'Modern Campus',
    description: 'State-of-the-art facilities including smart classrooms, advanced laboratories, sports complex, and a world-class library to support 21st-century learning.',
    highlights: ['Smart Classrooms', 'Olympic Sports Complex', 'Digital Library']
  }
];

export default function WhyChooseUsSection() {
  return (
    <Section background="white" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
          Why Choose St. Augustine's Academy?
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We provide an exceptional educational experience that prepares students 
          for success in university and beyond, fostering both academic excellence 
          and personal growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} hover className="text-center h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-gold-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-center text-sm text-gold-600 font-medium"
                    >
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Stats */}
      <div className="mt-16 bg-slate-50 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '15:1', label: 'Student-Teacher Ratio' },
            { number: '100%', label: 'University Placement' },
            { number: '50+', label: 'Countries Represented' },
            { number: '200+', label: 'Awards & Recognitions' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
