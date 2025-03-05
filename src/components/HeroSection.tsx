
import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlurImage from './BlurImage';

const HeroSection = () => {
  return (
    <section className="relative mt-4 mb-12 overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl">
        <BlurImage
          src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
          alt="Space scene"
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-moon-dark/80 via-moon-dark/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <div className="max-w-md space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-moon-accent/30 backdrop-blur-sm border border-moon-accent/20 text-moon animate-fade-in">
              Featured Game
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Lunar Odyssey
            </h1>
            
            <p className="text-sm sm:text-base text-moon-highlight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Embark on an epic journey across the lunar surface. Discover ancient alien 
              artifacts and uncover the mysteries of the moon's hidden civilization.
            </p>
            
            <button className="inline-flex items-center mt-4 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span>Play Now</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
