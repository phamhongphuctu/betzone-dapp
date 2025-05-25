import React from 'react';
import GameCard from './components/GameCard';
import WalletInfo from './components/WalletInfo';
import { useTranslation } from './useTranslation';

export default function Casino() {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
      <div>
        <img
          src="https://via.placeholder.com/600x200?text=Banner+Khuyen+Mai"
          alt="Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <WalletInfo />

      <div>
        <h3 className="text-xl font-bold mb-2">
          {t.favoriteGames}
        </h3>
        <div className="flex gap-4">
          <GameCard
            title="Slot Game"
            image="https://via.placeholder.com/150x150?text=Slot+Game"
          />
          <GameCard
            title="Blackjack"
            image="https://via.placeholder.com/150x150?text=Blackjack"
          />
        </div>
      </div>
    </div>
  );
}
