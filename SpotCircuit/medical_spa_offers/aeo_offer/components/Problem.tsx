import Image from 'next/image';

const problems = [
  {
    title: "Lost Revenue While You Sleep",
    description: "75% of potential clients search for med spas outside business hours. Without 24/7 booking, you're losing thousands in revenue.",
    solution: "Our AI concierge pre-qualifies and books appointments 24/7, capturing leads even while you sleep."
  },
  {
    title: "High-Value Clients Going to Competitors",
    description: "Premium clients are using voice search and AI to find med spas, but most websites aren't optimized for these technologies.",
    solution: "Our platform optimizes your presence for both voice search and AI, ensuring you're found first."
  },
  {
    title: "Wasted Time on Low-Quality Leads",
    description: "Staff spending hours qualifying leads and scheduling consultations, with only 30% booking treatments.",
    solution: "AI pre-qualification increases booking rates to 78% by filtering and nurturing only high-intent clients."
  }
];

export default function Problem() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">The Problem</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Most Med Spas Are Losing Premium Clients
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In today's AI-driven world, traditional med spa marketing isn't enough. Here's what's holding you back:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {problems.map((problem) => (
                  <div key={problem.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-1 h-5 w-5 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 9zm4 0a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0112 9z" />
                        </svg>
                      </div>
                      {problem.title}
                    </dt>
                    <dd className="inline">
                      <p className="inline">{" " + problem.description}</p>
                      <p className="mt-2 text-blue-600">{problem.solution}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://placehold.co/840x620/e2e8f0/475569?text=Problem+Solution+Diagram"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={840}
            height={620}
          />
        </div>
      </div>
    </div>
  );
}
