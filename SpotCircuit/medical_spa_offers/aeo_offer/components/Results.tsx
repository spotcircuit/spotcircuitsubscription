import Image from 'next/image';
import { Button } from './ui/button';

const caseStudies = [
  {
    name: "Pure Aesthetics MD",
    location: "Beverly Hills, CA",
    results: {
      appointments: "83 new appointments",
      revenue: "$249,000 additional revenue",
      timeframe: "First 30 days"
    },
    quote: "The AI system books appointments while we sleep. It's like having a full-time receptionist working 24/7.",
    author: "Dr. Sarah Miller",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=Case+Study+1"
  },
  {
    name: "Elite Med Spa",
    location: "Miami, FL",
    results: {
      appointments: "127 consultations booked",
      revenue: "$381,000 in new treatments",
      timeframe: "First 60 days"
    },
    quote: "Our consultation-to-treatment conversion rate jumped from 45% to 78% thanks to the AI's pre-qualification.",
    author: "Jennifer Chen, Owner",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=Case+Study+2"
  },
  {
    name: "Radiance Medical",
    location: "Dallas, TX",
    results: {
      appointments: "312 high-ticket bookings",
      revenue: "$936,000 generated",
      timeframe: "First 90 days"
    },
    quote: "The combination of voice search and AI booking has transformed our business. We're seeing patients we never reached before.",
    author: "Dr. Michael Thompson",
    image: "https://placehold.co/400x300/e2e8f0/475569?text=Case+Study+3"
  }
];

export default function Results() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Client Success Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Results from Real Med Spas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our AI-powered system is transforming med spas across the country
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={study.image}
                  alt={`${study.name} Case Study`}
                  width={400}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-500">
                    {study.timeframe}
                  </time>
                  <span className="text-gray-500">{study.location}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <span>
                      {study.name}
                    </span>
                  </h3>
                  <div className="mt-5 text-sm leading-6 text-gray-600">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="font-semibold text-blue-600 mr-2">→</span>
                        {study.results.appointments}
                      </li>
                      <li className="flex items-center">
                        <span className="font-semibold text-blue-600 mr-2">→</span>
                        {study.results.revenue}
                      </li>
                    </ul>
                  </div>
                  <p className="mt-5 text-sm italic leading-6 text-gray-600">
                    "{study.quote}"
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    - {study.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            See More Case Studies
          </Button>
        </div>
      </div>
    </div>
  );
}
