import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Process from '../components/Process';

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="Our"
        highlight="Simple Process"
        subtitle="From discovery to measurable results — a clear path to growth with full transparency."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Process' }]}
      />
      <Process showHeader={false} />
      <PageCta />
    </>
  );
}
