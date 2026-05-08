import './Blog.css';
import Animate from './Animate';
import blog1 from '../assets/67f2959fb9dc5blog-1.webp';
import blog2 from '../assets/67f295536ca0dblog-2.webp';

const posts = [
  {
    img: blog1,
    alt: 'Laptop showing web development code',
    date: '06 · Apr · 2025',
    author: 'By Admin',
    tag: 'Web Development',
    title: 'Top 80 Web Development Statistics: Must-Know Trends & Facts In 2025',
    excerpt:
      'The web development industry is developing rapidly, and you need to know what is happening to stay ahead. This section presents the stats that will assist you in making data-driven decisions and future proofing your projects.',
    href: '#',
  },
  {
    img: blog2,
    alt: 'AI and web design concept with HTML and CSS',
    date: '06 · Apr · 2025',
    author: 'By Admin',
    tag: 'AI & Design',
    title: 'AI In Web Design: How It\'s Changing UX Forever In 2025',
    excerpt:
      'In 2025, artificial intelligence is not just enhancing websites — it\'s redefining the entire user experience (UX) ecosystem. According to Statista, the global AI market is expected to reach $305.9 billion this year, and the impact on design is profound.',
    href: '#',
  },
];

// Calendar icon
const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// User icon
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Arrow icon for Read More
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Blog() {
  return (
    <section id="blog" className="blog">
      {/* background blobs */}
      <div className="blog-blob blog-blob--tl" aria-hidden="true" />
      <div className="blog-blob blog-blob--br" aria-hidden="true" />

      <div className="container">
        {/* ── Header ── */}
        <Animate variant="fade-up" className="section-header blog-header">
          <span className="section-label">Our Blogs</span>
          <h2 className="section-title">
            Blogs to Unlock <span className="gradient-text">Fresh Approaches</span>
          </h2>
          <p className="section-subtitle">
            Stay ahead with insights, trends, and expert perspectives from the Digitawn team.
          </p>
        </Animate>

        {/* ── Cards grid ── */}
        <div className="blog-grid">
          {posts.map((post, i) => (
            <Animate key={post.title} variant="fade-up" delay={`${i * 120}ms`} className="blog-card">
              {/* image */}
              <a href={post.href} className="blog-card__img-wrap" aria-label={`Read: ${post.title}`}>
                <img src={post.img} alt={post.alt} loading="lazy" />
                <span className="blog-card__tag">{post.tag}</span>
              </a>

              {/* meta */}
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-meta-item">
                    <CalIcon />
                    {post.date}
                  </span>
                  <span className="blog-meta-sep" aria-hidden="true" />
                  <span className="blog-meta-item">
                    <UserIcon />
                    {post.author}
                  </span>
                </div>

                <h3 className="blog-card__title">
                  <a href={post.href}>{post.title}</a>
                </h3>

                <p className="blog-card__excerpt">{post.excerpt}</p>

                <a href={post.href} className="blog-card__cta">
                  Read More
                  <span className="blog-cta-arrow"><ArrowIcon /></span>
                </a>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
