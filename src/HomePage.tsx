import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [piUser, setPiUser] = useState<any>(null);
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const loginWithPi = async () => {
      try {
        const Pi = (window as any).Pi;

        const scopes = ['username', 'payments'];
        const authResult = await Pi.authenticate(scopes);
        console.log('✅ Đăng nhập thành công:', authResult);
        setPiUser(authResult.user);

        // Demo số dư Pi
        setBalance(3.1415); // sau này thay bằng API thật

        // Gửi yêu cầu thanh toán test 1 Pi (Testnet)
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
      {/* Banner quảng cáo */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src="https://via.placeholder.com/600x200?text=Welcome+to+Betzone"
          alt="Welcome Banner"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>

      {/* Số dư ví Pi */}
      <div style={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <p>👤 Người dùng: {piUser?.username || "Chưa đăng nhập"}</p>
        <p>💰 Số dư Pi: {balance !== null ? `${balance} Pi` : "Đang tải..."}</p>
      </div>

      {/* Danh sách khuyến mãi */}
      <div>
        <h3>🔥 Khuyến mãi hấp dẫn</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>🎁 Tặng 50 lượt quay miễn phí khi đăng nhập</li>
          <li>💸 Hoàn 10% Pi thua mỗi ngày</li>
          <li>🏆 Đua top hàng tuần nhận 300 Pi</li>
        </ul>
      </div>
    </div>
  );
}
