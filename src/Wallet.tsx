export default function Wallet() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Ví Pi</h2>
      <p>Số dư hiện tại: <strong>3,000 Pi</strong></p>
      <button style={{ marginTop: '10px' }}>Nạp Pi</button>
      <button style={{ marginLeft: '10px' }}>Rút Pi</button>
      <h3 style={{ marginTop: '20px' }}>Lịch sử giao dịch</h3>
      <ul>
        <li>+500 Pi từ phần thưởng (hôm qua)</li>
        <li>-100 Pi chơi Slot Game</li>
        <li>+1,000 Pi nạp thủ công</li>
      </ul>
    </div>
  );
}