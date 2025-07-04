import React from "react";
import CaseStudy from "../components/CaseStudy";
import {
	ERPNEXT_PROBLEMS,
	ERPNEXT_USER_BASE,
	ERPNEXT_GOAL,
	ERPNEXT_PROCESS,
	ERPNEXT_HERO_IMAGE,
	ERPNEXT_TITLE,
	ERPNEXT_DESCRIPTION
} from "../constant";

const ERPNEXT_REGIONAL_PROPS = {
	heroImage: "/erp_next_regional_hero.png",
	title: "ERPNext (Regional page)",
	description:
		"ERPNext’s Regional Page Showcases Official Partners From Different Countries. I Was Responsible For Designing The UAE-Specific Page, Ensuring It Followed ERPNext’s Visual Standards While Maintaining Clarity And Flexibility For Different Partner Layouts.",
	problemsData: [
		{
			id: "regional-1",
			title: "Visually consistent layout",
			description:
				"Maintain a visually consistent layout regardless of how many partner logos (2, 3 or more) were present",
			frame: "/erp_regional_problem1.png"
		},
		{
			id: "regional-2",
			title: "Narrow layout constraints",
			description:
				"Follow ERPNext’s narrow layout constraints while creating a flexible and clean design",
			frame: "/erp_regional_problem2.png"
		},
		{
			id: "regional-3",
			title: "Responsive & consistent",
			description:
				"Focused on making the pages fully responsive while maintaining visual and layout consistency across all screen sizes."
		}
	],
	goalData: {
		description:
			"The goal for the UAE regional page (frappe.io/erpnext/sa) was to create a localized version that fits the needs of the UAE market while staying true to Frappe’s overall brand and design standards. Since Frappe works with partners from different regions like the UAE and Europe, it was important to adjust the copy to match the tone and expectations of each audience. For the UAE page, we focused on keeping the design consistent with other regional pages and planned for future translation into Arabic to make it more accessible to local users."
		// No image property for regional page goal section
	},
	processData: [
		{
			content:
				"For the UAE regional page (frappe.io/erpnext/sa), I collaborated closely with the Director to refine region-specific copy that would resonate with the local audience, while staying true to Frappe’s voice. Alongside the Engineering team, I guided the structure, responsive design, and dynamic elements of the page. Throughout, I ensured the content and visuals remained consistent with Frappe’s overall brand standards."
		}
	]
};

export default function ERPNextCaseStudy() {
	const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);
	React.useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const handleChange = () => setIsMobile(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return (
		<>
			<CaseStudy
				heroImage={isMobile ? "/erp_mobile.png" : ERPNEXT_HERO_IMAGE}
				showHeroImage={true}
				title={ERPNEXT_TITLE}
				description={ERPNEXT_DESCRIPTION}
				problemsData={ERPNEXT_PROBLEMS}
				isUserBase={1}
				userBaseData={ERPNEXT_USER_BASE}
				goalData={ERPNEXT_GOAL}
				processData={ERPNEXT_PROCESS}
			/>
			<CaseStudy
				heroImage={ERPNEXT_REGIONAL_PROPS.heroImage}
				showHeroImage={false}
				title={ERPNEXT_REGIONAL_PROPS.title}
				description={ERPNEXT_REGIONAL_PROPS.description}
				problemsData={ERPNEXT_REGIONAL_PROPS.problemsData}
				goalData={ERPNEXT_REGIONAL_PROPS.goalData}
				processData={ERPNEXT_REGIONAL_PROPS.processData}
			/>
		</>
	);
}
