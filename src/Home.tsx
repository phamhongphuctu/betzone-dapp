import React, { useState } from 'react';
import HomePage from './HomePage';
import Casino from './Casino';
import Sports from './Sports';
import Wallet from './Wallet';
import Earn from './Earn';
import Profile from './Profile';

export default function Home() {
  const [tab, setTab] = useState<'home' | 'casino' | 'sports' | 'wallet' | 'earn' | 'profile'>('home');

  const renderContent = () => {
    switch (tab) {
      case 'home': return <HomePage />;
      case 'casino': return <Casino />;
      case 'sports': return <Sports />;
      case 'wallet': return <Wallet />;
      case 'earn': return <Earn />;
      case 'profile': return <Profile />;
      default: return null;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-auto bg-white">
        {renderContent()}
      </div>

      {/* Thanh điều hướng dưới */}
      <nav className="flex justify-around border-t bg-white p-2 text-sm font-medium fixed bottom-0 left-0 right-0">
        <button onClick={() => setTab('home')} className={tab === 'home' ? 'text-blue-600' : ''}>Home</button>
        <button onClick={() => setTab('casino')} className={tab === 'casino' ? 'text-blue-600' : ''}>Casino</button>
        <button onClick={() => setTab('sports')} className={tab === 'sports' ? 'text-blue-600' : ''}>Sports</button>
        <button onClick={() => setTab('wallet')} className={tab === 'wallet' ? 'text-blue-600' : ''}>Wallet</button>
        <button onClick={() => setTab('earn')} className={tab === 'earn' ? 'text-blue-600' : ''}>Earn</button>
        <button onClick={() => setTab('profile')} className={tab === 'profile' ? 'text-blue-600' : ''}>Profile</button>
      </nav>
    </div>
  );
}
