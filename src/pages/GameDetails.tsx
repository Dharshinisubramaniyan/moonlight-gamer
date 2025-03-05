import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Share2, GamepadIcon, Clock, Users } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import BlurImage from '@/components/BlurImage';
import { Game } from '@/components/GameCard';

const mockedGames: Game[] = [
  {
    id: '1',
    title: 'Lunar Odyssey',
    imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    category: 'Adventure',
    rating: 4.8,
    description: 'Embark on an epic journey across the lunar surface. Discover ancient alien artifacts and uncover the mysteries of the moon\'s hidden civilization.'
  },
  {
    id: '2',
    title: 'Cosmic Defenders',
    imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    category: 'Strategy',
    rating: 4.5,
    description: 'Lead a team of elite space warriors defending Earth from alien invasions. Build defenses, research new technologies, and engage in tactical combat.'
  },
  {
    id: '3',
    title: 'Stellar Racers',
    imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    category: 'Racing',
    rating: 4.2,
    description: 'Race at breathtaking speeds through space lanes around various planets. Customize your spacecraft and compete against players from around the world.'
  },
  {
    id: '4',
    title: 'Moonlight Mysteries',
    imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    category: 'Puzzle',
    rating: 4.7,
    description: 'Solve intricate puzzles under the moonlight to reveal hidden treasures and ancient knowledge. Each puzzle unlocks a piece of the moon\'s fascinating history.'
  },
  {
    id: '5',
    title: 'Gravity Glider',
    imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    category: 'Casual',
    rating: 4.0,
    description: 'Navigate through shifting gravity fields and collect lunar crystals in this addictive casual game perfect for quick gaming sessions.'
  },
  {
    id: '6',
    title: 'Lunar Colony',
    imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    category: 'Simulation',
    rating: 4.6,
    description: 'Build and manage your own colony on the moon. Balance resources, expand your base, and ensure the survival and prosperity of your lunar citizens.'
  }
];

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = mockedGames.find(g => g.id === id);

  useEffect(() => {
    if (!game) {
      navigate('/not-found');
    }
  }, [game, navigate]);

  if (!game) {
    return null;
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 text-moon-accent hover:text-moon-highlight transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back</span>
        </button>

        {/* Game hero */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="aspect-video">
            <BlurImage
              src={game.imageUrl}
              alt={game.title}
              priority={true}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-moon-dark/90 via-moon-dark/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-medium bg-moon-accent/30 backdrop-blur-sm border border-moon-accent/20 text-moon">
              {game.category}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{game.title}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1 fill-yellow-400" />
                <span className="font-medium">{game.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center text-moon-accent">
                <Clock className="h-5 w-5 mr-1" />
                <span>10+ hours</span>
              </div>
              <div className="flex items-center text-moon-accent">
                <Users className="h-5 w-5 mr-1" />
                <span>Multiplayer</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/30 transition-all flex items-center">
                <GamepadIcon className="mr-2 h-5 w-5" />
                <span>Play Now</span>
              </button>
              <button className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Game details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <GlassmorphicCard className="p-6">
              <h2 className="text-xl font-semibold mb-4">About This Game</h2>
              <p className="text-moon-highlight leading-relaxed">
                {game.description}
              </p>
              <p className="mt-4 text-moon-highlight leading-relaxed">
                Experience the thrill of exploration in this immersive space adventure. With stunning visuals and an engaging storyline, this game offers hours of entertainment as you navigate through challenging terrains and encounter mysterious beings.
              </p>
              <p className="mt-4 text-moon-highlight leading-relaxed">
                The game features advanced physics, realistic lunar environments, and a dynamic day-night cycle that affects gameplay. Collect resources, upgrade your equipment, and uncover the secrets of ancient lunar civilizations.
              </p>
            </GlassmorphicCard>
          </div>
          
          <div>
            <GlassmorphicCard className="p-6">
              <h2 className="text-xl font-semibold mb-4">Game Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-moon-accent mb-1">Developer</h3>
                  <p className="font-medium">MoonPlay Studios</p>
                </div>
                <div>
                  <h3 className="text-sm text-moon-accent mb-1">Release Date</h3>
                  <p className="font-medium">October 15, 2023</p>
                </div>
                <div>
                  <h3 className="text-sm text-moon-accent mb-1">Platform</h3>
                  <p className="font-medium">Web, Mobile, Desktop</p>
                </div>
                <div>
                  <h3 className="text-sm text-moon-accent mb-1">Genre</h3>
                  <p className="font-medium">{game.category}, Exploration, RPG</p>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GameDetails;
