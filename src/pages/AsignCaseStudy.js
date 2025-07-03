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
	const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);
	React.useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const handleChange = () => setIsMobile(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return (
		<CaseStudy
			heroImage={isMobile ? "/asign_mobile.png" : ASIGN_HERO_IMAGE}
			title={ASIGN_TITLE}
			description={ASIGN_DESCRIPTION}
			problemsData={ASIGN_PROBLEMS}
			isUserBase={1}
			userBaseData={ASIGN_USER_BASE}
			goalData={ASIGN_GOAL}
			processData={ASIGN_PROCESS}
		>
			<div className="goal-image">
				<img
					className="goal-image-display"
					src={isMobile ? "/asign_mobile.png" : ASIGN_GOAL.image}
					alt="Asign Goal"
				/>
			</div>
		</CaseStudy>
	);
}
