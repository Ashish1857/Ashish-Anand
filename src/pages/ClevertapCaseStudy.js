import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {
	CLEVERTAP_PROBLEMS,
	CLEVERTAP_GOAL,
	CLEVERTAP_PROCESS,
	CLEVERTAP_HERO_IMAGE,
	CLEVERTAP_TITLE,
	CLEVERTAP_DESCRIPTION
} from '../constant';

export default function ClevertapCaseStudy() {
	return (
		<CaseStudy
			heroImage={CLEVERTAP_HERO_IMAGE}
			title={CLEVERTAP_TITLE}
			description={CLEVERTAP_DESCRIPTION}
			problemsData={CLEVERTAP_PROBLEMS}
			goalData={CLEVERTAP_GOAL}
			processData={CLEVERTAP_PROCESS}
		/>
	);
}
