import React from "react";

export default function WorkItem({ image, title, description, isDarkMode, projectId }) {
  const handleCaseStudyClick = () => {
    // Use window.location.href for full page reload
    window.location.href = `/case-study/${projectId}`;
  };

  return (
    <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
      <div className="work-item-image">
        <img src={image} alt={`${title} project showcase`} />
      </div>
      <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
        {title}
      </h3>
      <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
        {description}
      </p>
      <button 
        className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}
        onClick={handleCaseStudyClick}
      >
        Read case study
      </button>
    </div>
  );
}
