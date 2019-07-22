import i18n from "i18next";
import enTranslation from './locales/en/translation';
import frTranslation from './locales/fr/translation';

i18n
  .init({
    lng: "en_CA", 
    fallbackLng: 'en_CA',
    debug: true,
    resources: {
      en_CA: {
        translation: enTranslation
      },
      fr_CA: {
        translation: frTranslation
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;