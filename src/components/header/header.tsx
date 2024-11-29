'use client';

import HeaderLocaleSwitch from './header_locale_switch';
import NavBar from '../navbar/navbar';
import HeaderTop from './header_top';
import classes from './header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className="container mx-auto">
        <HeaderTop />
        <div className={'flex items-center gap-3 justify-between '}>
          <div style={{width: '110px'}}></div>
          <NavBar />
          <HeaderLocaleSwitch />
        </div>
      </div>
    </header>
  );
}
