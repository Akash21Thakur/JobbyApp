import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next/initReactI18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: hi,
      },
    },
    lng: 'en',
    fallbackLng: 'hi',

    interpolation: {
      escapeValue: false,
    }, 
  });

export default i18n;
