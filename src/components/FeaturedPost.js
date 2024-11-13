import React from 'react';
import './styles/FeaturedPost.css';

function FeaturedPost({ post }) {
  if (!post) return null; // Return null if post is undefined
  
  return (
    <div className="featured-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default FeaturedPost;