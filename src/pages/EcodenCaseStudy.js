import React from 'react';
import CaseStudy from '../components/CaseStudy';

const ECODEN_PROBLEMS = [
	{
		id: 'confusing-ux',
		title: 'Confusing UX flows',
		description:
			'Users often struggled to find what they were looking for due to confusing UX flows',
		frame: '/ecoden-problem-ux.png',
	},
	{
		id: 'poor-navigation',
		title: 'Poor Navigation',
		description:
			'Existing smart home apps (like Google Home, Tapo, Wipro) had cluttered UIs, with text-heavy screens and poor navigation',
		frame: '/ecoden-problem-navigation.png',
	},
	{
		id: 'deep-research',
		title: 'Deep Research',
		description:
			'Understand industry standards by studying 10-12 smart home apps like Tapo, Wipro, and Google Home',
		frame: '/ecoden-problem-research.png',
	},
];

export default function EcodenCaseStudy() {
	return (
		<CaseStudy
			heroImage="/ecoden.png"
			title="Ecoden"
			description="Ecoden Is A Smart Home App That Lets Users Control Devices Like ACs, Fans, And Lights From Their Phones. The Client Wanted A Design That Felt Modern, Subtle, And Intuitive — With A 'Glassy, Home-Like' Aesthetic And User-Friendly Interactions. The Goal Was To Create A Seamless Experience That Felt Both High-Tech And Comforting."
			problemsData={ECODEN_PROBLEMS}
		/>
	);
}
