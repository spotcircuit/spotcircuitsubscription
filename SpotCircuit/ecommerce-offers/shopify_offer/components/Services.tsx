import { CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Comprehensive Store Audit",
    description: "Deep analysis of your current store performance, technical health, and optimization opportunities.",
    icon: CheckIcon,
  },
  {
    name: "Keyword Optimization",
    description: "Strategic keyword research and implementation to capture high-intent buyer traffic.",
    icon: CheckIcon,
  },
  {
    name: "Content Enhancement",
    description: "Optimization of product descriptions, category pages, and blog content for both search engines and user experience.",
    icon: CheckIcon,
  },
  {
    name: "Technical SEO Improvements",
    description: "Enhancement of site structure, speed, and technical elements for better search engine visibility.",
    icon: CheckIcon,
  },
  {
    name: "AEO-Focused Strategies",
    description: "Implementation of advanced AI optimization techniques to improve visibility in AI-powered search results.",
    icon: CheckIcon,
  },
  {
    name: "Link Building and Authority",
    description: "Strategic link building campaigns to boost your store's domain authority and search rankings.",
    icon: CheckIcon,
  },
  {
    name: "Conversion Rate Optimization",
    description: "Data-driven improvements to your store's design and user experience to increase sales.",
    icon: CheckIcon,
  },
  {
    name: "Local SEO Support",
    description: "Optimization for local search results to capture customers in your target geographical areas.",
    icon: CheckIcon,
  },
  {
    name: "Monthly Performance Reports",
    description: "Detailed analytics and insights on your store's performance and optimization progress.",
    icon: CheckIcon,
  },
  {
    name: "Ongoing Support",
    description: "Regular consultations and continuous optimization to ensure long-term success.",
    icon: CheckIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex items-center justify-center gap-x-3 lg:justify-center">
            <SparklesIcon className="h-8 w-8 flex-none text-shopify-green" />
            <h2 className="text-base font-semibold leading-7 text-shopify-green">Comprehensive Solutions</h2>
          </div>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything You Need for E-commerce Success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our SEO + AEO Mastery Package includes everything you need to dominate your e-commerce niche and outperform your competitors.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="relative flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-shopify-green/10">
                    <feature.icon className="h-6 w-6 text-shopify-green" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-shopify-green hover:text-shopify-green/80">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
