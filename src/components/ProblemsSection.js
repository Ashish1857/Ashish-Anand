import React, { useState } from 'react';
import '../styles/ProblemsSection.css';

export default function ProblemsSection({ isDarkMode, problemsData = [] }) {
  const [activeProblems, setActiveProblems] = useState(problemsData[0]?.id || '');

  if (!problemsData || problemsData.length === 0) {
    return null;
  }

  const activeProblem = problemsData.find(p => p.id === activeProblems);

  // Only show the right-side frame if there is a frame and at least one problem has a frame (not just the current one)
  const showFrame =
    !!activeProblem?.frame &&
    problemsData.some(p => p.frame && p.frame.trim() !== "");

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
          {showFrame ? (
            <div className="problems-frame">
              <div className="frame-container">
                <img 
                  src={activeProblem.frame}
                  alt={`${activeProblems} problem illustration`}
                  className="problem-frame-image"
                  height={364}
                  width={"667px"}
                  style={{ borderRadius: 16 }}
                />
                {activeProblem.sticker && (
                  <div className="frame-sticker">
                    <img 
                      src={activeProblem.sticker} 
                      alt="Problem sticker" 
                    />
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
