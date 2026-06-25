"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import anime from "animejs";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
  dataPurpose?: string;
  as?: React.ElementType;
}

export default function AnimatedSection({ 
  children, 
  direction = "left", 
  delay = 0,
  className = "",
  dataPurpose,
  as: Tag = "section"
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  let initialTransform = "";
  if (!isAnimated) {
    switch (direction) {
      case "left":
        initialTransform = "translateX(-50px)";
        break;
      case "right":
        initialTransform = "translateX(50px)";
        break;
      case "top":
        initialTransform = "translateY(-50px)";
        break;
      case "bottom":
        initialTransform = "translateY(50px)";
        break;
    }
  }

  useEffect(() => {
    const animConfig: any = {
      targets: sectionRef.current,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: delay,
      complete: () => {
        setIsAnimated(true);
      }
    };

    if (direction === "left" || direction === "right") {
      const startX = direction === "left" ? -50 : 50;
      animConfig.translateX = [startX, 0];
    } else {
      const startY = direction === "top" ? -50 : 50;
      animConfig.translateY = [startY, 0];
    }

    anime(animConfig);
  }, [direction, delay]);

  return (
    <Tag 
      ref={sectionRef} 
      className={className}
      style={isAnimated ? {} : {
        opacity: 0,
        transform: initialTransform,
        willChange: "transform, opacity"
      }}
      data-purpose={dataPurpose}
    >
      {children}
    </Tag>
  );
}
