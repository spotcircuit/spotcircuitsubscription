import Image from 'next/image';
import { ChartBarIcon, ArrowTrendingUpIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'
import AnalyticsDashboard from './AnalyticsDashboard'

const stats = [
  { id: 1, name: 'Average Traffic Increase', value: '280%', icon: ChartBarIcon },
  { id: 2, name: 'Conversion Rate Improvement', value: '165%', icon: ArrowTrendingUpIcon },
  { id: 3, name: 'Click-Through Rate Growth', value: '210%', icon: CursorArrowRaysIcon },
]

const caseStudies = [
  {
    name: 'Star City Games',
    description: 'Leading trading card game retailer achieved 312% increase in organic traffic and 189% boost in e-commerce conversions through our AI-driven SEO strategy.',
    image: '/static/images/starcitygames.jpg',
    stats: [
      { name: 'Organic Traffic Growth', value: '312%' },
      { name: 'Conversion Rate', value: '189%' },
      { name: 'Revenue Increase', value: '245%' },
    ],
  },
  {
    name: 'Mr. Maple',
    description: 'Specialty plant retailer saw 256% growth in qualified leads and 178% increase in organic search visibility after implementing our AI automation.',
    image: '/static/images/mrmaple.jpg',
    stats: [
      { name: 'Lead Generation', value: '256%' },
      { name: 'Search Visibility', value: '178%' },
      { name: 'Customer Engagement', value: '203%' },
    ],
  },
  {
    name: 'BNB Tobacco',
    description: 'Premium tobacco retailer experienced 290% increase in organic rankings and 225% improvement in conversion rates through our optimization strategy.',
    image: '/static/images/bnbtobacco.jpg',
    stats: [
      { name: 'Organic Rankings', value: '290%' },
      { name: 'Conversion Rate', value: '225%' },
      { name: 'Average Order Value', value: '167%' },
    ],
  },
]

export default function Results() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div id="results-section" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-500">Proven Results</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Results from Real E-commerce Businesses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            See how our AI-powered SEO automation has transformed these leading e-commerce businesses with measurable, sustainable growth.
          </p>
        </div>

        {/* Analytics Dashboard */}
        <div className="mt-16">
          <AnalyticsDashboard />
        </div>

        {/* Overall Stats */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                    <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {stat.name}
                </dt>
                <dd className="mt-3 text-5xl font-semibold tracking-tight text-green-500">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Case Studies */}
        <div id="case-studies" className="mx-auto mt-32 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-gray-900 rounded-2xl overflow-hidden shadow-green">
                <div className="relative h-52 w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
                  <img
                    src={study.image}
                    alt={study.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-white">
                    {study.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-300">
                    {study.description}
                  </p>
                  <dl className="mt-8 grid grid-cols-1 gap-4">
                    {study.stats.map((item) => (
                      <div key={item.name} className="border-l-2 border-green-500 pl-4">
                        <dt className="text-sm font-medium leading-6 text-gray-400">{item.name}</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-green-500">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
