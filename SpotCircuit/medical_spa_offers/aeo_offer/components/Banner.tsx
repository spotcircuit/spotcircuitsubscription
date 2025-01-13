import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Banner() {
  return (
    <nav className="navbar fixed top-0 z-50 w-full bg-white shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="container nav-container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="https://spotcircuit.com" className="navbar-brand flex items-center">
          <Image
            src="/images/spotcircuit-logo.png"
            alt="SpotCircuit Logo"
            width={150}
            height={40}
            className="brand-logo h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-gray-900"
            onClick={() => window.location.href = 'https://spotcircuit.com'}
          >
            Visit Main Site
          </Button>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
