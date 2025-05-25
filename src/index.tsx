import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Khởi tạo Pi SDK đúng cách (fix lỗi TS)
const Pi = (window as any).Pi;

Pi.init({
  version: "2.0",
  appId: "betzone", // Nếu đã verify appId thật thì thay vào đây
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <App />  // ❌ KHÔNG BỌC BrowserRouter ở đây nữa
);
