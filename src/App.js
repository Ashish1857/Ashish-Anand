import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './layout/Portfolio';
import ERPNextCaseStudy from './pages/ERPNextCaseStudy';
import ClevertapCaseStudy from './pages/ClevertapCaseStudy';
import EcodenCaseStudy from './pages/EcodenCaseStudy';
import AsignCaseStudy from './pages/AsignCaseStudy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-study/erpnext" element={<ERPNextCaseStudy />} />
          <Route path="/case-study/clevertap" element={<ClevertapCaseStudy />} />
          <Route path="/case-study/ecoden" element={<EcodenCaseStudy />} />
          <Route path="/case-study/asign" element={<AsignCaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
