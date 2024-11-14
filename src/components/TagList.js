import React from 'react';
import './styles/TagList.css';

function TagList({ tags, onTagClick }) {
  if (!tags || tags.length === 0) {
    return <div>No tags available</div>;
  }

  return (
    <div className="tag-list">
      {tags.map(tag => (
        <span key={tag} onClick={() => onTagClick(tag)}>
          #{tag}
        </span>
      ))}
    </div>
  );
}
