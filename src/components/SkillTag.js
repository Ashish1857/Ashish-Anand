import React from "react";

export default function SkillTag({ 
  id, 
  icon, 
  title, 
  isAnimating, 
  onMouseDown 
}) {
  return (
    <div 
      className={`skill-tag ${id} ${isAnimating ? 'bouncing' : ''}`}
      data-skill-id={id}
      onMouseDown={onMouseDown}
    >
      <span className="icon">{icon}</span>
      {title}
    </div>
  );
}
