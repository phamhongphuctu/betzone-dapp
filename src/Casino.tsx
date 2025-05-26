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

      {/* Thông tin ví */}
      <WalletInfo username="anh-tu" balance={3000} />


      {/* Danh mục trò chơi: chia nhóm rõ ràng */}
      <div>
        <h3 className="text-xl font-bold mb-2">{t.top_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Slot Game" image="https://via.placeholder.com/150x150?text=Slot+Game" />
          <GameCard title="Blackjack" image="https://via.placeholder.com/150x150?text=Blackjack" />
          <GameCard title="Roulette" image="https://via.placeholder.com/150x150?text=Roulette" />
          <GameCard title="Baccarat" image="https://via.placeholder.com/150x150?text=Baccarat" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">{t.new_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Dragon Tiger" image="https://via.placeholder.com/150x150?text=Dragon+Tiger" />
          <GameCard title="Mini Games" image="https://via.placeholder.com/150x150?text=Mini+Games" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">{t.live}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Live Poker" image="https://via.placeholder.com/150x150?text=Live+Poker" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">{t.game_shows}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Crazy Time" image="https://via.placeholder.com/150x150?text=Crazy+Time" />
        </div>
      </div>
    </div>
  );
}
