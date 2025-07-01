import React from "react";

export default function LightModeBackground() {
  return (
    <>
      <style>{`
        .light-mode-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }
        
        .white-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-image: url('/white-background.png');
          background-size: cover;
          background-position: top center;
          background-repeat: no-repeat;
        }
        
        .cloud-left {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 250px;
          height: 150px;
          background-image: url('/cloud.png');
          background-size: contain;
          background-repeat: no-repeat;
          animation: float-cloud1 25s ease-in-out infinite;
        }
        
        .cloud-right {
          position: absolute;
          top: 15%;
          right: 5%;
          width: 220px;
          height: 130px;
          background-image: url('/cloud2.png');
          background-size: contain;
          background-repeat: no-repeat;
          animation: float-cloud2 30s ease-in-out infinite;
        }
        
        @keyframes float-cloud1 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(25px) translateY(-15px); }
          50% { transform: translateX(-20px) translateY(10px); }
          75% { transform: translateX(15px) translateY(-8px); }
        }
        
        @keyframes float-cloud2 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          20% { transform: translateX(-30px) translateY(12px); }
          40% { transform: translateX(20px) translateY(-18px); }
          60% { transform: translateX(-15px) translateY(8px); }
          80% { transform: translateX(10px) translateY(-10px); }
        }
      `}</style>
      
      <div className="light-mode-bg">
        <div className="white-background"></div>
        <div className="cloud-left"></div>
        <div className="cloud-right"></div>
      </div>
    </>
  );
}
