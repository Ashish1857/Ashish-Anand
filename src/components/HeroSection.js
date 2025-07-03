import React from "react";
import LightModeBackground from "./LightModeBackground";
import ThemeToggle from "./ThemeToggle";

export default function HeroSection({ isDarkMode, toggleTheme }) {
  return (
    <div className="main-content" style={{
      backgroundImage: isDarkMode ? 'url(/stars.png)' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      {!isDarkMode && <LightModeBackground />}
      
      <div className="text-content">
        <div className="hello-row">
          <h1 className={`hello-text ${!isDarkMode ? 'light-mode' : ''}`}>Hello</h1>
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
        
        <div className="subtitle-row">
          <h2 className={`subtitle-text ${!isDarkMode ? 'light-mode' : ''}`}>
            I'm <span className="highlight">Pratiksha</span> a
          </h2>
          
          <div className={`product-designer-row ${!isDarkMode ? 'light-mode' : ''}`}>
            Product Designer
            <div className="profile-image">
              <img src={`${isDarkMode ? "/profile.png" : "/profile_light.png"}`} alt="Pratiksha" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
