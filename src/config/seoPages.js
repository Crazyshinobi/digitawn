import { services } from '../data/services';
import { blogPosts } from '../data/blog';

/** Static route SEO (path → meta) */
export const staticSeo = {
  '/': {
    title: 'Digitawn Solutions | Digital Marketing & Web Development Agency',
    description:
      'Grow your business with Digitawn — lead generation, digital marketing, web & app development, and custom software. Free consultation. Based in Noida, serving clients worldwide.',
    keywords:
      'digital marketing agency, lead generation, web development, app development, SEO, Noida, India, startup marketing',
  },
  '/about': {
    title: 'About Us | Digitawn Solutions',
    description:
      'Learn about Digitawn Solutions — a growth-focused agency helping startups scale with marketing, design, and engineering expertise.',
    keywords: 'about digitawn, digital agency team, startup growth partner',
  },
  '/services': {
    title: 'Our Services | Digitawn Solutions',
    description:
      'Explore Digitawn services: lead generation, digital marketing, software development, web development, mobile apps, and social media management.',
    keywords: 'digital marketing services, web development services, lead generation agency',
  },
  '/work': {
    title: 'Portfolio & Case Studies | Digitawn Solutions',
    description:
      'See how Digitawn helps clients achieve measurable results — lead growth, web platforms, SaaS launches, and social media scale-ups.',
    keywords: 'digital agency portfolio, marketing case studies, web development projects',
  },
  '/blog': {
    title: 'Blog & Insights | Digitawn Solutions',
    description:
      'Expert insights on web development, AI in design, digital marketing trends, and growth strategies from the Digitawn team.',
    keywords: 'digital marketing blog, web development blog, SEO tips',
  },
  '/testimonials': {
    title: 'Client Testimonials | Digitawn Solutions',
    description:
      'Read what clients say about working with Digitawn Solutions — real reviews from founders and marketing leaders.',
    keywords: 'digitawn reviews, client testimonials, agency reviews',
  },
  '/process': {
    title: 'Our Process | How We Work | Digitawn Solutions',
    description:
      'Discover our 4-step process: discovery, strategy, execution, and scale. Transparent timelines and dedicated project managers.',
    keywords: 'agency process, project workflow, digital project management',
  },
  '/industries': {
    title: 'Industries We Serve | Digitawn Solutions',
    description:
      'Digitawn delivers tailored digital solutions for e-commerce, healthcare, real estate, ed-tech, logistics, and 14+ industries.',
    keywords: 'industry digital solutions, ecommerce development, healthcare apps',
  },
  '/careers': {
    title: 'Careers | Join Digitawn Solutions',
    description:
      'Join Digitawn Solutions — open roles in digital marketing, React development, full-stack engineering, and UI/UX design.',
    keywords: 'digitawn careers, digital marketing jobs Noida, react developer jobs',
  },
  '/faq': {
    title: 'FAQ | Digitawn Solutions',
    description:
      'Frequently asked questions about Digitawn services, pricing, timelines, support, and working with our team.',
    keywords: 'digitawn FAQ, agency pricing, project timeline',
  },
  '/contact': {
    title: 'Contact Us | Digitawn Solutions',
    description:
      'Contact Digitawn Solutions for a free consultation. Email digitawn.solutions@gmail.com or call +91-7581 822 822. Response within 24 hours.',
    keywords: 'contact digitawn, digital agency contact, free consultation',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Digitawn Solutions',
    description: 'Digitawn Solutions privacy policy — how we collect, use, and protect your personal information.',
    robots: 'noindex, follow',
  },
  '/terms': {
    title: 'Terms & Conditions | Digitawn Solutions',
    description: 'Terms and conditions for using Digitawn Solutions website and services.',
    robots: 'noindex, follow',
  },
  '/refund-policy': {
    title: 'Refund & Cancellation Policy | Digitawn Solutions',
    description: 'Refund and cancellation policy for Digitawn Solutions projects and services.',
    robots: 'noindex, follow',
  },
};

export function getServiceSeo(slug) {
  const s = services.find(x => x.slug === slug);
  if (!s) return null;
  return {
    title: `${s.title} Services | Digitawn Solutions`,
    description: `${s.desc} ${s.overview}`.slice(0, 160),
    keywords: `${s.title.toLowerCase()}, ${s.tags.join(', ')}, digitawn services`,
  };
}

export function getBlogSeo(slug) {
  const p = blogPosts.find(x => x.slug === slug);
  if (!p) return null;
  return {
    title: `${p.title} | Digitawn Blog`,
    description: p.excerpt.slice(0, 160),
    keywords: `${p.tag}, web development, digital marketing, digitawn blog`,
    ogType: 'article',
  };
}

/** All paths for sitemap generation */
export function getAllSitemapPaths() {
  const staticPaths = Object.keys(staticSeo).filter(
    p => !staticSeo[p].robots?.includes('noindex')
  );
  const servicePaths = services.map(s => `/services/${s.slug}`);
  const blogPaths = blogPosts.map(p => `/blog/${p.slug}`);
  return [...staticPaths, ...servicePaths, ...blogPaths];
}
