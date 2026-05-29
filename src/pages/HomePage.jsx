import Hero from '../components/Hero';
import PageCta from '../components/PageCta';
import {
  HomeTrustBar,
  HomeWhyUs,
  HomeServicesGrid,
  HomeProcess,
  HomeFeaturedWork,
  HomeTestimonials,
  HomeIndustries,
  HomeQuickLinks,
} from '../components/home/HomeSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeTrustBar />
      <HomeWhyUs />
      <HomeServicesGrid />
      <HomeProcess />
      <HomeFeaturedWork />
      <HomeTestimonials />
      <HomeIndustries />
      <HomeQuickLinks />
      <PageCta />
    </>
  );
}
