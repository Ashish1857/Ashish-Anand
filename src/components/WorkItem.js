import React from "react";

export default function WorkItem({ image, title, description, isDarkMode }) {
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
      <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
        Read case study
      </button>
    </div>
  );
}
