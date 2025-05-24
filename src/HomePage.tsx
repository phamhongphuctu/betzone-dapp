import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const loginWithPi = async () => {
      try {
        const scopes = ['username', 'payments'];
        const authResult = await window.Pi.authenticate(scopes);
        console.log('✅ Đăng nhập thành công:', authResult);
        // TODO: Lưu authResult nếu cần
      } catch (error) {
        console.error('❌ Đăng nhập thất bại:', error);
      }
    };

    loginWithPi(); // ✅ Gọi khi vào trang Home
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

