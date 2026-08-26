"use client";

import { useState, useEffect } from 'react';
import SmartImage from './SmartImage';

/**
 * ImageSlider Component
 * 
 * Reusable image slider that auto-transitions between multiple images.
 * Provides basic indicators for manual navigation.
 * 
 * @param {Object} props
 * @param {Array<{src: string, alt: string, description: string}>} props.images - Array of image objects
 * @param {number} [props.interval=5000] - Auto-transition interval in ms
 * @returns {JSX.Element}
 */
export default function ImageSlider({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <SmartImage
            src={img.src}
            alt={img.alt}
            description={img.description}
            fill
            priority={idx === 0}
            displayHeight={1080}
            displayWidth={1920}
            safeAreaHeight={1080}
            safeAreaWidth={1280}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                idx === currentIndex ? 'bg-volt scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
