// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
  "home": "Home",
  "register": "Register",
  "login": "Login",
  "logout": "Logout",
  "arabic": "العربية",
  "english": "English"
  },
  ar: {
  "home": "الرئيسية",
  "register": "تسجيل",
  "login": "تسجيل الدخول",
  "logout": "تسجيل الخروج",
  "arabic": "العربية",
  "english": "English"
  },
};

const userLang = localStorage.getItem('lang') || 'en'; 

const i18n = createI18n({
  legacy: false, // use Composition API mode
  locale: userLang, // default locale
  fallbackLocale: 'en',
  messages,
});

export default i18n;
