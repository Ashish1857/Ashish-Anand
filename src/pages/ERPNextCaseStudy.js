import React, { useState } from "react";
import CaseStudy from "../components/CaseStudy";
import {
	ERPNEXT_PROBLEMS,
	ERPNEXT_USER_BASE,
	ERPNEXT_GOAL,
	ERPNEXT_PROCESS,
	ERPNEXT_DESCRIPTION,
	ERPNEXT_HERO_IMAGE,
	ERPNEXT_TITLE
} from "../constant";

export default function ERPNextCaseStudy() {
	const [isDarkMode] = useState(true);

	React.useEffect(() => {
		document.body.className = isDarkMode ? "" : "light-mode";
	}, [isDarkMode]);

	return (
		<CaseStudy
			heroImage={ERPNEXT_HERO_IMAGE}
			title={ERPNEXT_TITLE}
			description={ERPNEXT_DESCRIPTION}
			problemsData={ERPNEXT_PROBLEMS}
			isUserBase={1}
			userBaseData={ERPNEXT_USER_BASE}
			goalData={ERPNEXT_GOAL}
			processData={ERPNEXT_PROCESS}
			isDarkMode={isDarkMode}
		/>
	);
}
