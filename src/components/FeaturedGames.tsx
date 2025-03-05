
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GameCard, { Game } from './GameCard';

interface FeaturedGamesProps {
  title: string;
  games: Game[];
  seeAllLink?: string;
}

const FeaturedGames = ({ title, games, seeAllLink }: FeaturedGamesProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {seeAllLink && (
          <button 
            onClick={() => navigate(seeAllLink)}
            className="flex items-center text-sm text-moon-accent hover:text-moon-highlight transition-colors"
          >
            <span>See all</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <GameCard 
            key={game.id} 
            game={game} 
            priority={index < 4}
            className="animate-fade-in"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
