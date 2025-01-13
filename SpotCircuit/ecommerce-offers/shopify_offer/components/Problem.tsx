import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MagnifyingGlassIcon, 
  ClockIcon, 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';
import { 
  AreaChart, 
  Area, 
  LineChart, 
  Line, 
  ResponsiveContainer 
} from 'recharts';

const solutions = [
  {
    name: 'AI-Powered SEO',
    description: 'Our AI automatically optimizes your store\'s content, meta tags, and structure for maximum search visibility.',
    icon: ArrowTrendingUpIcon
  },
  {
    name: 'Smart Analytics',
    description: 'Real-time insights into your store\'s performance, traffic patterns, and conversion rates.',
    icon: ChartBarIcon
  },
  {
    name: 'Automated Optimization',
    description: 'Continuous improvements to your store\'s performance, content, and user experience.',
    icon: ShoppingCartIcon
  }
];

const painPoints = [
  {
    title: 'Poor Search Rankings',
    description: 'Your products are buried deep in search results, making it impossible for customers to find you.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Manual SEO Struggles',
    description: 'Hours spent on keyword research, content optimization, and technical SEO with minimal results.',
    icon: ClockIcon
  },
  {
    title: 'Lost Sales',
    description: 'Potential customers can\'t find your store, leading to missed opportunities and revenue loss.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Technical Complexity',
    description: 'Complex SEO tools and strategies that require expertise you don\'t have time to master.',
    icon: BuildingStorefrontIcon
  }
];

const impactStats = [
  {
    title: 'Lost Revenue',
    value: '73%',
    description: 'Lower revenue compared to optimized stores',
    icon: ChartBarIcon
  },
  {
    title: 'Market Share',
    value: '-80%',
    description: 'Less market share than competitors',
    icon: UserGroupIcon
  },
  {
    title: 'Customer Loss',
    value: '65%',
    description: 'Of potential customers never find you',
    icon: ShoppingCartIcon
  }
];

const journeySteps = [
  {
    title: 'Comprehensive Store Audit',
    description: 'We begin by thoroughly analyzing your store\'s current performance. This includes identifying technical issues, content gaps, and optimization opportunities to establish a solid foundation for improvement.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Market & Competitor Analysis',
    description: 'Understanding your market landscape is crucial. We assess your competitors\' strategies, identify industry trends, and uncover unique opportunities to position your store ahead of the competition.',
    icon: UserGroupIcon
  },
  {
    title: 'Keyword Research & Optimization',
    description: 'Our team conducts in-depth keyword research to pinpoint the most effective keywords for your products and categories. We optimize your store\'s content, including titles, descriptions, and meta tags, to enhance visibility and attract targeted traffic.',
    icon: ShoppingCartIcon
  },
  {
    title: 'Strategic Implementation',
    description: 'Leveraging the insights from our audits and research, we implement tailored optimization strategies. This includes on-page SEO enhancements, improving user experience, and ensuring your store aligns with best practices for both search engines and customers.',
    icon: BuildingStorefrontIcon
  },
  {
    title: 'AI-Powered Optimization',
    description: 'Utilizing cutting-edge AI technology, we fine-tune your store for optimal performance on traditional search engines and AI-driven platforms. This advanced optimization ensures your store remains competitive in an ever-evolving digital landscape.',
    icon: ArrowTrendingUpIcon
  },
  {
    title: 'Continuous Monitoring & Improvement',
    description: 'Success is an ongoing journey. We continuously monitor your store\'s performance using detailed analytics, making data-driven adjustments to maintain and enhance your store\'s growth. Regular performance reviews ensure that your store adapts to changing market conditions and continues to thrive.',
    icon: ChartBarIcon
  }
];

const trafficData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1500 },
  { month: 'Mar', value: 2200 },
  { month: 'Apr', value: 2800 },
  { month: 'May', value: 3500 },
  { month: 'Jun', value: 4200 },
];

const conversionData = [
  { month: 'Jan', value: 1.2 },
  { month: 'Feb', value: 1.8 },
  { month: 'Mar', value: 2.3 },
  { month: 'Apr', value: 2.9 },
  { month: 'May', value: 3.4 },
  { month: 'Jun', value: 3.8 },
];

