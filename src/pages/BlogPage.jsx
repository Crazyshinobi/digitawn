import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Our Blog"
        title="Insights to Unlock"
        highlight="Fresh Approaches"
        subtitle="Trends, strategies, and expert perspectives from the Digitawn team."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
      />
      <Blog showHeader={false} />
      <PageCta title="Have a project in mind?" subtitle="Let's turn ideas into results — reach out for a free consultation." />
    </>
  );
}
