import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {
	CLEVERTAP_PROBLEMS,
	CLEVERTAP_GOAL,
	CLEVERTAP_PROCESS,
	CLEVERTAP_HERO_IMAGE,
	CLEVERTAP_TITLE,
	CLEVERTAP_DESCRIPTION
} from "../constant";

export default function ClevertapCaseStudy() {
	const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);
	React.useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const handleChange = () => setIsMobile(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return (
		<CaseStudy
			heroImage={isMobile ? "/clevertap_mobile.png" : CLEVERTAP_HERO_IMAGE}
			title={CLEVERTAP_TITLE}
			description={CLEVERTAP_DESCRIPTION}
			problemsData={CLEVERTAP_PROBLEMS}
			goalData={CLEVERTAP_GOAL}
			processData={CLEVERTAP_PROCESS}
		/>
	);
}
