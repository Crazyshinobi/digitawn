import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageCta from '../components/PageCta';
import Animate from '../components/Animate';
import { getPostBySlug } from '../data/blog';
import './pages.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <PageHero
        label={post.tag}
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: 'Article' },
        ]}
      />
      <section className="page-section">
        <div className="container">
          <Animate variant="fade-up">
            <div className="blog-post-hero-img">
              <img src={post.img} alt={post.alt} />
            </div>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span>{post.author}</span>
            </div>
            <div className="blog-post-body page-content">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <Link to="/blog" className="btn-outline" style={{ marginTop: 24, display: 'inline-block' }}>
              ← Back to Blog
            </Link>
          </Animate>
        </div>
      </section>
      <PageCta />
    </>
  );
}
