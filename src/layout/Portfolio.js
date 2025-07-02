/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SpaceBackground from "../components/SpaceBackground";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WorkItem from "../components/WorkItem";
import SkillTag from "../components/SkillTag";
import MoreWorkGrid from "../components/MoreWorkGrid";
import "../styles/Navigation.css";
import "../styles/Animations.css";
import "../styles/Portfolio.css";

// Constants
const WORK_ITEMS = [
  {
    id: 'erpnext',
    image: '/erp.png',
    title: 'ERPNext',
    description: 'I worked on redesigning core web pages of ERPNext an open-source ERP system focusing on usability improvements and visual consistency.'
  },
  {
    id: 'clevertap',
    image: '/clevertap.png',
    title: 'Clevertap',
    description: 'Designed visually engaging pages to support CleverTap\'s customer engagement goals.'
  },
  {
    id: 'ecoden',
    image: '/ecoden.png',
    title: 'Ecoden',
    description: 'Visual design for a smart home app that makes connected living effortless.'
  },
  {
    id: 'asign',
    image: '/asign.png',
    title: 'Asign.art',
    description: 'Crafted clean, expressive web designs to elevate artists\' presence on the Asign platform.'
  }
];

const SKILL_TAGS = [
  { id: 'illustration', icon: '🎨', title: 'Illustration' },
  { id: 'prototyping', icon: '📱', title: 'Prototyping' },
  { id: 'htmlcss', icon: '💻', title: 'HTML & CSS' },
  { id: 'uxui', icon: '🎭', title: 'UX / UI' },
  { id: 'infoarch', icon: '🏗️', title: 'Info Architecture' },
  { id: 'sitemaps', icon: '🗺️', title: 'Site Maps' }
];

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });
  const [isAnimating, setIsAnimating] = useState({});
  const skillsContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('portfolioTheme', JSON.stringify(newTheme));
  };

  React.useEffect(() => {
    document.body.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  React.useEffect(() => {
    if (location.state?.scrollToCaseStudy) {
      setTimeout(() => {
        const caseStudyId = location.state.scrollToCaseStudy;
        // Find the specific work item by its project ID
        const workItems = document.querySelectorAll('.work-item');
        let targetItem = null;
        
        workItems.forEach((item, index) => {
          if (WORK_ITEMS[index]?.id === caseStudyId) {
            targetItem = item;
          }
        });
        
        if (targetItem) {
          targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          // Fallback to featured section if specific item not found
          const featuredSection = document.querySelector('.featured-work-section');
          if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      
      // Clear the state
      window.history.replaceState({}, document.title);
    } else if (location.state?.scrollToFeatured) {
      setTimeout(() => {
        const featuredSection = document.querySelector('.featured-work-section');
        if (featuredSection) {
          featuredSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleMouseDown = (e, skillId) => {
    e.preventDefault();
    e.stopPropagation();
    const element = e.currentTarget;
    
    element.style.zIndex = '1000';
    element.style.transition = 'none';
    element.style.cursor = 'grabbing';
    element.style.transform = 'translate3d(0,0,0)';
  };

  const handleCaseStudyClick = (workId) => {
    if (workId === 'erpnext') {
      navigate('/case-study/erpnext');
    }
  };

  return (
    <SpaceBackground isDarkMode={isDarkMode}>
      <Navigation />
      <HeroSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
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
            <ul className="skill-list">
            {SKILL_TAGS.map(skill => (
              <SkillTag
                key={skill.id}
                id={skill.id}
                icon={skill.icon}
                title={skill.title}
                isAnimating={isAnimating[skill.id]}
                onMouseDown={(e) => handleMouseDown(e, skill.id)}
              />
            ))}
            </ul>
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
            {WORK_ITEMS.map(work => (
              <WorkItem
                key={work.id}
                image={work.image}
                title={work.title}
                description={work.description}
                isDarkMode={isDarkMode}
                projectId={work.id}
              />
            ))}
          </div>
        </div>
      </div>

      {/* More Work Section */}
      <div className={`more-work-section ${!isDarkMode ? 'light-mode' : ''}`}>
        <div className="more-work-container">
          <h2 className={`more-work-title ${!isDarkMode ? 'light-mode' : ''}`}>
            More Work
          </h2>
          <MoreWorkGrid isDarkMode={isDarkMode} />
        </div>
      </div>
    </SpaceBackground>
  );
}
