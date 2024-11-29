import Header from '~/src/components/header/header';
import { GeorgiaDislpay, GilroyDislpay } from '~/src/lib/customFonts';
import './styles/globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Footer from '~/src/components/footer/footer';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body
          className={`${GeorgiaDislpay.variable} ${GilroyDislpay.variable}`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
