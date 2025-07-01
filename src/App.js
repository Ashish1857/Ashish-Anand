import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './layout/Portfolio';
import ERPNextCaseStudy from './pages/ERPNextCaseStudy';
import CaseStudy from './components/CaseStudy';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-study/erpnext" element={<ERPNextCaseStudy />} />
          <Route 
            path="/case-study/clevertap" 
            element={
              <CaseStudy 
                heroImage="/clevertap.png"
                title="Clevertap"
                description="CleverTap Is A Customer Engagement Platform That Helps Brands Build Personalized User Experiences. I Designed The Graphics And Visuals For Key Product Pages Like RenderMax And Intellimend, Helping Users Quickly Understand Complex Product Features Through Clarity-Focused Visuals."
                isDarkMode={isDarkMode}
              />
            } 
          />
          <Route 
            path="/case-study/ecoden" 
            element={
              <CaseStudy 
                heroImage="/ecoden.png"
                title="Ecoden"
                description="Ecoden Is A Smart Home App That Lets Users Control Devices Like ACs, Fans, And Lights From Their Phones. The Client Wanted A Design That Felt Modern, Subtle, And Intuitive — With A 'Glassy, Home-Like' Aesthetic And User-Friendly Interactions. The Goal Was To Create A Seamless Experience That Felt Both High-Tech And Comforting."
                isDarkMode={isDarkMode}
              />
            } 
          />
          <Route 
            path="/case-study/asign" 
            element={
              <CaseStudy 
                heroImage="/asign.png"
                title="Asign.art"
                description="Asign.Art Is A Digital Platform Where Users Can Buy, Sell, And Showcase Art. The Goal Of The Project Was To Design A Minimal, Elegant Website That Would Appeal To Both Artists And Art Collectors, Making Browsing And Transacting As Seamless As Possible."
                isDarkMode={isDarkMode}
              />
            } 
          />
          {/* Add more case study routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
