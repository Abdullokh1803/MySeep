
const i18nConfig = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'kg'],
  },
  fallbackLng: 'ru',
  ns: ['common'],
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default i18nConfig;