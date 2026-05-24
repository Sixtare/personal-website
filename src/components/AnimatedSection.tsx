"use client";

import { useEffect, useRef, ReactNode } from "react";
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

  useEffect(() => {
    let translateX = 0;
    let translateY = 0;

    switch (direction) {
      case "left":
        translateX = -50;
        break;
      case "right":
        translateX = 50;
        break;
      case "top":
        translateY = -50;
        break;
      case "bottom":
        translateY = 50;
        break;
    }

    anime({
      targets: sectionRef.current,
      translateX: [translateX, 0],
      translateY: [translateY, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: delay,
    });
  }, [direction, delay]);

  return (
    <Tag 
      ref={sectionRef} 
      className={`opacity-0 ${className}`}
      data-purpose={dataPurpose}
    >
      {children}
    </Tag>
  );
}
