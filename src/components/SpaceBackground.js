import React from "react";

export default function SpaceBackground({ children, isDarkMode = true }) {
  return (
    <>
      <style>{`
        .space-bg {
          background: #000000;
          width: 100%;
          min-height: 100vh;
          position: relative;
          transition: background 0.5s ease;
          display: flex;
          justify-content: center;
        }
        
        .content-wrapper {
          background: ${isDarkMode ? '#18181B' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'};
          width: 100%;
          max-width: 1440px;
          min-height: 100vh;
          position: relative;
          transition: background 0.5s ease;
        }
      `}</style>
      
      <div className="space-bg">
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </>
  );
}
