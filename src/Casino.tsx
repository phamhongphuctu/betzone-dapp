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
          src="https://via.placeholder.com/600x200?text=Banner+Khuyen+Mai"
          alt="Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Số dư ví */}
      <WalletInfo />

      {/* Danh mục trò chơi */}
      <div>
        {/* Yêu thích */}
        <h3 className="text-xl font-bold mb-2">{t.favorites}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Slot Game" image="https://via.placeholder.com/150x150?text=Slot+Game" />
          <GameCard title="Blackjack" image="https://via.placeholder.com/150x150?text=Blackjack" />
        </div>
      </div>

      <div>
        {/* Gần đây chơi */}
        <h3 className="text-xl font-bold mb-2">{t.recent}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Roulette" image="https://via.placeholder.com/150x150?text=Roulette" />
        </div>
      </div>

      <div>
        {/* Top Game */}
        <h3 className="text-xl font-bold mb-2">{t.top_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Baccarat" image="https://via.placeholder.com/150x150?text=Baccarat" />
        </div>
      </div>

      <div>
        {/* Trò chơi mới */}
        <h3 className="text-xl font-bold mb-2">{t.new_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Dragon Tiger" image="https://via.placeholder.com/150x150?text=Dragon+Tiger" />
        </div>
      </div>

      <div>
        {/* Live Casino */}
        <h3 className="text-xl font-bold mb-2">{t.live}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Live Poker" image="https://via.placeholder.com/150x150?text=Live+Poker" />
        </div>
      </div>

      <div>
        {/* Game Shows */}
        <h3 className="text-xl font-bold mb-2">{t.game_shows}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Crazy Time" image="https://via.placeholder.com/150x150?text=Crazy+Time" />
        </div>
      </div>

      <div>
        {/* Tất cả trò chơi */}
        <h3 className="text-xl font-bold mb-2">{t.all_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Mini Games" image="https://via.placeholder.com/150x150?text=Mini+Games" />
        </div>
      </div>
    </div>
  );
}
