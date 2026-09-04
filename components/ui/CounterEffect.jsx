"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function CounterEffect({ value, duration = 2000 }) {
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progressValue = Math.min((timestamp - start) / duration, 1);
      
      // easeOutExpo animation
      const easeProgress = progressValue === 1 ? 1 : 1 - Math.pow(2, -10 * progressValue);
      
      setProgress(easeProgress);
      
      if (progressValue < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, duration]);

  // Split string by numbers so we can animate multiple numbers in a string (e.g., "30-80", "IP65", "10,000")
  const parts = String(value).split(/(\d[\d,.]*)/);

  return (
    <span ref={ref} className="inline-flex">
      {parts.map((part, i) => {
        if (/\d/.test(part)) {
          // Clean the number for calculation
          const cleanPart = part.replace(/[^\d.]/g, ''); // Removes commas or any other non-digit/dot
          if (!cleanPart) return <span key={i}>{part}</span>;

          const isFloat = part.includes('.');
          const numValue = parseFloat(cleanPart);
          
          if (isNaN(numValue)) return <span key={i}>{part}</span>;

          const currentNum = numValue * progress;
          
          let displayNum;
          if (isFloat) {
            const decimals = part.split('.')[1]?.length || 0;
            displayNum = currentNum.toFixed(decimals);
          } else {
            displayNum = Math.round(currentNum).toString();
          }

          // If original part had commas, format it back
          if (part.includes(',')) {
            displayNum = parseFloat(displayNum).toLocaleString('en-US', {
              minimumFractionDigits: isFloat ? displayNum.split('.')[1]?.length || 0 : 0,
              maximumFractionDigits: isFloat ? displayNum.split('.')[1]?.length || 0 : 0
            });
          }

          return <span key={i}>{displayNum}</span>;
        }
        
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
