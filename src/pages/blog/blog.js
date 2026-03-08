import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../../constants/blog";
import "../../styles/blog.css";

const BlogCard = ({ post, isVisible, delay }) => (
  <div
    className={`blog-card ${isVisible ? "visible" : ""}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-card-category">{post.category}</span>
      </div>
    </Link>
    <div className="blog-card-body">
      <div className="blog-card-meta">
        <span className="blog-card-date">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
        <span className="blog-card-dot">&middot;</span>
        <span className="blog-card-read-time">{post.readTime}</span>
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h3 className="blog-card-title">{post.title}</h3>
      </Link>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="blog-card-link">
        Read More
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [gridRef, gridVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
          <nav className="blog-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog & Tips</span>
          </nav>
          <div className="blog-hero-content">
            <span className="blog-hero-badge">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Blog & Tips
            </span>
            <h1 className="blog-hero-title">Driving Tips & Road Safety</h1>
            <p className="blog-hero-subtitle">
              Expert advice, maintenance tips, and safety guides to keep you and your car safe on Jaipur's roads.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-filter-section section-padding">
        <div className="container-custom">
          <div className="blog-filter-tabs">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="blog-grid" ref={gridRef}>
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                isVisible={gridVisible}
                delay={index * 100}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta section-padding">
        <div className="container-custom">
          <div className="blog-cta-card">
            <h2>Need Roadside Assistance Right Now?</h2>
            <p>Don't wait — our team is available 24/7 across Jaipur. One call and help is on the way.</p>
            <div className="blog-cta-buttons">
              <a href="tel:+919929983644" className="blog-cta-btn blog-cta-btn-primary">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91-9929983644
              </a>
              <Link to="/services" className="blog-cta-btn blog-cta-btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
