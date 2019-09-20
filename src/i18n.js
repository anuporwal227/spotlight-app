import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translations: {
            "Test Whatsapp": "Test Whatsapp",
            "Japan Test": "Japan Test",
            "Super Jewels Quest": "Super Jewels Quest",
            "Mole Slayer": "Mole Slayer",
            "Mancala Mix": "Mancala Mix",
        }
    },
    jp: {
        translations: {
            "Test Whatsapp": "Whatsappをテストする",
            "Japan Test": "日本テスト",
            "Super Jewels Quest": "スーパージュエルズクエスト",
            "Mole Slayer": "ほくろスレイヤー",
            "Mancala Mix": "マンカラミックス",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;