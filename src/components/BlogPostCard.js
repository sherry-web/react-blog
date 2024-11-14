import React from 'react';
import './styles/BlogPostCard.css';


const BlogPostCard = ({ post }) => {
  const { title, description, date, author, imageUrl } = post;
  return (
    <div className="blog-post-card">
      <img src={imageUrl} alt={title} className="post-image" />
      <div className="post-info">
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>
        <div className="post-meta">
          <span>{author}</span> | <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;