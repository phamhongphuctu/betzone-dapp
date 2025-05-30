import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface UserData {
  username: string;
  walletAddress: string | null;
  balance: number;
  history: string[];
}

const mockUserStore: Record<string, UserData> = {
  'anh-tu': {
    username: 'anh-tu',
    walletAddress: 'GC123...XYZ',
    balance: 3000,
    history: [
      '+500 Pi từ phần thưởng (hôm qua)',
      '-100 Pi chơi Slot Game',
      '+1,000 Pi nạp thủ công',
    ],
  },
};

export default function Wallet() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem('pi_user');
    if (cached) {
      const user = JSON.parse(cached);
      const data = mockUserStore[user.username];
      setUserData(data);
    }
  }, []);

  const handleDeposit = async () => {
    try {
      if (!window.Pi || !window.Pi.createPayment) {
        alert(t('sdk_not_ready'));
        return;
      }

      const payment = await window.Pi.createPayment({
        amount: 1,
        memo: userData?.username || 'no_user',
        metadata: { type: 'deposit', source: 'wallet' },
      });

      console.log(t('deposit_success'), payment);
      alert(t('deposit_sent'));
    } catch (error) {
      console.error(t('deposit_error'), error);
      alert(t('deposit_failed'));
    }
  };

  const handleWithdraw = () => {
    alert(t('withdraw_not_ready'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('wallet')}</h2>
      <p>
        {t('user')}: <strong>{userData?.username || t('pending')}</strong>
      </p>
      <p>
        {t('balance')}: <strong>{userData?.balance.toLocaleString()} Pi</strong>
      </p>
      <p>
        Ví: <strong>{userData?.walletAddress || 'Chưa có'}</strong>
      </p>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleDeposit}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#f5f5f5',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          ⬆ {t('deposit_button')}
        </button>

        <button
          onClick={handleWithdraw}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#f5f5f5',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          ⬇ {t('withdraw_button')}
        </button>
      </div>

      <h3 style={{ marginTop: '20px' }}>📜 {t('transaction_history')}</h3>
      <ul>
        {userData?.history.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
