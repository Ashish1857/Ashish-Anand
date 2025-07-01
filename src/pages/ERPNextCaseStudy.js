import React, { useState } from "react";
import CaseStudy from "../components/CaseStudy";

export default function ERPNextCaseStudy() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  React.useEffect(() => {
    document.body.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  return (
    <CaseStudy
      heroImage="/erp.png"
      title="ERPNext"
      description="I Led The End-To-End Visual Redesign Of All ERPNext Module Pages, And Redesigned The Product Pages Like Frappe CRM, Learning, Lending Etc. Aligning Them With Frappe's Updated Design Standards. This Included Integrating New Product Screenshots And Ensuring Consistency Across Layouts, Typography, And UI Elements. I Worked Independently As The Sole Designer On The Project, Collaborating Closely With The Content Team To Ensure The Copy Complemented The Visual Hierarchy And Overall Aesthetic."
      isDarkMode={isDarkMode}
    />
  );
}
