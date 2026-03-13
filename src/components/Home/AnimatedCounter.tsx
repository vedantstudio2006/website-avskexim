import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  label: string;
}

export default function AnimatedCounter({ target, label }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  

  const counterRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let currentCount = 0;
          const speed = 200;
          const increment = target / speed;

          const updateCounter = () => {
            currentCount += increment;
            if (currentCount < target) {
              setCount(Math.ceil(currentCount));
              timeoutId = setTimeout(updateCounter, 20);
            } else {
              setCount(target);
            }
          };

          updateCounter();
          
          if (counterRef.current) observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [target]);

  return (
    <li ref={counterRef}>
      <span className="counter number">{count}</span>%
      <br /> 
      <span className="stat-subtitle">{label}</span>
    </li>
  );
}