import React from "react";
import Navigation from "./Navigation";
import SpaceBackground from "./SpaceBackground";
import "../styles/CaseStudy.css";

export default function CaseStudy({ 
  heroImage = "/clevertap.png", 
  title = "Clevertap", 
  description = "CleverTap Is A Customer Engagement Platform That Helps Brands Build Personalized User Experiences. I Designed The Graphics And Visuals For Key Product Pages Like RenderMax And Intellimend, Helping Users Quickly Understand Complex Product Features Through Clarity-Focused Visuals.", 
  isDarkMode 
}) {
  return (
    <SpaceBackground isDarkMode={isDarkMode}>
      <Navigation />
      <div className={`case-study ${!isDarkMode ? 'light-mode' : ''}`}>
        {/* Hero Image Section */}
        <div className="case-study-hero">
          <img src={heroImage} alt={`${title} case study`} />
        </div>
        
        {/* Content Section */}
        <div className="case-study-content">
          <h1 className={`case-study-title ${!isDarkMode ? 'light-mode' : ''}`}>
            Introduction : {title}
          </h1>
          <p className={`case-study-description ${!isDarkMode ? 'light-mode' : ''}`}>
            {description}
          </p>
        </div>
      </div>
    </SpaceBackground>
  );
}
