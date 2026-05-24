"use client";

import { useRef } from "react";
import anime from "animejs";

export default function AnimatedTitle() {
  const middleNameRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const isAnimating = useRef(false);

  const onMouseEnter = () => {
    if (isAnimating.current) return;
    
    anime.timeline({
      begin: () => { isAnimating.current = true; }
    })
    .add({
      targets: middleNameRef.current,
      width: [0, 85], // adjust based on length of "Gilla"
      marginLeft: [0, 10], 
      duration: 300,
      easing: 'easeOutQuad'
    })
    .add({
      targets: lettersRef.current,
      opacity: [0, 1],
      duration: 50,
      easing: 'linear',
      delay: anime.stagger(50)
    }, '-=150');
  };

  const onMouseLeave = () => {
    anime.timeline({
      complete: () => { isAnimating.current = false; }
    })
    .add({
      targets: lettersRef.current,
      opacity: [1, 0],
      duration: 50,
      easing: 'linear',
      delay: anime.stagger(30)
    })
    .add({
      targets: middleNameRef.current,
      width: 0,
      marginLeft: 0,
      duration: 200,
      easing: 'easeInQuad'
    }, '+=50');
  };

  return (
    <h1 
      className="text-4xl font-bold tracking-tight flex items-center cursor-default h-[40px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>Matheus</span>
      <span 
        ref={middleNameRef}
        className="overflow-hidden flex items-center w-0 ml-0" 
      >
        {"Gilla".split("").map((char, index) => (
          <span 
            key={index} 
            ref={(el) => {
              if (el) lettersRef.current[index] = el;
            }}
            className="opacity-0"
          >
            {char}
          </span>
        ))}
      </span>
      <span className="ml-2.5">Sestare</span>
    </h1>
  );
}
