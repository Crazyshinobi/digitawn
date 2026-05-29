import blog1 from '../assets/67f2959fb9dc5blog-1.webp';
import blog2 from '../assets/67f295536ca0dblog-2.webp';

export const blogPosts = [
  {
    slug: 'web-development-statistics-2025',
    img: blog1,
    alt: 'Laptop showing web development code',
    date: '06 · Apr · 2025',
    author: 'By Admin',
    tag: 'Web Development',
    title: 'Top 80 Web Development Statistics: Must-Know Trends & Facts In 2025',
    excerpt:
      'The web development industry is developing rapidly, and you need to know what is happening to stay ahead. This section presents the stats that will assist you in making data-driven decisions and future proofing your projects.',
    content: [
      'The web development landscape in 2025 is defined by faster frameworks, AI-assisted coding, and a relentless focus on performance and accessibility. Businesses that invest in modern stacks see measurably better engagement and conversion rates.',
      'Key trends include server components, edge rendering, and design systems that scale across products. Teams are also prioritizing Core Web Vitals as a ranking and UX factor.',
      'Whether you are rebuilding a legacy site or launching something new, choosing the right architecture early saves cost and accelerates growth. Digitawn helps startups and enterprises ship resilient, SEO-ready web experiences.',
    ],
  },
  {
    slug: 'ai-in-web-design-2025',
    img: blog2,
    alt: 'AI and web design concept with HTML and CSS',
    date: '06 · Apr · 2025',
    author: 'By Admin',
    tag: 'AI & Design',
    title: "AI In Web Design: How It's Changing UX Forever In 2025",
    excerpt:
      "In 2025, artificial intelligence is not just enhancing websites — it's redefining the entire user experience (UX) ecosystem. According to Statista, the global AI market is expected to reach $305.9 billion this year, and the impact on design is profound.",
    content: [
      'AI tools now assist with layout suggestions, copy variants, and personalization at scale. Designers focus more on strategy and brand while automation handles repetitive production tasks.',
      'Personalized experiences — dynamic hero sections, recommended content, and smart forms — are becoming standard expectations rather than nice-to-haves.',
      'The best results combine human creativity with AI efficiency. At Digitawn, we use modern design workflows to deliver interfaces that feel bespoke and perform under real user load.',
    ],
  },
];

export const getPostBySlug = slug => blogPosts.find(p => p.slug === slug);
