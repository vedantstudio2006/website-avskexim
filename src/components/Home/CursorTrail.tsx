import React, { useEffect, useRef } from 'react';

const CIRCLE_COUNT = 20;

// Define which selectors should trigger which sizes
const HOVER_MAP: Record<string, number> = {
  'H1': 100,
  'H2': 100,
  '.number': 50,
  '.country-name': 40,
  '.hero-btn': 60,
  '.contactName': 100,
  'P': 30 // optional: add if you want paragraphs to react too
};

const Cursor: React.FC = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const circleData = useRef(Array.from({ length: CIRCLE_COUNT }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    // AUTOMATIC HOVER DETECTION
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !cursorRef.current) return;

      // Check for Tag Name (e.g., H1, H2) or Class
      const matchedSelector = Object.keys(HOVER_MAP).find(selector => 
        target.matches(selector)
      );

      if (matchedSelector) {
        const size = HOVER_MAP[matchedSelector];
        cursorRef.current.classList.add('active');
        cursorRef.current.style.setProperty('--cursor-size', `${size}px`);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const matchedSelector = Object.keys(HOVER_MAP).find(selector => 
        target.matches(selector)
      );

      if (matchedSelector && cursorRef.current) {
        cursorRef.current.classList.remove('active');
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    let animationFrameId: number;
    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(CIRCLE_COUNT - index) / CIRCLE_COUNT})`;

        const data = circleData.current[index];
        data.x = x;
        data.y = y;

        const nextCircleData = circleData.current[index + 1] || circleData.current[0];
        x += (nextCircleData.x - x) * 0.3;
        y += (nextCircleData.y - y) * 0.3;
      });
      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      {Array.from({ length: CIRCLE_COUNT }).map((_, i) => (
        <div
          key={i}
          className="circle"
          ref={(el) => { circlesRef.current[i] = el; }}
        />
      ))}
    </div>
  );
};

export default Cursor;