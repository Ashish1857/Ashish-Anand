import React from 'react';
import '../styles/GoalSection.css';

export default function GoalSection({ isDarkMode, goalData }) {
  if (!goalData) {
    return null;
  }

  return (
    <div className={`goal-section ${!isDarkMode ? 'light-mode' : ''}`}>
      <div className="goal-container">
        <h2 className={`goal-title ${!isDarkMode ? 'light-mode' : ''}`}>
          Goal
        </h2>
        
        <div className="goal-content">
          <div className="goal-text">
            <p className={`goal-description ${!isDarkMode ? 'light-mode' : ''}`}>
              {goalData.description}
            </p>
          </div>
          
          <div className="goal-image">
            <img 
              src={goalData.image} 
              alt="Goal illustration"
              className="goal-image-display"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
