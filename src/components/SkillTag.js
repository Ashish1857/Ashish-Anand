import React from "react";

export default function SkillTag({ 
  id, 
  icon, 
  title, 
  isAnimating, 
  onMouseDown 
}) {
  return (
    <li
      className={`skill-tag${isAnimating ? " bouncing" : ""} ${id}`}
      onMouseDown={onMouseDown}
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      {icon}
      <p>{title}</p>
    </li>
  );
}
