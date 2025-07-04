import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import SpaceBackground from "./SpaceBackground";
import ProblemsSection from "./ProblemsSection";
import UserBaseSection from "./UserBaseSection";
import GoalSection from "./GoalSection";
import ProcessSection from "./ProcessSection";
import "../styles/CaseStudy.css";

export default function CaseStudy({ 
  heroImage,
  showHeroImage = true,
  title = "Clevertap", 
  description = "CleverTap Is A Customer Engagement Platform That Helps Brands Build Personalized User Experiences. I Designed The Graphics And Visuals For Key Product Pages Like RenderMax And Intellimend, Helping Users Quickly Understand Complex Product Features Through Clarity-Focused Visuals." ,
  problemsData = [],
  isUserBase = 0,
  userBaseData = [],
  goalData = null,
  processData = null
}) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    document.body.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  useEffect(() => {
    // Listen for theme changes from other components
    const handleStorageChange = (e) => {
      if (e.key === 'portfolioTheme') {
        setIsDarkMode(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <SpaceBackground isDarkMode={isDarkMode}>
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div
        className={`case-study ${!isDarkMode ? 'light-mode' : ''}`}
        style={{
          paddingTop: showHeroImage ? undefined : 0,
          marginTop: showHeroImage ? undefined : 0
        }}
      >
        {/* Hero Image Section */}
        {showHeroImage && heroImage ? (
          <div className="case-study-hero">
            <img src={heroImage} alt={`${title} case study`} />
          </div>
        ) : null}
        
        {/* Content Section */}
        <div
          className="case-study-content"
          style={
            !showHeroImage
              ? { marginTop: 0, paddingTop: 0 }
              : undefined
          }
        >
          <h1 className={`case-study-title ${!isDarkMode ? 'light-mode' : ''}`}>
            {showHeroImage ? <>Introduction : {title}</> : title}
          </h1>
          <p className={`case-study-description ${!isDarkMode ? 'light-mode' : ''}`}>
            {description}
          </p>
        </div>
        
        {/* Problems Section */}
        <ProblemsSection isDarkMode={isDarkMode} problemsData={problemsData} />
        
        {/* User Base Section - conditionally rendered */}
        {isUserBase === 1 && (
          <UserBaseSection isDarkMode={isDarkMode} userBaseData={userBaseData} />
        )}
        
        {/* Goal Section */}
        {goalData && (
          <GoalSection isDarkMode={isDarkMode} goalData={goalData} />
        )}
        
        {/* Process Section */}
        {processData && (
          <ProcessSection isDarkMode={isDarkMode} processData={processData} />
        )}
      </div>
    </SpaceBackground>
  );
}
