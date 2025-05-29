import React from 'react';
import GameCard from './components/GameCard';
import WalletInfo from './components/WalletInfo';
import { useTranslation } from './useTranslation';

export default function Casino() {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
      {/* Banner */}
      <div>
        <img
          src="https://via.placeholder.com/600x200?text=Khuyen+Mai"
          alt="Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Số dư ví */}
      <WalletInfo username="anh-tu" balance={3000} />

      {/* Top Games */}
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">🔥 {t.top_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Slot Game" image="/01.PNG" />
          <GameCard title="Gates of Olympus" image="https://via.placeholder.com/150x150?text=Olympus" />
          <GameCard title="Candy Boom" image="https://via.placeholder.com/150x150?text=Candy+Boom" />
        </div>
      </div>

      {/* Live Casino */}
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">🎰 {t.live}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Live Blackjack" image="https://via.placeholder.com/150x150?text=Blackjack" />
          <GameCard title="Auto Roulette" image="https://via.placeholder.com/150x150?text=Roulette" />
        </div>
      </div>
    </div>
  );
}
