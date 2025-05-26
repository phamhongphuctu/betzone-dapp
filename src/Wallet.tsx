import React from 'react';
import { useTranslation } from "./useTranslation";

export default function Wallet() {
  const { t } = useTranslation();

  const handleDeposit = async () => {
    try {
      if (!window.Pi || !window.Pi.createPayment) {
        alert(t.sdk_not_ready);
        return;
      }

      const payment = await window.Pi.createPayment({
        amount: 1,
        memo: 'Nạp Pi vào Betzone (Testnet)',
        metadata: { type: 'deposit', source: 'wallet' },
      });

      console.log(t.deposit_success, payment);
      alert(t.deposit_sent);
    } catch (error) {
      console.error(t.deposit_error, error);
      alert(t.deposit_failed);
    }
  };

  const handleWithdraw = () => {
    alert(t.withdraw_not_ready);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t.wallet}</h2>
      <p>
        {t.balance}: <strong>3,000 Pi</strong>
      </p>

      {/* Nút Nạp Pi */}
      <button
        onClick={handleDeposit}
        style={{
          marginTop: '10px',
          width: '40px',
          height: '40px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#f5f5f5',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ⬆
      </button>

      {/* Nút Rút Pi */}
      <button
        onClick={handleWithdraw}
        style={{
          marginLeft: '10px',
          width: '40px',
          height: '40px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#f5f5f5',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ⬇
      </button>

      <h3 style={{ marginTop: '20px' }}>📜 {t.transaction_history}</h3>
      <ul>
        <li>+500 Pi {t.reward_yesterday}</li>
        <li>-100 Pi {t.slot_game}</li>
        <li>+1,000 Pi {t.manual_deposit}</li>
      </ul>
    </div>
  );
}
