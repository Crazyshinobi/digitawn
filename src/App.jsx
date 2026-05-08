import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CoreServices from './components/CoreServices';
import Industries from './components/Industries';
import PerformanceMarketing from './components/PerformanceMarketing';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CoreServices />
        <Industries />
        <PerformanceMarketing />
        <Process />
        <About />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
