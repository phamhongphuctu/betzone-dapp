import React from 'react';

export default function Wallet() {
  const handleDeposit = async () => {
    try {
      const payment = await (window.Pi as any).createPayment({
        amount: 1,
        memo: 'Nạp Pi vào Betzone (test)',
        metadata: { type: 'deposit' },
      });
      console.log('✅ Giao dịch nạp Pi thành công:', payment);
    } catch (error) {
      console.error('❌ Lỗi khi nạp Pi:', error);
    }
  };

  const handleWithdraw = () => {
    alert('👉 Tính năng rút Pi đang được phát triển.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ví Pi</h2>
      <p>
        Số dư hiện tại: <strong>3,000 Pi</strong>
      </p>
      <button onClick={handleDeposit} style={{ marginTop: '10px' }}>
        Nạp Pi
      </button>
      <button onClick={handleWithdraw} style={{ marginLeft: '10px' }}>
        Rút Pi
      </button>

      <h3 style={{ marginTop: '20px' }}>Lịch sử giao dịch</h3>
      <ul>
        <li>+500 Pi từ phần thưởng (hôm qua)</li>
        <li>-100 Pi chơi Slot Game</li>
        <li>+1,000 Pi nạp thủ công</li>
      </ul>
    </div>
  );
}
