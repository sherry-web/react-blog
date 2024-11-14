import React from 'react';
import './styles/AuthorBio.css';

function AuthorBio({ author }) {
  return (
    <div className="author-bio">
      <img src={author.image} alt={`${author.name}'s profile`} />
      <h3>{author.name}</h3>
      <p>{author.bio}</p>
    </div>
  );
}

export default AuthorBio;
