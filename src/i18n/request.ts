import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locales: ['ru', 'en', 'kg'],
    messages,
  };
});
