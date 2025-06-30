import React, { useState } from "react";
import SpaceBackground from "../components/SpaceBackground";
import StarField from "../components/StarField";
import "../styles/Navigation.css";
import "../styles/Animations.css";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    document.body.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  return (
    <SpaceBackground isDarkMode={isDarkMode}>
      <StarField />
      <div className="nav-border">
        <div className="nav-content">
          <div className="nav-icon">
            <img src="/Home.png" alt="Home" />
          </div>
          <div className="nav-icon">
            <img src="/Docs.png" alt="Documents" />
          </div>
          <div className="nav-icon">
            <img src="/present.png" alt="Presentation" />
          </div>
          
          <div className="nav-separator"></div>
          
          <div className="spotify-icon">
            <img src="/spotify.png" alt="Spotify" />
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="text-content">
          <div className="hello-row">
            <h1 className={`hello-text ${!isDarkMode ? 'light-mode' : ''}`}>Hello</h1>
            
            <div className="theme-toggle" onClick={toggleTheme}>
              <div className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="moon-container">
                  <div className="moon-image"></div>
                  <div className="toggle-stars">
                    <div className="toggle-star"></div>
                    <div className="toggle-star"></div>
                    <div className="toggle-star"></div>
                    <div className="toggle-star"></div>
                    <div className="toggle-star"></div>
                  </div>
                </div>
                <div className="sun-indicator"></div>
              </div>
            </div>
          </div>
          
          <div className="subtitle-row">
            <h2 className={`subtitle-text ${!isDarkMode ? 'light-mode' : ''}`}>
              I'm <span className="highlight">Pratiksha</span> a
            </h2>
            
            <div className={`product-designer-row ${!isDarkMode ? 'light-mode' : ''}`}>
              Product Designer
              <div className="profile-image">
                <img src="/profile.png" alt="Pratiksha" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="what-do-section">
        <div className="what-do-content">
          <h2 className={`what-do-title ${!isDarkMode ? 'light-mode' : ''}`}>
            So, what do I even do?
          </h2>
          
          <div className="description-text">
            <p className={`description ${!isDarkMode ? 'light-mode' : ''}`}>
              Hi, I'm Pratiksha A Self-Taught Product Designer Based In Mumbai, India, Crafting Apps And Websites With A Love For Gradients And A Passion For Travel. I'm Currently Open To Work, So Feel Free To Reach Out At Chettiarpratiksha@Gmail.Com.
            </p>
          </div>

          <div className="skills-container">
            <div className="skill-tag illustration">
              <span className="icon">🎨</span>
              Illustration
            </div>
            <div className="skill-tag prototyping">
              <span className="icon">📱</span>
              Prototyping
            </div>
            <div className="skill-tag html-css">
              <span className="icon">💻</span>
              HTML & CSS
            </div>
            <div className="skill-tag ux-ui">
              <span className="icon">🎭</span>
              UX / UI
            </div>
            <div className="skill-tag info-architecture">
              <span className="icon">🏗️</span>
              Info Architecture
            </div>
            <div className="skill-tag site-maps">
              <span className="icon">🗺️</span>
              Site Maps
            </div>
          </div>
        </div>
      </div>
    </SpaceBackground>
  );
}
