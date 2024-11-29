import localFont from 'next/font/local';

const GeorgiaDislpay = localFont({
  src: [
    {
      path: '../../public/assets/fonts/georgia.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/georgiab.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-georigia'
});

const GilroyDislpay = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Gilroy-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },

    {
      path: '../../public/assets/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy'
});

export {GeorgiaDislpay, GilroyDislpay}
