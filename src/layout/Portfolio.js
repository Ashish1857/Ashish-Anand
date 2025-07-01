import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
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

      {/* Featured Work Section */}
      <div className={`featured-work-section ${!isDarkMode ? 'light-mode' : ''}`}>
        <div className="featured-work-container">
          <h2 className={`featured-work-title ${!isDarkMode ? 'light-mode' : ''}`}>
            Featured Work
          </h2>
          
          <div className="work-grid">
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                ERPNext
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                I worked on improving conversion from trial users to paying users focusing on usability improvements and user experience.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
            
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                Clevertap
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                Clevertap initially manages to improve CleverTap's customer engagement goals.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
            
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                Ecoden
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                Visual design and advanced functional that humans need to reach when designing.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
            
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                Asign.art
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                Digital work experience with clients to enhance a long game and the final platform.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* More Work Section */}
      <div className={`more-work-section ${!isDarkMode ? 'light-mode' : ''}`}>
        <div className="more-work-container">
          <h2 className={`more-work-title ${!isDarkMode ? 'light-mode' : ''}`}>
            More Work
          </h2>
          
          <Box sx={{ 
            flexGrow: 1, 
            mt: 4, 
            maxWidth: '100%',
            width: '100%',
            margin: '0 auto'
          }}>
            {/* Top row */}
            <Grid container spacing={2} sx={{ height: '757px', mb: 2 }}>
              {/* Left column - two small boxes (50% width) */}
              <Grid item xs={12} md={6}>
                <Grid container spacing={2} sx={{ height: '100%' }}>
                  <Grid item xs={6} md={12} sx={{ height: { xs: '100%', md: 'calc(50% - 8px)' } }}>
                    <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                      <div className="more-work-image-placeholder"></div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={12} sx={{ height: { xs: '100%', md: 'calc(50% - 8px)' } }}>
                    <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                      <div className="more-work-image-placeholder"></div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              
              {/* Right column - tall box (50% width, 666x757) */}
              <Grid item xs={12} md={6}>
                <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '97%' }}>
                  <div className="more-work-image-placeholder"></div>
                </div>
              </Grid>
            </Grid>
            
            {/* Bottom row - two boxes with different widths */}
            <Grid container spacing={2} sx={{ height: '400px' }}>
              <Grid item xs={12} md={4}>
                <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                  <div className="more-work-image-placeholder"></div>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                  <div className="more-work-image-placeholder"></div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </SpaceBackground>
  );
}
