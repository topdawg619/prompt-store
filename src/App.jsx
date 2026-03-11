import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyItWorks from './components/WhyItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <WhyItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
