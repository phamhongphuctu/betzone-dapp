import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Khai báo kiểu cho window.Pi nếu chưa có trong global.d.ts
// Có thể xoá nếu đã có file global.d.ts định nghĩa window.Pi
// ✅ Khởi tạo Pi SDK
window.Pi.init({
  version: "2.0",
  appId: "betzone", // Nếu đã verify appId thật thì thay vào đây
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
