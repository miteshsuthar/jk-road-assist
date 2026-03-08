import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";
import { BLOG_POSTS } from "../../constants/blog";
import "../../styles/blog.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [contentRef, contentVisible] = useScrollReveal();
  const [sidebarRef, sidebarVisible] = useScrollReveal();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(post.title + " — " + shareUrl)}`;

  return (
    <div className="blog-page">
      {/* Hero */}
      <section
        className="blog-detail-hero"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="blog-detail-hero-overlay" />
        <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
          <nav className="blog-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>
          <div className="blog-detail-hero-content">
            <span className="blog-card-category">{post.category}</span>
            <h1 className="blog-detail-hero-title">{post.title}</h1>
            <div className="blog-detail-hero-meta">
              <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
              <span>&middot;</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="blog-detail-section section-padding">
        <div className="container-custom">
          <div className="blog-detail-layout">
            {/* Article */}
            <article
              className={`blog-detail-content ${contentVisible ? "visible" : ""}`}
              ref={contentRef}
            >
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {/* Share */}
              <div className="blog-detail-share">
                <span>Share this article:</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn blog-share-whatsapp"
                  aria-label="Share on WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              <Link to="/blog" className="blog-back-link">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all articles
              </Link>
            </article>

            {/* Sidebar */}
            <aside
              className={`blog-detail-sidebar ${sidebarVisible ? "visible" : ""}`}
              ref={sidebarRef}
            >
              {/* Author */}
              <div className="blog-sidebar-card">
                <h4>About the Author</h4>
                <div className="blog-sidebar-author">
                  <div className="blog-sidebar-author-avatar">RJ</div>
                  <div>
                    <p className="blog-sidebar-author-name">{post.author}</p>
                    <p className="blog-sidebar-author-bio">
                      24/7 roadside assistance experts serving Jaipur and Rajasthan since day one.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="blog-sidebar-card blog-sidebar-cta">
                <h4>Need Help Right Now?</h4>
                <p>Our team is available 24/7 for roadside assistance across Jaipur.</p>
                <a href="tel:+919929983644" className="blog-sidebar-cta-btn">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +91-9929983644
                </a>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="blog-sidebar-card">
                  <h4>Related Articles</h4>
                  <div className="blog-sidebar-related">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.id}
                        to={`/blog/${rp.slug}`}
                        className="blog-sidebar-related-item"
                      >
                        <img src={rp.image} alt={rp.title} />
                        <div>
                          <p className="blog-sidebar-related-title">{rp.title}</p>
                          <span className="blog-sidebar-related-meta">{rp.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