const revenueData = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 58000 },
  { month: 'Mar', value: 72000 },
  { month: 'Apr', value: 89000 },
  { month: 'May', value: 102000 },
  { month: 'Jun', value: 125000 },
];

const trafficImprovementData = [
  { name: 'Improvement', value: 280 },
  { name: 'Base', value: 20 },
];

const conversionImprovementData = [
  { period: 'Before', value: 1.2 },
  { period: 'After', value: 3.8 },
];

const ctrData = [
  { day: 1, value: 1.2 },
  { day: 2, value: 1.5 },
  { day: 3, value: 1.8 },
  { day: 4, value: 1.9 },
  { day: 5, value: 2.0 },
  { day: 6, value: 2.1 },
];

const COLORS = ['#10B981', '#374151'];

export default function Problem() {
  return (
    <>
      {/* Pain Points Section - Dark Background */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            {/* SVG on the left */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start lg:order-first">
              <div className="h-[800px] w-[700px] relative">
                <Image
                  src="/static/images/seochallenges.svg"
                  alt="SEO Challenges Flow"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content on the right */}
            <div className="lg:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-500">The Problem</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Common Shopify SEO Challenges
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Most Shopify store owners struggle with these critical issues that prevent growth and success.
                </p>
              </div>

              <dl className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {painPoints.map((point) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col bg-gray-800/50 rounded-2xl p-4 backdrop-blur-lg ring-1 ring-white/10"
                  >
                    <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                      <point.icon className="h-6 w-6 text-green-500" aria-hidden="true" />
                      {point.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{point.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Cost of Inaction Section - Black Background */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            {/* Content on the left */}
            <div className="lg:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-500">Business Impact</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  The Cost of Inaction
                </p>
                <p className="mt-2 text-lg leading-8 text-gray-300">
                  Every day without optimization means lost revenue and market share. Here's what you're missing:
                </p>
              </div>

              {/* Impact Statistics */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {impactStats.map((stat) => (
                  <div key={stat.title} className="relative overflow-hidden rounded-lg bg-gray-900 px-4 py-4">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-green-500/5" />
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-sm font-semibold text-gray-300">
                        <stat.icon className="h-5 w-5 text-green-500" aria-hidden="true" />
                        {stat.title}
                      </dt>
                      <dd className="mt-2 text-2xl font-bold text-white">{stat.value}</dd>
                      <dd className="mt-1 text-sm text-gray-400">{stat.description}</dd>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SVG on the right */}
            <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/static/images/costofinaction.svg"
                alt="Cost of Inaction Visualization"
                width={500}
                height={400}
                className="w-full max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI-Powered Optimization Section */}
      <div className="bg-green-600 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/static/images/aipoweredoptimization.svg"
                alt="AI-Powered Optimization"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
                <h2 className="text-base font-semibold leading-7 text-green-200">The Solution</h2>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  AI-Powered Optimization
                </p>
                <p className="mt-2 text-lg leading-8 text-green-100">
                  Our platform automatically solves these challenges, helping you focus on growing your business.
                </p>
              </div>
              <div className="mx-auto mt-8 max-w-2xl lg:mx-0">
                <div className="grid grid-cols-1 gap-4">
                  {solutions.map((solution) => (
                    <div key={solution.name} className="rounded-lg bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20">
                      <div className="flex items-center gap-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                          <solution.icon className="h-6 w-6 text-sky-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold leading-7 text-white">{solution.name}</h3>
                          <p className="mt-1 text-sm text-green-100">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section - White Background */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-base font-semibold leading-7 text-green-600">Your Journey</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Transform Your Store
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Our proven process takes your store from struggling to thriving in just 6 steps.
            </p>
          </div>

          {/* SVG centered */}
          <div className="mb-6">
            <div className="mx-auto h-[800px] w-[1000px] relative">
              <Image
                src="/static/images/6steptransform.svg"
                alt="6 Step Transformation Process"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Journey Steps in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="rounded-lg bg-gray-50 p-3 ring-1 ring-inset ring-gray-900/5">
                <div className="flex items-center gap-x-2 mb-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-sky-100">
                    <step.icon className="h-4 w-4 text-sky-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Step {index + 1}: {step.title}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-5">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section - Green Background */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-green-200">Proven Results</h2>
            <p className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Real Results from Real E-commerce Businesses
            </p>
            <p className="mt-2 text-lg leading-8 text-green-100">
              See how our AI-powered SEO automation has transformed these leading e-commerce businesses with measurable, sustainable growth.
            </p>
          </div>

          {/* Live Performance Dashboard */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8 text-white">Live Performance Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Traffic Growth Chart */}
              <div className="relative h-64 bg-green-700/50 rounded-lg p-6">
                <h4 className="text-sm font-medium text-green-200">Organic Traffic Growth</h4>
                <div className="h-48 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData}>
                      <defs>
                        <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4ADE80"
                        strokeWidth={2}
                        fill="url(#trafficGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-2xl font-bold text-white">+280%</p>
                    <p className="text-sm text-green-200">Year over Year</p>
                  </div>
                </div>
              </div>

              {/* Conversion Rate Chart */}
              <div className="relative h-64 bg-green-700/50 rounded-lg p-6">
                <h4 className="text-sm font-medium text-green-200">Conversion Rate Trend</h4>
                <div className="h-48 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={conversionData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#4ADE80"
                        strokeWidth={2}
                        dot={{ fill: '#4ADE80', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-2xl font-bold text-white">3.8%</p>
                    <p className="text-sm text-green-200">Current Rate</p>
                  </div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="relative h-64 bg-green-700/50 rounded-lg p-6">
                <h4 className="text-sm font-medium text-green-200">Revenue Growth</h4>
                <div className="h-48 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4ADE80"
                        strokeWidth={2}
                        fill="url(#revenueGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-2xl font-bold text-white">$125K</p>
                    <p className="text-sm text-green-200">Monthly Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Metrics */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-600">
                  <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-200">Average Traffic Increase</h4>
                  <p className="mt-1 text-2xl font-bold text-white">280%</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-600">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-200">Conversion Rate Improvement</h4>
                  <p className="mt-1 text-2xl font-bold text-white">165%</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-600">
                  <CursorArrowRaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-200">Click-Through Rate Growth</h4>
                  <p className="mt-1 text-2xl font-bold text-white">210%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Star City Games */}
            <div className="bg-green-700/50 rounded-xl overflow-hidden border border-green-400/20">
              <div className="h-48 relative">
                <Image
                  src="/static/images/cases/starcity.jpg"
                  alt="Star City Games Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">Star City Games</h3>
                <p className="mt-2 text-green-100">Leading trading card game retailer achieved 312% increase in organic traffic and 189% boost in e-commerce conversions through our AI-driven SEO strategy.</p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Organic Traffic Growth</h4>
                      <p className="mt-1 text-2xl font-bold text-white">312%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Conversion Rate</h4>
                      <p className="mt-1 text-2xl font-bold text-white">189%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Revenue Increase</h4>
                      <p className="mt-1 text-2xl font-bold text-white">245%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mr. Maple */}
            <div className="bg-green-700/50 rounded-xl overflow-hidden border border-green-400/20">
              <div className="h-48 relative">
                <Image
                  src="/static/images/cases/mrmaple.jpg"
                  alt="Mr. Maple Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">Mr. Maple</h3>
                <p className="mt-2 text-green-100">Specialty plant retailer saw 256% growth in qualified leads and 178% increase in organic search visibility after implementing our AI automation.</p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Lead Generation</h4>
                      <p className="mt-1 text-2xl font-bold text-white">256%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Search Visibility</h4>
                      <p className="mt-1 text-2xl font-bold text-white">178%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Customer Engagement</h4>
                      <p className="mt-1 text-2xl font-bold text-white">203%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BNB Tobacco */}
            <div className="bg-green-700/50 rounded-xl overflow-hidden border border-green-400/20">
              <div className="h-48 relative">
                <Image
                  src="/static/images/cases/bnb.jpg"
                  alt="BNB Tobacco Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">BNB Tobacco</h3>
                <p className="mt-2 text-green-100">Premium tobacco retailer experienced 290% increase in organic rankings and 225% improvement in conversion rates through our optimization strategy.</p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Organic Rankings</h4>
                      <p className="mt-1 text-2xl font-bold text-white">290%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Conversion Rate</h4>
                      <p className="mt-1 text-2xl font-bold text-white">225%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-full w-1 bg-blue-400"></div>
                    <div>
                      <h4 className="text-sm font-medium text-green-200">Average Order Value</h4>
                      <p className="mt-1 text-2xl font-bold text-white">167%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}