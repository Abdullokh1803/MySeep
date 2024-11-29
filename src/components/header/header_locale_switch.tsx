'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition, useEffect, useState } from 'react';
import AppIcon, { AppIcons } from '../ui/app_icon';
import classes from './header.module.scss';

export default function HeaderLocaleSwitch() {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const locales = ['ru', 'en', 'kg'];
  const pathname = usePathname();
  const [activeLocale, setActiveLocale] = useState<string>('en');

  useEffect(() => {
    const currentLocale = pathname.split('/')[1];
    if (locales.includes(currentLocale)) {
      setActiveLocale(currentLocale);
    }
  }, [locales, pathname]);

  const changeLanguage = (lang: string) => {
    startTransition(() => {
      router.replace(`/${lang}`);
    });
    setActiveLocale(lang); 
  };

  return (
    <div className={`relative ${classes.select}`}>
      <select
        value={activeLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="w-full appearance-none bg-transparent text-blue-900 font-bold text-lg border-none cursor-pointer"
        style={{
          backgroundColor: 'transparent',
          padding: '8px',
        }}
      >
        {locales.map((lang) => (
          <option
            key={lang}
            value={lang}
            className="text-blue-900 font-bold text-lg"
          >
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <AppIcon icon={AppIcons.down} size={12} />
      </div>
    </div>
  );
}
