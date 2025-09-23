import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import ro from "./locales/ro.json";

const savedLang = localStorage.getItem("language") || "en";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            ro: { translation: ro },
        },
        lng: savedLang,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;