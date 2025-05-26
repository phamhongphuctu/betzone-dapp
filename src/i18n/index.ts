import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import vi from "./vi.json";
import en from "./en.json";
import es from "./es.json"; // ✅ thêm dòng này

i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: vi },
    en: { translation: en },
    es: { translation: es } // ✅ thêm dòng này
  },
  lng: "vi", // ✅ ngôn ngữ mặc định
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false
  }
});

export default i18n; // ✅ QUAN TRỌNG
