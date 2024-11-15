import React, { useState, useEffect } from 'react';
import './styles/BackToTopButton.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
        ↑ Back to Top
      </button>
    )
  );
};

export default BackToTopButton;