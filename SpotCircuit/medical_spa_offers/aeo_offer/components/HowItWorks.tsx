import { MessageSquare, Calendar, LineChart, Users } from 'lucide-react';

const steps = [
  {
    name: 'AI Lead Capture',
    description:
      'Our AI concierge engages potential clients 24/7, answering questions and pre-qualifying leads based on their interests and budget.',
    icon: MessageSquare,
  },
  {
    name: 'Smart Scheduling',
    description:
      'Qualified leads are automatically guided to book consultations, with smart calendar integration to avoid double-bookings.',
    icon: Calendar,
  },
  {
    name: 'Client Nurturing',
    description:
      'AI follows up with leads, provides treatment information, and maintains engagement until they\'re ready to book.',
    icon: Users,
  },
  {
    name: 'Performance Tracking',
    description:
      'Track conversions, revenue, and ROI in real-time through our intuitive dashboard.',
    icon: LineChart,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your 24/7 AI-Powered Growth System
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform works silently in the background, capturing and converting leads while you focus on providing exceptional treatments.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-x-2 -inset-y-4 bg-blue-100/50 rounded-lg" />
            <div className="relative bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 p-8">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Ready to see it in action?
              </h3>
              <div className="mt-4 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Schedule Demo
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Watch Video <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
