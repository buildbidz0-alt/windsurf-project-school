import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function FounderMissionSection() {
  const missionPoints = [
    'Bridge the education gap in rural Bihar',
    'Equip children with skills for the future',
    'Inspire leadership, creativity, and critical thinking',
    'Provide opportunities for those often unseen or unheard',
    'Create a sustainable, modern educational model that can be replicated in other villages',
  ];

  return (
    <Section background="cream" padding="xl">
      <div className="space-y-12">
        <div className="text-center lg:text-left space-y-4">
          <span className="inline-flex items-center rounded-full bg-gold-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
            Jo dikhta hai, wo bikta hai — Help us make rural education visible, impactful, and modern.
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800">
            Transforming Rural Education, Empowering Every Child
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <blockquote className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gold-100">
              <p className="text-lg leading-relaxed text-slate-700">
                “I’m Zahur Alam, an engineer from my own village in Gopalganj, Bihar, and the proud founder of Narayana Public School. Seven years ago, I started this school with a simple dream: to bring quality education and modern technology to rural children who are often overlooked.
                <br />
                <br />
                Through dedication, community support, and perseverance, our school has been running successfully for 7 years — even during the challenges of COVID — despite financial and infrastructure hurdles. We believe that education is the foundation of a nation’s growth, and every child deserves an equal opportunity to learn, innovate, and dream big.
                <br />
                <br />
                Our vision is to modernize rural education with AI-powered learning, computer labs, and innovative classrooms — giving children the tools and confidence to succeed in the 21st century. Every donation helps us expand this vision, improve facilities, and ensure that no child is left behind.”
              </p>
              <footer className="mt-6 text-sm font-semibold text-primary-800">
                Zahur Alam, Founder
              </footer>
            </blockquote>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/donate" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Donate Now
                </Button>
              </Link>
              <Link href="/support-classroom" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white">
                  Support a Classroom
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-primary-800 p-8 text-white">
              <h3 className="text-2xl font-serif font-bold">
                At Narayana Public School, we empower rural children with education that goes beyond textbooks. By combining modern technology, AI-assisted learning, and holistic development, we aim to:
              </h3>
            </div>
            <ul className="space-y-4">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span className="text-base leading-relaxed text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
