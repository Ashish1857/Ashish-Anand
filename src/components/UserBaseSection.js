import React from 'react';
import '../styles/UserBaseSection.css';

export default function UserBaseSection({ isDarkMode, userBaseData = [] }) {
  if (!userBaseData || userBaseData.length === 0) {
    return null;
  }

  return (
    <div className={`user-base-section ${!isDarkMode ? 'light-mode' : ''}`}>
      <div className="user-base-container">
        <h2 className={`user-base-title ${!isDarkMode ? 'light-mode' : ''}`}>
          User base
        </h2>
        
        <div className="user-base-grid">
          {userBaseData.map((user, index) => (
            <div
              key={index}
              className={`user-base-card ${!isDarkMode ? 'light-mode' : ''}`}
            >
              <div className="user-icon">
                <span>{user.icon}</span>
              </div>
              <h3 className={`user-title ${!isDarkMode ? 'light-mode' : ''}`}>
                {user.title}
              </h3>
              <p className={`user-description ${!isDarkMode ? 'light-mode' : ''}`}>
                {user.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
