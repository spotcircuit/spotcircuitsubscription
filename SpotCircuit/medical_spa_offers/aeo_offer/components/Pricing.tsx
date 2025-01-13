import { Button } from './ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    price: '$1,997',
    description: 'Perfect for new med spas looking to grow their client base.',
    features: [
      'AI Concierge (Business Hours)',
      'Voice Search Optimization',
      'Basic Review Generation',
      'Local SEO Setup',
      'Monthly Performance Reports',
      'Email Support'
    ],
    mostPopular: false
  },
  {
    name: 'Scale',
    id: 'tier-scale',
    href: '#',
    price: '$2,997',
    description: 'Best for established med spas ready to scale operations.',
    features: [
      '24/7 AI Concierge',
      'Advanced Voice & AI Search',
      'Premium Review System',
      'Competitor Intelligence',
      'Weekly Strategy Calls',
      'Priority Support',
      'Custom Integration',
      'ROI Dashboard'
    ],
    mostPopular: true
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: 'Custom',
    description: 'For med spa chains and luxury clinics.',
    features: [
      'Multi-Location AI System',
      'Custom AI Training',
      'White-Label Option',
      'Advanced Analytics',
      'Dedicated Account Manager',
      'Custom Development',
      '24/7 VIP Support',
      'Quarterly Business Review'
    ],
    mostPopular: false
  },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose Your Growth Plan
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          90-Day Money Back Guarantee - Double Your Appointments or Pay Nothing
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ${
                tier.mostPopular
                  ? 'bg-gray-900 ring-gray-900'
                  : 'ring-gray-200'
              }`}
            >
              <h3
                className={`text-lg font-semibold leading-8 ${
                  tier.mostPopular ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.mostPopular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm font-semibold leading-6 ${
                    tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  /month
                </span>
              </p>
              <Button
                variant={tier.mostPopular ? 'default' : 'outline'}
                className={`mt-6 w-full ${
                  tier.mostPopular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                }`}
              >
                {tier.mostPopular ? 'Get Started Today' : 'Learn More'}
              </Button>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.mostPopular ? 'text-white' : 'text-blue-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
