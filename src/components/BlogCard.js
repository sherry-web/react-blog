import React from 'react';
import './styles/BlogCard.css';

const BlogCard = ({ title, content, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <h3 className="blog-title">{title}</h3>
      <p className="blog-content">{content}</p>
    </div>
  );
};

export default BlogCard;