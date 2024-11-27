import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const generateBlurDataUrl = () => {
  return `data:image/svg+xml;base64,${Buffer.from(`
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a1a"/>
    </svg>
  `).toString('base64')}`;
};

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(generateBlurDataUrl());

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
          decoding="async"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        />
      </AnimatePresence>
    </div>
  );
}
