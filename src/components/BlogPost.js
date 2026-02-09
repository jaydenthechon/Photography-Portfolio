import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css';
import { blogPosts } from '../blog/blogIndex';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post Not Found</h2>
        <button onClick={() => navigate('/blog')}>← Back to Blog</button>
      </div>
    );
  }

  const PostContent = post.component;

  return (
    <article className="blog-post">
      <button className="blog-post-back" onClick={() => navigate('/blog')}>
        ← Back to Blog
      </button>

      {post.coverImage && (
        <div className="blog-post-header-image">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}

      <div className="blog-post-header">
        <div className="blog-post-meta">
          <span className="blog-post-date">{post.date}</span>
          <span className="blog-post-category">{post.category}</span>
        </div>
        <h1 className="blog-post-title">{post.title}</h1>
        {post.author && (
          <p className="blog-post-author">By {post.author}</p>
        )}
      </div>

      <div className="blog-post-content">
        <PostContent />
      </div>
    </article>
  );
};

export default BlogPost;
