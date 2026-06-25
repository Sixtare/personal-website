"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const [state, setState] = useState<{
    pathname: string;
    currentChildren: React.ReactNode;
    prevChildren: React.ReactNode | null;
    direction: "forward" | "backward";
  }>({
    pathname,
    currentChildren: children,
    prevChildren: null,
    direction: "forward",
  });

  const currentRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);


  // Synchronous state update during render to prevent layout flashes
  if (pathname !== state.pathname) {
    const isGoingToProject = pathname.startsWith("/projects");
    const isGoingHome = pathname === "/";
    
    let direction: "forward" | "backward" = "forward";
    if (isGoingHome && state.pathname.startsWith("/projects")) {
      direction = "backward";
    } else if (isGoingToProject && state.pathname === "/") {
      direction = "forward";
    }

    setState({
      pathname,
      currentChildren: children,
      prevChildren: state.currentChildren,
      direction,
    });
  }

  useEffect(() => {
    if (state.prevChildren) {
      // Scroll to top immediately when navigation/transition starts
      window.scrollTo(0, 0);

      const duration = 900;
      const easing = "cubicBezier(0.25, 1, 0.5, 1)";
      
      anime.remove(prevRef.current);
      anime.remove(currentRef.current);

      if (state.direction === "forward") {
        anime({
          targets: prevRef.current,
          translateX: ["0vw", "-100vw"],
          opacity: [1, 0],
          easing,
          duration,
        });

        anime({
          targets: currentRef.current,
          translateX: ["100vw", "0vw"],
          opacity: [0, 1],
          easing,
          duration,
          complete: () => {
            setState(prev => ({ ...prev, prevChildren: null }));
          }
        });
      } else {
        anime({
          targets: prevRef.current,
          translateX: ["0vw", "100vw"],
          opacity: [1, 0],
          easing,
          duration,
        });

        anime({
          targets: currentRef.current,
          translateX: ["-100vw", "0vw"],
          opacity: [0, 1],
          easing,
          duration,
          complete: () => {
            setState(prev => ({ ...prev, prevChildren: null }));
          }
        });
      }
    }
  }, [state.prevChildren, state.direction]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {state.prevChildren && (
        <div 
          ref={prevRef} 
          className="absolute inset-x-0 top-0 w-full min-h-screen z-10 overflow-hidden"
          style={{ willChange: "transform, opacity" }}
        >
          {state.prevChildren}
        </div>
      )}
      <div 
        ref={currentRef} 
        className="relative w-full min-h-screen z-20"
        style={{ 
          transform: state.prevChildren 
            ? `translateX(${state.direction === "forward" ? "100vw" : "-100vw"})` 
            : "none",
          opacity: state.prevChildren ? 0 : 1,
          willChange: state.prevChildren ? "transform, opacity" : "auto"
        }}
      >
        {state.currentChildren}
      </div>
    </div>
  );
}
