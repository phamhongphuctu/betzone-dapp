export default function Earn() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Kiếm Pi</h2>
      <p>Chia sẻ link giới thiệu để nhận thưởng!</p>
      <input type="text" value="https://betzone.pi/invite/anh-tu" readOnly style={{ width: '100%', marginTop: '10px', padding: '5px' }} />
      <button style={{ marginTop: '10px' }}>Sao chép link</button>
      <h3 style={{ marginTop: '20px' }}>Nhiệm vụ hàng ngày</h3>
      <ul>
        <li>✔️ Đăng nhập hôm nay</li>
        <li>⭕ Chơi 1 game</li>
        <li>⭕ Mời bạn bè</li>
      </ul>
    </div>
  );
}