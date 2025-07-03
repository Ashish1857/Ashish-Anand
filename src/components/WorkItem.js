import React from "react";

export default function WorkItem({ image, imageMobile, title, description, isDarkMode, projectId }) {
  const handleCaseStudyClick = () => {
    // Store the project ID in sessionStorage for navigation reference
    sessionStorage.setItem('lastViewedCaseStudy', projectId);
    window.location.href = `/case-study/${projectId}`;
  };

  // Use matchMedia for more reliable mobile detection
  const [isMobile, setIsMobile] = React.useState(typeof window !== "undefined" && window.innerWidth <= 768);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", checkMobile);
    checkMobile();
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  console.log("isMobile:", isMobile);
  // Fallback: prefer imageMobile if present and screen is <= 768px
  const imgSrc = isMobile && imageMobile ? imageMobile : image;

  return (
    <div className={`work-item ${!isDarkMode ? 'light-mode' : ''}`}>
      <div className="work-item-image">
        <img
          src={imgSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <h3 className={`work-item-title ${!isDarkMode ? 'light-mode' : ''}`}>
        {title}
      </h3>
      <p className={`work-item-description ${!isDarkMode ? 'light-mode' : ''}`}>
        {description}
      </p>
      <button 
        className={`work-item-button ${!isDarkMode ? 'light-mode' : ''}`}
        onClick={handleCaseStudyClick}
      >
        Read case study
      </button>
    </div>
  );
}
