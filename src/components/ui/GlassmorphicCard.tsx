
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const GlassmorphicCard = ({
  children,
  className,
  onClick,
  hover = true,
}: GlassmorphicCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-md",
        "bg-white/10 border border-white/20",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        hover && "transition-all duration-300 hover:shadow-xl hover:bg-white/15 hover:scale-[1.01]",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
