import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const availableTimeSlots = [
  { time: '9:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '1:00 PM', available: true },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: true },
  { time: '4:00 PM', available: false },
]

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your booking system
    console.log('Booking submitted:', { selectedDate, selectedTime, name, email, phone, website })
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center gap-x-3">
            <CalendarIcon className="h-10 w-10 text-shopify-green" />
            <span className="gradient-text">Book Your Free Consultation</span>
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Schedule a call with our SEO experts to discuss your Shopify store's needs
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shopify-green sm:text-sm sm:leading-6"
                  />
                  <UserIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shopify-green sm:text-sm sm:leading-6"
                  />
                  <EnvelopeIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shopify-green sm:text-sm sm:leading-6"
                  />
                  <PhoneIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                Shopify Store URL
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <input
                    type="url"
                    name="website"
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shopify-green sm:text-sm sm:leading-6"
                  />
                  <GlobeAltIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
                Preferred Date
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shopify-green sm:text-sm sm:leading-6"
                  />
                  <CalendarDaysIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900">
                Preferred Time
              </label>
              <div className="mt-2.5">
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-shopify-green sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a time</option>
                    {availableTimeSlots.map((slot) => (
                      <option key={slot.time} value={slot.time} disabled={!slot.available}>
                        {slot.time} {!slot.available && '(Unavailable)'}
                      </option>
                    ))}
                  </select>
                  <ClockIcon className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="gradient-bg block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shopify-green"
            >
              Schedule Consultation
            </button>
          </div>
        </form>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Consultation",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "serviceType": "SEO Consultation",
            "areaServed": "Worldwide",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://yourwebsite.com/book",
              "servicePhone": "your-phone-number",
              "availabilityStarts": "2025-01-11T09:00",
              "availabilityEnds": "2025-01-11T17:00"
            }
          })
        }}
      />
    </div>
  )
}
