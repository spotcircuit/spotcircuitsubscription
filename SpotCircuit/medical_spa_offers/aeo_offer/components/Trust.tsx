import Image from 'next/image';

const awards = [
  {
    name: "Forbes Technology Council",
    image: "https://placehold.co/200x100/e2e8f0/475569?text=Forbes",
    description: "Member 2024"
  },
  {
    name: "Inc. 5000",
    image: "https://placehold.co/200x100/e2e8f0/475569?text=Inc5000",
    description: "Fastest Growing Companies"
  },
  {
    name: "HIPAA Compliant",
    image: "https://placehold.co/200x100/e2e8f0/475569?text=HIPAA",
    description: "Certified Provider"
  },
  {
    name: "Google Partner",
    image: "https://placehold.co/200x100/e2e8f0/475569?text=Google",
    description: "Premier Partner 2024"
  }
];

const stats = [
  { value: '500+', label: 'Med Spas Served' },
  { value: '$50M+', label: 'Revenue Generated' },
  { value: '93%', label: 'Client Retention' },
  { value: '24/7', label: 'AI Support' },
];

export default function Trust() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Leading Med Spas Nationwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join hundreds of successful medical spas who trust our AI-powered platform
            </p>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
            {awards.map((award) => (
              <div key={award.name} className="text-center">
                <Image
                  className="max-h-12 w-full object-contain"
                  src={award.image}
                  alt={award.name}
                  width={200}
                  height={100}
                />
                <p className="mt-3 text-sm font-semibold text-gray-900">{award.name}</p>
                <p className="text-xs text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
