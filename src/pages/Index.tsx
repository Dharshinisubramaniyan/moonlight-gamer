
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
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

const Index = () => {
  // Split games into different categories
  const popularGames = mockedGames.slice(0, 4);
  const newReleases = [...mockedGames].reverse().slice(0, 4);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <HeroSection />
        
        <FeaturedGames 
          title="Popular Games" 
          games={popularGames} 
          seeAllLink="/games" 
        />
        
        <FeaturedGames 
          title="New Releases" 
          games={newReleases} 
          seeAllLink="/games"
        />
      </div>
    </MainLayout>
  );
};

export default Index;
