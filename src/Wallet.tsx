import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface UserData {
  username: string;
  walletAddress: string | null;
  balance: number;
  history: string[];
}

const mockUserStore: Record<string, UserData> = {
  'anh-tu': {
    username: 'anh-tu',
    walletAddress: 'GC1234567890XYZTESTPIADDRESS',
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
  const location = useLocation();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showDepositInfo, setShowDepositInfo] = useState(false);
  const [showWithdrawInfo, setShowWithdrawInfo] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem('pi_user');
    if (cached) {
      const user = JSON.parse(cached);
      const data = mockUserStore[user.username] || mockUserStore['anh-tu'];
      setUserData(data);
    } else {
      setUserData(mockUserStore['anh-tu']);
    }
  }, [location]);

  const handleDeposit = () => {
    if (!userData?.walletAddress) {
      alert('⚠️ Không có địa chỉ ví. Không thể nạp Pi.');
      return;
    }
    setShowDepositInfo(true);
    setShowWithdrawInfo(false);
  };

  const handleWithdraw = () => {
    setShowDepositInfo(false);
    setShowWithdrawInfo(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('📋 Đã sao chép vào clipboard!');
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

      {/* --- Deposit Section --- */}
      {showDepositInfo && userData?.walletAddress && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        >
          <h3 style={{ marginBottom: '10px' }}>🚀 Nạp Pi vào tài khoản</h3>
          <p>Token: <strong>Pi (Testnet)</strong></p>
          <p>Địa chỉ ví:</p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <code style={{ wordBreak: 'break-all', flex: 1 }}>{userData.walletAddress}</code>
            <button onClick={() => copyToClipboard(userData.walletAddress!)} style={{ marginLeft: '10px' }}>📋</button>
          </div>
          <p>📌 <strong>Memo</strong> (bắt buộc):</p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <code style={{ wordBreak: 'break-all', flex: 1 }}>{userData.username}</code>
            <button onClick={() => copyToClipboard(userData.username)} style={{ marginLeft: '10px' }}>📋</button>
          </div>
        </div>
      )}

      {/* --- Withdraw Section --- */}
      {showWithdrawInfo && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        >
          <h3 style={{ marginBottom: '10px' }}>📤 Rút Pi từ tài khoản</h3>
          <p>Token: <strong>Pi (Testnet)</strong></p>

          <p>Địa chỉ nhận:</p>
          <input
            type="text"
            placeholder="Nhập địa chỉ ví Pi"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />

          <p>📌 <strong>Memo</strong> (bắt buộc):</p>
          <input
            type="text"
            placeholder="Nhập Memo (username)"
            defaultValue={userData?.username}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />

          <button
            onClick={() => alert('🚧 Chức năng rút Pi đang được phát triển')}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              borderRadius: '6px',
              background: 'orange',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Gửi yêu cầu rút Pi
          </button>
        </div>
      )}

      <h3 style={{ marginTop: '20px' }}>📜 {t('transaction_history')}</h3>
      <ul>
        {userData?.history.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
