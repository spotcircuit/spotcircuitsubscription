import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white" role="contentinfo">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="footer-grid py-12">
          <div className="footer-section company-info">
            <Image
              src="/images/spotcircuit-logo.png"
              alt="SpotCircuit Logo"
              width={150}
              height={40}
              className="footer-logo h-10 w-auto mb-4"
            />
            <p className="company-desc text-gray-600 mb-6">
              Empowering businesses with cutting-edge AI marketing solutions for digital transformation.
            </p>
            <div className="social-links space-x-4">
              <a href="https://www.linkedin.com/company/spotcircuit" target="_blank" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/spotcircuit" target="_blank" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/spotcircuit" target="_blank" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="footer-section contact-section">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <address className="contact-info text-gray-600 not-italic">
              <p className="mb-3">
                <i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
                <span>19309 Winmeade Drive<br />Suite 200<br />Landsdowne, VA 20175</span>
              </p>
              <p className="mb-3">
                <i className="fas fa-phone mr-2" aria-hidden="true"></i>
                <a href="tel:+15714790455" className="hover:text-gray-900">+1 (571) 479-0455</a>
              </p>
              <p className="mb-3">
                <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
                <a href="mailto:info@spotcircuit.com" className="hover:text-gray-900">info@spotcircuit.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SpotCircuit LLC. All rights reserved.{' '}
            <Link href="https://spotcircuit.com" className="text-blue-600 hover:text-blue-500">
              Visit Main Site
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
