/** Base URL for canonical links, OG images, and sitemap. Set VITE_SITE_URL in production. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : 'https://digitawn.com')
).replace(/\/$/, '');

export const SITE_NAME = 'Digitawn Solutions';
export const SITE_TAGLINE = 'Digital Marketing & Development Agency';
export const DEFAULT_DESCRIPTION =
  'Digitawn Solutions is a digital marketing and development agency in Noida, India. We offer lead generation, SEO, web & app development, software, and social media services for startups worldwide.';
export const DEFAULT_OG_IMAGE = '/og-image.png';
export const CONTACT = {
  email: 'digitawn.solutions@gmail.com',
  phone: '+91-7581822822',
  phoneDisplay: '+91-7581 822 822',
  locality: 'Noida',
  region: 'Uttar Pradesh',
  country: 'IN',
};
