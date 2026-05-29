import { Link } from 'react-router-dom';
import './Blog.css';
import Animate from './Animate';
import { blogPosts } from '../data/blog';

const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Blog({ showHeader = true }) {
  return (
    <section id="blog" className="blog">
      <div className="blog-blob blog-blob--tl" aria-hidden="true" />
      <div className="blog-blob blog-blob--br" aria-hidden="true" />

      <div className="container">
        {showHeader && (
          <Animate variant="fade-up" className="section-header blog-header">
            <span className="section-label">Our Blogs</span>
            <h2 className="section-title">
              Blogs to Unlock <span className="gradient-text">Fresh Approaches</span>
            </h2>
            <p className="section-subtitle">
              Stay ahead with insights, trends, and expert perspectives from the Digitawn team.
            </p>
          </Animate>
        )}

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <Animate key={post.slug} variant="fade-up" delay={`${i * 120}ms`} className="blog-card">
              <Link to={`/blog/${post.slug}`} className="blog-card__img-wrap" aria-label={`Read: ${post.title}`}>
                <img src={post.img} alt={post.alt} loading="lazy" />
                <span className="blog-card__tag">{post.tag}</span>
              </Link>

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
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="blog-card__excerpt">{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="blog-card__cta">
                  Read More
                  <span className="blog-cta-arrow"><ArrowIcon /></span>
                </Link>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
