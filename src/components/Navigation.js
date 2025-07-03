import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation({ isDarkMode, setIsDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isInFeaturedSection, setIsInFeaturedSection] = useState(false);

  const handleHomeClick = () => {
    const currentPath = location.pathname;

    if (currentPath.includes("/case-study/")) {
      // Get the case study ID from the URL or sessionStorage
      const caseStudyId =
        currentPath.split("/case-study/")[1] ||
        sessionStorage.getItem("lastViewedCaseStudy");
      navigate("/", { state: { scrollToCaseStudy: caseStudyId } });
    } else {
      // If already on home, scroll to top
      if (currentPath === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    }
  };

  const handleFeaturedClick = () => {
    if (location.pathname === "/") {
      // If on home page, scroll to featured work section
      const featuredSection = document.querySelector(".featured-work-section");
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on case study page, navigate to home and then scroll
      navigate("/", { state: { scrollToFeatured: true } });
    }
  };

  // Add handler for Docs.png click
  const handleDocsClick = (e) => {
    e.preventDefault();
    window.open("/Pratiksha_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  // Add handler for Spotify icon click
  const handleSpotifyClick = (e) => {
    e.preventDefault();
    window.open(
      "https://open.spotify.com/playlist/6Cw2XewLunDuHN33sv1mw5?si=rIPl7kOMTkK1s8pa6fB50g&pi=X_l94713SFudq",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const featuredSection = document.querySelector(".featured-work-section");
        const mainContent = document.querySelector(".main-content");

        if (featuredSection && mainContent) {
          const featuredRect = featuredSection.getBoundingClientRect();

          // Check if we're in the featured section
          const isInFeaturedSection =
            featuredRect.top <= window.innerHeight / 2 &&
            featuredRect.bottom >= window.innerHeight / 2;

          // Priority: if in featured section, show featured active
          // Otherwise, if in main section, show home active
          setIsInFeaturedSection(isInFeaturedSection);
        }
      } else {
        setIsInFeaturedSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isCaseStudyPage = location.pathname.includes("/case-study/");
  const isHomePage = location.pathname === "/";
  const shouldShowHomeActive = isHomePage && !isInFeaturedSection;
  const shouldShowPresentActive =
    (isHomePage && isInFeaturedSection) || isCaseStudyPage;

  return (
    <div className="nav-border">
      <div className="nav-content">
        <div
          className={`nav-icon ${shouldShowHomeActive ? "active" : ""}`}
          onClick={handleHomeClick}
          style={{ cursor: "pointer" }}
        >
          <img src="/Home.png" alt="Home" />
        </div>

        <div
          className={`nav-icon ${shouldShowPresentActive ? "active" : ""}`}
          onClick={handleFeaturedClick}
          style={{ cursor: "pointer" }}
        >
          <img src="/present.png" alt="Presentation" />
        </div>
        <div
          className="nav-icon featured-nav"
          onClick={handleDocsClick}
          style={{ cursor: "pointer" }}
        >
          <img src="/Docs.png" alt="Documents" />
        </div>

        <div
          className="spotify-icon"
          onClick={handleSpotifyClick}
          style={{ cursor: "pointer" }}
        >
          <img src="/spotify.png" alt="Spotify" />
        </div>
      </div>
    </div>
  );
}
