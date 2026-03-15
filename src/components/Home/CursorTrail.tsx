import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  // Refs to track coordinates without triggering re-renders
  const coords = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>(0);

  // In TS, mutating DOM nodes with custom properties (circle.x = x) is an anti-pattern.
  // We keep their positions in a separate array.
  const numCircles = 20; // Adjust based on how many trailing circles you want
  const circlesPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: numCircles }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    // --- 1. Track Mouse Movement ---
    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- 2. Animation Loop ---
    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = ((numCircles - index) / numCircles).toString();

        circlesPositions.current[index].x = x;
        circlesPositions.current[index].y = y;

        const nextCircle = circlesPositions.current[index + 1] || circlesPositions.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestRef.current = requestAnimationFrame(animateCircles);
    };
    requestRef.current = requestAnimationFrame(animateCircles);

    // --- 3. Hover Logic ---
    const cleanupFunctions: (() => void)[] = [];

    const applyHoverEffect = (selector: string, width: number, height: number) => {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach((element) => {
        const handleMouseEnter = () => {
          if (cursorRef.current) {
            cursorRef.current.classList.add('active');
            cursorRef.current.style.width = `${width}px`;
            cursorRef.current.style.height = `${height}px`;
          }
        };

        const handleMouseLeave = () => {
          if (cursorRef.current) {
            cursorRef.current.classList.remove('active');
            cursorRef.current.style.width = '';
            cursorRef.current.style.height = '';
          }
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        cleanupFunctions.push(() => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      });
    };

    // Note: If these elements render conditionally or later in the React lifecycle, 
    // querySelectorAll might miss them.
    applyHoverEffect('h1', 100, 100);
    applyHoverEffect('h2', 100, 100);
    applyHoverEffect('.number', 50, 50);
    applyHoverEffect('.country-name', 40, 40);

    // --- 4. Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      {Array.from({ length: numCircles }).map((_, index) => (
        <div
          key={index}
          className="circle"
          // Assign each rendered div to our ref array
          ref={(el) => { circlesRef.current[index] = el; }}
          style={{ backgroundColor: 'white' }}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;