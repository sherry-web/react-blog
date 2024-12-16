import React from 'react';
import PropTypes from 'prop-types'; 
import './styles/FeaturedPosts.css';

const FeaturedPost = ({ posts = [] }) => ( 
  <section className="featured-posts">
    <h2>Featured Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="featured-post">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <img src={post.image} alt={post.title} className="featured-post-image" />
        </li>
      ))}
    </ul>
  </section>
);

// Prop validation
FeaturedPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string, // Description for each post
      image: PropTypes.string, // Image for each post
    })
  ),
};

export default FeaturedPost;
