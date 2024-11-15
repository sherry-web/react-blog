import React from 'react';
import PropTypes from 'prop-types'; 
import './styles/FeaturedPosts.css';

const FeaturedPosts = ({ posts = [] }) => ( 
  <section className="featured-posts">
    <h2>Featured Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </section>
);

// Prop validation
FeaturedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default FeaturedPosts;
