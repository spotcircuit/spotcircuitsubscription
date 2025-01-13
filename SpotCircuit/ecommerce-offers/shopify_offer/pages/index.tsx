import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative">
          <Hero />
          <Problem />
        </div>
        <Services />
        <FAQ />
        <div id="booking">
          <Booking />
        </div>
      </main>
      <Footer />
    </div>
  );
}
