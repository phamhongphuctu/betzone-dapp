import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Thêm đoạn này
import { Pi } from "@pi-network/pi-sdk";

Pi.init({
  version: "2.0",
  appId: "betzone", // nếu có appId thật thì thay vào
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
