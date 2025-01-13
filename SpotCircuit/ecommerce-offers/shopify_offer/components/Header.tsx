import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'The Problem', href: '#problem-section' },
  { name: 'Results', href: '#real-results' },
  { name: 'How It Works', href: '#six-steps' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'FAQ', href: '#faq-section' },
  { name: 'Contact', href: '#booking' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <span className="sr-only">SpotCircuit</span>
            <Image
              src="/static/images/sclogo.png"
              alt="SpotCircuit"
              width={40}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-xl font-bold text-white">SpotCircuit</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`relative text-sm font-semibold leading-6 text-white transition-all duration-300
                before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:transform
                before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100
                before:bg-purple-500 hover:text-purple-400`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link
            href="#booking"
            onClick={(e) => scrollToSection(e, '#booking')}
            className="rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Book a Demo
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-x-2">
              <span className="sr-only">SpotCircuit</span>
              <Image
                src="/static/images/sclogo.png"
                alt="SpotCircuit"
                width={40}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold text-white">SpotCircuit</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10 hover:text-purple-400`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#booking"
                  className="block rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:from-green-500 hover:to-green-400 transition-all duration-300 text-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  Book a Demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
