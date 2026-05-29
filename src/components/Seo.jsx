import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../config/site';

function upsertMeta(key, content, type = 'name') {
  if (!content) return;
  const selector = type === 'property'
    ? `meta[property="${key}"]`
    : `meta[name="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (type === 'property') el.setAttribute('property', key);
    else el.setAttribute('name', key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  keywords,
  path = '/',
  robots = 'index, follow',
  ogType = 'website',
  ogImage,
  jsonLd = [],
  noindex = false,
}) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = ogImage?.startsWith('http') ? ogImage : `${SITE_URL}${ogImage || DEFAULT_OG_IMAGE}`;
  const robotsContent = noindex ? 'noindex, follow' : robots;

  const jsonLdKey = JSON.stringify(jsonLd);

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = 'en';

    upsertMeta('description', description);
    upsertMeta('keywords', keywords);
    upsertMeta('robots', robotsContent);
    upsertMeta('googlebot', robotsContent);
    upsertMeta('author', SITE_NAME);

    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:type', ogType, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:locale', 'en_IN', 'property');

    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);

    upsertLink('canonical', canonical);

    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean);
    upsertJsonLd('seo-jsonld-primary', schemas[0] || null);
    upsertJsonLd('seo-jsonld-secondary', schemas[1] || null);
    upsertJsonLd('seo-jsonld-tertiary', schemas[2] || null);
  }, [title, description, keywords, canonical, image, ogType, robotsContent, jsonLdKey]);

  return null;
}
