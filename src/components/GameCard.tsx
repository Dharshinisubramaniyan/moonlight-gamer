
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import GlassmorphicCard from './ui/GlassmorphicCard';
import BlurImage from './BlurImage';

export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
  description: string;
}

interface GameCardProps {
  game: Game;
  priority?: boolean;
  className?: string;
}

const GameCard = ({ game, priority = false, className }: GameCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };

  return (
    <GlassmorphicCard
      onClick={handleClick}
      className={className}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl">
        <BlurImage
          src={game.imageUrl}
          alt={game.title}
          priority={priority}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moon-dark/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="inline-block px-2 py-1 mb-2 rounded-full text-xs font-medium bg-moon-accent/30 backdrop-blur-sm border border-moon-accent/20 text-moon">
            {game.category}
          </div>
          <h3 className="text-lg font-semibold line-clamp-1 text-white">{game.title}</h3>
        </div>
      </div>
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
          <span className="text-sm font-medium">{game.rating.toFixed(1)}</span>
        </div>
        <button 
          className="rounded-full px-3 py-1 text-xs font-medium bg-moon-accent/20 hover:bg-moon-accent/30 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // Play button action
          }}
        >
          Play
        </button>
      </div>
    </GlassmorphicCard>
  );
};

export default GameCard;
