import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams hook
import './styles/FeaturedPost.css';

const FeaturedPost = () => {
  const { id } = useParams();  // Get the 'id' parameter from the URL

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://api.example.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };
    if (id) {
      fetchPost();  // Only fetch if 'id' is available
    }
  }, [id]);  // Only re-run when 'id' changes

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default FeaturedPost;
