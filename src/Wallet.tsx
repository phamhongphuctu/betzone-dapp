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
  const [showDepositInfo, setShowDepositInfo] = useState(true);
  const [showWithdrawInfo, setShowWithdrawInfo] = useState(false);
  const [withdrawAddress, setWithdrawAddress] = useState('');

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
      <p>{t('user')}: <strong>{userData?.username || t('pending')}</strong></p>
      <p>{t('balance')}: <strong>{userData?.balance.toLocaleString()} Pi</strong></p>
      <p>Ví: <strong>{userData?.walletAddress || 'Chưa có'}</strong></p>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleDeposit} style={styles.tabButton}>⬆ {t('deposit_button')}</button>
        <button onClick={handleWithdraw} style={styles.tabButton}>⬇ {t('withdraw_button')}</button>
      </div>

      {/* Deposit Section */}
      {showDepositInfo && userData?.walletAddress && (
        <div style={styles.card}>
          <h3>🚀 {t('deposit_title') || 'Nạp Pi vào tài khoản'}</h3>
          <p>Token: <strong>Pi (Testnet)</strong></p>

          <p>Địa chỉ ví:</p>
          <div style={styles.row}>
            <input
              type="text"
              value={userData.walletAddress}
              readOnly
              style={styles.input}
            />
            <button onClick={() => copyToClipboard(userData.walletAddress!)}>📋</button>
          </div>

          <p>📌 <strong>Memo</strong> (bắt buộc):</p>
          <div style={styles.row}>
            <input
              type="text"
              value={userData.username}
              readOnly
              style={styles.input}
            />
            <button onClick={() => copyToClipboard(userData.username)}>📋</button>
          </div>
        </div>
      )}

      {/* Withdraw Section */}
      {showWithdrawInfo && (
        <div style={styles.card}>
          <h3>📤 {t('withdraw_title') || 'Rút Pi từ tài khoản'}</h3>
          <p>Token: <strong>Pi (Testnet)</strong></p>

          <p>Địa chỉ nhận:</p>
          <input
            type="text"
            placeholder="Nhập địa chỉ ví Pi"
            style={styles.input}
            value={withdrawAddress}
            onChange={(e) => setWithdrawAddress(e.target.value)}
          />

          <p>📌 <strong>Memo</strong> (bắt buộc):</p>
          <input
            type="text"
            style={styles.input}
            value={userData?.username}
            disabled
          />

          <button style={styles.withdrawBtn}>
            {t('send_withdraw') || 'Gửi yêu cầu rút Pi'}
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

const styles = {
  tabButton: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '10px',
  },
  card: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  withdrawBtn: {
    backgroundColor: '#ffa500',
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
