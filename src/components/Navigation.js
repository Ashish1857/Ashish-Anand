import React from "react";

const NAV_ICONS = [
  { src: "/Home.png", alt: "Home" },
  { src: "/present.png", alt: "Presentation" },
  { src: "/Docs.png", alt: "Documents" }
];

export default function Navigation() {
  return (
    <div className="nav-border">
      <div className="nav-content">
        {NAV_ICONS.map((icon, index) => (
          <div key={index} className="nav-icon">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
        <div className="nav-separator"></div>
        
        <div className="spotify-icon">
          <img src="/spotify.png" alt="Spotify" />
        </div>
      </div>
    </div>
  );
}
