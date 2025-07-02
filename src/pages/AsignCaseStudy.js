import React from 'react';
import CaseStudy from '../components/CaseStudy';
import {
	ASIGN_PROBLEMS,
	ASIGN_USER_BASE,
	ASIGN_GOAL,
	ASIGN_PROCESS,
	ASIGN_HERO_IMAGE,
	ASIGN_TITLE,
	ASIGN_DESCRIPTION
} from '../constant';

export default function AsignCaseStudy() {
	return (
		<CaseStudy
			heroImage={ASIGN_HERO_IMAGE}
			title={ASIGN_TITLE}
			description={ASIGN_DESCRIPTION}
			problemsData={ASIGN_PROBLEMS}
			isUserBase={1}
			userBaseData={ASIGN_USER_BASE}
			goalData={ASIGN_GOAL}
			processData={ASIGN_PROCESS}
		/>
	);
}
