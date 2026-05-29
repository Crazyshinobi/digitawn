import { useLocation, useParams } from 'react-router-dom';
import Seo from './Seo';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  CONTACT,
} from '../config/site';
import { staticSeo, getServiceSeo, getBlogSeo } from '../config/seoPages';
import { getServiceBySlug } from '../data/services';
import { getPostBySlug } from '../data/blog';
import { faqs } from '../data/faq';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DEFAULT_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT.locality,
    addressRegion: CONTACT.region,
    addressCountry: CONTACT.country,
  },
  areaServed: 'Worldwide',
  priceRange: '$$',
};

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@type': 'Organization', name: SITE_NAME },
  };
}

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}

function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.overview || service.desc,
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    areaServed: 'Worldwide',
    serviceType: service.title,
  };
}

function blogPostSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
    },
    datePublished: '2025-04-06',
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export default function RouteSeo() {
  const { pathname } = useLocation();
  const { slug } = useParams();

  // Unknown routes (React Router * still has real pathname)
  const isServiceRoute = pathname.startsWith('/services/');
  const isBlogRoute = pathname.startsWith('/blog/');

  if (isServiceRoute && slug && !getServiceBySlug(slug)) {
    return (
      <Seo
        title="Page Not Found | Digitawn Solutions"
        description="The requested service page could not be found."
        path={pathname}
        noindex
        jsonLd={[organizationSchema]}
      />
    );
  }

  if (isBlogRoute && slug && !getPostBySlug(slug)) {
    return (
      <Seo
        title="Page Not Found | Digitawn Solutions"
        description="The requested article could not be found."
        path={pathname}
        noindex
        jsonLd={[organizationSchema]}
      />
    );
  }

  if (!staticSeo[pathname] && !isServiceRoute && !isBlogRoute) {
    return (
      <Seo
        title="Page Not Found | Digitawn Solutions"
        description="The page you are looking for could not be found."
        path={pathname}
        noindex
        jsonLd={[organizationSchema]}
      />
    );
  }

  let meta = staticSeo[pathname];
  let jsonLd = [organizationSchema];
  let ogType = 'website';

  if (pathname === '/') {
    jsonLd = [organizationSchema, websiteSchema()];
  }

  if (pathname === '/faq') {
    jsonLd = [organizationSchema, faqSchema()];
  }

  if (isServiceRoute && slug) {
    const service = getServiceBySlug(slug);
    meta = getServiceSeo(slug);
    if (service) {
      jsonLd = [
        organizationSchema,
        serviceSchema(service),
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.title },
        ]),
      ];
    }
  }

  if (isBlogRoute && slug) {
    const post = getPostBySlug(slug);
    meta = getBlogSeo(slug);
    ogType = 'article';
    if (post) {
      jsonLd = [
        organizationSchema,
        blogPostSchema(post),
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title },
        ]),
      ];
    }
  }

  if (!meta) {
    meta = {
      title: `${SITE_NAME} | Digital Marketing Agency`,
      description: DEFAULT_DESCRIPTION,
    };
  }

  return (
    <Seo
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      path={pathname}
      robots={meta.robots}
      ogType={meta.ogType || ogType}
      jsonLd={jsonLd}
      noindex={Boolean(meta.robots?.includes('noindex'))}
    />
  );
}
