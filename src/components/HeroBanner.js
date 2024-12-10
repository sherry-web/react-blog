import React from 'react';
import './styles/HeroBanner.css';

const HeroBanner = ({ title, subtitle, styleType }) => {
  const bannerClass = styleType === 'primary' ? 'hero-banner' : 'welcome-message';

  return (
    <div className={bannerClass}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default HeroBanner;
