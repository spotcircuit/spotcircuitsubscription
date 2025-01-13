import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="flex items-center gap-x-4">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Featured in Forbes & Inc.
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500">
                <span>$50M+ Generated</span>
                <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
                <span>500+ Med Spas</span>
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI-Powered Booking System That Fills Your Med Spa 24/7
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The only platform that combines AI Chat, Voice Search, and Automated Booking to double your high-ticket appointments in 90 days or your money back.
          </p>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">24/7</span>
              <span className="ml-2">AI concierge that pre-qualifies and books appointments</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">93%</span>
              <span className="ml-2">lead-to-consultation conversion rate</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-blue-600">$3,200+</span>
              <span className="ml-2">average client value</span>
            </li>
          </ul>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Your Free AI Demo
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              See Live Results <span aria-hidden="true">→</span>
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            "The AI concierge booked 83 high-ticket consultations in our first month" - Dr. Sarah Miller, Pure Aesthetics MD
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative">
              <Image
                src="https://placehold.co/1404x866/e2e8f0/475569?text=AI+Booking+Dashboard"
                alt="AI Booking Dashboard showing 312% increase in appointments"
                width={1404}
                height={866}
                className="w-[76rem] rounded-xl shadow-xl ring-1 ring-gray-400/10"
                priority
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-600/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
