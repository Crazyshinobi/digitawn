import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Industries from '../components/Industries';

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Solutions Across"
        highlight="Every Sector"
        subtitle="Tailored digital strategies for e-commerce, healthcare, fintech, and more."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />
      <Industries showHeader={false} />
      <PageCta />
    </>
  );
}
