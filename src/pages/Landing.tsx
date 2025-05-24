import React, { useState } from 'react';

interface Props {
  onLoginSuccess: (user: PiUser) => void;
}

interface PiUser {
  uid: string;
  username: string;
  accessToken: string;
}

export default function Landing({ onLoginSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  const loginWithPi = async () => {
    setLoading(true);
    try {
      const scopes = ['username', 'payments'];
      const user = await (window as any).Pi.authenticate(scopes, onIncompletePaymentFound);
      console.log('Đăng nhập thành công:', user);
      onLoginSuccess(user);
    } catch (err) {
      console.error('Đăng nhập thất bại:', err);
      alert('Đăng nhập thất bại');
    }
    setLoading(false);
  };

  function onIncompletePaymentFound(payment: any) {
    console.log('Thanh toán chưa hoàn tất:', payment);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Chào mừng đến Betzone</h1>
      <button
        onClick={loginWithPi}
        className="bg-purple-600 text-white px-6 py-2 rounded shadow-md hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? 'Đang đăng nhập...' : 'Đăng nhập bằng Pi'}
      </button>
    </div>
  );
}
