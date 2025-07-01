import React from "react";

export default function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="moon-container">
          <img 
            src={isDarkMode ? '/dark-toggle.png' : '/light-toggle.png'} 
            alt="Theme Toggle"
            style={{ 
              width: '144px', 
              height: '78px', 
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
}
