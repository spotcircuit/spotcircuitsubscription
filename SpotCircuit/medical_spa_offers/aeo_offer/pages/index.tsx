import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Problem from '../components/Problem';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Results from '../components/Results';
import Trust from '../components/Trust';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import { LocalBusinessSchema, MedicalBusinessSchema, ServiceSchema } from '../components/StructuredData';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="AI-Powered Medical Spa Growth System | 93% Booking Rate | SpotCircuit"
        description="Transform your med spa with our 24/7 AI booking system. Pre-qualify leads, boost conversions, and grow your high-ticket clients. Trusted by leading med spas nationwide."
        ogImage="https://spotcircuit.com/images/medical-spa-ai-system.jpg"
      />
      <LocalBusinessSchema />
      <MedicalBusinessSchema 
        name="SpotCircuit Medical Spa SEO Services"
        description="Expert SEO and Answer Engine Optimization services tailored for medical spas and aesthetic practices."
        treatments={[
          "Medical Spa SEO",
          "Voice Search Optimization",
          "Local SEO",
          "Content Strategy",
          "Schema Implementation"
        ]}
        aggregateRating={{
          ratingValue: "5.0",
          reviewCount: "127"
        }}
      />
      <ServiceSchema />
      <div className="min-h-screen flex flex-col">
        <Banner />
        <main className="flex-grow pt-16">
          <Hero />
          <Trust />
          <Problem />
          <Services />
          <HowItWorks />
          <Results />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
