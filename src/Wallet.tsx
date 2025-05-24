import React from 'react';

export default function Wallet() {
  const handleDeposit = async () => {
    try {
      if (!window.Pi || !window.Pi.createPayment) {
        alert('❌ Pi SDK chưa sẵn sàng. Hãy chắc chắn bạn đang dùng Pi Browser Testnet.');
        return;
      }

      const payment = await window.Pi.createPayment({
        amount: 1, // Testnet không trừ thật
        memo: 'Nạp Pi vào Betzone (Testnet)',
        metadata: { type: 'deposit', source: 'wallet' },
      });

      console.log('✅ Đã gửi yêu cầu nạp Pi:', payment);
      alert('✅ Đã gửi yêu cầu nạp Pi test.');
    } catch (error) {
      console.error('❌ Lỗi khi gửi yêu cầu nạp Pi:', error);
      alert('❌ Có lỗi xảy ra khi nạp Pi. Kiểm tra console để biết chi tiết.');
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
