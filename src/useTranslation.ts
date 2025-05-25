import { useLanguage } from "./LanguageContext";
import { translationsMap } from "./translations";

export function useTranslation() {
  const { lang } = useLanguage();
  const t = translationsMap[lang] || translationsMap["en"];
  return { t };
}
