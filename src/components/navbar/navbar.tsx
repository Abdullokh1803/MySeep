'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pageConfig } from '~/src/core/config/pages-config';
import classes from './navbar.module.scss';
export default function NavBar() {
  const t = useTranslations('Navigation');
  const currentPath = usePathname();
  const locale = useLocale();
  const getLinkClass = (href: string) => {
    return currentPath === href
      ? `w400f20 text-white ${classes.link}  text-center ${classes.active}`
      : `w400f20 text-white ${classes.link}  text-center`;
  };

  const links = (Object.keys(pageConfig) as Array<keyof typeof pageConfig>).map(
    (key) => ({
      key,
      label: t(key),
      href: pageConfig.getPath(key, locale),
    })
  );

  return (
    <nav className={`${classes.navbar} flex items-center justify-between`}>
        {links.map(({ key, label, href }) => (
          <Link key={key} className={getLinkClass(href)} href={href}>
            {label}
          </Link>
        ))}
    </nav>
  );
}
