import React, { useState, useRef, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import SpaceBackground from "../components/SpaceBackground";
import LightModeBackground from "../components/LightModeBackground";
import "../styles/Navigation.css";
import "../styles/Animations.css";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [draggedElement, setDraggedElement] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState({});
  const [mousePositions, setMousePositions] = useState([]);
  const [throwVelocity, setThrowVelocity] = useState({ x: 0, y: 0 });
  const skillsContainerRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    document.body.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  const handleMouseDown = (e, skillId) => {
    e.preventDefault();
    e.stopPropagation();
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    setDraggedElement(skillId);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setMousePositions([{ x: e.clientX, y: e.clientY, time: Date.now() }]);
    
    element.style.zIndex = '1000';
    element.style.transition = 'none';
    element.style.cursor = 'grabbing';
    element.style.transform = 'translate3d(0,0,0)';
  };

  return (
    <SpaceBackground isDarkMode={isDarkMode}>
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

          <div className="skills-container" ref={skillsContainerRef}>
            <div 
              className={`skill-tag illustration ${isAnimating.illustration ? 'bouncing' : ''}`}
              data-skill-id="illustration"
              onMouseDown={(e) => handleMouseDown(e, 'illustration')}
            >
              <span className="icon">🎨</span>
              Illustration
            </div>
            <div 
              className={`skill-tag prototyping ${isAnimating.prototyping ? 'bouncing' : ''}`}
              data-skill-id="prototyping"
              onMouseDown={(e) => handleMouseDown(e, 'prototyping')}
            >
              <span className="icon">📱</span>
              Prototyping
            </div>
            <div 
              className={`skill-tag html-css ${isAnimating.htmlcss ? 'bouncing' : ''}`}
              data-skill-id="htmlcss"
              onMouseDown={(e) => handleMouseDown(e, 'htmlcss')}
            >
              <span className="icon">💻</span>
              HTML & CSS
            </div>
            <div 
              className={`skill-tag ux-ui ${isAnimating.uxui ? 'bouncing' : ''}`}
              data-skill-id="uxui"
              onMouseDown={(e) => handleMouseDown(e, 'uxui')}
            >
              <span className="icon">🎭</span>
              UX / UI
            </div>
            <div 
              className={`skill-tag info-architecture ${isAnimating.infoarch ? 'bouncing' : ''}`}
              data-skill-id="infoarch"
              onMouseDown={(e) => handleMouseDown(e, 'infoarch')}
            >
              <span className="icon">🏗️</span>
              Info Architecture
            </div>
            <div 
              className={`skill-tag site-maps ${isAnimating.sitemaps ? 'bouncing' : ''}`}
              data-skill-id="sitemaps"
              onMouseDown={(e) => handleMouseDown(e, 'sitemaps')}
            >
              <span className="icon">🗺️</span>
              Site Maps
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className={`featured-work-section ${!isDarkMode ? 'light-mode' : ''}`}>
        <div className="featured-work-container" style={{ margin: '0 auto', maxWidth: '90%' }}>
          <h2 className={`featured-work-title ${!isDarkMode ? 'light-mode' : ''}`}>
            Featured Work
          </h2>
          
          <div className="work-list">
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <div className="work-item-image">
                <img src="/erp.png" alt="ERPNext project showcase" />
              </div>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                ERPNext
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                I worked on redesigning core web pages of ERPNext an open-source ERP system focusing on usability improvements and visual consistency.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
            
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <div className="work-item-image">
                {/* Image will be added here later */}
              </div>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                Clevertap
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                Designed visually engaging pages to support CleverTap's customer engagement goals.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
            
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <div className="work-item-image">
                {/* Image will be added here later */}
              </div>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                Ecoden
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                Visual design for a smart home app that makes connected living effortless.
              </p>
              <button className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}>
                Read case study
              </button>
            </div>
            
            <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
              <div className="work-item-image">
                {/* Image will be added here later */}
              </div>
              <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
                Asign.art
              </h3>
              <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
                Crafted clean, expressive web designs to elevate artists' presence on the Asign platform.
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
