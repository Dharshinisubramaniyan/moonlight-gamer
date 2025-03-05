
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

const BlurImage = ({ src, alt, priority = false, className }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(!priority);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
      setIsLoading(false);
    }
  }, [priority]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-moon-dark/20 to-moon-accent/20 animate-shimmer bg-[length:400%_100%]" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => {
          setIsLoaded(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default BlurImage;
