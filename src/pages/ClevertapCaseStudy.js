import React from 'react';
import CaseStudy from '../components/CaseStudy';

const CLEVERTAP_PROBLEMS = [
	{
		id: 'visual-communication',
		title: 'Lack of visual communication',
		description:
			'The existing pages had no visual graphics or diagrams to help users understand the product or its functionality at a glance.',
		frame: '/clevertap-problem-visual.png',
	},
	{
		id: 'outdated-ui',
		title: 'Outdated user interface',
		description:
			"The UI felt outdated and didn't reflect the current product quality or brand identity.",
		frame: '/clevertap-problem-ui.png',
	},
	{
		id: 'inconsistent-structure',
		title: 'Inconsistent page structure',
		description:
			'Many product pages lacked visual and structural consistency, leading to a disjointed experience across the site',
		frame: '/clevertap-problem-structure.png',
	},
];

export default function ClevertapCaseStudy() {
	return (
		<CaseStudy
			heroImage="/clevertap.png"
			title="Clevertap"
			description="CleverTap Is A Customer Engagement Platform That Helps Brands Build Personalized User Experiences. I Designed The Graphics And Visuals For Key Product Pages Like RenderMax And Intellimend, Helping Users Quickly Understand Complex Product Features Through Clarity-Focused Visuals."
			problemsData={CLEVERTAP_PROBLEMS}
		/>
	);
}
