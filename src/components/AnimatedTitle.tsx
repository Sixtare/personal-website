"use client";

import { useRef, useState } from "react";
import anime from "animejs";

export default function AnimatedTitle() {
  const [typedText, setTypedText] = useState("");
  const isHovered = useRef(false);
  const fullName = "Gilla";
  const textObj = useRef({ length: 0 });
  const animRef = useRef<anime.AnimeInstance | null>(null);

  const onMouseEnter = () => {
    isHovered.current = true;
    if (animRef.current) animRef.current.pause();
    
    animRef.current = anime({
      targets: textObj.current,
      length: fullName.length,
      round: 1,
      duration: 450,
      easing: 'linear',
      update: () => {
        setTypedText(fullName.substring(0, textObj.current.length));
      }
    });
  };

  const onMouseLeave = () => {
    isHovered.current = false;
    if (animRef.current) animRef.current.pause();
    
    animRef.current = anime({
      targets: textObj.current,
      length: 0,
      round: 1,
      duration: 400,
      easing: 'linear',
      update: () => {
        setTypedText(fullName.substring(0, textObj.current.length));
      }
    });
  };

  return (
    <h1 
      className="text-4xl font-bold tracking-tight flex items-center cursor-default h-[40px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>Matheus</span>
      
      {typedText.length > 0 && (
        <span className="ml-[10px]">{typedText}</span>
      )}
      
      <span className="animate-blink font-light text-text-dim mx-[4px]">_</span>
      
      <span>Sestare</span>
    </h1>
  );
}
