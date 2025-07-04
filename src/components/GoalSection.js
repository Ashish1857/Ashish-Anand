import React from 'react';
import '../styles/GoalSection.css';

export default function GoalSection({ isDarkMode, goalData }) {
  if (!goalData) return null;

  // Only show image if present and not empty
  const hasImage = goalData.image && goalData.image.trim() !== "";

  return (
    <div className={`goal-section ${!isDarkMode ? 'light-mode' : ''}`}>
      <h2 className={`goal-title ${!isDarkMode ? 'light-mode' : ''}`}>Goal</h2>
      <p className={`goal-description ${!isDarkMode ? 'light-mode' : ''}`}>
        {goalData.description}
      </p>
      {hasImage && (
        <div className="goal-image" style={{ marginTop: "2.5rem" }}>
          <img
            className="goal-image-display"
            src={goalData.image}
            alt="Goal illustration"
          />
        </div>
      )}
    </div>
  );
}
