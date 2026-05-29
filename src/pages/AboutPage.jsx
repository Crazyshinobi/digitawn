import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="A Startup Built to"
        highlight="Scale Startups"
        subtitle="Digitawn Solutions combines creative strategy with technical execution to help businesses grow in the digital age."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />
      <About />
      <PageCta />
    </>
  );
}
