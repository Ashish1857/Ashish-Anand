import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {
  ECODEN_PROBLEMS,
  ECODEN_GOAL,
  ECODEN_PROCESS,
  ECODEN_HERO_IMAGE,
  ECODEN_TITLE,
  ECODEN_DESCRIPTION
} from "../constant";

export default function EcodenCaseStudy() {
  const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <CaseStudy
      heroImage={isMobile ? "/ecoden_mobile.png" : ECODEN_HERO_IMAGE}
      title={ECODEN_TITLE}
      description={ECODEN_DESCRIPTION}
      problemsData={ECODEN_PROBLEMS}
      goalData={ECODEN_GOAL}
      processData={ECODEN_PROCESS}
    />
  );
}
