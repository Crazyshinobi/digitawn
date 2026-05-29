import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Services from '../components/Services';
import CoreServices from '../components/CoreServices';
import PerformanceMarketing from '../components/PerformanceMarketing';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Services That"
        highlight="Drive Growth"
        subtitle="End-to-end digital solutions — from lead generation and marketing to full-stack development."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />
      <Services showHeader={false} />
      <PerformanceMarketing />
      <CoreServices />
      <PageCta />
    </>
  );
}
