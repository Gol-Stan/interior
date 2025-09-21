import i18n from 'react-i18next';
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";
import ro from "./locales/ro/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        ru: {translation: ru},
        ro: {translation: ro}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;