import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing: easeOutQuad
            const easeProgress = percentage * (2 - percentage);

            setCount(easeProgress * value);

            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration]);

  const displayCount = Number.isInteger(value) 
    ? Math.floor(count).toLocaleString() 
    : count.toFixed(1);

  return (
    <span ref={elementRef} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white">
      {displayCount}
      <span className="text-indigo-400">{suffix}</span>
    </span>
  );
};

export default AnimatedCounter;
