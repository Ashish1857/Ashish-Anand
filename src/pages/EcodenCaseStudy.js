import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {
	ECODEN_PROBLEMS,
	ECODEN_GOAL,
	ECODEN_PROCESS,
	ECODEN_HERO_IMAGE,
	ECODEN_TITLE,
	ECODEN_DESCRIPTION
} from '../constant';

export default function EcodenCaseStudy() {
	return (
		<CaseStudy
			heroImage={ECODEN_HERO_IMAGE}
			title={ECODEN_TITLE}
			description={ECODEN_DESCRIPTION}
			problemsData={ECODEN_PROBLEMS}
			goalData={ECODEN_GOAL}
			processData={ECODEN_PROCESS}
		/>
	);
}
