import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Testimonials from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Client Stories"
        title="What Our"
        highlight="Clients Say"
        subtitle="Real feedback from founders and teams we've helped grow."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Testimonials' }]}
      />
      <Testimonials showHeader={false} />
      <PageCta />
    </>
  );
}
