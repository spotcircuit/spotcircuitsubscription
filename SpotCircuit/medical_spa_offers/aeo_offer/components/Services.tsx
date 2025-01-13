import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card';
import { 
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  Search,
  BarChart
} from 'lucide-react';

const services = [
  {
    title: '24/7 AI Concierge',
    icon: MessageCircle,
    description: 'Our AI assistant pre-qualifies leads, answers questions, and books appointments around the clock, ensuring you never miss an opportunity.',
    benefits: [
      'Instant response to inquiries 24/7',
      'Smart lead qualification',
      'Automated appointment booking',
      'Personalized follow-ups'
    ]
  },
  {
    title: 'Premium Client Acquisition',
    icon: Target,
    description: 'Attract and convert high-value clients seeking premium treatments through our AI-powered targeting system.',
    benefits: [
      '$3,200+ average client value',
      'Premium package upsells',
      'VIP client nurturing',
      'Membership conversion'
    ]
  },
  {
    title: 'Voice & AI Search Optimization',
    icon: Search,
    description: 'Dominate both voice search and AI-powered searches to capture clients at every touchpoint.',
    benefits: [
      'Voice search optimization',
      'ChatGPT optimization',
      'Featured snippet targeting',
      'Local search dominance'
    ]
  },
  {
    title: 'Guaranteed Results System',
    icon: TrendingUp,
    description: 'Our proven system guarantees to double your high-ticket bookings in 90 days through AI-powered automation.',
    benefits: [
      '2x appointments guarantee',
      '90-day money-back guarantee',
      'Real-time ROI tracking',
      'Performance dashboard'
    ]
  },
  {
    title: 'Done-For-You Team',
    icon: Users,
    description: 'Get a dedicated team of med spa marketing experts who handle everything while you focus on patient care.',
    benefits: [
      'AI system management',
      'Content optimization',
      'Technical implementation',
      'Weekly strategy calls'
    ]
  },
  {
    title: 'Smart Review System',
    icon: BarChart,
    description: 'Automated system to collect and showcase authentic patient reviews, building trust through social proof.',
    benefits: [
      'Automated review requests',
      'AI-powered response suggestions',
      'Social proof integration',
      'Reputation monitoring'
    ]
  }
];

export default function Services() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            All-In-One AI System
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Complete AI Platform For Med Spas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to automate your client acquisition and booking process
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <CardDescription className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </CardDescription>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </dl>
          <div className="mt-16 flex justify-center">
            <Button
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schedule Your AI Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
