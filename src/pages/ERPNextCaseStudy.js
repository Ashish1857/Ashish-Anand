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

export default function ERPNextCaseStudy() {
	const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);
	React.useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const handleChange = () => setIsMobile(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return (
		<CaseStudy
			heroImage={isMobile ? "/erp_mobile.png" : ERPNEXT_HERO_IMAGE}
			title={ERPNEXT_TITLE}
			description={ERPNEXT_DESCRIPTION}
			problemsData={ERPNEXT_PROBLEMS}
			isUserBase={1}
			userBaseData={ERPNEXT_USER_BASE}
			goalData={ERPNEXT_GOAL}
			processData={ERPNEXT_PROCESS}
		/>
	);
}
