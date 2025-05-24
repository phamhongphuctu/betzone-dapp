import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const loginWithPi = async () => {
      try {
        const Pi = (window as any).Pi;

        const scopes = ['username', 'payments'];
        const authResult = await Pi.authenticate(scopes);
        console.log('✅ Đăng nhập thành công:', authResult);

        // ✅ Gửi yêu cầu thanh toán test 1 Pi (Testnet, không trừ thật)
        const payment = await Pi.createPayment({
          amount: 1,
          memo: 'Test transaction for Pi SDK setup',
          metadata: { test: true },
        });

        console.log('✅ Thanh toán thành công:', payment);
      } catch (error) {
        console.error('❌ Lỗi khi đăng nhập hoặc thanh toán:', error);
      }
    };

    loginWithPi();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chào mừng đến với Betzone</h2>
      <p>Khám phá các trò chơi và khuyến mãi hấp dẫn nhất!</p>

      <div style={{ marginTop: '20px' }}>
        <img
          src="https://via.placeholder.com/600x200?text=Welcome+to+Betzone"
          alt="Welcome Banner"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>🔥 Game hot</h3>
        <ul>
          <li>🎰 Slot Game 777</li>
          <li>🃏 Blackjack</li>
          <li>⚽ Cá cược bóng đá trực tiếp</li>
        </ul>
      </div>
    </div>
  );
}
