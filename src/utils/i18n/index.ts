import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./i18n.en.json";

i18n
  .use(initReactI18next)
  .init({ resources: enTranslation, fallbackLng: "en" });

export default i18n;
