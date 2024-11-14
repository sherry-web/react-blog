import React from 'react';
import AuthorBio from './AuthorBio';
import './styles/BlogPost.css';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <AuthorBio author={post.author} />
    </div>
  );
}

export default BlogPost;
