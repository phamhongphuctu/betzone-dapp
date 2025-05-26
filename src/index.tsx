import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Đúng path
import { LanguageProvider } from "./LanguageContext"; // ✅ Đúng path

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
