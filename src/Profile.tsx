export default function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin cá nhân</h2>
      <p>
        <strong>Username:</strong> anh-tu
      </p>
      <p>
        <strong>ID:</strong> 123456789
      </p>
      <p>
        <strong>Tham gia từ:</strong> 22 Tháng 5, 2025
      </p>

      <h3 style={{ marginTop: "20px" }}>Ngôn ngữ</h3>
      <select>
        <option>Tiếng Việt</option>
        <option>English</option>
      </select>

      <h3 style={{ marginTop: "20px" }}>Thưởng</h3>
      <div
        style={{
          background: "#333",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        🎁 100 lượt quay miễn phí
        <br />
        💰 Tổng thưởng: 0.000000 Pi
        <br />
        <i style={{ fontSize: "12px", opacity: 0.7 }}>Chờ xử lý</i>
      </div>
    </div>
  );
}
