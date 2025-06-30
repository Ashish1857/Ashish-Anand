import React from "react";

export default function StarField() {
  return (
    <>
      <style>{`
        .stars-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .star {
          position: absolute;
          background: #60a5fa;
          border-radius: 50%;
          animation: twinkle 1.5s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
        
        /* Individual star positions and sizes - increased diameters */
        .star:nth-child(1) { top: 15%; left: 10%; width: 6px; height: 6px; animation-delay: 0s; }
        .star:nth-child(2) { top: 25%; left: 85%; width: 5px; height: 5px; animation-delay: 0.5s; }
        .star:nth-child(3) { top: 45%; left: 20%; width: 8px; height: 8px; animation-delay: 1s; }
        .star:nth-child(4) { top: 65%; left: 75%; width: 5px; height: 5px; animation-delay: 1.5s; }
        .star:nth-child(5) { top: 80%; left: 15%; width: 6px; height: 6px; animation-delay: 2s; }
        .star:nth-child(6) { top: 30%; left: 60%; width: 5px; height: 5px; animation-delay: 2.5s; }
        .star:nth-child(7) { top: 55%; left: 40%; width: 6px; height: 6px; animation-delay: 0.8s; }
        .star:nth-child(8) { top: 20%; left: 45%; width: 5px; height: 5px; animation-delay: 1.3s; }
        .star:nth-child(9) { top: 70%; left: 90%; width: 8px; height: 8px; animation-delay: 1.8s; }
        .star:nth-child(10) { top: 40%; left: 5%; width: 5px; height: 5px; animation-delay: 0.3s; }
        .star:nth-child(11) { top: 85%; left: 50%; width: 6px; height: 6px; animation-delay: 2.3s; }
        .star:nth-child(12) { top: 10%; left: 70%; width: 5px; height: 5px; animation-delay: 1.1s; }
        .star:nth-child(13) { top: 60%; left: 25%; width: 6px; height: 6px; animation-delay: 1.6s; }
        .star:nth-child(14) { top: 35%; left: 80%; width: 5px; height: 5px; animation-delay: 2.1s; }
        .star:nth-child(15) { top: 75%; left: 35%; width: 8px; height: 8px; animation-delay: 0.6s; }
        .star:nth-child(16) { top: 12%; left: 30%; width: 5px; height: 5px; animation-delay: 1.9s; }
        .star:nth-child(17) { top: 48%; left: 85%; width: 6px; height: 6px; animation-delay: 0.4s; }
        .star:nth-child(18) { top: 72%; left: 10%; width: 5px; height: 5px; animation-delay: 2.7s; }
        .star:nth-child(19) { top: 28%; left: 25%; width: 8px; height: 8px; animation-delay: 1.2s; }
        .star:nth-child(20) { top: 90%; left: 70%; width: 5px; height: 5px; animation-delay: 0.9s; }
        .star:nth-child(21) { top: 18%; left: 55%; width: 6px; height: 6px; animation-delay: 2.4s; }
        .star:nth-child(22) { top: 52%; left: 65%; width: 5px; height: 5px; animation-delay: 0.7s; }
        .star:nth-child(23) { top: 78%; left: 85%; width: 6px; height: 6px; animation-delay: 1.7s; }
        .star:nth-child(24) { top: 38%; left: 15%; width: 5px; height: 5px; animation-delay: 2.2s; }
        .star:nth-child(25) { top: 65%; left: 45%; width: 8px; height: 8px; animation-delay: 0.1s; }
        .star:nth-child(26) { top: 8%; left: 90%; width: 5px; height: 5px; animation-delay: 1.4s; }
        .star:nth-child(27) { top: 42%; left: 75%; width: 6px; height: 6px; animation-delay: 2.6s; }
        .star:nth-child(28) { top: 88%; left: 25%; width: 5px; height: 5px; animation-delay: 0.2s; }
        .star:nth-child(29) { top: 22%; left: 35%; width: 6px; height: 6px; animation-delay: 1.5s; }
        .star:nth-child(30) { top: 58%; left: 95%; width: 5px; height: 5px; animation-delay: 2.8s; }
        
        /* Additional stars for 120 total - with larger sizes */
        .star:nth-child(n+31) { 
          width: 6px; 
          height: 6px; 
        }
        .star:nth-child(4n+31) { 
          width: 8px; 
          height: 8px; 
        }
      `}</style>
      
      <div className="stars-bg">
        {Array.from({ length: 120 }, (_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
    </>
  );
}
