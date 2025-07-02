import React, { useState } from 'react';
import '../styles/ProblemsSection.css';

export default function ProblemsSection({ isDarkMode, problemsData = [] }) {
  const [activeProblems, setActiveProblems] = useState(problemsData[0]?.id || '');

  if (!problemsData || problemsData.length === 0) {
    return null;
  }

  return (
    <div className={`problems-section ${!isDarkMode ? 'light-mode' : ''}`}>
      <div className="problems-container">
        <h2 className={`problems-title ${!isDarkMode ? 'light-mode' : ''}`}>
          Problems
        </h2>
        
        <div className="problems-content">
          {/* Left side - Problems list */}
          <div className="problems-list">
            {problemsData.map((problem) => (
              <div
                key={problem.id}
                className={`problem-item ${
                  activeProblems === problem.id ? 'active' : 'inactive'
                } ${!isDarkMode ? 'light-mode' : ''}`}
                onMouseEnter={() => setActiveProblems(problem.id)}
                onClick={() => setActiveProblems(problem.id)}
              >
                <div className="problem-text">
                  <h3 className={`problem-title ${!isDarkMode ? 'light-mode' : ''}`}>
                    {problem.title}
                  </h3>
                  <p className={`problem-description ${!isDarkMode ? 'light-mode' : ''}`}>
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Frame display */}
          <div className="problems-frame">
            <div className="frame-container">
              <img 
                src={problemsData.find(p => p.id === activeProblems)?.frame || problemsData[0]?.frame} 
                alt={`${activeProblems} problem illustration`}
                className="problem-frame-image"
                height={364}
                width={"667px"}
              />
              {problemsData.find(p => p.id === activeProblems)?.sticker && (
                <div className="frame-sticker">
                  <img 
                    src={problemsData.find(p => p.id === activeProblems)?.sticker} 
                    alt="Problem sticker" 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
