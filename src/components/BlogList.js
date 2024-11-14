import React from 'react';
import './styles/BlogList.css';
import BlogCard from './BlogCard';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          title={post.title}
          content={post.content}
          image={require(`./assets/images/blog post img 0${index + 1}.png`)} // Correct path and import
        />
      ))}
    </div>
  );
};

export default BlogList;