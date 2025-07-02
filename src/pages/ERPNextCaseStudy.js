import React, { useState } from "react";
import CaseStudy from "../components/CaseStudy";

const ERPNEXT_PROBLEMS = [
	{
		id: "features",
		title: "Difficult to understand features",
		description: "Old or missing screenshots, making it hard for users to understand features",
		frame: "/erpnext-problem-features.png",
		sticker: "/Sad_annoyed.png",
	},
	{
		id: "ui",
		title: "Outdated UI",
		description: "Outdated UI that didn't reflect the product's current capabilities",
		frame: "/erpnext-problem-ui.png",
	},
	{
		id: "engagement",
		title: "User Engagement",
		description: "Low user engagement due to lack of visual appeal and clarity",
		frame: "/erpnext-problem-engagement.png",
	},
];

export default function ERPNextCaseStudy() {
	const [isDarkMode] = useState(true);

	React.useEffect(() => {
		document.body.className = isDarkMode ? "" : "light-mode";
	}, [isDarkMode]);

	return (
		<CaseStudy
			heroImage="/erp.png"
			title="ERPNext"
			description="I Led The End-To-End Visual Redesign Of All ERPNext Module Pages, And Redesigned The Product Pages Like Frappe CRM, Learning, Lending Etc. Aligning Them With Frappe's Updated Design Standards. This Included Integrating New Product Screenshots And Ensuring Consistency Across Layouts, Typography, And UI Elements. I Worked Independently As The Sole Designer On The Project, Collaborating Closely With The Content Team To Ensure The Copy Complemented The Visual Hierarchy And Overall Aesthetic."
			problemsData={ERPNEXT_PROBLEMS}
			isDarkMode={isDarkMode}
		/>
	);
}
