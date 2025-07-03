import React, {useRef} from "react";
import { SKILL_TAGS } from "../constant";
import { motion, useMotionValue, useSpring } from "framer-motion";


const Skill = ({ text, className, icon, containerRef }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 50, damping: 15 });
  const springY = useSpring(y, { stiffness: 50, damping: 15 });
  const springRotate = useSpring(rotate, { stiffness: 20, damping: 10 });

  React.useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.02;
      x.set(20 * Math.cos(angle));
      y.set(20 * Math.sin(angle));
      rotate.set(10 * Math.sin(angle));
      requestAnimationFrame(animate);
    };
    animate();
  }, [x, y, rotate]);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
        cursor: "grab",
      }}
      onDrag={(event, info) => {
        rotate.set(info.delta.x); 
      }}
      className={className}
    >
      {icon}{text}
    </motion.div>
  );
};
export default function SkillTag() {
  const containerRef = useRef(null);
  return (
    <ul className="skill-list" ref={containerRef}>
      {SKILL_TAGS.map(skill => (
        <Skill
          key={skill.id}
          id={skill.id}
          className={`skill-tag ${skill.id}`}
          icon={<img src={skill.icon} alt={skill.title} style={{ width: 28, height: 28 }} />}
          text={skill.title}
          ref={containerRef}
        />
      ))}
    </ul>
    
  );
}
