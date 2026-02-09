import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import { blogPosts } from '../blog/blogIndex';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="blog">
      <div className="blog-container">
        <h2 className="blog-title">Blog</h2>
        <p className="blog-description">Thoughts, stories, and insights from behind the lens</p>

        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="blog-post-card"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.coverImage && (
                <div className="blog-post-image">
                  <img src={post.coverImage} alt={post.title} />
                </div>
              )}
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-category">{post.category}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <button className="blog-post-read-more">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="blog-empty">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
