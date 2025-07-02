import React from 'react';
import CaseStudy from '../components/CaseStudy';

const ASIGN_PROBLEMS = [
  {
    id: 'correct-images',
    title: 'Choosing correct images',
    description: 'Ensure every image used matched the site\'s aesthetic, even when the client provided poor-quality or cluttered visuals',
    frame: '/asign-problem-images.png'
  },
  {
    id: 'consistency',
    title: 'Consistency',
    description: 'Design a sleek and minimal UI that didn\'t distract from the artwork itself',
    frame: '/asign-problem-consistency.png'
  }
];

export default function AsignCaseStudy() {
  return (
    <CaseStudy 
      heroImage="/asign.png"
      title="Asign.art"
      description="Asign.Art Is A Digital Platform Where Users Can Buy, Sell, And Showcase Art. The Goal Of The Project Was To Design A Minimal, Elegant Website That Would Appeal To Both Artists And Art Collectors, Making Browsing And Transacting As Seamless As Possible."
      problemsData={ASIGN_PROBLEMS}
    />
  );
}
